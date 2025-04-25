import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  icon: React.ReactNode;
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  icon,
  title,
  organization,
  period,
  description,
  skills,
}) => (
  <div className="flex gap-4 mb-12">
    <div className="flex-shrink-0 mt-1">
      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
        <span className="text-blue-600 dark:text-blue-400 font-medium">{organization}</span>
        <span className="hidden sm:block text-gray-400 dark:text-gray-500">•</span>
        <span className="text-gray-600 dark:text-gray-400">{period}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
      {skills && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export const Experience: React.FC = () => {
  const workExperience = [
    {
      title: "Web Developer Intern",
      organization: "Virufy",
      period: "Jan 2025 - Present",
      description:
        "Developed and maintained a responsive nonprofit website using React, Next.js, and Tailwind to support Virufy's AI-driven virus screening initiatives. Translated Figma designs into interactive UI components, resolved 20+ frontend issues, and ensured code quality with Cypress and Jest tests. Collaborated in agile sprints using Jira, Confluence, and Git for streamlined team development.",
      skills: ["React", "Next.js", "Tailwind CSS", "Figma", "Jest", "Cypress", "Agile", "Jira", "Git", "Confluence"]
    },
    {
      title: "Software Engineer Intern",
      organization: "Inked Studios",
      period: "Aug 2024 – Dec 2024",
      description:
        "Contributed to the development of a shared grocery list mobile app for users in shared living spaces. Built cross-platform UI with React Native CLI and integrated OAuth 2.0 for secure authentication. Designed RESTful APIs for backend services, managing user data and grocery list synchronization with Amazon RDS.",
      skills: ["React Native", "TypeScript", "OAuth 2.0", "RESTful APIs", "Amazon RDS", "Cross-Platform Development", "Mobile App Development"]
    },
    {
      title: "Frontend Engineer Intern",
      organization: "Boichik Bagels",
      period: "May 2024 – Aug 2024",
      description:
        "Helped build a mobile food ordering app integrating Toast API for transactions and Google Maps API for location tracking. Used React Native's WebView API to embed web content within the app. Collaborated closely with UI/UX designers and full-stack engineers using Figma, Jira, and Git for coordinated development.",
      skills: ["React Native", "Toast API", "Google Maps API", "WebView", "Figma", "UI/UX", "Jira", "Git", "Mobile Development"]
    }
  ];

  const education = [
    {
      title: "Bachelor of Science in Computer Science",
      organization: "San Jose State University",
      period: "2022 - 2026",
      description:
        "Pursuing a Bachelor's in Computer Science with a strong academic record (GPA: 3.8). Completed rigorous coursework in Data Structures, Algorithms, Operating systems, and Security. Actively involved in the Software and Computer Engineering Society (SCE) as an AI/ML Dev Team Officer.",
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Information Security", "Team Leadership", "AI/ML"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Experience</h2>

        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900 dark:text-white">
              <Briefcase className="mr-2" /> Work Experience
            </h3>
            <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6">
              {workExperience.map((job, index) => (
                <TimelineItem
                  key={index}
                  icon={<Briefcase size={20} />}
                  {...job}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center text-gray-900 dark:text-white">
              <GraduationCap className="mr-2" /> Education
            </h3>
            <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  icon={<GraduationCap size={20} />}
                  {...edu}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};