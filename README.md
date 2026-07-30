# The Programmer's Gazette — Official Architectural Portfolio of Amey Rasekar

<div align="center">

**[ EST. MMV (2005) • ROYAL SOCIETY OF COMPUTATIONAL ENGINEERS • PUNE ENGINEERING BUREAU ]**

*A 19th-Century Broadsheet Interactive Developer Portfolio & Systems Engineering Ledger*

[![GitHub Archive](https://img.shields.io/badge/GitHub%20Wire-Arceus1916-11191B?style=for-the-badge&logo=github&logoColor=F0F4E3)](https://github.com/Arceus1916)
[![Engineering Division](https://img.shields.io/badge/Bureau-Pune%2C%20India-A72A24?style=for-the-badge)](https://github.com/Arceus1916)
[![WCAG Standard](https://img.shields.io/badge/WCAG%202.1-AA%2FAAA%20Compliant-11191B?style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)

</div>

---

## Executive Summary & Publication Vision

**The Programmer's Gazette** is an interactive, Victorian newspaper–themed developer portfolio architected by **Amey Rasekar** (`@Arceus1916`). Operating from the **Pune Engineering Bureau**, I designed this publication as an immersive, high-performance web broadsheet that bridges 19th-century mechanical aesthetics with state-of-the-art software engineering.

Rather than a conventional resume website, *The Programmer's Gazette* presents my body of work as an authentic historical publication founded in **2005 (MMV)**. Every project is documented as a verified "Case Dossier," computational skills are traded on the **Pune Computational Exchange**, and continuous GitHub commits are recorded on a **16-Week Mechanical Punch-Card Ledger**.

---

## Chief Computational Architect & Full-Stack Engineer

* **Author & Chief Computational Architect:** Amey Rasekar
* **Bureau Headquarters:** Pune Division, India
* **Core Technical Domains:**
  * **Deep Learning & Computer Vision:** Convolutional Neural Networks (CNN), PyTorch, Diagnostic Classification, Multiclass MRI Analysis.
  * **Full-Stack Distributed Systems:** Next.js 15 App Router, React 19, TypeScript (Strict), Node.js, Spring Boot Microservices.
  * **High-Throughput Telemetry & Spatial Data:** Enterprise PostgreSQL, Spatial Indexing, Automated Data Ingestion Pipelines.
  * **Mobile & Offline-First Ecosystems:** React Native, Expo CLI, Realm Local-First Persistence, Field GPS Tagging.
  * **Decentralized Ledgers:** Peer-to-Peer Smart Contract Protocols, Energy Trading Architectures.

---

## Top Flagship GitHub Archives

The portfolio spotlights four primary engineering investigations, presented with interactive case files and ETag-verified live GitHub metadata synchronization:

### 1. Ocean Intelligence (`Case #101`)
* **Focus:** Full-Stack Marine Data Ingestion & Real-Time Oceanographic Analytics.
* **Synopsis:** An automated data ingestion platform engineered to harmonize fragmented biological marine metrics. Couples high-throughput telemetry ingestion with an enterprise PostgreSQL relational ledger to transform chaotic raw oceanographic data into structured, queryable intelligence.
* **Core Instruments:** React • Node.js / Spring Boot • PostgreSQL • Python.

### 2. Mental Illness Detection (`Case #102`)
* **Focus:** Deep Learning Medical Diagnostics (Alzheimer's Stage Classification).
* **Synopsis:** A deep Convolutional Neural Network (CNN) trained on MRI cross-sections to detect and classify early-stage cognitive degeneration with **90%+ empirical diagnostic precision**. Integrated with an interactive conversational triage agent for clinical evaluation.
* **Core Instruments:** Python • PyTorch • Scikit-Learn • CNN Architecture • Web API.

### 3. EnvDex (`Case #103`)
* **Focus:** Mobile Field Ecosystem & Offline-First Biological Archive.
* **Synopsis:** A Pokédex-style mobile instrument designed for field naturalists and botanists. Utilizes local Realm DB persistence to capture, categorize, and GPS-tag local flora and fauna without reliance on continuous network connectivity.
* **Core Instruments:** React Native • Expo CLI • Realm DB • TypeScript.

### 4. URRJA (`Case #104`)
* **Focus:** Decentralized Peer-to-Peer Energy Trading Ledger.
* **Synopsis:** A smart-contract prototype allowing residential nodes with surplus solar mechanization to directly trade excess wattage with neighboring peers across a verifiable, zero-intermediary distributed wire.
* **Core Instruments:** TypeScript • Smart Contract Logic • Distributed P2P Consensus.

---

## Interactive Features & Architectural Principles

### 1. Twin-Column Archival Exhibit (Side-by-Side Auto-Flipping Cards)
The publication features a synchronized newspaper broadsheet layout that displays the **Pune Computational Exchange** (4 technical skill sectors) side-by-side with the **Top Flagship GitHub Archives** (4 pinned repositories).
* **Mechanical Card Turning:** Powered by 3D `rotateX` card turning animations.
* **Interactive Control Bar:** Includes explicit `[ ⏸ PAUSE FLIP ]` / `[ ▶ RESUME ]` controls and manual `[ ◄ PREV ]` / `[ NEXT ► ]` navigation buttons.
* **Staggered Auto-Flipping:** Both columns automatically cycle through their respective dossiers by default, keeping the newspaper alive with continuous activity.

### 2. 16-Week Mechanical Contribution Ledger
An authentic 19th-century punch-card grid that visualizes continuous computational activity in our signature Paper Red (`#A72A24`) and Tan ink palette, providing a tangible record of engineering persistence.

### 3. ETag-Verified Telegraph Synchronization
Project dossiers integrate directly with the GitHub REST API using `If-None-Match` HTTP ETag headers and localStorage caching. This ensures **zero unnecessary rate-limit consumption** (`304 Not Modified`) while maintaining real-time star and fork counts.

### 4. The Secret Folds & Cryptogram Oracle (`/folds/secret-edition`)
An interactive Victorian cipher puzzle hidden within the publication. Readers who decode the intercepted `+3 Caesar Cipher` telegraph message unlock an honorary supplement from the Royal Society of Computational Engineers.

### 5. The Paper Ledger (`/resume`) & Author's Quill (`/contact`)
* **The Paper Ledger:** A custom-embedded PDF resume viewer (`app/resume/page.tsx`) with dedicated "AR" monogram favicon and architectural metadata.
* **Author's Quill:** A direct dispatch interface for professional inquiries and engineering correspondence.

---

## Design System & Typography Tokens

The publication adheres to strict color and typographic rules defined in Tailwind CSS v4 tokens:

| Token Name | Hex Code | Purpose & Semantic Role |
| :--- | :--- | :--- |
| **`paper-cream`** | `#F0F4E3` | Authentic 19th-century aged broadsheet background paper |
| **`ink-black`** | `#11191B` | High-contrast dark ink for headlines, body text, and structural frames |
| **`paper-red`** | `#A72A24` | Crimson emphasis ink for lead headlines, badges, and verified seals |
| **`paper-tan`** | `#976D67` | Antique sepia accents, engraved borders, and secondary column dividers |

### Typographic Faces
* **Headlines (`var(--font-headline)`):** *Libre Bodoni* / *Bodoni Moda* — period-accurate serif display typography.
* **Body Columns (`var(--font-serif)`):** *EB Garamond* / *Crimson Text* — readable old-style print serif with drop caps.
* **Code & Telegraphs (`var(--font-mono)`):** *IBM Plex Mono* — mechanical typewriter monospaced numerals and console output.

---

## Accessibility & Performance Standards

* **WCAG 2.1 Compliance:** Engineered for maximum readability with contrast ratios exceeding 4.5:1 (`#11191B` ink on `#F0F4E3` cream paper), semantic `<header>`, `<main>`, `<article>`, `<nav>`, and `<footer>` HTML landmarks.
* **Zero Layout Shift:** Font display swapping and statically generated Next.js App Router routes ensure instant page hydration and sub-second Largest Contentful Paint (LCP).

---

<div align="center">

**© MMV (2005) ROYAL SOCIETY OF COMPUTATIONAL ENGINEERS • PUNE BUREAU DIVISION**  
*All Claims & Code Specimens Verified Under MIT and Apache-2.0 Open Licenses*

</div>
