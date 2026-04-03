# Portfolio CV Update - Design Spec

## Goal

Update the portfolio website to reflect the current CV of Arnes Poprzenovic. Remove the entire Projects section (including all Alien Man references). No commits or pushes - user handles that.

## Changes by File

### 1. `src/components/Home.tsx`

**What changes:**
- "aspiring software engineer" -> "software engineer"
- Remove machine learning interest from description
- Update description to reflect current role: backend engineer working on distributed systems, anti-fraud at scale
- Keep the playful binary joke and overall tone intact

### 2. `src/components/About.tsx`

**What changes:**
- Replace bio text entirely:
  - No longer a student seeking internship
  - Now a Software Engineer at Infobip working on Signals, a high-throughput anti-fraud platform
  - Graduated Summa Cum Laude (3.91 GPA) from RIT Croatia, BS in Web and Mobile Computing (May 2025)
  - Focus on backend development, distributed systems, scalable architecture
  - Update hobbies/interests paragraph to mention pitching tech products and system architecture
- Update skills array to: `["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "ClickHouse", "MSSQL", "Redis", "React"]`
- Adjust grid layout from `grid-cols-3` with 2 rows to accommodate 8 items (keep `grid-cols-3` - will naturally flow to 3 rows)

### 3. `src/components/Experience.tsx`

**What changes - add 2 new entries at top, update CROZ:**

**New entry 1: Infobip Software Engineer (Sep 2024 - Present)**
- Key contributor to Signals anti-fraud platform processing ~70M daily events (2B+ monthly)
- Engineer backend solutions with Spring Boot, synchronization across instances to prevent data duplication
- Architected PoC migrating analytical data aggregation from PostgreSQL to ClickHouse (hourly batching to real-time ingestion, query time from minutes to milliseconds)
- Redesigned SPD detection service from single-instance Java RMI to distributed Kafka architecture (4 synchronized instances, 2 active + 2 failover)
- Optimize complex data models across sharded PostgreSQL and MSSQL databases
- Technologies: Spring Boot, Java RMI, JUnit, Apache Kafka, Flyway, PostgreSQL, MSSQL, ClickHouse, NATS JetStream

**New entry 2: Infobip Software Engineer Intern (Jun 2024 - Aug 2024)**
- Honoured as #1 Software Engineering Intern among 34 engineers from Croatia, Bosnia & Herzegovina, Poland, and Slovakia
- Assisted with technical guidance of 4 interns whilst building a high-volume message scheduler for MNOs
- Led sprint plannings and retrospectives
- Conducted code reviews for code quality and performance
- Technologies: Spring Boot, Java RMI, JUnit, Apache Kafka, Flyway, PostgreSQL, MSSQL, ClickHouse, NATS JetStream

**Update: CROZ intern (Jun 2023 - Sep 2023) - replace all 4 bullet points with CV-aligned text:**
- Engaged in the development of an application for user activity tracking, utilizing React for frontend, and Spring Boot for backend to create responsive REST APIs, facilitating a seamless user experience
- Implemented a user interaction tracking system using Apache Kafka, which recorded channel preferences based on user viewing patterns and prompted them to subscribe to new packages
- Established a robust infrastructure by deploying application components with Docker and OpenShift and managing database schema changes with Liquibase to ensure smooth CI/CD pipelines
- Technologies: Spring Boot, PostgreSQL, Mockito, React, JUnit, OpenShift, Apache Kafka, Docker, Liquibase

**Keep: RIT TA entry - no changes**

### 4. Remove Projects section entirely

**Files to delete:**
- `src/components/Projects.tsx`
- `src/components/bundle/ProjectCard.tsx`
- `src/assets/images/alien-man.png`
- `src/assets/images/pu-project.png`

**Files to modify:**
- `src/App.tsx` - remove Projects import, remove `<div id={"projects"}/>` anchor, remove `<Projects/>` component
- `src/components/bundle/NavbarComponent.tsx` - remove "Projects" navigation link

### 5. `README.md`

**What changes:**
- "aspiring software engineer" -> "software engineer"
- Remove machine learning interest
- Update description to reflect backend/distributed systems focus
- Remove "Projects" from Layout section list
- Update copyright year to 2025

### 6. `src/components/bundle/NavbarComponent.tsx`

**What changes:**
- Remove the Projects `<SmoothScrollLink>` block

## Files NOT changed

- `src/components/bundle/ExperienceItem.tsx` - no structural changes needed
- `src/components/bundle/Skills.tsx` - no structural changes needed
- `src/components/bundle/FooterComponent.tsx` - no changes needed
- `src/globals.css`, `src/index.css` - no style changes
- `tailwind.config.js`, `tsconfig.json`, `package.json` - no config changes

## Out of scope

- No new sections (Education, Startups, etc.)
- No visual/design changes beyond what's needed for content updates
- No dependency changes
- No commits or pushes (user handles this)
