# רשימת משימות - אתר דף נחיתה אישי

## Phase 1: הקמה והגדרות בסיס

### 1.1 יצירת הפרויקט
- [x] יצירת תיקיית פרויקט חדשה בתיקיית העבודה
- [x] הרצת `npx create-next-app@latest portfolio-site` עם האפשרויות:
  - TypeScript: Yes
  - ESLint: Yes
  - Tailwind CSS: Yes (v3 לבינתיים, נשדרג ל-v4 אחר כך)
  - App Router: Yes
  - Src directory: No (פשוט יותר)
  - Import alias: @/* (default)
- [x] מעבר לתיקיית הפרויקט: `cd portfolio-site`
- [x] הרצת `npm run dev` לוודא שהכל עובד

### 1.2 התקנת Dependencies
- [x] התקנת Motion: `npm install motion`
- [x] התקנת Phosphor Icons: `npm install @phosphor-icons/react`
- [ ] (אופציונלי) התקנת Geist font או Outfit דרך next/font

### 1.3 הגדרת Tailwind v4
- [x] הסרת Tailwind v3 dependencies אם קיימים
- [x] התקנת Tailwind v4 Vite plugin: `npm install @tailwindcss/postcss`
- [x] עדכון `postcss.config.js` לשימוש ב-`@tailwindcss/postcss`
- [x] עדכון `tailwind.config.ts` ל-configuration של v4
- [x] עדכון `app/globals.css` ל-directives של v4
- [x] וודא שהכל עובד עם `npm run dev`

### 1.4 הגדרת Typography
- [x] בחירת font ראשי (Geist או Outfit)
- [x] הגדרת font ב-`app/layout.tsx` עם `next/font`
- [x] הגדרת font stack ל-body text
- [x] וודא שה-font נטען נכון (בדיקה ב-browser)

### 1.5 הגדרת Basic Layout
- [x] עדכון `app/layout.tsx` עם:
  - Font configuration
  - Root metadata (title, description)
  - Basic structure
- [x] עדכון `app/globals.css` עם:
  - Tailwind directives
  - Base styles
  - Custom CSS variables (אם צריך)
- [x] עדכון `app/page.tsx` להיות empty או placeholder

---

## Phase 2: תשתית וקומפוננטות בסיסיות

### 2.1 יצירת Structure של קבצים
- [x] יצירת תיקיית `components/`
- [x] יצירת תיקיות משנה:
  - `components/hero/`
  - `components/about/`
  - `components/projects/`
  - `components/skills/`
  - `components/footer/`
  - `components/ui/`
- [x] יצירת תיקיית `lib/`
- [x] יצירת תיקיית `public/images/`

### 2.2 יצירת Reusable UI Components
- [x] יצירת `components/ui/button.tsx`:
  - Variants: primary, secondary, ghost
  - Sizes: sm, md, lg
  - Hover/active states
  - Focus states (accessibility)
- [x] יצירת `components/ui/section-wrapper.tsx`:
  - Consistent padding
  - Max-width container
  - Responsive behavior

### 2.3 יצירת Static Data
- [x] יצירת `lib/data.ts`:
  - `projects` array עם 3-5 פרויקטים מדומים רלוונטיים
  - `skills` object עם 4 קטגוריות
  - `about` object עם תוכן אישי
  - `contact` object עם פרטי קשר
- [x] וודא שה-data מוגדר נכון עם TypeScript types

### 2.4 יצירת Page Structure
- [x] עדכון `app/page.tsx` לכלול:
  - Import של כל הסקשנים
  - Semantic HTML structure
  - Placeholder components

---

## Phase 3: בניית הסקשנים (גרסה בסיסית)

### 3.1 Hero Section (בסיסי)
- [x] יצירת `components/hero/hero.tsx`:
  - Client component עם `'use client'`
  - כותרת ראשית
  - כותרת משנה (עד 20 מילים)
  - CTA button
  - Placeholder ל-visual element
  - Entry animation placeholder
- [x] הוספת ל-`app/page.tsx`

### 3.2 About Section
- [x] יצירת `components/about/about.tsx`:
  - Server component
  - תיאור אישי
  - רשימת כישורים עיקריים
  - רשימת טכנולוגיות
- [x] הוספת ל-`app/page.tsx`

### 3.3 Projects Section
- [x] יצירת `components/projects/projects.tsx`:
  - Server component
  - Grid layout (לא 3 equal cards)
  - Import מ-`lib/data.ts`
- [x] יצירת `components/projects/project-card.tsx`:
  - Client component עם `'use client'`
  - Title, description, technologies
  - Image placeholder
  - Link לפרויקט
  - Hover effect placeholder
- [x] הוספת ל-`app/page.tsx`

### 3.4 Skills Section
- [x] יצירת `components/skills/skills.tsx`:
  - Client component עם `'use client'`
  - ייצוג ויזואלי/אינטראקטיבי
  - 4 קטגוריות
  - Import מ-`lib/data.ts`
- [x] הוספת ל-`app/page.tsx`

### 3.5 Footer
- [x] יצירת `components/footer/footer.tsx`:
  - Server component
  - קישורים חברתיים (LinkedIn, GitHub)
  - אימייל ליצירת קשר
  - זכויות יוצרים
- [x] הוספת ל-`app/page.tsx`

---

## Phase 4: עיצוב ו-Typography

### 4.1 בחירת Color Palette
- [x] בחירת accent color ייחודי (לא AI-purple)
- [x] הגדרת neutrals (zinc/slate/stone)
- [x] וודא שה-palette יציב (warm או cool, לא תערובת)
- [x] הגדרת colors ב-Tailwind config או CSS variables

### 4.2 יישום Typography
- [x] הגדרת font sizes עבור:
  - Display/headlines (text-4xl md:text-6xl)
  - Body (text-base)
  - Captions/labels
- [x] הגדרת line-heights
- [x] הגדרת letter-spacing עבור uppercase labels
- [x] וודא ש-italic עם descenders יש leading מספיק

### 4.3 עיצוב בסיסי לכל הסקשנים
- [x] עיצוב Hero:
  - Asymmetric layout (לא centered generic)
  - Proper spacing
  - Responsive behavior
- [x] עיצוב About:
  - Creative layout (לא רק רשימת טקסט)
  - Proper spacing
- [x] עיצוב Projects:
  - Bento grid או layout יצירתי
  - Rhythm ב-grid
  - Exact cell count (N items → N cells)
- [x] עיצוב Skills:
  - Visual representation
  - Interactive elements
- [x] עיצוב Footer:
  - Clean, not cluttered
  - Proper spacing

### 4.4 Responsive בסיסי
- [x] Hero mobile collapse (single column)
- [x] Projects mobile collapse (1 column)
- [x] Skills mobile collapse
- [x] Viewport stability: שימוש ב-`min-h-[100dvh]` במקום `h-screen`
- [x] Test ב-mobile breakpoint (sm, md)

---

## Phase 5: Animations ו-Motion

### 5.1 Hero Animations
- [x] הוספת entry animations עם Motion:
  - Headline fade-in + slide-up
  - Subtext staggered
  - CTA button reveal
- [x] Reduced motion fallback עם `useReducedMotion()`
- [x] וודא שהאנימציות ממונעות (hierarchy)

### 5.2 Scroll-Reveal Animations
- [x] הוספת scroll-reveal לכל הסקשנים:
  - About section
  - Projects section
  - Skills section
- [x] שימוש ב-`whileInView` של Motion
- [x] Reduced motion fallback
- [x] Staggered timing לפריטים בסקשנים

### 5.3 Hover Effects
- [ ] Hover physics על CTAs:
  - Scale down on active
  - Subtle lift on hover
- [ ] Hover effects על project cards:
  - Image zoom או border highlight
  - תגובתיות מהירה
- [ ] Reduced motion fallback (no hover effects)

### 5.4 Skills Interactive Elements
- [ ] הוספת interactive elements ל-skills:
  - Hover reveal
  - או simple animation
- [ ] Reduced motion fallback

### 5.5 Performance Check
- [ ] וודא שאנימציות רק על `transform` ו-`opacity`
- [ ] לא `window.addEventListener('scroll')`
- [ ] שימוש ב-`useMotionValue` עבור continuous values
- [ ] Cleanup functions ב-`useEffect`

---

## Phase 6: Dark Mode

### 6.1 הגדרת Dark Mode Tokens
- [x] הגדרת `dark:` variants ב-Tailwind
- [x] הגדרת colors עבור dark mode:
  - Background (off-black, לא pure #000)
  - Text (off-white)
  - Accent color (same as light)
- [x] וודא contrast טוב בשני המצבים

### 6.2 יישום Dark Mode בסקשנים
- [x] Hero dark mode
- [x] About dark mode
- [x] Projects dark mode
- [x] Skills dark mode
- [x] Footer dark mode

### 6.3 System Preference Support
- [x] רספקט ל-`prefers-color-scheme`
- [x] Auto mode כ-default
- [x] Test בשני המצבים

### 6.4 (Optional) Manual Toggle
- [ ] Theme provider component
- [ ] Toggle button ב-nav או footer
- [ ] LocalStorage ל-save preference
- [ ] Smooth transition בין modes

---

## Phase 7: Images ו-Visuals

### 7.1 הוספת Placeholder Images
- [ ] יצירת או הורדת placeholder images:
  - Hero image (1600x1200 או aspect ratio מתאים)
  - Project images (לכל פרויקט)
  - (אופציונלי) About image
- [ ] שמירה ב-`public/images/`

### 7.2 Image Optimization
- [ ] שימוש ב-`next/image` לכל התמונות
- [ ] Priority ל-hero image
- [ ] Lazy loading לתמונות מתחת ל-fold
- [ ] וודא WebP format אוטומטי

### 7.3 Hero Visual
- [ ] הוספת hero visual (תמונה או אנימציה)
- [ ] Responsive sizing
- [ ] Mobile adaptation
- [ ] וודא שה-visual לא גונב את ה-focus מהטקסט

### 7.4 Project Images
- [ ] הוספת images לכל project card
- [ ] Responsive sizing
- [ ] Hover effects (אם רלוונטי)
- [ ] Fallback alt text

---

## Phase 8: Accessibility

### 8.1 Semantic HTML Audit
- [ ] וודא שימוש ב-`<main>`, `<section>`, `<nav>`, `<footer>`
- [ ] היררכיית כותרות נכונה (h1 → h2 → h3)
- [ ] ARIA labels רק כשצריך
- [ ] Landmark roles היכן שצריך

### 8.2 Keyboard Navigation
- [ ] Focus states visible על כל ה-interactive elements
- [ ] Tab order logical
- [ ] לא focus traps ללא צורך
- [ ] Test עם keyboard בלבד

### 8.3 Color Contrast Check
- [ ] WCAG AA minimum על כל ה-text
- [ ] Checked ב-light mode
- [ ] Checked ב-dark mode
- [ ] לא white-on-white או black-on-black
- [ ] Button contrast check

### 8.4 Screen Reader Friendly
- [ ] Alt text על כל התמונות
- [ ] Alt text משמעותי, לא "image"
- [ ] Labels על כל ה-buttons
- [ ] Test עם screen reader (אם אפשר)

### 8.5 Reduced Motion Verification
- [ ] Test עם `prefers-reduced-motion: reduce`
- [ ] וודא שכל האנימציות כבויות
- [ ] גרסה סטטית עובדת

---

## Phase 9: Performance

### 9.1 Lighthouse Audit
- [ ] Run Lighthouse audit
- [ ] Target: 90+ Performance
- [ ] Target: 100 Accessibility
- [ ] Target: 100 Best Practices
- [ ] Target: 100 SEO

### 9.2 Bundle Size Check
- [ ] Check bundle size ב-build
- [ ] וודא ש-Motion לא עמוס מדי
- [ ] Code splitting עובד
- [ ] לא unused imports

### 9.3 Image Optimization Verification
- [ ] וודא שכל התמונות optimized
- [ ] Check LCP (should be < 2.5s)
- [ ] Hero image loaded fast
- [ ] Lazy loading עובד

### 9.4 Core Web Vitals Check
- [ ] LCP < 2.5s
- [ ] INP < 200ms
- [ ] CLS < 0.1
- [ ] Fix אם יש בעיות

---

## Phase 10: Testing

### 10.1 Responsive Testing
- [ ] Test ב-mobile (sm, md breakpoints)
- [ ] Test ב-tablet (lg breakpoint)
- [ ] Test ב-desktop (xl, 2xl breakpoints)
- [ ] DevTools device toolbar
- [ ] Real devices אם אפשר

### 10.2 Cross-Browser Testing
- [ ] Test ב-Chrome
- [ ] Test ב-Firefox
- [ ] Test ב-Safari (אם אפשר)
- [ ] Test ב-Edge
- [ ] Fix אם יש browser-specific issues

### 10.3 Dark Mode Testing
- [ ] Test ב-light mode
- [ ] Test ב-dark mode
- [ ] Test עם system preference
- [ ] Test עם manual toggle (אם קיים)

### 10.4 Reduced Motion Testing
- [ ] Test עם `prefers-reduced-motion: reduce`
- [ ] וודא שכל האנימציות כבויות
- [ ] וודא שה-layout עדיין עובד

---

## Phase 11: Content Polish

### 11.1 כתיבת Copy סופי
- [ ] כתיבת hero headline
- [ ] כתיבת hero subtext (עד 20 מילים)
- [ ] כתיבת about text
- [ ] כתיבת project descriptions
- [ ] כתיבת CTA labels

### 11.2 עדכון Project Data
- [ ] עדכון `lib/data.ts` עם תוכן סופי
- [ ] וודא שהפרויקטים realistic
- [ ] שמות פרויקטים מציאותיים (לא "Acme", "Nexus")
- [ ] טכנולוגיות רלוונטיות

### 11.3 הסרת Placeholder Text
- [ ] הסרת כל ה-placeholder text
- [ ] וודא שאין "Lorem ipsum"
- [ ] וודא שאין generic copy

### 11.4 Copy Audit
- [ ] Audit ל-AI-speak:
  - לא "Revolutionize", "Seamless", "Elevate"
  - לא "free on its past" type phrases
  - לא generic filler
- [ ] Audit ל-em-dashes (אסור לחלוטין)
- [ ] Audit ל-grammar
- [ ] Audit ל-clarity

---

## Phase 12: Pre-flight Check

### 12.1 Anti-Patterns Audit
- [ ] אין em-dashes (`—`) בשום מקום
- [ ] אין AI-purple gradients גנריים
- [ ] אין div-based fake screenshots
- [ ] אין generic "Jane Doe" names
- [ ] אין generic "Acme", "Nexus" brand names
- [ ] אין 3 equal feature cards
- [ ] אין centered hero (כאשר variance > 4)
- [ ] אין version labels ב-hero (V0.6, BETA)
- [ ] אין section numbering eyebrows (001, 002)
- [ ] אין "Quietly in use at" headers
- [ ] אין version footers (v1.4.2)
- [ ] אין decoration text strips (BRAND. MOTION. SPATIAL.)
- [ ] אין scroll cues (Scroll, ↓ scroll)
- [ ] אין hand-rolled SVG icons
- [ ] אין Inter כ-default font
- [ ] אין glassmorphism על כל דבר
- [ ] אין infinite loop micro-animations לכל דבר

### 12.2 Design Consistency Check
- [ ] Color consistency: אחד accent color לכל האתר
- [ ] Shape consistency: אחד corner-radius system
- [ ] Typography consistency: אחד font family
- [ ] Spacing consistency: consistent padding/margins
- [ ] Dark mode consistency: אין section flips

### 12.3 Layout Discipline Check
- [ ] Hero fits viewport (headline ≤ 2 lines, subtext ≤ 20 words)
- [ ] Hero top padding ≤ pt-24
- [ ] Hero stack discipline (max 4 text elements)
- [ ] Eyebrow count ≤ ceil(sectionCount / 3)
- [ ] לא split-header pattern
- [ ] לא 3+ consecutive zigzag sections
- [ ] לא duplicate CTA intent
- [ ] Bento cell count = content count
- [ ] Mobile collapse explicit

### 12.4 Content Check
- [ ] CTA button contrast (WCAG AA)
- [ ] CTA button no wrap ב-desktop
- [ ] Form contrast (אם יש forms)
- [ ] Real images או generated images
- [ ] Hero visual ממש
- [ ] Real SVG logos ל-social proof
- [ ] Viewport stability (`min-h-[100dvh]`)

### 12.5 Final Review
- [ ] Review מול requirements.md
- [ ] Review מול architecture.md
- [ ] Visual review ב-browser
- [ ] Test ב-mobile
- [ ] Test ב-dark mode
- [ ] Test עם reduced motion

---

## Phase 13: Deployment

### 13.1 Build Verification
- [ ] הרצת `npm run build`
- [ ] וודא ש-build מצליח
- [ ] Check ל-warnings
- [ ] Check ל-errors

### 13.2 Type Check
- [ ] הרצת `npx tsc --noEmit`
- [ ] Fix type errors אם יש

### 13.3 Lint
- [ ] הרצת `npm run lint`
- [ ] Fix lint errors אם יש

### 13.4 Deploy to Vercel
- [ ] יצירת Vercel account (אם אין)
- [ ] Connect GitHub repo
- [ ] Deploy project
- [ ] Configure custom domain (אם צריך)

### 13.5 Production Testing
- [ ] Test ב-production URL
- [ ] Test ב-mobile
- [ ] Test ב-dark mode
- [ ] Test Lighthouse ב-production
- [ ] Test performance ב-production

### 13.6 DNS Configuration (Optional)
- [ ] Configure custom domain
- [ ] Configure SSL (אוטומטי ב-Vercel)
- [ ] Test domain propagation

---

## Notes

### Dependencies
- Phase 1 חייב להסתיים לפני Phase 2
- Phase 2 חייב להסתיים לפני Phase 3
- Phase 3 חייב להסתיים לפני Phase 4
- Phase 4-13 יכולים להתבצע במקביל חלקית

### Estimated Time
- Phase 1: 30-45 דקות
- Phase 2: 30-45 דקות
- Phase 3: 2-3 שעות
- Phase 4: 2-3 שעות
- Phase 5: 1-2 שעות
- Phase 6: 1-2 שעות
- Phase 7: 1-2 שעות
- Phase 8: 1-2 שעות
- Phase 9: 30-45 דקות
- Phase 10: 1 שעה
- Phase 11: 1-2 שעות
- Phase 12: 1-2 שעות
- Phase 13: 30-45 דקות

**Total Estimated: 12-18 שעות**

### Priorities
- **Critical:** Phase 1-3 (Foundation + Core Sections)
- **High:** Phase 4-6 (Design + Motion + Dark Mode)
- **Medium:** Phase 7-9 (Images + Accessibility + Performance)
- **Low:** Phase 10-13 (Testing + Polish + Deployment)

### Iteration
- אפשר להתחיל עם Phase 1-3 ולקבל אתר פונקציונלי
- אז להוסיף Phase 4-6 לעיצוב מתקדם
- ואז Phase 7-13 ל-polish ו-deployment
