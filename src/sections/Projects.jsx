const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    tags: ["Vue.js", "Express", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    tags: ["Angular", "Firebase", "TypeScript"],
    link: "#",
    github: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glowas */}
      <div className="relative z-10 container mx-auto px-6">
          <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 rounded-3xl blur-2xl animate-pulse"/>
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-primary font-bold">Featured Work</span>
            <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-muted-foreground text-sm font-medium animate-fade-in max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
            </p>
          </div>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-2xl p-6 flex flex-col justify-between animate-fade-in animation-delay-[200ms]">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};