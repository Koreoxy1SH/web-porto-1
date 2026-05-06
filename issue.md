# Project: Unique Minimalist Portfolio Website

## Objective
Build a unique, highly minimalist, and user-friendly portfolio website that stands out from typical personal websites. The focus should be on typography, negative space, smooth micro-interactions, and a non-standard layout (e.g., a fluid masonry grid, bento box, or a horizontal storytelling scroll) rather than a generic top-down landing page.

## Tech Stack
- **Frontend Framework**: React.js (Initialize with Vite for better performance and modern tooling)
- **Styling**: Tailwind CSS
- **Animation (Recommended)**: Framer Motion (Crucial for adding the "unique" premium feel via micro-interactions)
- **Icons**: Lucide React or Radix Icons (for sharp, minimal lines)

## High-Level Implementation Steps

### Phase 1: Project Initialization & Design System Setup
1. **Scaffold Project**: Initialize a new React project using Vite.
2. **Tailwind Setup**: Install and configure Tailwind CSS.
3. **Folder Structure**: Set up a clean architecture (`/src/components`, `/src/layouts`, `/src/assets`, `/src/data`).
4. **Design Tokens (`tailwind.config.js`)**: 
   - Define a strict, high-contrast minimalist color palette (e.g., deep charcoal `#111` background, off-white text `#f4f4f5`, and *exactly one* striking accent color).
   - Configure modern typography using a distinct font like 'Inter', 'Outfit', or 'Space Grotesk'.

### Phase 2: Core Architecture & Layout Concept
1. **Non-Standard Layout**: Implement a "Bento Box" grid layout or a single-screen "Interactive Canvas". Avoid the traditional "Hero -> About -> Projects -> Contact" vertical scroll. 
2. **Navigation**: Ditch the standard top navbar. Implement a floating action menu, a subtle bottom dock, or edge-aligned vertical navigation.
3. **Container**: Ensure the main layout handles spacing elegantly. Emphasize large paddings and margins to let elements "breathe".

### Phase 3: Component Development
1. **Hero Identity**: A bold, typographic-driven introduction. Use large font sizes with minimal copy. No generic "Hi, I'm a developer" text—make it punchy.
2. **Project Showcase**: Abstract project cards. Instead of heavy text descriptions, rely on hover interactions that reveal clean mockups, video snippets, or dynamic color changes.
3. **Skills/About Display**: Avoid boring bulleted lists. Present skills as an interactive cluster, a smooth marquee ticker, or typographic art.
4. **Minimal Contact**: A one-click "copy email to clipboard" interaction with a satisfying toast notification, rather than a bulky contact form.

### Phase 4: Interactivity & The "Unique" Polish
1. **Page Load**: Add staggered, smooth reveal animations for elements when the page first loads.
2. **Micro-interactions**: Implement magnetic hover effects on buttons/links and subtle scale effects on cards.
3. **Custom Cursor (Optional but recommended)**: A minimalist custom cursor (like a small inverted dot) that expands over clickable elements to enhance the premium feel.

### Phase 5: Optimization & Finalization
1. **Responsive Design**: Ensure the complex grid or layout stacks flawlessly on mobile devices without losing the minimalist aesthetic.
2. **Performance**: Optimize images and lazy-load components if necessary.
3. **SEO & Accessibility**: Add semantic HTML5 tags, proper ARIA labels (crucial for non-standard layouts), and meta tags.

## Developer Guidelines
- **Rule of Thumb**: "Less is more." If a visual element (border, background block, shadow) doesn't serve a distinct functional or aesthetic purpose, remove it. 
- **Separation**: Use whitespace to separate content instead of drawing literal lines or borders.
- **Independence**: All sections should be componentized to allow easy swapping or rearranging in the future.
