import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
const Experience = () => {
  return (
    <div>
      <Terminal className=" mt-10 sm:ml-10 md:ml-24 lg:max-w-md lg:ml-[10%] xl:max-w-lg xl:ml-[20%]">
        <div className="pl-5">
          <TypingAnimation>&gt; Backflipt Software</TypingAnimation>

          <AnimatedSpan delay={2000} className="text-blue-500">
            <span>Associate Software Developer</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span>December 2024 - Present</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-green-500">
            <span>Hyderabad</span>
          </AnimatedSpan>
        </div>
        <div className="pl-5">
          <TypingAnimation>&gt; Insight Blend Analytics</TypingAnimation>

          <AnimatedSpan delay={2000} className="text-blue-500">
            <span>Web Developer</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span>December 2024 - Present</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-green-500">
            <span>Hyderabad</span>
          </AnimatedSpan>
        </div>
      </Terminal>
      
    </div>
  );
};

export default Experience;
