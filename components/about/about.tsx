import { SectionWrapper } from "../ui/section-wrapper";
import { about } from "@/lib/data";

export function About() {
  return (
    <SectionWrapper>
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl tracking-tight leading-none text-foreground">
          אודות
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg text-foreground/70 leading-relaxed">
              {about.description}
            </p>
            <p className="text-foreground/60">
              {about.yearsOfExperience} שנות ניסיון בפיתוח web ואינטגרציה של טכנולוגיות AI
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              כישורים עיקריים
            </h3>
            <ul className="space-y-2 text-foreground/70">
              <li>• Fullstack Development</li>
              <li>• AI & Machine Learning</li>
              <li>• Workflow Automation</li>
              <li>• System Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
