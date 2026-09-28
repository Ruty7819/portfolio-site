export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "מערכת ניהול תקציבים ותהליכי עבודה - משרד החינוך",
    description: "ארכיטקטורה ותחזוקה של מערכות ארגוניות מרכזיות המטפלות בניהול תקציבים ותהליכי עבודה של תוכניות עבודה עבור מוסדות חינוך",
    technologies: ["Angular 16+", "PrimeNG", ".NET Core", "SQL Server", "AI Agents"],
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Multi-Agent RAG System",
    description: "מערכת סוכנים אוטונומיים עם CrewAI ו-LangChain לחיפוש וקטורי מתקדם עם דירוג מחדש והנדסת הנחיות",
    technologies: ["CrewAI", "LangChain", "Pinecone", "OpenAI", "Python"],
    image: "/images/project-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "AI-Enhanced Web Scraping Platform",
    description: "פלטפורמה לגירוד אתרים מתקדמת עם Playwright, עיבוד OCR, וזיכרון שיחה לטווח ארוך לסוכני AI",
    technologies: ["Playwright", "OCR", "OpenAI Assistants API", "Node.js", "TypeScript"],
    image: "/images/project-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "LLMOps Monitoring Dashboard",
    description: "Dashboard לניטור ואופטימיזציית עלויות API של LLMs עם אסטרטגיות אחסון במטמון והגבלת קצב",
    technologies: ["React", "TypeScript", "AWS Lambda", "Docker", "PostgreSQL"],
    image: "/images/project-4.jpg",
    link: "#",
  },
];

export const skills = {
  "בינה מלאכותית ולמידת מכונה": [
    "AI Agents",
    "Multi-Agent Systems",
    "RAG",
    "Vector Databases",
    "Prompt Engineering",
    "LLMOps",
    "LangChain",
    "CrewAI",
    "OpenAI Assistants API",
  ],
  "פיתוח תוכנה": [
    "Full-Stack Development",
    ".NET Core",
    "C#",
    "TypeScript",
    "Angular",
    "React",
    "Node.js",
    "REST APIs",
  ],
  "ענן ותשתיות": [
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "SQL Server",
    "Git",
    "CI/CD",
  ],
  "אוטומציה ואינטרנט": [
    "Playwright",
    "n8n",
    "Make.com",
    "Webhooks",
    "JSON Parsing",
    "Web Scraping",
  ],
};

export const about = {
  name: "מהנדסת Full-Stack ואדריכל פתרונות AI",
  description: "מהנדסת Full-Stack ואדריכל פתרונות AI המתמחה בבניית גשרים בין מערכות Backend ארגוניות מורכבות לבין יישומי בינה מלאכותית מתקדמים. עם בסיס חזק במערכות תפוקה גבוהה, הנדסת תוכנה ופריסת ענן, מתכננת ומגדלת יישומים מקצה לקצה - החל מפלטפורמות אינטרנט חזקות ועד למערכות אקולוגיות אוטונומיות של סוכני בינה מלאכותית.",
  yearsOfExperience: 5,
};

export const contact = {
  email: "ruty@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/Ruty7819",
};
