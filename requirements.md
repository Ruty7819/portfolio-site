# דרישות - אתר דף נחיתה אישי

## סקירה כללית

**סוג פרויקט:** אתר דף נחיתה / פורטפוליו אישי  
**קהל יעד:** מגייסים, לקוחות פוטנציאליים, קהילת הפיתוח  
**שפה:** עברית  
**מטרה:** להציג את הכישורים, הניסיון והפרויקטים של מפתחת Fullstack + AI/Automation

## תפיסת עיצוב (Design Direction)

### אסתטיקה
- **Modern Premium Experimental** - עיצוב עכשווי, פרימיום, עם אלמנטים ניסיוניים
- **High Visual Impact** - אתר שמרשים מיד, עם אנימציות ואינטראקטיביות
- **לא תבנית גנרית** - האתר צריך להרגיש ייחודי, לא כמו כל פורטפוליו אחר

### כיווני השראה
- Awwwards experimental
- Premium consumer brands
- Tech-forward portfolios
- Dark-mode aesthetics עם accent colors חזקים

### הגדרות Motion
- **DESIGN_VARIANCE:** 8-9 (אסימטרי, יצירתי)
- **MOTION_INTENSITY:** 7-8 (אנימציות חזקות, תגובתיות)
- **VISUAL_DENSITY:** 3-4 (אווירי, לא עמוס)

## סקציות נדרשות

### 1. Hero Section
- **כותרת ראשית:** משפט חזק שמציג את הערך המרכזי
- **כותרת משנה:** תיאור קצר (עד 20 מילים) - מי אני ומה אני עושה
- **CTA:** כפתור פעולה ראשי (למשל "צפי בפרויקטים" או "צור קשר")
- **אלמנט ויזואלי:** תמונה או אנימציה מרשימה ברקע
- ה-hero צריך להיכנס ל-viewport ללא צורך ב-scroll

### 2. אודות (About)
- **תיאור אישי:** סיפור קצר על המסע המקצועי
- **כישורים עיקריים:** Fullstack, AI, Automation
- **טכנולוגיות:** רשימה של הטכנולוגיות שאני עובדת איתן
- עיצוב יצירתי, לא רק רשימת טקסט

### 3. פרויקטים (Projects)
- **3-5 פרויקטים מדומים** - לא פרויקטים אמיתיים, אבל מציאותיים
- כל פרויקט כולל:
  - כותרת
  - תיאור קצר
  - טכנולוגיות ששימשו
  - תמונה/ויזואליזציה
  - קישור (דמה) לפרויקט
- הפרויקטים צריכים להיות רלוונטיים ל-Fullstack + AI/Automation
- עיצוב לא סטנדרטי - Bento grid, horizontal scroll, או משהו יצירתי

### 4. כישורים ויכולות (Skills)
- הצגה ויזואלית של הכישורים
- לא רק רשימה, אלא ייצוג גרפי/אינטראקטיבי
- חלוקה לקטגוריות: Frontend, Backend, AI/Automation, DevOps

### 5. Footer
- **קישורים חברתיים:** LinkedIn, GitHub, כל רשת רלוונטית
- **אימייל ליצירת קשר**
- **זכויות יוצרים** - שנה נוכחית
- עיצוב נקי, לא עמוס

## דרישות טכניות

### סטאק
- **Framework:** Next.js (עדיפות ל-App Router, Server Components)
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (motion/react)
- **Icons:** Phosphor Icons או HugeIcons
- **Typography:** Next/font (self-hosted)

### תמיכה ב-Dark Mode
- האתר צריך לתמוך ב-both light ו-dark modes
- רספקט ל-`prefers-color-scheme`
- אופציונלי: toggle למעבר ידני

### תמיכה ב-Reduced Motion
- כל האנימציות צריכות לכבד ב-`prefers-reduced-motion`
- גרסה סטטית/פשוטה יותר כאשר מופעל

### Accessibility
- WCAG AA compliance לפחות
- ניגודיות טובה בכל המצבים
- Keyboard navigation
- Screen reader friendly

### Performance
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- Optimized images (next/image)
- Lazy loading לתוכן מתחת ל-fold

### Responsive
- Mobile-first approach
- Breakpoints: sm (640), md (768), lg (1024), xl (1280), 2xl (1536)
- Layout יציב ב-mobile (לא קופץ)
- Navigation responsive

## דרישות תוכן

### טון וסגנון
- מקצועי אבל אישי
- לא משעמם/גנרי
- בעברית טבעית
- אין אמוג'יז (אלא אם כן מוגדר אחרת)

### הערות לתוכן
- התוכן צריך להיות realistic, לא "AI-speak"
- הימנע ממילים גנריות כמו "Revolutionize", "Seamless", "Elevate"
- שימוש בשמות פרויקטים מציאותיים, לא "Acme", "Nexus"

## דרישות ויזואליות ספציפיות

### צבעים
- **לא AI-purple גנרי** - בחר פלטה ייחודית
- אחד accent color לכל האתר (consistency)
- Palette יציב: או warm או cool, לא תערובת
- Contrast גבוה בכל המצבים

### טיפוגרפיה
- לא Inter כ-default (בחר פונט יותר מעניין)
- אופציות: Geist, Outfit, Cabinet Grotesk, Satoshi
- Serif רק אם יש צורך ממש (לא כ-default)
- Italic עם leading מספיק לגופיות עם descenders

### Layout
- לא centered hero גנרי (כאשר variance > 4)
- שימוש ב-Grid over Flex-math
- מגוון סקשנים (לא אותו layout חוזר)
- לא 3 equal feature cards בשורה

### אנימציות
- Entry animations על hero
- Scroll-reveal על סקשנים מפתח
- Hover physics על CTAs
- האנימציות צריכות להיות ממונעות (לא "סתם להראות")
- לא `window.addEventListener('scroll')` - שימוש ב-Motion/ScrollTrigger

## איסורים (Anti-Patterns)

### אין:
- Em-dashes (`—`) - לחלוטין
- AI-purple gradients גנריים
- Div-based fake screenshots
- Generic "Jane Doe" names
- Generic "Acme", "Nexus" brand names
- Three equal feature cards
- Centered hero (כאשר variance > 4)
- Version labels ב-hero (V0.6, BETA)
- Section numbering eyebrows (001, 002)
- "Quietly in use at" headers
- Version footers (v1.4.2)
- Decoration text strips (BRAND. MOTION. SPATIAL.)
- Scroll cues (Scroll, ↓ scroll)
- Hand-rolled SVG icons (שימוש ב-library)
- Inter כ-default font
- Glassmorphism על כל דבר
- Infinite loop micro-animations לכל דבר

## מה שצריך להיות

### חובה:
- תמונות אמיתיות או generated images
- Hero visual ממש (לא רק טקסט + gradient)
- Real SVG logos ל-social proof (אם יש)
- CTA buttons עם contrast טוב
- CTAs שלא wraps ב-desktop
- One CTA label per intent
- Bento grids עם rhythm ו-cell count מדויק
- Mobile collapse explicit לכל layout
- Viewport stability (`min-h-[100dvh]`)
- Reduced motion fallback
- Dark mode tokens

## מבנה הקבצים

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── components/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── projects.tsx
│       ├── skills.tsx
│       └── footer.tsx
├── public/
│   └── images/
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## השלבים הבאים

לאחר אישור הדרישות:
1. הקמת הפרויקט (Next.js + Tailwind v4 + Motion)
2. יצירת סקשנים בסיסיים
3. עיצוב ו-implementation לפי הדרישות
4. Testing ב-mobile ו-desktop
5. Performance audit
6. Accessibility audit
