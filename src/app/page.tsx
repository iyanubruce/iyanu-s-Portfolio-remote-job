"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [review1, setReview1] = useState(true);
  const [review2, setReview2] = useState(false);
  const [review3, setReview3] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/redux.png";
    link.download = "/redux.png";
    link.click();
  };
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.querySelector(".hero-section").offsetHeight;
      if (window.scrollY > heroSectionHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1, // 60% of the section must be visible to activate
      },
    );
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      {/*hero section*/}
      <section
        id="intro"
        className="bg-bgAsh section1 relative isolate hero-section z-[100]"
      >
        <div className="absolute h-full w-full lg:w-1/2 right-0 z-[0]">
          <Image
            src="/images/intro-bg.jpg"
            alt="introbg"
            fill
            className="object-cover"
          />
        </div>
        <div
          className={`${isFixed ? "fixed" : "absolute"} lg:hidden flex-col py-24 gap-10 pl-10 pubSans ${menuOpen ? "flex" : "hidden"} top-[72px] left-0 right-0 bg-bgblack text-3xl z-50`}
        >
          <a
            className="block"
            href="#intro"
            className={`${activeSection === "intro" ? "text-white" : "text-greishh"} transition-colors duration-200`}
          >
            Intro
          </a>
          <a
            className="block"
            href="#about"
            className={`${activeSection === "about" ? "text-white" : "text-greishh"} transition-colors duration-200`}
          >
            About
          </a>
          <a
            className="block"
            href="#skills"
            className={`${activeSection === "skills" ? "text-white" : "text-greishh"} transition-colors duration-200`}
          >
            Skills
          </a>
          <a
            className="block"
            href="#works"
            className={`${activeSection === "works" ? "text-white" : "text-greishh"} transition-colors duration-200`}
          >
            Works
          </a>
          <a
            className="block"
            href="#contact"
            className={`${activeSection === "contact" ? "text-white" : "text-greishh"} transition-colors duration-200`}
          >
            Contact
          </a>
        </div>
        <div
          className={`flex z-[9999999] ${isFixed ? "fixed w-[100%] translate-y-0 opacity-100" : "absolute lg:mt-10 w-[92%] "} transition-all duration-500 ease-in-out top-0 left-0 right-0 mt-0 items-center justify-between mx-auto bg-bgblack h-[72px] px-[2.6rem] rowl text-white`}
        >
          <span className="text-4xl castoro">Hudson.</span>{" "}
          <button
            aria-label="Toggle Menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col  h-full w-16 lg:hidden justify-between py-9"
          >
            <div className="w-full h-[1px] bg-white"></div>
            <div className="w-full h-[1px] bg-white"></div>
            <div className="w-full h-[1px] bg-white"></div>
          </button>
          <ul className="hidden list-none lg:inline-flex flex-row flex-nowrap m-0 p-0">
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "intro" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] transition-colors`}
                href="#intro"
              >
                Intro
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "about" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] transition-colors`}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "skills" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] transition-colors`}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "works" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] transition-colors`}
                href="#works"
              >
                Works
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "contact" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] transition-colors`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="div1 flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:pl-11 w-full lg:w-max flex flex-col lg:items-start items-center">
            <div className="pubSans text-center lg:text-left pl-1 tracking-widest text-textO text-[1.75rem] leading-[3.2rem] font-semibold mb-[0.4rem]">
              HELLO
            </div>
            <div className="herol castoro font-medium text-center lg:text-left">
              I&apos;m <br />
              Iyanuoluwa Taiwo
              <br /> a Frontend developer
            </div>
            <div className="btnDiv w-full items-center lg:w-max flex flex-col lg:flex-row lg:gap-5">
              <a
                href="#about"
                className="Hbtn block pubSans lg:hover:text-bTextb text-bgblack lg:text-white bg-white lg:bg-bTextb lg:hover:bg-transparent border-[2px] lg:hover:border-bTextb"
              >
                More about me
              </a>
              <a
                href="#contact"
                className="Hbtn pubSans text-white lg:hover:bg-bTextb lg:hover:text-white lg:text-bTextb border-2 border-white lg:border-bTextb"
              >
                Get In touch
              </a>
            </div>
          </div>
          <div className="lg:flex hidden  items-center transform translate-x-[-40rem]">
            <div className="bg-white w-[16rem] h-[2px] transform translate-y-[-0.9rem] "></div>
            <button
              onClick={handleDownload}
              className="Hbtn pubSans hover:text-bTextb hover:bg-white text-white border-2 border-white "
            >
              Get My cv
            </button>
          </div>

          <div className="flex-col md:flex hidden items-center absolute right-5 bottom-[5rem]">
            <Link
              href="https://www.linkedin.com/in/iyanuoluwa-ikechukwu-231345324/"
              className="md:flex hidden w-10 h-10 relative"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/linkedin.jpg"
                fill
                alt="linkedin"
                className={`object-cover rounded-[50%]`}
              />
            </Link>
            <div className="hidden md:block h-32 w-[1px] bg-white my-10"></div>
            <a
              href="#about"
              className="grid place-content-center p-[2.1rem] border-2 border-white rounded-[50%] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(255, 255, 255, 1)",
                  transform: "", // (You may want to provide a value here or remove it if unused)
                  msFilter: "",
                }}
              >
                <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute lg:hidden flex items-center left-0 bottom-[5rem] gap-3">
          <div className="w-14 h-[1px] bg-white"></div>
          <div className="uppercase flex flex-col font-bold  pubSans tracking-[0.2em] italic text-white text-xl">
            <button onClick={handleDownload} className={`z-[10]`}>
              Get my cv
            </button>
            <div className="h-[1px]"></div>
          </div>
        </div>
      </section>

      {/*about section*/}
      <section
        id="about"
        className="bg-white flex justify-center py-[22.4rem] px-[3rem] md:px-[10rem]"
      >
        <div className="w-full max-w-[1280px] ">
          <div className="uppercase text-4xl font-semibold tracking-wider roboto z-[0]  relative w-max">
            About me{" "}
            <div className="bg-purplink h-[2px] absolute top-[-30px] left-0 right-[-30px]"></div>
          </div>
          <div className="mt-[5rem] lora text-[24px] leading-[4rem]">
            <p>
              I’m a passionate front-end developer with a keen eye for design
              and a focus on creating seamless, user-friendly web experiences.
              With expertise in HTML, CSS, JavaScript, and modern frameworks
              like React and Next.js, I enjoy building responsive, accessible,
              and interactive websites that provide great user experiences
              across all devices.
            </p>
            <p>
              Over the years, I’ve honed my skills in collaborating with
              designers and back-end developers to turn creative ideas into
              functional digital products. I thrive in solving complex problems
              with clean, efficient code and always stay up-to-date with the
              latest web technologies and best practices.
            </p>
            <p>
              Whether it's building a sleek portfolio, a complex web
              application, or optimizing performance, I’m driven by the
              challenge of creating solutions that not only look great but work
              flawlessly.
            </p>
            <p>
              In my spare time, I enjoy contributing to open-source projects,
              exploring new web technologies, and continuously learning to keep
              growing as a developer.
            </p>
          </div>
          <div className="">
            <button
              onClink={handleDownload}
              className="uppercase w-full md:w-[45rem] h-[6rem] mt-[5rem] text-[1.4rem] font-[700] tracking-widest roboto border-2 border-bgblack bg-[#130209] text-white"
            >
              download my cv
            </button>
          </div>
          <div className="uppercase mt-[22.4rem] transform translate-z-0 text-4xl font-semibold tracking-wider roboto relative w-max">
            Work{" "}
            <div className="bg-purplink h-[2px] absolute top-[-30px] left-0 right-[-30px]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="p-10">
              <p className="uppercase roboto text-[1.4rem] tracking-[0.3rem] font-[400] leading-[1.714] text-black mb-[0.8rem]">
                july 2018 - present
              </p>
              <div className="frank text-[3.6rem] font-[500] leading-[1.22]">
                Localramp
              </div>
              <div className="text-[2.1rem] font-[400] leading-[1.333] mt-0 roboto font-ligatures text-rendering-optimize">
                Frontend Developer
              </div>
              <p className="font-normal not-italic leading-[1.882] block my-4 mx-0  text-[1.7rem] roboto">
                At Local Ramp, I worked as a front-end developer, building
                responsive and user-friendly interfaces for a platform that
                provides an API to convert local currencies to digital
                currencies and vice versa. I collaborated with back-end teams to
                integrate real-time currency data, optimize performance, and
                ensure smooth user experiences across devices. My role also
                involved enhancing the UI for seamless interaction with the
                currency conversion features, ensuring a modern and efficient
                platform.
              </p>
            </div>
            <div className="p-10">
              <p className="uppercase roboto text-[1.4rem] tracking-[0.3rem] font-[400] leading-[1.714] text-black mb-[0.8rem]">
                july 2018 - present
              </p>
              <div className="frank text-[3.6rem] font-[500] leading-[1.22]">
                Ojuju Web
              </div>
              <div className="text-[2.1rem] font-[400] leading-[1.333] mt-0 roboto font-ligatures text-rendering-optimize">
                Frontend Developer
              </div>
              <p className="font-normal not-italic leading-[1.882] block my-4 mx-0 text-[1.7rem] roboto">
                I developed a landing page for Ojuju Web, an AI-powered platform
                that connects tailors with customers. The page showcases how
                users can easily get their measurements and receive custom-made
                tailored fits. My goal was to create a responsive, user-friendly
                design that highlights the platform’s simplicity and innovative
                approach to tailored clothing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*services section*/}
      <section
        id="skills"
        className="flex justify-center py-[19.4rem] px-[3rem] md:px-[10rem] relative darkbg imagebg isolate"
      >
        <div className="shadowOverlay"></div>
        <div className="w-full max-w-[1280px] z-10">
          <h1 className="font-semibold text-[1.7rem] leading-[1.176] uppercase tracking-[.5rem] mt-0 pt-[3.2rem] mb-[8rem] relative text-center roboto text-white">
            capabilities
            <div className="bg-purplink h-[2px] w-[140px] absolute bottom-[-20px] left-[50%] transform translate-x-[-50%]" />
          </h1>
          <h1 className="text-[4rem] md:text-[5.4rem] font-normal leading-[1.259] tracing-[-0.05rem] text-white text-center frank">
            My passion and goal is to help you
            <br className="hidden lg:block" /> make your company stand out
          </h1>
          <div className="max-w-[1280px] w-[100%] mt-[8.8rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-[10px]">
          <div className="px-[20px] serviceBorder">
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/html.svg" width={50} height={50} />
                HTML
              </h1>
            </div>
            <div className="px-[20px] serviceBorder">
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/css.svg" width={50} height={50} />
                CSS
              </h1>
            </div>
            <div className="px-[20px] serviceBorder">
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/javascript.svg" width={50} height={50} />
                JavaScript
              </h1>
            </div>
            <div className="px-[20px] serviceBorder ">
              {/*<h1 className="text-purplink font-light text-[7.2rem] mb-[4.8rem] roboto  leading-[1]">
                01.
              </h1>*/}
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/react.svg" width={50} height={50} />
                React
              </h1>
              {/*<p className="lora font-normal leading-[1.882] text-[1.7rem]">
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>*/}
            </div>
            <div className="px-[20px] serviceBorder">
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/react.svg" width={50} height={50} />
                React Native
              </h1>
            </div>
            <div className="px-[20px] serviceBorder">
              {/*<h1 className="text-purplink font-light text-[7.2rem] mb-[4.8rem] roboto  leading-[1]">
                01.
              </h1>*/}
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/tailwind.svg" width={50} height={50} />
                tailwind
              </h1>
              {/*<p className="lora font-normal leading-[1.882] text-[1.7rem]">
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>*/}
            </div>
            <div className="px-[20px] serviceBorder">
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/redux.svg" width={50} height={50} />
                Redux
              </h1>
            </div>
            <div className="px-[20px] serviceBorder">
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/typescript.svg" width={50} height={50} />
                Typescript
              </h1>
            </div>
            <div className="px-[20px] serviceBorder">
              <h1 className="text-white text-[3.6rem] mb-[3.6rem] leading-[1.222] mt-o font-normal frank flex gap-5 items-center">
                <Image src="/images/responsive.svg" width={50} height={50} />
                Responsive Design
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/*projects section*/}
      <section id="works" className="pt-[18.4rem] pb-[6.4rem] bg-white">
        <div className="w-[89%] max-w-[1200px] mx-auto">
          <h1 className="uppercase text-center pt-0 pb-[3.2rem] transform-flat roboto font-[600] text-[1.7rem] tracking-[0.5rem] z-0 mb-[8rem] relative">
            {" "}
            SElected works{" "}
            <div className="absolute bottom-0 left-1/2 transform-flat transform bg-purplink translate-x-[-50%] w-[150px] h-[2px] z-0"></div>
          </h1>
          <p className="text-center text-[4rem] md:text-[5.4rem] font-[400] leading-[1.259] tracking-[-0.05rem] text-black frank mb-[15rem]">
            Here are some projects I have worked
            <br /> on lately. Feel free to check
            <br />
            them out{" "}
          </p>
          <div className="w-full rounded-[24px]  p-[10px] h-[600px] mb-[10rem] bg-white">
            <div
              onClick={() => window.open("https://localramp.co/")}
              className={`w-full block rounded-[20px] h-full bg-black p-[30px] overflow-hidden gradient-box`}
            >
              <div className="text-white text-[24px] roboto flex justify-between items-center">
                <span>Local Ramp</span>
                <Link
                  href="https://localramp.co/"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vProject hover:underline decoration-[1px] underline-offset-[3px]"
                >
                  Veiw Project
                </Link>
                <span className="projectIcon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.025 17.9508L12.95 16.9008L17.15 12.7008H4V11.2008H17.15L12.925 6.97578L14 5.92578L20.025 11.9508L14.025 17.9508Z"
                      fill="#Ffffff"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-[#f2f2f280]  tracking-[0.2px] self-stretch pr-8 font-sans font-light text-[14px] leading-[20px]">
                <span className="text-[#f2f2f2cc] font-medium castoro">
                  Localramp
                </span>{" "}
                <span>
                  —&quot;Empowering emerging markets with efficient offramp and
                  onramp payment solutions&quot;
                </span>
              </div>
              <div className="text-[#f2f2f280] mb-10 tracking-[0.2px] self-stretch pr-8 font-sans font-light text-[18px] leading-[20px]">
                <span className="text-white font-medium castoro">
                  Made with
                </span>{" "}
                <span className="text-[#f2f2f2cc] font-medium castoro">
                  :&quot;React, tailwind, REST api's&quot;
                </span>
              </div>
              <div className="w-[90%] imageDiv aspect-[16/9] mx-auto relative">
                <Image
                  src="/images/Localramp.png"
                  fill
                  alt="localramp"
                  className="object-cover rounded z-[-1]"
                />
                <div className="about text-white pt-0 md:pt-[10rem]">
                  <h1 className="text-center text-[4rem] md:text-[5rem] castoro">
                    Project Description
                  </h1>
                  <p className="text-center text-[2rem] lora">
                    An innovative platform enabling seamless conversion between
                    traditional
                    <br className="hidden md:block" /> currencies and
                    cryptocurrencies, offering secure
                    <br className="hidden md:block" />
                    and efficient transactions.
                  </p>
                  <h1 className="text-center text-[3rem] castoro">My Role</h1>
                  <p className="text-center text-[2rem] lora font-semibold">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-[24px]  p-[10px] h-[600px] bg-white">
            <div
              onClick={() => window.open("https://www.ojuju.ng/", "_blank")}
              className={`w-full block rounded-[20px] h-full bg-black p-[30px] overflow-hidden gradient-box`}
            >
              <div className="text-white text-[24px] frank flex justify-between items-center">
                <span>Ojuju web</span>
                <Link
                  href="https://www.ojuju.ng/"
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vProject hover:underline decoration-[1px] underline-offset-[3px]"
                >
                  Veiw Project
                </Link>
                <span className="projectIcon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.025 17.9508L12.95 16.9008L17.15 12.7008H4V11.2008H17.15L12.925 6.97578L14 5.92578L20.025 11.9508L14.025 17.9508Z"
                      fill="#Ffffff"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-[#f2f2f280] tracking-[0.2px] self-stretch pr-8 font-sans font-light text-[14px] leading-[20px]">
                <span className="text-[#f2f2f2cc] font-medium castoro">
                  Ojuju web
                </span>{" "}
                <span>
                  —&quot;Elevate Your Style with Designer Elegance.&quot;
                </span>
              </div>
              <div className="mb-10 tracking-[0.2px] self-stretch pr-8 font-sans font-light text-[18px] leading-[20px]">
                <span className="text-white font-medium castoro">
                  Made with
                </span>{" "}
                <span className="text-[#f2f2f2cc] font-medium castoro">
                  :&quot;React, Nextjs, tailwind, REST api's&quot;
                </span>
              </div>
              <div className="w-[90%] imageDiv aspect-[16/9] mx-auto relative">
                <Image
                  src="/images/Ojuju.png"
                  fill
                  alt="localramp"
                  className="object-cover rounded"
                />
                <div className="about text-white pt-0 md:pt-[10rem]">
                  <h1 className="text-center text-[4rem] md:text-[5rem] castoro">
                    Project Description
                  </h1>
                  <p className="text-center text-[2rem] lora">
                    A luxury fashion platform showcasing exclusive collections
                    from renowned
                    <br className="hidden md:block" /> designers, offering a
                    curated selection of high-end clothing{" "}
                    <br className="hidden md:block" />
                    for the discerning shopper
                  </p>
                  <h1 className="text-center text-[3rem] castoro">My Role</h1>
                  <p className="text-center text-[2rem] lora font-semibold">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*reviews section*/}
      <section
        id="reveiws"
        className="flex justify-center pt-[13.6rem] pb-[13.5rem] md:pt-[18.44rem] md:pb-[16rem] bg-prbg px-[3rem] relative"
      >
        <div className="absolute flex gap-[20px] bottom-[10rem] md:bottom-[13.5rem] translate-x-[50%] md:translate-x-0 right-[50%] md:right-[13rem]">
          <button
            onClick={() => {
              setReview1(true);
              setReview2(false);
              setReview3(false);
            }}
            className={`block w-[10px] h-[10px] leading-[10px] rounded-full ${review1 ? "bg-purplink" : "bg-black/40"} border-none p-0 m-0 cursor-pointer text-transparent shadow-none text-0`}
          />
          <button
            onClick={() => {
              setReview1(false);
              setReview2(true);
              setReview3(false);
            }}
            className={`block w-[10px] h-[10px] leading-[10px] rounded-full ${review2 ? "bg-purplink" : "bg-black/40"} border-none p-0 m-0 cursor-pointer text-transparent shadow-none text-0`}
          />
          <button
            onClick={() => {
              setReview1(false);
              setReview2(false);
              setReview3(true);
            }}
            className={`block w-[10px] h-[10px] transition-all duration-200 leading-[10px] rounded-full ${review3 ? "bg-purplink" : "bg-black/40"} border-none p-0 m-0 cursor-pointer text-transparent shadow-none text-0`}
          />
        </div>
        <div
          className={`w-[89%] max-w-[1280px] transition-opacity duration-500 ${review1 ? "opacity-100 block" : "opacity-0 hidden"}`}
        >
          <p className="text-[2.6rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[3.8rem]  font-normal leading-[1.8] roboto text-black">
            Molestiae incidunt consequatur quis ipsa autem nam sit enim magni.
            Voluptas tempore rem. Explicabo a quaerat sint autem dolore ducimus
            ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum.
            Laudantium quia consequatur molestias delectus culpa.
          </p>
          <div className="flex items-center gap-6 mt-[8rem] ">
            <div className="w-[7.2rem] h-[7.2rem] relative">
              {" "}
              <Image
                src="/images/user-04.jpg"
                fill
                alt="comment"
                className="rounded-[50%] object-cover"
              />
            </div>
            <div>
              <h1 className="text-[2.4rem] leading-[1.5] roboto font-[700]">
                Satya Nadella
              </h1>
              <h6 className="text-[1.8rem] leading-[1.333] text-black/70 roboto font-normal">
                CEO, microsoft
              </h6>
            </div>
          </div>
        </div>
        <div
          className={`w-[89%] max-w-[1280px] transition-opacity duration-500 ${review2 ? "opacity-100 block" : "opacity-0 hidden"}`}
        >
          <p className="text-[2.6rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[3.8rem]  font-normal leading-[1.8] roboto text-black">
            Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam
            quos repellat voluptas animi adipisci. Nisi eaque consequatur.
            Voluptatem dignissimos ut ducimus accusantium perspiciatis. Quasi
            voluptas eius distinctio. Atque eos maxime.
          </p>
          <div className="flex items-center gap-6 mt-[8rem] ">
            <div className="w-[7.2rem] h-[7.2rem] relative">
              {" "}
              <Image
                src="/images/user-04.jpg"
                fill
                alt="comment"
                className="rounded-[50%] object-cover"
              />
            </div>
            <div>
              <h1 className="text-[2.4rem] leading-[1.5] roboto font-[700]">
                Satya Nadella
              </h1>
              <h6 className="text-[1.8rem] leading-[1.333] text-black/70 roboto font-normal">
                CEO, microsoft
              </h6>
            </div>
          </div>
        </div>
        <div
          className={`w-[89%] max-w-[1280px] transition-all duration-500 ${review3 ? "opacity-100 block" : "opacity-0 hidden"}`}
        >
          <p className="text-[2.6rem] md:text-[3rem] lg:text-[3.2rem] xl:text-[3.8rem]  font-normal leading-[1.8] roboto text-black">
            Repellat dignissimos libero. Qui sed at corrupti expedita voluptas
            odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque
            officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas
            eius distinctio. Voluptatem dignissimos ut.
          </p>
          <div className="flex items-center gap-6 mt-[8rem] ">
            <div className="w-[7.2rem] h-[7.2rem] relative">
              {" "}
              <Image
                src="/images/user-04.jpg"
                fill
                alt="comment"
                className="rounded-[50%] object-cover"
              />
            </div>
            <div>
              <h1 className="text-[2.4rem] leading-[1.5] roboto font-[700]">
                Satya Nadella
              </h1>
              <h6 className="text-[1.8rem] leading-[1.333] text-black/70 roboto font-normal">
                CEO, microsoft
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/*contact section*/}
      <section
        id="contact"
        className="pt-[18.4rem] pb-[6.4rem] bg-sBblack flex justify-center"
      >
        <div className="w-[89%] max-w-[1280px] ">
          <h1 className="uppercase tracking-[0.5rem] pt-0 pb-[3.2rem] md:pb-0 text-center md:text-left md:pt-[3.2rem] text-white relative leading-[1.176] text-[1.6rem] md:text-[1.7rem] font-[600] roboto mb-[6.8rem] sm:mb-[8rem]">
            GEt in tOuCh{" "}
            <div className="w-[150px] h-[2px] bg-purplink absolute top-auto bottom-0 md:bottom-auto transform translate-x-[-50%] md:translate-x-0 left-[50%] md:top-0 md:left-0" />
          </h1>
          <Link
            href="mailto:iyanuoluwa938@gmail.com"
            className="border-b block text-purplink w-max hover:border-white transition-colors duration-500 border-white/10 roboto text-[6vw] lg:text-[8.1rem] mb-[10rem] font-normal"
          >
            iyanuoluwa938@gmail.com
          </Link>
          <p className="text-[4rem] sm:text-[5.4rem] font-normal leading-[1.259] tracking-[-0.05rem] text-white frank">
            I&apos;m happy to connect, listen and help. Let&apos;s work together
            and build something awesome. Let&apos;s turn your idea to an even
            greater product. <br className="block sm:hidden" />
            <Link
              href="mailto:iyanuoluwa938@gmail.com"
              className="text-purplink border-b hover:border-white transition-colors duration-500 border-white/10 "
            >
              Email Me
            </Link>
            .
          </p>
          <div className="flex mt-[14rem]">
            <div className="flex-col flex mb-[10rem]">
              <div className="font-normal text-[2.4rem] leading-[1.333] mt-0 mb-[0.8rem] text-white/35">
                {" "}
                Social
              </div>
              <Link
                href="https://www.linkedin.com/in/iyanuoluwa-ikechukwu-231345324/"
                className="text-[4.2rem] hover:text-purplink duration-500 transition-colors font-normal frank leading-[1.259] text-white"
              >
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <footer className="font-normal text-[1.6rem] bg-sBblack leading-[2] pt-0 pb-[6.4rem] border-t border-white/[0.03] text-white/30 relative">
        <div className="w-[89%] max-w-[1200px] mx-auto flex">
          <div className="mt-8 pr-[80px] font-normal text-[1.6rem] leading-[2] text-white/30 roboto">
            <div className=" text-[14px] inline-block">
              © Copyright Epitome 2019
            </div>
            <div className="pr-[1rem] pl-[1.2rem] text-white/10 inline-block text-[14px] ">
              |
            </div>
            <div className="text-white/10 inline-block text-[14px]"></div>
          </div>
          <a href="#intro" className="block ml-auto hover:bg-purplink transition-colors duration-300 bg-white/5 no-underline m-0 p-0 border-0 h-[60px] w-[60px] leading-[60px] text-center text-white uppercase bg-no-repeat bg-center bg-[url('/images/icon-arrow-up.svg')] relative">
            <div className="block w-[1px] h-[100px] bg-white/5 absolute top-[-115px] left-1/2"></div>
            <div className="block float-left w-[120px] text-[1.2rem] leading-[30px] uppercase tracking-[.2rem] text-white/15 transition-all duration-500 origin-[left_bottom] rotate-[-90deg] absolute left-[calc(30px+15px)] top-[-165px] roboto">
              {" "}
              Back to top
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}
