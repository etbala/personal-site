import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ResumeEntryComponent } from '../../components/resume-entry/resume-entry.component';
import { TechItemComponent } from "../../components/tech-item/tech-item.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    SectionHeaderComponent,
    ResumeEntryComponent,
    TechItemComponent
],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  // --- Work Experience Data ---
  jpmcDetails = [
    'Designed and implemented REST APIs for microservices monitoring $17.4 Billion in credit across millions of customers.',
    'Reduced tech lead workload by 4 hrs/week by creating cross-platform database reconciliation service with Spring Boot.',
    'Built batch job monitoring system with status tracking and on-demand execution, saving developers ~2 hrs/week.',
    'Integrated with Oracle database and Kafka messaging layer for distributed service communication and data persistence.',
  ];
  doronDetails = [
    'Developed dynamic traffic simulation from scratch in C++ with realistic, law-abiding vehicle behavior.',
    'Implemented lane changing, vehicle tracking, and personality-based driving styles.',
    'Automated Windows registry configuration in a C++20 tool using WinAPI, saving 15 min of setup per vehicle simulator'
  ];
  taDetails = [
    'Mentored 150+ students in systems programming concepts including memory management and concurrency in C.',
  ];

  // --- Project Data ---
  leetCodeDuelsDetails = [
    'Architected horizontally-scalable Go backend with Redis Pub/Sub for cross-instance WebSocket communication.',
    'Implemented dual-storage architecture using PostgreSQL for persistent data and Redis for game session management.',
    'Achieved 500 requests/sec throughput at sub-200ms latency, validated via k6 load testing under REST and WebSocket traffic.',
    'Automated build, test, and deployment of containerized services to Google Kubernetes Engine (GKE) via GitHub Actions CI/CD.',
  ];
  cacheDbDetails = [
    'Developed an in-memory key-value data store server, achieving an average response time of 0.1ms.',
    'Engineered non-blocking architecture using I/O multiplexing techniques to handle concurrent client connections.',
    'Implemented TTL-based expiration, supporting GET, SET, DEL, and EXPIRE operations.',
  ];
  searchRpiDetails = [
    'Built inverted index system in C++ with LMDB persistence layer for scalable document retrieval.',
    'Designed query parsing pipeline transforming user input into optimized index lookups',
    'Coordinated 7-member team integrating crawler, parser, ranking, and UI into unified search platform.',
  ];
  firmValDetails = [
    'Developed full-stack pipeline with Flask and React, sourcing live market data from Yahoo Finance.',
    'Compiled high-performance Rust valuation engine to WebAssembly (WASM) to enable <1ms client-side valuations.',
    'Serves hundreds of valuation requests weekly from both academic and public users worldwide.',
  ];

  // --- Technology Data ---
  languages = ['C++20', 'C', 'Java', 'Python', 'Go', 'SQL', 'Assembly (x86)'];
  frameworks = ['Angular', 'Flask', 'GTest', 'NumPy', 'OpenCV', 'PyTorch', 'Sklearn', 'Selenium'];
  devTools = ['AWS', 'CUDA', 'Docker', 'GCP', 'Jenkins', 'Jira', 'Kafka', 'Kubernetes', 'Linux', 'Splunk'];
}