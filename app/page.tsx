import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Contacts API',
    description: 'A RESTful API built with Node.js, Express, and MongoDB for managing contact records with full CRUD operations and Swagger documentation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
    link: 'https://github.com/JosueQuinones19/cse341-contacts-project'
  },
  {
    title: 'PowerLog Fitness API',
    description: 'A fitness tracking API that allows users to log workouts, track exercises, and monitor progress over time. Features OAuth authentication and comprehensive Swagger docs.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'OAuth'],
    link: 'https://github.com/JosueQuinones19/cse341-final-project'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I am a software development student at BYU-Pathway learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}
