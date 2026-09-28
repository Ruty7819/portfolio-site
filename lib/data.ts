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
    title: "AI-Powered Workflow Automation",
    description: "מערכת אוטומציה מבוססת AI שמחברת n8n עם OpenAI ליצירת workflows חכמים לאוטומציה של תהליכים עסקיים",
    technologies: ["Next.js", "OpenAI", "n8n", "TypeScript"],
    image: "/images/project-1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "Dashboard מתקדם לניטור וניתוח נתונים בזמן אמת עם visualizations אינטראקטיביות ו-alerts אוטומטיים",
    technologies: ["React", "D3.js", "WebSocket", "PostgreSQL"],
    image: "/images/project-2.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Smart Content Generator",
    description: "כלי ליצירת תוכן אוטומטית המשתמש ב-LLMs לכתיבת טקסטים מותאמים אישית עם SEO optimization",
    technologies: ["Python", "LangChain", "OpenAI", "FastAPI"],
    image: "/images/project-3.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "DevOps Pipeline Orchestrator",
    description: "מערכת לניהול ואורקסטרציה של CI/CD pipelines עם תמיכה ב-multiple cloud providers",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    image: "/images/project-4.jpg",
    link: "#",
  },
];

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  backend: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs"],
  ai: ["OpenAI", "LangChain", "n8n", "Prompt Engineering", "RAG"],
  devops: ["Docker", "Kubernetes", "Git", "CI/CD", "AWS"],
};

export const about = {
  name: "מפתחת Fullstack + AI/Automation",
  description: "מפתחת עם ניסיון בבניית יישומי web מודרניים, מערכות AI, ופתרונות אוטומציה. מתמחה ב-Next.js, TypeScript, ואינטגרציה של טכנולוגיות AI בתהליכי פיתוח.",
  yearsOfExperience: 5,
};

export const contact = {
  email: "contact@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/Ruty7819",
};
