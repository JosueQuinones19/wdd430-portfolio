import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I am Josue Quinones, a software development student at BYU-Pathway Worldwide.
        I enjoy building web applications and APIs, and I am currently expanding my
        skills with Next.js, React, and full-stack development.
      </p>
      <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <SkillCard
          category="Frontend"
          skills={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']}
        />
        <SkillCard
          category="Backend"
          skills={['Node.js', 'Express', 'MongoDB', 'REST APIs', 'OAuth']}
        />
        <SkillCard
          category="Tools"
          skills={['Git', 'GitHub', 'VS Code', 'Swagger', 'Render', 'Vercel']}
        />
        <SkillCard
          category="Languages"
          skills={['Python', 'JavaScript', 'TypeScript']}
        />
      </div>
    </main>
  );
}
