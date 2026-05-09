import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RESUME, SECTIONS } from './resume-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  sections = SECTIONS;
  resume = RESUME;
  year = new Date().getFullYear();

  activeSection: string | null = null;
  railShow = false;

  @ViewChild('meshEl') meshElRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('sectionRef') sectionEls!: QueryList<ElementRef<HTMLElement>>;

  private rafId: number | null = null;
  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private observer: IntersectionObserver | null = null;
  private readonly reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  ngAfterViewInit() {
    this.setupIntersectionObserver();
    if (!this.reducedMotion) {
      this.startParallax();
    }
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    this.railShow = y > window.innerHeight * 0.6;

    let current: string | null = null;
    const probe = y + window.innerHeight * 0.35;
    for (const s of this.sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      if (el.offsetTop <= probe) current = s.id;
    }
    this.activeSection = current;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (this.reducedMotion) return;
    this.targetX = (e.clientX / window.innerWidth - 0.5) * 100;
    this.targetY = (e.clientY / window.innerHeight - 0.5) * 100;
  }

  private startParallax() {
    const meshEl = this.meshElRef.nativeElement;
    const tick = () => {
      this.currentX += (this.targetX - this.currentX) * 0.05;
      this.currentY += (this.targetY - this.currentY) * 0.05;
      meshEl.style.transform = `translate(${this.currentX.toFixed(2)}px, ${this.currentY.toFixed(2)}px)`;
      this.rafId = requestAnimationFrame(tick);
    };
    this.rafId = requestAnimationFrame(tick);
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -15% 0px' }
    );

    this.sectionEls.forEach((el) => this.observer!.observe(el.nativeElement));
  }

  ngOnDestroy() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    this.observer?.disconnect();
  }
}
