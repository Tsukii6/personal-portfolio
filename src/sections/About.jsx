export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid gap-16 items-center">
          {/* Section Title */}
          <div className="space-y-8">
            <div className="animate-fade-in ">
            <span className="text-secondary-foreground tracking-wider uppercase text-3xl font-bold">About Me</span></div>
            {/* Main Content */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate full-stack developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into elegant solutions. My journey in coding started with a curiosity for how websites work, and it has evolved into a fulfilling career where I get to build impactful digital experiences.
              </p>
              <p>
                I specialize in JavaScript and have experience working with frameworks like React and Node.js. I enjoy collaborating with cross-functional teams to bring ideas to life and am always eager to learn new technologies and improve my skills. When I'm not coding, you can find me exploring the latest trends in tech, contributing to open-source projects, or simply enjoying a good book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}; 