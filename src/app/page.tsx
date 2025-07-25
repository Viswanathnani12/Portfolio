"use client"
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Meteors from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import SparklesText from "@/components/magicui/sparkles-text";
import Ripple from "@/components/magicui/ripple";
import { useTheme } from "next-themes";
import BoxReveal from "@/components/magicui/box-reveal";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import ShineBorder from "@/components/magicui/shine-border";
import { AnimatedList } from "@/components/magicui/animated-list";
import EduList from "@/components/EduList";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
// import { GitBranch } from "lucide-react";

import Skills from "@/components/Skills";
import { useEffect } from "react";
import { MagicCard } from "@/components/ui/magic-card";
import Safari from "@/components/ui/safari";
import Home from "@/components/Test";
import App from "@/components/Test";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";
import ShinyButton from "@/components/ui/shiny-button";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Experience from "@/components/Experience";
import { TextAnimate } from "@/components/magicui/text-animate";


const BLUR_FADE_DELAY = 0.4;

export default function Page() {
  const { theme } = useTheme()

  // console.log(theme)
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-[100dvh] space-y-10 lg:px-56 xl:px-72">
      {/* <Meteors number={100}/> */}
      <Particles quantity={300}
        className="absolute top-5 h-[90%] w-full"
        ease={80}
        color={theme == "dark" ? "#ffffff" : "#000000"}
        refresh />
      <section id="hero" className="w-full px-5 py-32 ">
        <div className="w-full flex items-center justify-center space-y-8 lg:mt-28">
          <div className="gap-2 flex flex-col justify-center items-center ">
            <div className="flex-col flex flex-1 space-y-1.5 text-center">
              <SparklesText className="w-full text-6xl md:text-7xl text-center font-f2" text={DATA.name} />
              <TextAnimate
                className="max-w-[650px] text-xl mx-auto md:text-xl text-balance mt-24 mb-10 font-f2 font-medium"
                animation="slideLeft"
                by="character"
              >
                {DATA.description}
              </TextAnimate>

            </div>
            <Ripple className="hidden md:block md:w-full" />
            {/* <BlurFade delay={BLUR_FADE_DELAY} className="flex items-center justify-center">
              <Avatar className="size-28 border ">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade> */}
          </div>
        </div>
        <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center">
          <ShinyButton className="w-fit font-f2 mt-10" >Resume <FileDown className="mt-0.5" /></ShinyButton>
        </a>
      </section>


      <section id="about" className="w-full px-5 py-10">
        <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex items-center justify-center pb-10">
          <ShineBorder
            className="relative flex h-fit w-fit p-5 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center text-5xl font-semibold font-f2 leading-none text-transparent dark:from-white dark:to-slate-900/10">
              About
            </span>
          </ShineBorder>
        </BlurFade>
        <BoxReveal>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <Markdown className="prose max-w-full text-pretty mt-5  text-xl  dark:prose-invert text-justify font-f2 font-medium text-black dark:text-white">
              {DATA.summary}
            </Markdown>
          </BlurFade>

        </BoxReveal>
      </section>

      <section id="experince" className="w-full px-5 py-10">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex items-center justify-center">
            <ShineBorder
              className="relative flex h-fit w-fit p-5 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center text-5xl font-semibold font-f2 leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Experience
              </span>
            </ShineBorder>
          </BlurFade>
          <BoxReveal width="100%">
            <BlurFade
              className="w-full "
              delay={BLUR_FADE_DELAY * 4}
            >
              <Experience/>
            </BlurFade>
          </BoxReveal>
        </div>
      </section>

      <section id="education" className="w-full px-5 py-10">
        <div className="flex flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex items-center justify-center">
            <ShineBorder
              className="relative flex h-fit w-fit p-5 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center text-5xl font-semibold font-f2 leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Education
              </span>
            </ShineBorder>
          </BlurFade>
          <BoxReveal width="100%">
            <BlurFade
              className="w-full"
              delay={BLUR_FADE_DELAY * 4}
            >
              <EduList />
            </BlurFade>
          </BoxReveal>
        </div>
      </section>

      {/* <section className="">
        <App />
      </section> */}

      <section id="skills" className="mt-20 w-full px-5 py-10">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex items-center justify-center">
            <ShineBorder
              className="relative flex h-fit w-fit p-5 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center text-5xl font-semibold font-f2 leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Skills
              </span>
            </ShineBorder>
          </BlurFade>
          <BoxReveal width="100%">
            <Skills />
          </BoxReveal>
        </div>
      </section>


      <section id="projects" className="px-5 py-10 w-full">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex items-center justify-center">
            <ShineBorder
              className="relative flex h-fit w-fit p-5 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center text-5xl font-semibold font-f2 leading-none text-transparent dark:from-white dark:to-slate-900/10">
                My Projects
              </span>
            </ShineBorder>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {DATA.projects.map((project, id) => (

            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 5}
            >
              <BoxReveal width="100%">
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BoxReveal>
            </BlurFade>

          ))}
        </div>


        {/* <div className="w-full h-full grid grid-cols-2 gap-5">
          <MagicCard className="w-full h-full flex flex-col" gradientColor={theme === "dark" ? "#858282" : "#D9D9D955"}>
            <div className="p-2">
              
              <Safari
                url="InsightBlendAnalytics"
                className="size-full"
                src="insight.png" />
            </div>
            <div className="pl-4 pt-1 flex flex-col gap-4 pr-4">
              <p className="font-f2 text-lg">Insight Blend Analytics</p>
              <p className="font-f2 text-sm text-justify">Developed the website for Insight Blend Analytics using React JS, Tailwind CSS, and Framer Motion, focusing on
                responsive design, interactive features and elegant animations.Utilized Git and GitHub for version control to manage
                code changes and collaboration. Deployed the site with Render for reliable hosting and optimal performance.
              </p>
              <div>
            <Skills />

              </div>
            </div>
          </MagicCard>
          <MagicCard className="w-full h-full p-20" gradientColor={theme === "dark" ? "#858282" : "#D9D9D955"}>
            Magic
          </MagicCard>
          <MagicCard className="w-full h-full p-20" gradientColor={theme === "dark" ? "#858282" : "#D9D9D955"}>
            Magic
          </MagicCard>
        </div> */}


      </section>


      <section id="contact" className="w-full px-5 py-20">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex items-center justify-center">
              <ShineBorder
                className="relative flex h-fit w-fit p-5 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              >
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center text-5xl font-semibold font-f2 leading-none text-transparent dark:from-white dark:to-slate-900/10">
                  Contact
                </span>
              </ShineBorder>
            </BlurFade>
            <div>
              <p className="font-f2 text-2xl text-balance">Feel free to reach out for innovative solutions and impactful collaborations. Let’s build something amazing together—get in touch today!</p>
            </div>
          </div>

          <div className="space-y-3">


            <div className="flex gap-10 items-center justify-center ">
              {/* <Image width={50} height={50} alt="git" src={'/github-mark-white.png'} /> */}
              <a className="w-fit  h-full" href='https://github.com/Viswanathnani12' target="_blank">
                <ShimmerButton className="">
                  <Image width={30} height={30} alt="git" src={'/github-mark-white.png'} />
                </ShimmerButton>
              </a>
              <a className="w-fit h-full " href='https://www.linkedin.com/in/viswanath-singanamilli-4b7806239' target="_blank">
                <ShimmerButton className="">
                  <Image width={30} height={30} alt="git" src={'/linkedin.png'} />
                </ShimmerButton>
              </a>
              <a className="w-fit h-full " href='mailto:viswanathnani12@gmail.com' target="_blank">
                <ShimmerButton className="">
                  <Image width={30} height={30} alt="git" src={'/gmail.png'} />
                </ShimmerButton>
              </a>
              {/* <a className="w-full h-full" href='https://github.com/Viswanathnani12' target="_blank">
                <ShimmerButton className="">
                  <Image width={30} height={30} alt="git" src={'/whatsapp.svg'} />
                </ShimmerButton>
              </a> */}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
