"use client";

import { SectionWrapper } from "../ui/section-wrapper";
import { contact } from "@/lib/data";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <p className="text-foreground/60 text-sm">
              {contact.email}
            </p>
            <p className="text-foreground/40 text-xs">
              © {new Date().getFullYear()} כל הזכויות שמורות
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubLogo size={24} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={24} />
            </a>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}
