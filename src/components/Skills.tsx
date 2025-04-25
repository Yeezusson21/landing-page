import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: Array<{ name: string; level: number }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <div className="bg-gray-800 rounded-lg p-8 shadow-sm">
    <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-2">
            <span className="font-medium text-gray-300">{skill.name}</span>
            <span className="text-blue-400">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "React/React Native", level: 95 },
    { name: "TypeScript/JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "Node.js", level: 80 },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Team Collaboration", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Project Management", level: 80 },
  ];

  const toolsSkills = [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS/Cloud", level: 70 },
    { name: "CI/CD", level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">Technical Proficiency</h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Through academic projects and professional experience, I've developed expertise in various technologies and tools.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <SkillCategory title="Development" skills={technicalSkills} />
          <SkillCategory title="Soft Skills" skills={softSkills} />
          <SkillCategory title="Tools & DevOps" skills={toolsSkills} />
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-center text-white">Additional Skills & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "FastAPI", "MongoDB", "Spring", "SQL", "TensorFlow",
              "System Design", "Data Structures", "Algorithms", "UI/UX Design",
              "AWS Certified Cloud Practitioner", "Google Cloud Fundamentals"
            ].map((item) => (
              <div 
                key={item} 
                className="px-4 py-2 bg-gray-700 text-blue-400 rounded-lg hover:bg-gray-600 transition-colors cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};