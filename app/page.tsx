import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { StarryBackground } from "@/components/starry-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Comments } from "@/components/comments"
import { TechStackIcon } from "@/components/tech-stack-icon"

const categories = {
  programmingLanguages: [
    { icon: "python.svg", name: "Python" },
    { icon: "cpp.svg", name: "C/C++" },
    { icon: "html.svg", name: "HTML" },
    { icon: "css.svg", name: "CSS" },
    { icon: "javascript.svg", name: "JavaScript" },
    { icon: "typescript.svg", name: "TypeScript" },
    { icon: "matlab.svg", name: "MATLAB" },
    { icon: "latex.svg", name: "LaTeX" },
  ],
  frameworksAndLibraries: [
    { icon: "nextjs.svg", name: "Next.js" },
    { icon: "react.svg", name: "React" },
    { icon: "tailwind.svg", name: "Tailwind CSS" },
    { icon: "numpy.svg", name: "NumPy" },
    { icon: "opencv.svg", name: "OpenCV" },
  ],
  toolsAndTechnologies: [
    { icon: "github.svg", name: "GitHub" },
    { icon: "git.svg", name: "Git" },
    { icon: "figma.svg", name: "Figma" },
    { icon: "sql.svg", name: "SQL" },
    { icon: "azure.svg", name: "Azure" },
    { icon: "supabase.svg", name: "Supabase" },
    { icon: "vscode.svg", name: "VS Code" },
    { icon: "matlab.svg", name: "MatLab" },
    { icon: "arduino.svg", name: "Arduino" },
    { icon: "raspberry-pi.svg", name: "Raspberry Pi" },
    { icon: "microsoft.svg", name: "Microsoft Office" },
    { icon: "ansys.svg", name: "Ansys Granta" },
    { icon: "autocad.svg", name: "AutoCAD" },
    { icon: "prusa.svg", name: "PrusaSlicer" },
    { icon: "macos.svg", name: "MacOS" }, 
    { icon: "windows.svg", name: "Windows" },
  ]
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">Computer Engineer at McMaster University</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Avneet Singh Nijjer
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              - Student @ McMaster University (B.Eng - Computer Engineering, Co-Op, Class of 2028). <br />
              - Self-taught developer focused on web/mobile development, embedded systems, and Artificial Intelligence. <br />
              - Main Skills: Java · Python · React · Next.js · Arduino/Raspberry Pi.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-600 hover:text-black hover:border-pink-500"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://github.com/Nijjea1" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/avneet-singh-nijjer/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="Nijjea1@McMaster.ca">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/Linkedinpic.jpeg?height=600&width=600 "
                  alt="Avneet Singh Nijjer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate Computer engineer with experience building web applications and digital products. I
                  specialize in frontend development with React and Next.js, but I'm also comfortable working with
                  backend technologies.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My journey in tech started with a strong foundation in software development. I've worked with various
                  teams to create intuitive, performant, and accessible digital experiences.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  and staying up-to-date with the latest industry trends.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Avneet Singh Nijjer</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">Nijjea1@McMaster.ca</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Brampton, Ontario</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/AvneetSinghNijjerResume.pdf" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">View Resume</Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <StarryBackground />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />
          
          <div className="mt-16">
            <Tabs defaultValue="languages" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="relative bg-zinc-800/30 border border-zinc-700/30 p-3 rounded-2xl backdrop-blur-sm">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-lg opacity-75"></div>
                  <TabsTrigger
                    value="languages"
                    className="relative px-8 py-4 text-lg font-medium rounded-xl text-zinc-400 hover:text-white data-[state=active]:bg-gradient-to-r from-purple-500/20 to-pink-500/20 data-[state=active]:text-white data-[state=active]:border-purple-500/50 data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    Programming Languages
                  </TabsTrigger>
                  <TabsTrigger
                    value="frameworks"
                    className="relative px-8 py-4 text-lg font-medium rounded-xl text-zinc-400 hover:text-white data-[state=active]:bg-gradient-to-r from-purple-500/20 to-pink-500/20 data-[state=active]:text-white data-[state=active]:border-purple-500/50 data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    Frameworks & Libraries
                  </TabsTrigger>
                  <TabsTrigger
                    value="tools"
                    className="relative px-8 py-4 text-lg font-medium rounded-xl text-zinc-400 hover:text-white data-[state=active]:bg-gradient-to-r from-purple-500/20 to-pink-500/20 data-[state=active]:text-white data-[state=active]:border-purple-500/50 data-[state=active]:shadow-lg transition-all duration-300"
                  >
                    Tools & Technologies
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="relative p-8 rounded-2xl bg-zinc-800/10 border border-zinc-700/20 backdrop-blur-sm">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-lg opacity-50"></div>
                
                <TabsContent value="languages" className="relative mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {categories.programmingLanguages.map((tech, index) => (
                      <TechStackIcon key={index} icon={tech.icon} name={tech.name} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="frameworks" className="relative mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {categories.frameworksAndLibraries.map((tech, index) => (
                      <TechStackIcon key={index} icon={tech.icon} name={tech.name} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tools" className="relative mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {categories.toolsAndTechnologies.map((tech, index) => (
                      <TechStackIcon key={index} icon={tech.icon} name={tech.name} />
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Personal Portfolio Website"
              description="A modern portfolio website showcasing my skills, projects, and experience."
              tags={["Next.js", "TypeScript", "Javascript", "Tailwind CSS","React"]}
              image="/personalportfolio.png?height=400&width=600"
              demoUrl="https://www.avneetnijjer.ca"
              repoUrl="https://github.com/AvneetNijjer/Personal-Portfolio"
            />
            <ProjectCard
              title="LetMeKnock - Real Estate Listing Platform"
              description="A full-stack application for browsing and managing real estate listings for University students."
              tags={["Next.js", "Supabase", "Tailwind CSS", "React", "TypeScript"]}
              image="/LetMeKnock.png?height=400&width=600"
              demoUrl="https://letmeknock.vercel.app"
              repoUrl="https://github.com/AvneetNijjer/HousingHub"
            />
            <ProjectCard
              title="International Airport - Flight Tracker"
              description="A python script that takes flight data from a file, arranges it and displays it in a user-friendly format."
              tags={["Python"]}
              image="/InternationalAirport.png?height=400&width=600"
              demoUrl="https://github.com/AvneetNijjer/International-Airport-System"
              repoUrl="https://github.com/AvneetNijjer/International-Airport-System"
            />
            <ProjectCard
              title="Boggle"
              description="A fun word game where players find words in a randomized grid of letters. Uses dictionary file reading and search algorithms to find and validate words. Made with Java focusing on object-oriented programming principles."
              tags={["Java", "Object-Oriented Programming"]}
              image="/Boggle.png?height=400&width=600"
              demoUrl="https://github.com/AvneetNijjer/BoggleGame"
              repoUrl="https://github.com/AvneetNijjer/BoggleGame"
            />
            
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <StarryBackground />
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.5fr] gap-8 mt-16">
            <div className="space-y-8">
              <GlassmorphicCard>
                <ContactForm />
              </GlassmorphicCard>

              <GlassmorphicCard>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">Email</div>
                      <div className="font-medium">Nijjea1@McMaster.ca</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">LinkedIn</div>
                      <a 
                        href="https://www.linkedin.com/in/avneetnijjer" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-purple-400 transition-colors"
                      >
                        Avneet Nijjer
                      </a>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>

            <div>
              <GlassmorphicCard>
                <Comments />
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Avneet </span>
              <span className="text-white">Nijjer</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Avneet Singh Nijjer. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/AvneetNijjer" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/avneet-singh-nijjer" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:Nijjea1@McMaster.ca">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
