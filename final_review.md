# CMPSC 302: HTML/CSS Code Review

## HTML/CSS Code Review
Respond to the following areas of concerns for a basic HTML/CSS code review.

### Design standards

**Which design principles does the reviewee's site implement effectively?**
- [x] Alignment
- [x] Balance
- [ ] Symmetry
- [x] Visual Hierarchy
- [ ] Negative Space
- [x] Color
- [x] Type

**Examples of areas where the site designer uses design principles.**
#### Design Principles

##### Alignment
The designer aligns the central content cleanly by using a consistent `max-width: 1200px` and `margin: 0 auto` on the `<main>` element. Inside the grid components, textual elements strictly adhere to a left-alignment, which follows natural reading patterns for English. 

##### Balance
The design uses asymmetrical balance very effectively. By using `grid-template-columns: 1.2fr 1fr` (such as in `.section-grid`), the slightly wider text areas balance out the heavier visual weight of the solid images on the opposite side.

##### Visual Hierarchy
The hierarchy is clearly established using size, weight, and color. The `<h1>` tag sits prominently with a clamped font size (`clamp(3rem, 8vw, 5.5rem)`) and a text gradient, instantly making it the focal point. Secondary elements like `<p>` tags correctly step down in both size (`1.125rem`) and contrast (`--text-secondary`).

##### Color
The site implements a robust CSS variable system (`:root` and `:root.light`) to manage colors. The dark theme (`#0a0a0a` background) paired with gold accents (`#e5a970`) creates a distinct mood without overwhelming the user, maintaining a professional portfolio aesthetic.

##### Type
Typeface choices are thoughtful and complementary. A serif font (`Lora` or fallbacks) is strictly utilized for headings (`h1`-`h3`) which adds elegance, while a highly readable sans-serif (`Inter`) is correctly applied to body text for legibility. 

**Which design principles should the designer revisit?**
- [ ] Alignment
- [ ] Balance
- [x] Symmetry
- [ ] Visual Hierarchy
- [x] Negative Space
- [ ] Color
- [ ] Type

**Examples of areas where the site designer should revise their use of a principle**
#### Design Principles

##### Symmetry
The site relies heavily on asymmetrical layouts (the 1.2fr vs 1fr split grids). While this creates balance, true symmetry is almost entirely absent outside of the footer and the navigation pill.

##### Negative Space
While negative space is used, the implementation of `gap: 6rem;` on the `<main>` may be considered large by some. This amount of vertical negative space can cause sections to feel disconnected from one another rather than flowing cohesively. The designer should consider tightening these vertical rhythms.

### Assignment standards
- **This site has at least one page which is reviewable and publically availble at the reviewee's \*.github.io URL.** Yes
- **Reviewee's site implements at least 3 Astro components.** Yes
- **Reviewee's site effectively implements a BaseLayout (or other similar construct) for controlling site-wide layout.** Yes
- **Site being reviewed implements styles in the public/style/style.css file.** Yes

### HTML Standards
- **The sites's BaseLayout contains a `<!DOCTYPE>` tag** Yes
- **The site's BaseLayout uses the `<html>` root element tag and specifies `en` as the page's language.** Yes
- **Throughout all files, the site uses semantic elements where appropriate, only using `div` elements where semantic elements don't exist.** No

**Examples of improper use of non-semantic elements.**
```HTML
<!-- Inside index.astro, `<div class="hero-copy">` is used to wrap the introductory content. -->
<!-- This should ideally be a `<header>` for the hero `<section>`, or an `<article>` block, rather than a non-semantic div. -->
<div class="hero-copy">
    <span class="hero-subtitle">Software Engineering Student</span>
    ...
</div>
```

- **Does the markup of the site use any single ID more than once?** No
- **Which IDs are used more than once?** N/A
- **Does the markup contain superfluous, un-necessary `<div>` elements?** Yes

**Examples of superfluous `<div>` tags.**
```HTML
<!-- In index.astro, there is an unnecessary div used purely to apply an inline margin style: -->
<div style="margin-bottom: 3rem;">
    <h2>Selected Works</h2>
    <p>A curated collection of my recent engineering and design projects.</p>
</div>
<!-- This div is superfluous. The margin could simply be applied to the `<h2>` and `<p>` via CSS, or placed on a semantic `<header>` element. Furthermore, inline styling violates separation of concerns. -->
```

- **If needing ARIA attributes, does the site use them in the correct places?** Yes

**Examples of elements requiring ARIA attributes.**
```HTML
<div class="hero-image" aria-label="Hero abstract image">
```

### CSS Standards
- **The names of the various CSS rules implemented make sense in the context of their use.** Yes
- **Which rules use confusing, non-descriptive, or ambiguous names?** N/A
- **Where possible, the designer uses CSS variables to unify colors, types, or other CSS properties.** Yes
- **Are padding, margin, and border used correctly?** No

**Examples of elements misusing the above properties.**
```CSS
No misuse found. Properties like `border-radius: var(--radius-md)` and `padding: 2.5rem` are managed cleanly using custom variables and appropriate units. 
/* However, as noted above, inline margins were used in index.astro instead of handling margins cleanly in CSS. */
```

- **Does the designer use absolute units (i.e., pixels) instead of relative units?** Yes
- **Do any CSS rules appear repetitive or redundant? Could some be conslidated into one rule with mulitple uses?** Yes

**Examples of repetitive or redundant rules.**
```CSS
/* In main.css, grid layouts are repeated with minor variations instead of composing utilities. */
.projects-section { display: grid; gap: 2rem; }
.about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem; }
.skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.section-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; }
/* The designer could consolidate these by creating a base `.grid` class and modifier classes for columns/gaps. */
```

### General commentary
**Provide areas where the designer's work demonstrates a grasp of course principles.**
1. The use of `:root` variables to establish a complete design system (colors, typography, spacing) is highly effective and shows a strong understanding of CSS scaleability.
2. Fluid typography (`clamp`) and media queries are correctly utilized to handle responsiveness down to mobile viewports.
3. The component-based architecture using Astro is well-executed, separating layout (`BaseLayout`) from content chunks.

**Provide areas where the designer's work could use revision.**
1. Avoid inline CSS entirely (e.g., `<div style="margin-bottom: 3rem;">`). Move all layout spacing to `main.css`.
2. Consolidate redundant CSS. There are multiple grid declarations that could be streamlined into reusable utility classes.
3. Replace superfluous wrapper `<div>` tags with semantic HTML5 elements like `<header>` or `<article>` where appropriate to increase document outline clarity.

## React/Javascript code review
- **Components are small and are focused on singular functionality.** Yes
- **Components only use `useEffect` when absolutely necessary.** Yes

**Provide examples of improper `useEffect`, if any**
```js
// The site uses Astro and standard JS without React hooks, entirely bypassing `useEffect` issues by relying on static generation.
```

- **Comments are used appropriately in React components.** Yes
- **Components use `useState` effectively to control React variable values and states.** Yes
- **Markup included in `JSX` is compact and focused solely on the control created.** Yes

**Provide examples of excessive `JSX`**
```jsx
// Not applicable.
```

**No functions contain unused variables.**
```js
// The inline script for theme toggling in BaseLayout is concise and does not declare any unused variables.
```

## Personal summary and reflection
*(Site owners only)*

**Overall Impressions**
The site is intended to be a sleek, modern portfolio capturing the aesthetic of a professional software engineer, conveying high-performance design through a dark color scheme and sharp typography.

**Methods**
I achieved this by utilizing Astro for a component-driven architecture without the bloat of a heavy framework like React. I heavily utilized CSS grid for structural alignments and native CSS custom properties for a scalable dark/light mode toggle.

**Quality Rating**
Achieved partially

**Reasoning for Quality Rating**
While I believe the visual execution and performance are excellent, completing this review made me realize I took a few shortcuts regarding semantic tags (using `<div class="hero-copy">` instead of a `<header>`) and separation of concerns (using inline styles for margins). 

## Learning Objectives

1. **Apply HTML, CSS, Markdown, and basic Javascript to develop well-structured, responsive World Wide Web Consortium (W3C) standards-compliant web sites.**
   - **Ranking:** Achieved partially
   - **Summary:** The project meets responsive goals effectively using fluid typography (`clamp`) and media queries. However, the reliance on some inline styles and non-semantic wrapper divs means the document outline isn't perfectly W3C-structured.

2. **Evaluate and implement web accessibility measures consistent with the Web Content Accessibility Guidelines (WCAG) version 2 specification.**
   - **Ranking:** Achieved completely
   - **Summary:** Contrast ratios in dark mode, the usage of `aria-label` on non-text elements (like the hero image), and standard alt tags demonstrate strong accessibility awareness.

3. **Design front-end user experiences using accepted web design patterns, methods, and information structures.**
   - **Ranking:** Achieved completely
   - **Summary:** The user experience is standard and highly intuitive, utilizing a sticky header navigation and familiar grid-based layouts to navigate the portfolio items cleanly.

4. **Identify and use strategies of successful visual rhetoric for the web.**
   - **Ranking:** Achieved completely
   - **Summary:** I successfully used visual hierarchy (bold gradient typography vs muted secondary text) and color theory (dark backgrounds with subtle gold accents) to draw attention to call-to-action buttons and section headings.

5. **Compare and select web technologies such as static site generators or frameworks as appropriate candidates for building web sites.**
   - **Ranking:** Achieved completely
   - **Summary:** Astro was an excellent choice for this project, as it correctly handles the static nature of a portfolio, allowing component re-use without shipping unnecessary Javascript to the browser.