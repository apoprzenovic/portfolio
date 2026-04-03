# Portfolio CV Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the portfolio website to match the current CV, remove the entire Projects section (including Alien Man), and update all outdated content.

**Architecture:** Content-only update to an existing React/TypeScript portfolio. No structural changes beyond removing the Projects section and its associated components/assets. No new dependencies.

**Tech Stack:** React, TypeScript, Tailwind CSS, Flowbite React

**Note:** No commits or pushes - user handles git operations at the end.

---

### Task 1: Remove Projects section - delete files and assets

**Files:**
- Delete: `src/components/Projects.tsx`
- Delete: `src/components/bundle/ProjectCard.tsx`
- Delete: `src/assets/images/alien-man.png`
- Delete: `src/assets/images/pu-project.png`

- [ ] **Step 1: Delete the four files**

```bash
rm src/components/Projects.tsx
rm src/components/bundle/ProjectCard.tsx
rm src/assets/images/alien-man.png
rm src/assets/images/pu-project.png
```

- [ ] **Step 2: Verify files are deleted**

```bash
ls src/components/Projects.tsx src/components/bundle/ProjectCard.tsx src/assets/images/alien-man.png src/assets/images/pu-project.png 2>&1
```

Expected: all four files should report "No such file or directory"

---

### Task 2: Remove Projects from App.tsx and Navbar

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/bundle/NavbarComponent.tsx`

- [ ] **Step 1: Update App.tsx - remove Projects import and usage**

Remove the Projects import and both the `<div id={"projects"}/>` anchor and `<Projects/>` component. The file should become:

```tsx
import React from 'react';
import './globals.css';
import Navbar from "./components/bundle/NavbarComponent";
import FooterComponent from "./components/bundle/FooterComponent";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
    return (
        <>
            <div id={"home"}/>
            <Navbar/>
            <Home/>
            <div id={"about"}/>
            <About/>
            <div id={"experience"}/>
            <Experience/>
            <FooterComponent/>
        </>
    );
}

export default App;
```

- [ ] **Step 2: Update NavbarComponent.tsx - remove Projects nav link**

Remove the Projects `<SmoothScrollLink>` block (lines 69-74). The `<Navbar.Collapse>` should only contain Home, About, and Experience links:

```tsx
<Navbar.Collapse>
    <SmoothScrollLink
        to="home"
        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
    >
        Home
    </SmoothScrollLink>
    <SmoothScrollLink
        to="about"
        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
    >
        About
    </SmoothScrollLink>
    <SmoothScrollLink
        to="experience"
        className={"text-white text-xl hover:!text-main-blue transition-colors duration-300"}
    >
        Experience
    </SmoothScrollLink>
</Navbar.Collapse>
```

- [ ] **Step 3: Verify no remaining alien/project references**

```bash
grep -ri "alien\|Projects\|ProjectCard\|pu-project" src/ --include="*.tsx" --include="*.ts"
```

Expected: no matches (the Projects.tsx and ProjectCard.tsx files are deleted, and no other file references them)

---

### Task 3: Update Home.tsx

**Files:**
- Modify: `src/components/Home.tsx`

- [ ] **Step 1: Update hero text**

Replace the two paragraph blocks. Change "aspiring software engineer" to "software engineer", remove ML interest, update to reflect current role focused on backend and distributed systems.

Replace lines 18-21:
```tsx
<p className={"text-gray-400 mt-7 text-xl"}>
    I'm an aspiring software engineer, currently living in Zagreb, who loves solving complex problems. I
    have great interest in backend development, full-stack development, and have started taking an
    interest in machine learning.
</p>
```

With:
```tsx
<p className={"text-gray-400 mt-7 text-xl"}>
    I'm a software engineer currently living in Zagreb, who loves solving complex problems. I
    have great interest in backend development, distributed systems, and building
    scalable architecture that handles massive throughput.
</p>
```

- [ ] **Step 2: Verify the file has no remaining outdated references**

Open in editor and run `get_file_problems` to check for issues.

---

### Task 4: Update About.tsx

**Files:**
- Modify: `src/components/About.tsx`

- [ ] **Step 1: Update skills array**

Replace line 5:
```tsx
const skills = ["Java", "Postgres", "Spring Boot", "Azure", "JavaScript", "React"];
```

With:
```tsx
const skills = ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "ClickHouse", "MSSQL", "Redis", "React"];
```

- [ ] **Step 2: Update bio text**

Replace the first `<p>` block (lines 21-36):
```tsx
<p className={"text-xl text-left text-gray-400 mt-9 md:mt-0"}>
    I am currently a third-year student at RIT Croatia, Zagreb, and am actively seeking
    an
    internship that will develop and enhance my software engineering skills. My passion
    lies in backend and full-stack development.
    <br/><br/>

    While I am proficient in frontend tasks, my preference
    leans
    towards developing backend services and learning how to deal with large scale systems.
    <br className={"block sm:hidden"}/> <br className={"block sm:hidden"}/>
    Concurrently, I
    am pursuing a Bachelor of Science degree in Web and Mobile Computing at RIT Croatia.

    Recently, I have honed my skills in various technologies:
</p>
```

With:
```tsx
<p className={"text-xl text-left text-gray-400 mt-9 md:mt-0"}>
    I am a Software Engineer at Infobip, working on Signals, a high-throughput
    anti-fraud platform processing over 2 billion events monthly. My passion
    lies in backend development and distributed systems.
    <br/><br/>

    I graduated Summa Cum Laude (GPA: 3.91/4.00) from RIT Croatia with a
    Bachelor of Science in Web and Mobile Computing. While I am proficient
    in frontend tasks, my preference leans towards developing backend services
    and building scalable systems that handle massive concurrent workloads.
    <br className={"block sm:hidden"}/> <br className={"block sm:hidden"}/>

    Here are some technologies I work with:
</p>
```

- [ ] **Step 3: Update hobbies/interests paragraph**

Replace lines 38-42:
```tsx
<p className={"text-xl text-left text-gray-400"}>
    Beside my professional pursuits, I enjoy skiing, swimming, and playing games.
    Furthermore, I am interested in learning how to pitch tech products, their overall architecture,
    how
    they're set up, how to deal with a large amount of data, etc.
</p>
```

With:
```tsx
<p className={"text-xl text-left text-gray-400"}>
    Beside my professional pursuits, I enjoy skiing, swimming, and playing games.
    Furthermore, I am interested in how to pitch tech products, their overall
    architecture, and how to design systems that handle large amounts of data
    at scale.
</p>
```

- [ ] **Step 4: Verify with get_file_problems**

Open in editor and run `get_file_problems` to check for issues.

---

### Task 5: Update Experience.tsx

**Files:**
- Modify: `src/components/Experience.tsx`

- [ ] **Step 1: Add Infobip Software Engineer entry at top of timeline**

Add as the first `<ExperienceItem>` inside the `<Timeline>`, before the CROZ entry:

```tsx
<ExperienceItem
    time="Sep 2024 - Present"
    title="Software Engineer at Infobip"
    body={[
        "Key contributor to Infobip's Signals product, a high-throughput anti-fraud platform processing ~70 million daily events (2B+ monthly) to combat artificially inflated traffic (AIT) for major global telecoms",
        "Engineer backend solutions with Spring Boot, emphasizing synchronization across instances to prevent data duplication, ensuring efficient operation at scale for clients such as major global telecoms and Fortune 500 companies",
        "Architected a Proof of Concept (PoC) migrating analytical data aggregation from PostgreSQL to ClickHouse, shifting from hourly batching to real-time ingestion; reduced analytical query execution time from minutes to milliseconds",
        "Redesigned the internal SPD detection service from a single-instance Java RMI setup to a distributed, fault-tolerant architecture using Apache Kafka; deployed 4 synchronized instances (2 active, 2 redundant failovers) to eliminate single points of failure",
        "Optimize complex data models across sharded PostgreSQL and MSSQL databases, ensuring data consistency and synchronization across distributed instances while handling massive concurrent request volumes"
    ]}
    technologies="Spring Boot, Java RMI, JUnit, Apache Kafka, Flyway, PostgreSQL, MSSQL, ClickHouse, NATS JetStream"
/>
```

- [ ] **Step 2: Add Infobip Intern entry after Infobip SE**

Add as the second `<ExperienceItem>`:

```tsx
<ExperienceItem
    time="Jun 2024 - Aug 2024"
    title="Software Engineer Intern at Infobip"
    body={[
        "Honoured as #1 Software Engineering Intern among 34 highly skilled engineers from Croatia, Bosnia & Herzegovina, Poland, and Slovakia for the Summer 2024 internship",
        "Assisted with initial technical guidance of 4 interns whilst building a high-volume message scheduler for Mobile Network Operators (MNOs); the tool is now maintained as an internal product for ensuring timely message delivery",
        "Led sprint plannings and retrospectives to define requirements, set priorities, and establish project timelines, driving efficient and goal-oriented development cycles",
        "Conducted code reviews and collaborated closely with team members to enhance code quality and performance, contributing to the long-term maintainability of the scheduler system"
    ]}
    technologies="Spring Boot, Java RMI, JUnit, Apache Kafka, Flyway, PostgreSQL, MSSQL, ClickHouse, NATS JetStream"
/>
```

- [ ] **Step 3: Update CROZ intern entry to match CV wording**

Replace the existing CROZ `<ExperienceItem>` with:

```tsx
<ExperienceItem
    time="Jun 2023 - Sep 2023"
    title="Software Engineer Intern at CROZ"
    body={[
        "Engaged in the development of an application for user activity tracking, utilizing React for frontend, and Spring Boot for backend to create responsive REST APIs, facilitating a seamless user experience",
        "Implemented a user interaction tracking system using Apache Kafka, which recorded channel preferences based on user viewing patterns and prompted them to subscribe to new packages, enhancing the app's functionality and engagement",
        "Established a robust infrastructure by deploying application components with Docker and OpenShift and managing database schema changes with Liquibase to ensure smooth CI/CD pipelines"
    ]}
    technologies="Spring Boot, PostgreSQL, Mockito, React, JUnit, OpenShift, Apache Kafka, Docker, Liquibase"
/>
```

- [ ] **Step 4: Verify with get_file_problems**

Open in editor and run `get_file_problems` to check for issues.

---

### Task 6: Update README.md

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Update README content**

Replace the full file with:

```markdown
# Portfolio Website

## Introduction
I am Arnes Poprzenovic, a software engineer with a passion for backend development and distributed systems. Welcome to my portfolio website, which you can access [here](https://arnespoprzenovic.com/). Where you can find a comprehensive showcase of my education and experience.

## Getting Started
This portfolio is developed using React and bootstrapped with Create React App.

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```
   git clone [repository URL]
   ```
2. Navigate to the project directory and install dependencies:
   ```
   cd portfolio
   npm install
   ```

### Available Scripts
- `npm start`: Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from the project.

### Deployment
This portfolio is set up for deployment using both GitHub Pages and Cloudflare Pages.

1. Run `npm run deploy` to deploy the application to GitHub Pages.

2. For Cloudflare Pages, the deployment is configured to automatically build and deploy the main branch. After deployment, Cloudflare Pages provides a unique URL for the website.

3. A custom domain is set up in Cloudflare Pages settings to redirect to `arnespoprzenovic.com`, effectively displaying the portfolio on this domain.

## Layout
The website includes the following sections:
- Home
- About Me
- Experience

## Technologies Used
- React
- TypeScript
- MaterialUI
- Tailwind CSS

## Contact
For more information or to discuss potential opportunities, please reach out to me at [arnespoprzenovic@gmail.com](mailto:arnespoprzenovic@gmail.com).

---

(c) 2025 Arnes Poprzenovic. All rights reserved.
```

---

### Task 7: Final verification

- [ ] **Step 1: Verify no remaining alien-man or outdated references**

```bash
grep -ri "alien\|aspiring\|machine learning\|third-year\|seeking.*internship" src/ README.md --include="*.tsx" --include="*.ts" --include="*.md"
```

Expected: no matches

- [ ] **Step 2: Verify the app builds**

```bash
npm run build
```

Expected: successful build with no errors

- [ ] **Step 3: Verify deleted files are gone**

```bash
ls src/components/Projects.tsx src/components/bundle/ProjectCard.tsx src/assets/images/alien-man.png src/assets/images/pu-project.png 2>&1
```

Expected: all report "No such file or directory"
