# ארכיטקטורה - אתר דף נחיתה אישי

## בחירת טכנולוגיה

### Framework & Build Tool
- **Next.js 15+** עם App Router
  - Server Components כ-default
  - מובנית optimization לתמונות
  - Routing פשוט
  - SEO friendly
  - הקמה מהירה עם `npx create-next-app@latest`

### Styling
- **Tailwind CSS v4**
  - Utility-first
  - Dark mode מובנה
  - Responsive breakpoints מובנים
  - הקמה מהירה עם ה-Vite plugin של Tailwind v4

### Animation
- **Motion (motion/react)**
  - הגרסה החדשה והמומלצת של Framer Motion
  - API נקי ומודרני
  - Reduced motion support מובנה
  - Scroll-triggered animations

### Icons
- **Phosphor Icons**
  - ספריית אייקונים עשירה ועקבית
  - React components מובנים
  - שונה מ-Lucide (שנמצא בשימוש רב, יותר ייחודי)

### Typography
- **Next/font**
  - Self-hosted fonts
  - Automatic optimization
  - No external font requests
  - בחירה: Geist או Outfit (לא Inter כ-default)

## מבנה הפרויקט

```
portfolio-site/
├── app/
│   ├── layout.tsx              # Root layout + theme provider
│   ├── page.tsx                # Landing page (composed of sections)
│   └── globals.css             # Global styles + Tailwind directives
├── components/
│   ├── hero/
│   │   └── hero.tsx            # Hero section (client component for motion)
│   ├── about/
│   │   └── about.tsx           # About section
│   ├── projects/
│   │   ├── projects.tsx        # Projects section container
│   │   └── project-card.tsx    # Individual project card
│   ├── skills/
│   │   └── skills.tsx          # Skills visualization
│   ├── footer/
│   │   └── footer.tsx          # Footer
│   └── ui/
│       ├── button.tsx          # Reusable button component
│       └── section-wrapper.tsx # Consistent section spacing
├── lib/
│   └── data.ts                 # Static data (projects, skills, etc.)
├── public/
│   └── images/                 # Optimized images
├── tailwind.config.ts         # Tailwind v4 config
├── next.config.js              # Next.js config
└── package.json
```

## עקרונות ארכיטקטוניים

### 1. Server Components כ-default
- רוב הקומפוננטות יהיו Server Components
- Client Components רק כאשר צריך:
  - Motion/animation
  - Interactive state
  - Scroll listeners
  - Theme toggle

### 2. Client Components מבודדים
- Motion components יהיו leaf components עם `'use client'`
- State management מקומי בלבד (useState/useReducer)
- לא global state - האתר פשוט מכדי להצדיק

### 3. Static Data בקובץ נפרד
- כל התוכן הסטטי (פרויקטים, כישורים) ב-`lib/data.ts`
- קל לעדכן בלי לגעת בקומפוננטות
- מקל על mock data

### 4. Reusable UI Components
- Button component עם variants
- Section wrapper ל-spacing עקבי
- אין over-engineering - רק מה שצריך

### 5. Component Hierarchy
```
page.tsx (Server Component)
├── hero.tsx (Client Component - motion)
├── about.tsx (Server Component)
├── projects.tsx (Server Component)
│   └── project-card.tsx (Client Component - hover effects)
├── skills.tsx (Client Component - interactive)
└── footer.tsx (Server Component)
```

## Data Flow

### Static Data
```typescript
// lib/data.ts
export const projects = [
  {
    id: 1,
    title: "AI-Powered Workflow Automation",
    description: "...",
    technologies: ["Next.js", "OpenAI", "n8n"],
    image: "/images/project-1.jpg",
    link: "#"
  },
  // ...
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  backend: ["Node.js", "Python", "PostgreSQL"],
  ai: ["OpenAI", "LangChain", "n8n"],
  devops: ["Docker", "Git", "CI/CD"]
};
```

### No External API
- כל התוכן static
- לא צריך database
- לא צריך API routes
- הכל נבנה ב-build time

## Performance Strategy

### 1. Image Optimization
- שימוש ב-`next/image` לכל התמונות
- Priority ל-hero image
- Lazy loading לתמונות מתחת ל-fold
- WebP format אוטומטי

### 2. Code Splitting
- Automatic עם Next.js
- Client components נטענים רק כשצריך
- לא עומס יתר ב-bundle

### 3. CSS
- Tailwind purges unused styles
- CSS-in-JS לא צריך
- Minimal bundle size

### 4. Animation Performance
- אנימציות רק על `transform` ו-`opacity`
- Reduced motion fallback
- לא `window.addEventListener('scroll')`

## Accessibility Strategy

### 1. Semantic HTML
- `<main>`, `<section>`, `<nav>`, `<footer>`
- היררכיית כותרות נכונה
- ARIA labels רק כשצריך

### 2. Keyboard Navigation
- Focus states visible
- Tab order logical
- לא focus traps ללא צורך

### 3. Color Contrast
- WCAG AA minimum
- Checked בכל ה-modes
- לא white-on-white או black-on-black

### 4. Reduced Motion
- `useReducedMotion()` hook
- Fallback ל-static
- כבוד ל-`prefers-reduced-motion`

## Dark Mode Strategy

### 1. System Preference Default
- רספקט ל-`prefers-color-scheme`
- Auto mode כ-default

### 2. Manual Toggle (Optional)
- Theme provider ב-layout
- LocalStorage ל-save preference
- Smooth transition

### 3. Token Strategy
- Tailwind `dark:` variant
- Consistent palette
- לא color inversion פתאומי

## Deployment Options

### 1. Vercel (Recommended)
- Zero-config deployment
- Automatic HTTPS
- Edge network
- Preview deployments
- חינם לפרויקטים אישיים

### 2. Netlify
- Alternative option
- גם חינם לפרויקטים אישיים
- Good CI/CD

### 3. GitHub Pages
- חינם לחלוטין
- Static export פשוט
- Limitations (no server-side features - לא רלוונטי כאן)

## Development Workflow

### 1. Setup
```bash
npx create-next-app@latest portfolio-site
cd portfolio-site
npm install motion @phosphor-icons/react
```

### 2. Development
```bash
npm run dev
```

### 3. Build
```bash
npm run build
```

### 4. Lint
```bash
npm run lint
```

### 5. Type Check
```bash
npx tsc --noEmit
```

## Testing Strategy

### 1. Manual Testing
- Test ב-mobile ו-desktop
- Test ב-light ו-dark modes
- Test עם reduced motion
- Test keyboard navigation

### 2. Lighthouse
- Run Lighthouse audit
- Target: 90+ Performance
- Target: 100 Accessibility
- Target: 100 Best Practices

### 3. Responsive Testing
- DevTools device toolbar
- Real devices אם אפשר
- Breakpoints: sm, md, lg, xl, 2xl

## Phase 1: Foundation
1. הקמת Next.js project
2. התקנת dependencies
3. הגדרת Tailwind v4
4. הגדרת basic layout
5. הגדרת typography

## Phase 2: Core Components
1. Hero section
2. About section
3. Projects section
4. Skills section
5. Footer

## Phase 3: Polish
1. Animations (Motion)
2. Dark mode
3. Reduced motion
4. Responsive fixes
5. Performance optimization

## Phase 4: Content
1. Add real content
2. Add placeholder images
3. Review copy
4. Accessibility audit

## Phase 5: Deployment
1. Build verification
2. Lighthouse audit
3. Deploy to Vercel
4. Final testing in production

## סיכום

הארכיטקטורה הזו היא:
- **פשוטה** - לא over-engineering
- **מודרנית** - שימוש בטכנולוגיות עדכניות
- **performant** - Server components, image optimization
- **accessible** - Built-in a11y considerations
- **scalable** - קל להוסיף דברים בעתיד אם צריך

מתאים בדיוק לאתר דף נחיתה אישי פשוט אבל מרשים.
