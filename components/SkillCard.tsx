interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <h3 className="text-lg font-bold text-blue-700 mb-2">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
