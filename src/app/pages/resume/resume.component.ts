import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ResumeEntryComponent } from '../../components/resume-entry/resume-entry.component';
import { TechCategoryComponent } from '../../components/tech-category/tech-category.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    SectionHeaderComponent,
    ResumeEntryComponent,
    TechCategoryComponent
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  // --- Work Experience Data ---
  jpmcDetails = [
    'Automated cross-team database reconciliation with Angular + Spring Boot, cutting senior dev workload by 4+ hrs/week.',
    'Built monitoring dashboard to streamline batch job management, saving developers ~2 hrs/week.',
    'Delivered and tested 3 applications that replaced high-risk manual workflows, delivered incrementally across four Agile sprints.'
  ];
  doronDetails = [
    'Developed dynamic traffic simulation from scratch in C++ with realistic, law-abiding vehicle behavior.',
    'Implemented lane changing, vehicle tracking, and personality-based driving styles.',
    'Built tool to map any world layout, enabling AI vehicles to navigate environments effectively.'
  ];
  taDetails = [
    'Supported 300+ students in mastering core data structures and C++ through labs, office hours, and assessments.'
  ];

  // --- Project Data ---
  firmValDetails = [
    'Web application to help students learn and perform CAPM-based DCF valuations by interactively modifying real market data.',
    'Developed full-stack pipeline with React and Flask, sourcing live market data directly from Yahoo Finance.',
    'Optimized Rust valuation engine in browser for instant feedback on financial scenario changes.',
    'Serves hundreds of valuation requests weekly from both academic and public users worldwide.'
  ];
  cacheDbDetails = [
    'High performance in-memory NoSQL database.',
    'Developed an in-memory key-value data store server, achieving an average response time of 0.1ms.',
    'Utilized non-blocking socket programming and I/O multiplexing techniques to handle concurrent client connections.',
    'Implemented custom data structures, including hash tables and AVL trees, to efficiently manage and store data.'
  ];
  leetCodeDuelsDetails = [
    'Browser extension enabling multiplayer head-to-head competitive programming on LeetCode.',
    'Built Go backend with REST APIs and WebSocket server for real-time duels, matchmaking, and result broadcasting.',
    'Integrated GitHub OAuth with JWT-based sessions, and Redis for invites and active game state storage.',
    'Created Angular browser extension for duel setup, problem delivery, and real-time match results.'
  ];
  searchRpiDetails = [
    'A search engine for everything RPI.',
    'Built core C++ ranking system and snippet generation for RPI-specific search engine.',
    'Designed LMDB-based storage for crawled documents, optimizing retrieval performance.',
    'Led 7-member team developing UI, crawler, parser, ranking, and query handling pipeline.'
  ];

  // --- Technology Data ---
  languages = ['C++20', 'C', 'Python', 'Java', 'Go', 'SQL', 'Assembly (x86)'];
  frameworks = ['Angular', 'Flask', 'GTest', 'NumPy', 'OpenCV', 'PyTorch', 'Sklearn', 'Selenium'];
  devTools = ['Amazon Web Services', 'CMake', 'CUDA', 'Docker', 'Git', 'GitHub Actions', 'Jenkins', 'Jira', 'Linux', 'Unreal Engine 5'];
  databases = ['Oracle', 'Postgres', 'MySQL', 'SQL Server', 'Redis', 'LMDB'];
}