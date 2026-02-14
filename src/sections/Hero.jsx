import { Github, Twitter, Linkedin } from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "SQL",
  "MongoDB",
  "Data Analytics",
  "UI/UX Design",
]

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4">
     {/* BG */}
     {/* add img here */ }

    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="animate-fade-in ">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Available for freelance work
            </span>
          </div>
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  leading-tight animate-fade-in animation-delay-200">
            Hi, I'm <span className="text-primary glow-text">Shatha Al Salehi</span>
            <br />
            <span className="font-serif italic font-normal text-white ">Full-Stack Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
            I build scalable web applications with modern technologies and a focus on user experience.
            </p>
          </div>
          {/* Call to Action */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
            <button className="button">
              <svg
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                height="40"
                width="40"
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 11l5 5l5 -5"></path>
                <path d="M12 4l0 12"></path>
              </svg>
              <span className="button__text">Download CV</span>
            </button>   
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me: </span>
            {[ 
            {icon: Github, href: "#"},
            {icon: Twitter , href: "#"},
            {icon: Linkedin , href: "#"}].map((social, idx) => (
              <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" >
                {<social.icon className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
        {/* Right Column - Profile Image */}
        <div className="relative animate-fade-in animation-delay-300">
          {/* Add your profile image here */}
          <div className="relative max-w-md mx-auto">
            <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-primary/10 rounded-3xl blur-2xl animate-pulse"/>
            <div className="relative glass rounded-3xl p-2 glow-border">
              <img 
              src="/profile.jpg"  
              className="rounded-2xl w-full aspect-[4/5] object-cover"/>
            </div>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="mt-20 animate-fade-in animation-delay-500">
          <p className="text-center text-sm text-muted-foreground mb-6">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="mx-6 px-4 py-2 rounded-full glass text-sm text-primary whitespace-nowrap">
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
      </div>
      
    </div>
    </section>

  );
  
};