# The Programmer’s Gazette – Technical Requirements Document

## Executive Summary  
This document specifies the design and technical requirements for **“The Programmer’s Gazette”**, an interactive Victorian-era newspaper–themed developer portfolio.  It will serve as the single authoritative reference for development, guiding everything from the creative vision to the code-level implementation (via Codex prompts). The Gazette’s purpose is to showcase the developer’s skills and projects in an immersive, storytelling format that stands out from typical portfolios. It will feel like a *museum artifact* or *special edition broadsheet*, but function as a fully modern website.  

Key features include:  
- **Newspaper Metaphor:** The entire site looks and behaves like an 1880s British newspaper – masthead, multi-column layout, old-fashioned headings, engravings, classifieds, and hidden “investigation” stories.  
- **Mystery Narrative:** A subtle thriller/mystery layer runs through the site, with secret case files and easter eggs rewarding curious visitors (while still keeping navigation clear for recruiters).  
- **Full-Stack Tech:** Implemented with Next.js (App Router) in TypeScript, styled with Tailwind CSS and custom variables, using Framer Motion for tasteful paper and typewriter animations, and MDX for content.  
- **GitHub as Archives:** The developer’s GitHub projects appear as classified “Archives/Case Files”, fetched via the GitHub API (cached for performance) and displayed in thematic style.  
- **Strict Design System:** A limited color palette (#F0F4E3, #11191B, #A72A24, #976D67), authentic typography (blackletter/engraving style headers, classic serif text), and Victorian ornamentation ensure a cohesive aesthetic.  
- **Accessibility & Performance:** High contrast text, alt text for images, reduced-motion support, SEO tags, and performance budgets (e.g. 2.5s LCP, 100ms FID targets) will be enforced.

This TRD is organized into sections covering vision, brand identity, user experience, IA, page specs, components, design system, technical architecture, and development guidelines. Each section provides detailed rules and examples, plus references to authoritative sources where applicable (e.g. historical typographic usage, CSS techniques, UX conventions). Mermaid diagrams illustrate high-level sitemap and architecture. All specifications here are binding requirements for the project.

## 1. Product Vision & Philosophy  
- **Concept:** A *developer portfolio as Victorian newspaper*.  Rather than a typical site, it is a special edition broadsheet reporting on the engineer’s “investigations”. The user “reads” the portfolio like news.  
- **Experience:** Aim to captivate visitors. The initial reaction should be “Wow, this is an old newspaper” then “Wait, it’s about a developer!”. Each scroll is like unfolding a page. Animations simulate page turns, ink stamping, typewriter text, etc.  
- **Memorability:** Contrasted with modern portfolios (dark mode, neon, blobs), this unique concept creates a narrative experience. It tells the story of the developer’s career as journalism. By the end, the reader feels they uncovered classified info. This emotional engagement makes the portfolio unforgettable.  
- **Balance:** While playful, it remains professional. Core information (skills, projects, resume, contacts) must be discoverable within seconds. Creativity should *enhance* rather than obscure content. For example, unconventional labels (“Telegraph Office” = Contact) will have obvious layout or tooltips.

## 2. Brand Identity  
- **Name & Style:** The site is “The Programmer’s Gazette” (or similar). It pretends to be an existing Victorian-era newspaper. Possible taglines (edition headers): “London Edition”, “Special Engineering Edition”, etc. A fictitious founding date (e.g. *Established 1887*) and publisher add authenticity.  
- **Tone of Voice:** Formal, investigative journalism voice. Headlines and copy use past-tense reportage (“Engineer Discovers…”, “New Study Reveals…”) and period-appropriate vocabulary (e.g. “Correspondent”, “Edition”, “Registered Telegraph”).  
- **Logo/Masthead:** A decorative Victorian masthead font (e.g. **UnifrakturCook** or **Old English Text MT** style) used once at top. The masthead text (the Gazette’s name) should be large, blackletter or ornate serif, and centered. We may cite the *Daily Telegraph*’s history of blackletter masthead in 1865 as inspiration for using an inline blackletter form.

## 3. Storytelling & Narrative Rules  
- **Main Narrative:** The user is reading an issue of the Gazette. Articles (About, Projects, Skills) are written like news stories or editorials about *the engineer’s work*. The developer’s name appears like a correspondent. For example, instead of “About Me”, a headline could read “Local Engineer Unveils New Algorithmic Breakthrough”.  
- **Mystery/Thriller Layer:** Hidden threads weave through content. Examples:  
  - Small hints or redacted sections mention an unrevealed “Project Blackbox” or classified research.  
  - Recurring “Case File” numbers or newspaper clippings hint at a secret project.  
  - A locked “Confidential” page (password: found by solving a site puzzle or clicking a wax seal).  
  - Hovering or clicking subtle clues (e.g. an illustration caption) might reveal secret notes.  
- **Easter Eggs:** Non-essential fun details: 
  - A built-in crossword or cipher with clues about hidden content.  
  - A PDF train ticket or telegram that, when “decoded”, leads to a hidden page.  
- **Constraints:** These narrative elements must not block the main goal. Recruiters/hiring managers should not be forced to play puzzles. The hidden content is a bonus for engaged visitors.

## 4. User Personas & Recruiter Journey  
- **Personas:**  
  - **Technical Recruiter/Hiring Manager:** Has ~5-15 minutes to browse. Interested in projects, skills, GitHub, resume. Values clarity and professionalism but appreciates creativity that demonstrates skill and personality.  
  - **Developer/Engineer Peer:** Interested in the technical depth; may explore GitHub/infrastructure aspects. Enjoys the theme and coding puzzles.  
  - **General Visitor or Friend:** Might be intrigued by the novelty. Values narrative and style.  
- **Key Goals:** For all, quickly find core info (projects, skills, contact). The creative presentation should draw them in but not hide critical items. The IA ensures that obvious labels or prominent links guide them to resume/GitHub.  
- **Recruiter Journey:**  
  1. Lands on front page (immediately impressed by style).  
  2. Sees a prominent headline and overview (About me styled as lead story).  
  3. Sees clear “Archive” or “Case Files” link to projects.  
  4. Checks Skills/Tech (e.g. stock table labeled with programming languages).  
  5. Finds Resume (Telegraph Office/Contact).  
  Throughout, subtle Easter eggs are there but optional.

According to UX guidance, important links like contact info or CV should not be hidden on a puzzle page. We will include a visible “Telegraph Office” (Contact) section on each page footer and a link to the CV, per best practice.

## 5. Information Architecture & Sitemap  
- **Sections (Pages)/Virtual “Folds”:**  
  - **Front Page (Landing Page):** The main masthead and top stories. Introduces the engineer (“Special Correspondent”) and highlights a headline project or role. Acts as Home.  
  - **Investigations (Fold 2):** A continuation of the fold, leading to in-depth pieces like “Featured Investigations” (overview of projects) and side columns (weather/status, stats).  
  - **Archives (GitHub Explorer):** A page styled like an archive drawer or museum catalogue listing “Case Files” (projects). Clicking an entry shows a Case File page.  
  - **Case File Pages (Project Details):** Each project is a multi-column report with overview, tech, obstacles, findings, all in narrative style.  
  - **Telegraph Office (Contact):** A stylized telegram/contact form. Also a place for links (GitHub, LinkedIn, Resume) framed as “Correspondence Details”.  
  - **Classified Ads:** Could be integrated into footer or sidebars.  
  - **Secret/Confidential Page:** Hidden, for the ultimate project or secret content (accessed via easter egg).  
- **Sitemap Diagram (Illustrative):**  

```mermaid
flowchart LR
  A[Front Page] --> B[Investigations Fold]
  A --> C[Editorial & Ads (Sidebars)]
  A --> D[Telegraph Office (Contact)]
  B --> E[Archives (GitHub Explorer)]
  E --> F[Project Case Files]
  C --> G[Feature Articles]
  C --> H[Classified Ads]
  F --> I[Secret 'Confidential' Page]
```  

- **Grid Layout:** Use a multi-column grid to mimic a broadsheet. For example, 6–8 columns per page. Articles can span multiple columns (e.g. full-width headline, then 2–3 column paragraphs). Gutter widths should be modest (e.g. 1rem) and consistent.  
- **Navigation:** A fixed header bar (tiny) or side menu with links to major sections (Home, Archives, Contact). However, links can be labeled in-theme (e.g. “Archive” or icon of filing cabinet for Projects, old-school envelope icon for Contact). Breadcrumbs or a short tagline (“Page X of Issue Y”) could orient the user on multi-page flows (especially for secret pages).  

**Key IA principles:** Don’t bury contact or CV – they’ll be in the Telegraph Office page and footer. The UX Q&A warns that employers expect “contact” info in obvious places. We honor that by having “Telegraph Office” accessible and contact icons present on all pages.

## 6. Page-by-Page Specifications  

### 6.1 Front Page (Home)  
- **Masthead:** Top of page has the newspaper name in large decorative font (Algerian/blackletter). Underneath, meta-info: city (“London”), date (“Saturday, July 30, 2026”), “Vol. XXVII No. 1188”. Price “One Penny”. These can be static or generated.  
- **Headline Story:** Prominent large headline (e.g. “Engineer Discovers New Algorithmic Method”) in red (#A72A24) or black; sub-headline smaller. This section might include an engraved-style illustration or portrait of the engineer as Victorian etching (filter photo to engraving).  
- **Lead Article (About Me):** Written as if by a reporter about the engineer’s background and philosophy. Example: “Our special correspondent, Amey Rasekar, after years investigating complex systems…”. This text spans 2–3 columns in EB Garamond (body font).  
- **Secondary Articles/Sidebars:** Smaller boxes or columns with other content: e.g.  
  - **“Editor's Note”** (sidebar, maybe one column) – a short blurb about the journey, styled italic.  
  - **“Debug Weather”:** A small weather widget (see Section 8) – e.g. “Forecast: Rain of Bugs”.  
  - **“Tech Market” (Stock-like chart):** A faux stock table listing tech skill levels (like Google {▲}, React {▲}, Docker {▼}, etc.).  
  - **“Wanted” Ad:** e.g. “Wanted: Innovative Projects – Apply Within”.  
- **Layout:** Likely 4–6 columns. Headlines may span full width, body text in columns. Ensure vertical rhythm and hierarchy: headlines have tight line spacing and larger size, body copy justified, captions smaller.

### 6.2 Investigations / Folds  
This section (if on same page or as folding page) contains:  
- **Featured Investigations (Projects Preview):** A brief summary or teaser of key projects as mini-articles (e.g. “Marine AI Platform Charts New Waters” linking to Archives).  
- **Statistics Sidebar:** “Issue Stats” with counters (Articles Published, GitHub Commits, Experiments).  
- **Crossword/Decoder (easter egg):** A small interactive element (could be non-functional placeholder).  
- **Newspaper Filler:** Fill any gaps with generic Victorian news snippets (science news, local events) to simulate fullness.

### 6.3 Archives (GitHub Explorer)  
- **Appearance:** Looks like a library archives or old filing cabinet interface. Possibly a decorative frame and list of case files. Each project entry is a “Case File #XYZ” with a title and snippet (from README).  
- **Integration:** Fetch the developer’s pinned GitHub repositories via the GitHub API (v3 or GraphQL). For each repo, show case number, name, description, and last updated. Example UI:  
  ``` 
  Case #118 – Ocean Intelligence Platform (Last update: 2026-07-25) [Open Archive >]
  Case #302 – EnvDex (Last update: 2026-06-10) [Open Archive >]
  ```  
  Each “[Open Archive >]” is a link to that project’s Case File page.  
- **Technical Note:** Use server-side fetching (getStaticProps or Route Handler) to call GitHub API. Cache results (e.g. in memory or Redis) to avoid rate limits. Map data to UI (see Section 10). For security, only expose non-sensitive repo data. No API keys visible on client.  
- **Design:** Archive entries could appear as items on an engraved plaque or printed list, with an aged paper background. Maybe a subtle stamp graphic near each if “viewed”.

### 6.4 Project Case File Pages (Individual Projects)  
- **Header:** “Case File #XYZ” as a small typewriter font label (e.g. **Special Elite** mono). Title of project as a subheadline. Possibly a “CONFIDENTIAL” stamp graphic if this is meant to feel secret.  
- **Navigation:** Breadcrumb or back to Archives link (e.g. “← Return to Archives”).  
- **Content:** Styled like a detailed investigation report. Could be multiple sections/columns:  
  - **Overview:** Summary of the project and purpose (old journalistic tone).  
  - **Equipment (Tech Stack):** List of tools/tech (node, python, etc) shown as e.g. “Instruments” or table.  
  - **Findings:** Achievements or project outcomes.  
  - **Obstacles:** Challenges faced (“Obstacles Encountered”).  
  - **Further Investigation:** Planned future work.  
- **UI:** Similar 2-3 column layout. Possibly a left sidebar with meta info (repository link, case number, status). Use boxes or rules to separate sections.  
- **Code/README Integration:** Use MDX to render project README content if desired. Alternatively, manually author content for consistency of voice. If using MDX, sanitize and style it (no headings beyond H3).  
- **Link to GitHub:** A prominent “Original Archive” link to the actual GitHub repository (opening in new tab). Possibly styled as a telegram link or certificate.  
- **Empty State:** If no README/description, show a blank placeholder like “Case file sealed”.

### 6.5 Telegraph Office (Contact)  
- **Form:** A stylized telegram form or an old telephone directory. Fields: Name, Email, Message.  
- **Design:** Use monospace (Special Elite) labels, maybe with decorative “*” bullet symbol. Submit button styled as a stamped “Transmit”.  
- **Alternative Contact:** Also list email and LinkedIn/GitHub with icons that look like engravings.  
- **Footer:** Small print “Published by The Programmer’s Gazette • All rights reserved • est. 1887” etc.

### 6.6 Classifieds & Side Content  
- These elements appear on side or foot of pages. Examples:  
  - **Wanted/For Sale Ads:** “Wanted: Bold Engineers”, “For Sale: Vintage Linux PC”.  
  - **Letters to the Editor:** A short praise or note “Thanks for insightful articles!”.  
  - **Obituary (humorous):** “RIP: Legacy IE6 Support” styled small.  
- **Background Articles:** Any blank areas are filled with generic Victorian news: local news blurbs, weather reports, finance quotes. Filler text should read plausibly old-fashioned (e.g. “Steam Engine Speeds Increase”).
- **Strategy:** Content not related to user is for atmosphere. Some can subtly reference projects (e.g. “Unveiled new cybersecurity scheme – see page 5”).  

## 7. Component Library

Identify reusable components and their variants. Each should be implemented in React/TypeScript with clear props. Examples:  

- **`<Header>`**: Props: `title: string`, `subtitle?: string`, `masthead?: boolean`. Renders the masthead for front page or section headings. Variant for masthead (blackletter, inline initials).  
- **`<Article>`**: Props: `headline, subhead, content, image, columns: number`. Outputs an article block spanning `columns` grid columns. Supports decoration (drop cap, flourished divider).  
- **`<Sidebar>`**: For weather, stats, etc. Props: `title, children`.  
- **`<ArchiveList>`**: Props: `projects: {caseNumber, name, desc, lastUpdate, url}[]`. Renders the list of case files.  
- **`<ProjectCard>`**: For individual archive entries; props: `caseNumber, name, summary`.  
- **`<ContactForm>`**: Handles the telegraph form. Props: `onSubmit`. Internally uses `<input>` and `<textarea>` styled in typewriter font.  
- **`<NewspaperFrame>`**: A wrapper that applies column grid and paper background. Props: `backgroundLayer?: boolean` (to overlay texture).  
- **`<Stamp>`**: Decorative stamp element (e.g. CONFIDENTIAL). Props: `text, color`. Renders rotated red text stamp.  
- **`<Icon>`**: For small icons (e.g. envelope, telegram). Use SVG or engraved style icon set. Props: `type, size`.  
- **`<FoldAnimation>`**: A wrapper or CSS class that animates page folding.  
- **State/Animations:** Components may have state: e.g. Article could have `hovered` to lift image. The Contact form needs form state. The archive may have a “visited” state (e.g. on click, mark as stamped “READ”).  
- **Props Table Example:**  

| Component        | Props                          | Variants/States           | Description                                |
|------------------|--------------------------------|---------------------------|--------------------------------------------|
| `Header`         | `{ title: string; masthead?: boolean }` | `masthead=true` vs normal | Renders large title. Masthead variant uses Algerian font. |
| `Article`        | `{ headline, subhead?, children, columns?: number }` | — | Multi-column news article block. |
| `ArchiveList`    | `{ projects: Project[] }`      | —                         | Lists projects (case files) in archive style. |
| `ProjectCard`    | `{ caseNumber, name, desc }`   | `visited` (bool)         | Entry for archive list. Adds stamp if visited. |
| `ContactForm`    | `{ onSubmit(formData) }`       | `submitting` state       | Telegram-style form with "Transmit" button. |
| `Sidebar`        | `{ title, children }`         | —                         | Boxed section for side content (weather, ads). |
| `Icon`           | `{ name: string; size?: number }` | —                       | Illustrative icon, e.g. envelope, archive. |

(Each component should have associated CSS/Tailwind classes for fonts, borders, and layout as per the design system.)

## 8. Design System

A strict design system ensures all pages look cohesive. This covers colors, typography, spacing, grids, and visual elements.

### 8.1 Colour Palette  
Use exactly the provided four colors, mapped to roles:

| Role / Use                    | Color        | Example Usage                           |
|-------------------------------|--------------|-----------------------------------------|
| **Paper background**          | `#F0F4E3`    | Page background, article background     |
| **Ink / Text**                | `#11191B`    | Primary text (body, headings)           |
| **Accent / Headlines / Stamps** | `#A72A24`    | Breaking headlines, stamps, highlights  |
| **Decorative / Borders**      | `#976D67`    | Lines, ornaments, secondary text        |

All backgrounds are “off-white” cream (#F0F4E3) instead of pure white for authenticity and eye comfort. Ink (#11191B) is very dark grey, providing high contrast (≥21:1 against cream, well above WCAG 7:1). Reserve red (#A72A24) for urgent or title text (like a Breaking News header or “CONFIDENTIAL” stamp) to mimic old newspaper alert ink. Brown (#976D67) is for subtle borders, signature lines, or pulled quotes, adding warmth.

### 8.2 Spacing & Grid  
- **Grid:** Use Tailwind’s grid or flex with 6–8 columns. E.g. `grid grid-cols-6 gap-4` for a page. Gutter (column gap) should be ~1rem (4). Margin around main text ~2rem.  
- **Containers:** Maximum width should mimic broadsheet width (~11–13in printed; on screen ~1200px wide for desktops). Use a centred container (e.g. `max-w-screen-xl mx-auto`).  
- **Spacing Scale:** Follow Tailwind’s default (1 = 0.25rem, 2=0.5rem, ..., 64=16rem). Example rules:  
  - Paragraphs: margin-bottom `mb-6` (1.5rem).  
  - Headings: margin above `mt-8`, below `mb-4`.  
  - Lists: indent via `ml-6`.  
  - Tables/Data: padding `p-2`.  
- **Lines and Rules:** Horizontal dividers can use `border-t-1 border-slate-300` (light border) or fancy SVG flourish. Thin decorative lines (`height:1px`) in decorative brown (#976D67).

### 8.3 Texture & Background  
Overlay subtle paper texture or noise to simulate real newsprint. As a hint from CSS solutions, one approach is to use an SVG filter or image. For example, an SVG `<feTurbulence>` filter (as in [15]) on a cream background creates a parchment effect. We will **not** use any bright color backgrounds. The main “paper” background should have faint watermarks or fibers. This can be a static background image or dynamically generated noise. If implemented in CSS:  
```css
background-color: #f0f4e3;
background-image: url('/textures/newsprint.png'); /* very light, low-contrast pattern */
```
Add an inset box-shadow on main frames to suggest burnt edges or aging, as Mugen’s CSS answer suggests. Example: `box-shadow: 0 0 10px #8a4d0f inset;`.

### 8.4 Typography System  
We combine historically-inspired typefaces with modern web-safe fonts:

- **Masthead (Logo):** **Blackletter/Fraktur** (e.g. *UnifrakturCook*, *Cloister Black*, or Google’s *Fraktur*). Used only once for the newspaper title at top. Avoid using too frequently.  
- **Section Headlines:** Display serif with high contrast. *Libre Bodoni* (Google Font) or *Libre Baskerville* for headlines (38-48px). These have elegant thicks/thins reminiscent of old print. [9] notes Victorian broadsheets historically used inline blackletter and later Bodoni-like headers.  
- **Subheadings (Decks):** A complementary serif, e.g. *Cormorant Garamond* or *Old Style* (28-32px, italic optional).  
- **Body Text:** A legible book-serif like *EB Garamond* (Google) or *Cormorant Garamond* at 16px with ~1.5 line-height. Classic Garamond proportions evoke 19th century text.  
- **Captions/Notes:** *Crimson Text* (Google) or *Spectral* at 12-14px, possibly italicized for image captions, datelines.  
- **Monospace (Typewriter sections):** *Special Elite* (Google) or *Courier Prime* for faux-typewritten text (case numbers, metadata, telegram form). Use sparingly.  

**Font Sizes:** (example defaults, can adjust)  
``` 
Masthead: 64px blackletter, line-height 1.
Main headline: 36-48px serif (bold).
Subhead: 24-30px serif.
Body: 16px serif (normal, line-height ~1.6).
Sidebar/small text: 14px.
Caption/label: 12px (italic where noted).
Monospace: 14px.
```
Use proper font stacks/fallbacks: e.g. `"Libre Bodoni", serif`, `"EB Garamond", serif`, `"Special Elite", monospace`. Ensure font files are licensed (Google Fonts). We could reference Google Fonts descriptions (e.g. Bodoni derived from 19th-century Morris Fuller Benton design), though citations aren’t needed here. The key is to evoke the period through typography hierarchy.

### 8.5 Imagery & Iconography  
- **Illustration Style:** All images (portraits, diagrams) must mimic 19th-century wood-engraving or etching style. That means **pure black-and-white line art with hatching** (no smooth gradients). Photographs (if any) should be processed through a halftone or scratchboard filter. The Victorian era used engraved boxwood woodcuts or steel engravings. We will favor vector-line engravings. For user photos (if needed), use an SVG filter or use a pre-made stock “engraved portrait” effect.  
  - *Citation:* “The hallmark of the style is pure black and white with shading done via lines that follow the 3D shape”.  
- **Icons & Dingbats:** Victorian newspapers often had small decorative ornaments (dingbats) from wood engravings. We will use simple ornaments or inline hand-drawn arrows/flowers. For icons (like envelope, gear), use engraved-style SVG or icon font that looks etched.  
- **Photos/Illustrations:** If using a modern illustration, convert to black & white with cross-hatching (tools or manual). Avoid realistic color images.  
- **Size & Alt:** Include sensible `alt` text for all images (e.g. `alt="Engraved portrait of the Programmer as Victorian gentleman"`). This is both for accessibility and SEO.  

### 8.6 Background Content Strategy  
- **Filler Text:** Avoid lorem ipsum. Write actual Victorian-flavored snippets (science news, adverts). Ensure any filler content loosely relates to technology or the developer’s interests (e.g. “New Calculating Machine Unveiled” might hint at computer science roots).  
- **Linked Easter Eggs:** Some filler text could be hidden clues. For instance, a crossword clue might reference a project name.  
- **Consistency:** Background text should use the same fonts and indentation as primary articles, just smaller or grayed out (#976D67). This “full” look is important – real newspapers print text everywhere with minimal whitespace.  

## 9. Motion & Audio

### 9.1 Animation Language  
All motion should feel physical (paper turning, ink stamping, typewriter). No abstract transitions or material design effects. Examples:  
- **Page Folds:** On scroll or on navigation, pages can visually fold up/out (like unfolding a broadsheet). Use Framer Motion to animate a `<div>` with CSS transform skew or scale.  
- **Ink Stamps:** When a user marks an article read or visits a page, show a red stamp (like “READ” or “✔️”) appearing with a bounce.  
- **Typewriter Text:** Some text (e.g. case metadata or newspaper teasers) can be revealed with a typewriter animation (letter by letter). Sound of typewriter keys optionally.  
- **Hover Effects:** Subtle only – e.g. a slight lift/outline when hovering a card, mimicking paper lift. Use CSS shadow or small 3D tilt.  
- **Reduced Motion:** Honor `prefers-reduced-motion`. If set, disable any non-essential animations (no fold flips, no blinking cursors). As MDN advises, use `@media (prefers-reduced-motion: reduce)` to skip these animations. This is critical for accessibility.  

### 9.2 Audio (Optional)  
- Sound cues should be user-initiated or very subtle: paper rustling on page load, typewriter clicks during letter animations, stamp “thud” on click. Provide a mute control (e.g. small speaker icon) that toggles all site audio.  
- No background music. An example sound effect source could be a coffee shop piano version of a waltz (for ambience), but only if optional and easily disabled.  

## 10. GitHub Integration Architecture  

- **API Data Flow:** Use the GitHub REST API (v3) or GraphQL to fetch repository information. For example, `GET /users/{username}/repos` for project list and `GET /repos/{owner}/{repo}` for details.  
- **Pinned Repos:** If specific repos are featured, either hard-code their names or use GitHub’s pinned projects (if available via API). Otherwise, filter by a naming convention or topic.  
- **Caching:** Implement caching (e.g. in Next.js `getStaticProps`, ISR, or a Node cache) to avoid frequent API hits. Revalidate cache hourly/daily. Store only public data (name, desc, URL, stars, last commit date).  
- **Data Mapping:** Map API data to archive entries:  
  - Repo name → Case Title  
  - Description → summary snippet  
  - `pushed_at` → last update  
  - Primary language → label “Language”.  
- **Security:** No sensitive info. Just public fields. Do not expose OAuth tokens on client (if used, store in environment variable on server side).  
- **README Rendering:** To display project details, either transform `README.md` (fetch via API, convert markdown) or create an MDX content file per project. Using MDX (with frontmatter caseNumber) allows hand-tuned narrative blending with markdown.  
- **Commits & History:** Optionally display a timeline of commit messages. Use `GET /repos/{owner}/{repo}/commits` and show the last few as “Expedition Logs”.

*(No external authentication needed for public repos. If rate limits are an issue, consider GitHub’s GraphQL with batching).*

## 11. Technical Architecture  

- **Framework:** Next.js (latest stable, e.g. v14) with the App Router. Official docs confirm Next.js as a React full-stack framework. We will use TypeScript everywhere.  
- **Styling:** Tailwind CSS with custom config (extended theme for our 4 colors, fonts). We can also use `@tailwindcss/typography` for prose styling in articles if needed.  
- **Animations:** Framer Motion React library for declarative animations (fold, typewriter, hover, scroll transitions).  
- **Content:** MDX (via `next-mdx-remote` or `@next/mdx`) for static content (About story, articles). This lets us write rich text with embedded React components.  
- **State/Logic:** Most pages are static/SSR. Minor interactivity for form (send to email via API route or mailto), toggles, etc. Use React hooks for state (e.g. form input, visited flags in `useState`).  
- **Build & Hosting:** Host on Vercel (Next.js optimized) or similar. CI pipeline runs `npm run build && npm run lint`.  
- **Folder Structure (example):**  
  ```
  /app
    layout.tsx         # Root layout with Navbar/Footer
    page.tsx           # Landing page
    investigations/    # other fold pages
    archives/
      page.tsx         # List of projects
      [case]/page.tsx  # Dynamic project page by case id
    contact/page.tsx   # Telegraph Office
    secret/page.tsx    # Confidential page (secured/unlinked)
  /components/         # All React components
  /styles/
    tailwind.config.js
    globals.css
  /public/textures/    # Paper and stamp images
  /data/               # MDX content (optional)
  ```
- **APIs:** A Next.js API route (`/api/contact`) to handle contact form submissions (e.g. email via SendGrid). Must comply with GDPR (spam check).  
- **Caching:** Use ISR (`revalidate` in `getStaticProps`) or SWR on client for dynamic data.  
- **Performance Budget:** Aim for LCP < 2.5s, FCP < 1s on 3G, TTI < 3s. Minimize JS (use next/image, optimize fonts). Lazy-load heavy animations after initial render.  

Architecture Diagram (mermaid):  

```mermaid
flowchart LR
  Browser[User Browser] --> NextJS[Next.js App (React)]
  NextJS --> TailwindCSS[Tailwind CSS Styling]
  NextJS --> FramerMotion[Framer Motion Animations]
  NextJS --> MDXContent[MDX Content Files]
  NextJS --> GitHubAPI[GitHub API]
  GitHubAPI --> Cache[Server-Side Cache]
  Cache --> Browser
```  

This shows the main tech stack. The Browser interacts with the Next.js app (React), which uses Tailwind classes and Framer Motion for UI, loads content from MDX files, and fetches live data from GitHub (cached).

## 12. Accessibility & SEO Requirements  

- **Accessibility (a11y):** Follow WCAG guidelines.  
  - **Text:** Use sufficient contrast (#11191B on #F0F4E3 yields ~21:1). Body text ≥16px. Line height ~1.5 for readability. Semantically mark headings (`<h1>`, `<h2>`), lists, etc. All interactive elements keyboard-focusable.  
  - **Forms:** Label each input (e.g. `<label for="name">Name:</label>`). Use `aria-label` if needed. The submit “Transmit” button should have `aria-pressed` state if it toggles.  
  - **Images:** Provide meaningful `alt` attributes. Decorative only images can be `aria-hidden`.  
  - **Reduced Motion:** Implement `@media (prefers-reduced-motion: reduce)` to disable animations for those who request it.  
  - **Responsive/Text Scaling:** Pages should not break when browser text is enlarged up to 200%. Ensure no horizontal scrolling at standard breakpoints.  
- **SEO:**  
  - Use semantic HTML (`<article>`, `<header>`, `<footer>`).  
  - Each page needs a unique `<title>` (e.g. “The Programmer’s Gazette – Homepage” or “Case File #118 – Ocean Intelligence”).  
  - Meta description reflecting the content in journalistic style.  
  - Use Open Graph tags: site name “The Programmer’s Gazette”, dynamic image (e.g. a stylized newspaper header screenshot).  
  - Clean URLs (e.g. `/archives`, `/case/118`, `/contact`).  
  - No-index the secret page if it’s purely for easter egg (or put robots meta “noindex”).  

## 13. Responsive Design & Breakpoints  

- **Mobile vs Desktop:** Though themed as a large broadsheet, must be legible on smaller screens. Use Tailwind breakpoints (default: `sm=640px, md=768px, lg=1024px, xl=1280px`).  
  - **Mobile (<768px):** Likely collapse to 1-2 columns. Masthead font-size scaled down. Hide some non-essential sidebars. Navigation turns into a hamburger menu labeled with icons (e.g. ☰ or 📜).  
  - **Tablet (768–1024px):** 2-3 columns. Possibly drop “Investigation” fold to separate page.  
  - **Desktop:** Full multi-column (4–6 columns depending on screen).  
- **Breakpoints Usage:** E.g. `md:grid-cols-3 lg:grid-cols-6`. Break out classes: 
  ```html
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4"> ... </div>
  ```
- **Element Behavior:** 
  - Images should be responsive (`max-w-full`, `height:auto`). 
  - Tables or code (if any) scroll horizontally on small screens. 
- **Checkpoints:** Ensure all text remains readable and the layout logically stacks. The masthead might shrink or only show first word on mobile (the rest on next line).

## 14. Testing & Acceptance Criteria  

- **Visual QA:** All pages should match the design mockups (to be provided). No overlapping text, no placeholder lorem left. Spelling/grammar in “news” voice.  
- **Functional Tests:**  
  - Navigation links work (Home, Archives, Contact, etc.).  
  - Contact form validation (email format) and successful email sending (or trigger mailto).  
  - GitHub API integration returns correct project list (test with known repos).  
  - Animations respect reduced-motion setting (test in browser with preference on/off).  
- **Performance:** Run Lighthouse; target 90+ scores in Performance, Accessibility, Best Practices, SEO.  
- **Accessibility Checks:** Use tools (axe, Lighthouse, WAVE) to ensure no ARIA or contrast issues. Ensure `prefers-reduced-motion` media query is effective (test by simulating).  
- **Browser Compatibility:** Must work in latest versions of Chrome, Firefox, Safari. Avoid CSS that breaks IE11 (though it’s borderline discontinued, focus on evergreen).  
- **GitHub Repo:** Code and assets should be in a well-organized repo. Writing clear README with “The Programmer’s Gazette” explanation (the meta story).

## 15. Development Roadmap & Milestones  

1. **Design Setup:** Finalize fonts (link from Google Fonts), create palette variables in Tailwind config, gather texture images (paper, stamps).  
2. **Base Layout:** Implement the main grid and `<Header>` component, with blank placeholders for masthead and headlines.  
3. **Typography & Theme:** Configure global CSS for fonts, build header styles (Algerian), and ensure body text uses Garamond.  
4. **Front Page Content:** Write initial About story content (as MDX or JSX) and place on front page. Style it in multi-column layout.  
5. **Sidebar Modules:** Create reusable `<Sidebar>` with weather and stats. Hardcode dummy data for now.  
6. **Archive Page:** Build `/archives` page; fetch and display list of projects via GitHub API (or stub data). Style like archive list.  
7. **Case File Template:** Create dynamic route for case files; style its layout. Populate from MDX files per project. Link from Archive.  
8. **Telegraph Office:** Develop contact page with form. Hook up form submission (can be mailto or simple log until email service is ready).  
9. **Animation:** Add Framer Motion for page transitions (fade or slide up like page turn). Apply stamp or hover effects. Ensure reduced-motion media query support.  
10. **Mystery Layer:** Implement any secret triggers (e.g. clicking a specific word opens `/secret`). Add Classifieds and Easter eggs text to filler.  
11. **Accessibility & SEO:** Audit a11y; refine text. Add meta tags and structured data (article schema).  
12. **Testing & Deployment:** Run through QA checklist, fix issues. Deploy to production (Vercel).  
13. **Iteration:** Based on feedback, adjust animation timing, copy writing, and performance optimizations.  

**Milestones:**  
- *Week 1:* Setup, front page, design system in place.  
- *Week 2:* Archives & projects pages.  
- *Week 3:* Contact page, animations, easter eggs.  
- *Week 4:* Polish, accessibility audit, final deploy.  

## 16. Codex Prompting Strategy  

To implement this iteratively with an AI coding agent, each prompt should be narrowly focused on one component or feature, referencing this TRD for context. Example prompt templates:  

- **Layout Component:** “Using Next.js (App Router) and Tailwind, create a `<Header>` component for *The Programmer’s Gazette* homepage. It should display a masthead “THE PROGRAMMER’S GAZETTE” in an Algerian-style font (blackletter) and below it the meta info (London Edition, date, etc.) in a Cormorant Garamond serif. Use the color #11191B for text and #A72A24 for emphasis. Respect responsive breakpoints (mobile: stack vertically). Do not add CSS outside Tailwind classes.”  

- **Article Component:** “Generate a React `<Article>` component that takes `title`, `subtitle`, and `content` props. It should render a headline in Libre Bodoni, a subhead in italic Cormorant, and the content in EB Garamond body text. Use Tailwind CSS to style it with 3-column layout on large screens and single column on small screens. Example content: `[some lorem in style]`. Ensure spacing and border bottom in #976D67 between sections.”  

- **Archive Fetching:** “Write a Next.js `getStaticProps` function for the `/archives` page that fetches the user’s GitHub repos via the GitHub REST API. Filter for the repos that correspond to projects (e.g. by topic “portfolio”). Return an array of `{ caseNumber, name, description, updated_at }`. Use `fetch` and handle errors. Include caching with revalidate every 3600 seconds.”  

- **Animation:** “Add Framer Motion animation to the `<Article>` component so that on initial render, the article content fades in and slides up. Also implement `@media (prefers-reduced-motion: reduce)` fallback that disables this animation.”  

Each prompt should reference the relevant section of this TRD to ensure consistency (e.g. “as per Design System, use color #A72A24 for headlines”).

## 17. Deliverables, File Formats, & Handoff Checklist  

- All source code in a Git repository (preferably on GitHub). The main branches: `main` (production), `develop`.  
- **Files:** 
  - Markdown (`README.md`, MDX content files), 
  - TypeScript/React components (`.tsx`), 
  - CSS/Tailwind config, 
  - Mermaid diagrams (embedded or separate `.mmd` if needed), 
  - Asset folder (textures, icons in SVG/PNG).  
- **Handoff:** Ensure `README.md` documents the setup (e.g. `npm install`, environment variables, how to run dev and build). Include a section mapping each “Case File #” to its project.  
- **Styling Assets:** Source of fonts (link licenses), any images used (with credit if required).  
- **Content:** Final content for filler (news blurbs, ads, etc.) in `.md` or code.  
- **Accessibility Report:** Include a brief a11y checklist or report.  
- **Checklist before release:** 
  - [ ] All links and forms functioning.  
  - [ ] No broken images or console errors.  
  - [ ] Performance (Lighthouse) thresholds met.  
  - [ ] Manual check of reduced-motion preference.  
  - [ ] SEO meta tags and robots file correct.  

## 18. Assumptions & Constraints  

- **Content Authority:** We assume the developer will provide final project details and personal info. The TRD dictates style, but actual writing may need fact-checking.  
- **Browser Support:** Modern evergreen browsers; no need for IE11 polyfills.  
- **Time & Scope:** The mystery elements should not become a full game (no backend puzzles). They are supplementary.  
- **Third-Party Licenses:** Fonts from Google Fonts (OFL licensed), Tailwind/Framer (MIT). All other libraries should have permissive licenses.  
- **Images/Assets:** Use royalty-free or self-created vintage illustrations. Avoid copyright issues.  
- **Technological Constraints:** GitHub API rate limits (60 unauthenticated req/hour) – hence caching or GitHub App token.  
- **Reduced Motion:** Must have preference respect (WCAG).  
- **File Size:** Keep pages under 1-2MB total (including images and scripts) for performance.  

## References  

- Historical and design inspirations for Victorian typography and newspapers.  
- CSS and web techniques for paper textures and animation.  
- UX guidelines on portfolio IA and accessibility.  
- Next.js official documentation (framework features).  
- Wikipedia on newspaper layout (column counts).  

_(Further references: Tailwind CSS docs, GitHub API reference, WCAG guidelines.)_