"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Service from "@/components/service";
import ServiceHeading from "@/components/service-heading";
import ServicesContainer from "@/components/services-container";
import ProjectCard from "@/components/project";
import WorkHistory from "@/components/work-history";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [review1, setReview1] = useState(true);
  // const [review2, setReview2] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume/IYANUOLUWA_TAIWO_Resume.docx.pdf";
    link.download = "/IYANUOLUWA_TAIWO_Resume.docx.pdf";
    link.click();
  };
  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight: number | null =
        document.querySelector<HTMLElement>(".hero-section")
          ? document.querySelector<HTMLElement>(".hero-section")!.offsetHeight
          : null;

      if (heroSectionHeight !== null) {
        if (window.scrollY > heroSectionHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
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
            src="/images/intro-bg.png"
            alt="introbg"
            fill
            className="object-cover"
          />
        </div>
        <div
          className={`${isFixed ? "fixed" : "absolute"} lg:hidden flex-col py-24 gap-10 pl-10 pubSans ${menuOpen ? "flex" : "hidden"} top-[72px] left-0 right-0 bg-bgblack text-3xl z-50`}
        >
          <a
            href="#intro"
            className={`${activeSection === "intro" ? "text-white" : "text-greishh"} block transition-colors duration-200`}
          >
            Intro
          </a>
          <a
            href="#about"
            className={`${activeSection === "about" ? "text-white" : "text-greishh"} block transition-colors duration-200`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`${activeSection === "skills" ? "text-white" : "text-greishh"} block transition-colors duration-200`}
          >
            Skills
          </a>
          <a
            href="#works"
            className={`${activeSection === "works" ? "text-white" : "text-greishh"} block transition-colors duration-200`}
          >
            Works
          </a>
          <a
            href="#reveiws"
            className={`${activeSection === "reveiws" ? "text-white" : "text-greishh"} block transition-colors duration-200`}
          >
            Reveiws
          </a>
          <a
            href="#contact"
            className={`${activeSection === "contact" ? "text-white" : "text-greishh"} block transition-colors duration-200`}
          >
            Contact
          </a>
        </div>
        <div
          className={`flex z-[9999999] ${isFixed ? "fixed w-[100%] translate-y-0 opacity-100" : "absolute lg:mt-10 w-[92%] "} transition-all duration-500 ease-in-out top-0 left-0 right-0 mt-0 items-center justify-between mx-auto bg-bgblack h-[72px] px-[2.6rem] rowl text-white`}
        >
          <span className="text-4xl castoro">Taiwo.</span>{" "}
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
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "intro" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] hover:text-white`}
                href="#intro"
              >
                Intro
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "about" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] hover:text-white`}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "skills" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] hover:text-white`}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "works" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] hover:text-white`}
                href="#works"
              >
                Works
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "reveiws" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] hover:text-white`}
                href="#reveiws"
              >
                Reveiws
              </a>
            </li>
            <li className="">
              <a
                className={`block pubSans font-normal text-[1.5rem] leading-[3.2rem] ${activeSection === "contact" ? "text-white" : "text-greishh"} transition-colors duration-200 px-[1.2rem] hover:text-white`}
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
              <br /> a Software developer
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
              href="#"
              // href="https://www.linkedin.com/in/iyanuoluwa-taiwo-25537632b/"
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
              className="grid animate-bounce place-content-center p-[2.1rem] border-2 border-white rounded-[50%] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(255, 255, 255, 1)",
                  transform: "",
                  msFilter: "",
                }}
                className=""
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
          <div className="mt-[5rem] lora text-[16px] md:text-[24px] leading-[3rem] md:leading-[4rem] text-justify">
            {" "}
            <p>
              {" "}
              I&apos;m a Software Developer skilled in building scalable,
              high-performance web applications using HTML, CSS, JavaScript,
              React, Next.js, Node.js, and SQL. Proficient in front-end and
              back-end development, I deliver secure, efficient solutions that
              enhance user experience and streamline processes.{" "}
            </p>{" "}
            <p>
              {" "}
              I collaborate with designers and developers to transform ideas
              into functional products, solving complex problems with clean code
              while staying current with web technologies. At Taja, as a Backend
              Developer, I build robust APIs and optimize data efficiency,
              following my work at Local Ramp where I improved application
              performance.{" "}
            </p>{" "}
            <p>
              {" "}
              Passionate about creating flawless solutions, I enjoy tackling
              challenges like building sleek portfolios or complex applications.
              In my spare time, I contribute to open-source projects and explore
              new technologies to keep growing as a developer.{" "}
            </p>{" "}
          </div>
          <div className="">
            <button
              onClick={handleDownload}
              className="uppercase w-full md:w-[45rem] h-[6rem] mt-[5rem] text-[1.4rem] font-[700] tracking-widest roboto border-2 border-bgblack bg-[#130209] text-white"
            >
              download my cv
            </button>
          </div>
          <div className="uppercase mt-[22.4rem] transform translate-z-0 text-4xl font-semibold tracking-wider roboto relative w-max">
            Work{" "}
            <div className="bg-purplink h-[2px] absolute top-[-30px] left-0 right-[-30px]"></div>
          </div>
          <WorkHistory />
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
          <h1 className="text-[2.5rem] md:text-[5.4rem] font-normal leading-[1.259] tracing-[-0.05rem] text-white text-center frank">
            My passion and goal is to help you
            <br className="hidden lg:block" /> make your company stand out
          </h1>
          <ServiceHeading
            heading="Backend Engineering"
            icon={
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="#0d9488"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="10" y1="6" x2="10.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
                <line x1="10" y1="18" x2="10.01" y2="18"></line>
              </svg>
            }
          />
          <ServicesContainer>
            <Service serviceName="Node.js / JavaScript (CommonJS & ES6) / TypeScript" />
            <Service serviceName="Scalable Microservices Architecture" />
            <Service serviceName="Idempotent & Retry-Safe System Design" />
            <Service serviceName="High-Concurrency & Rate Limiting" />
            <Service serviceName="Distributed Queue Management & Workers" />
            <Service serviceName="Monolith-to-Microservices Migration" />
          </ServicesContainer>
          <ServiceHeading
            heading="Architecture & Data"
            icon={
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="#2563eb"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
              </svg>
            }
          />
          <ServicesContainer>
            {" "}
            <Service serviceName="PostgreSQL (Schema Design, Constraints, Indexing)" />
            <Service serviceName="Redis (Caching, Locks, Distributed Queues)" />
            <Service serviceName="RESTful & Unified API Design" />
            <Service serviceName="Webhook Lifecycle & API Integration" />
            <Service serviceName="Database Migrations & Data Isolation" />
          </ServicesContainer>{" "}
          <ServiceHeading
            heading="DevOps & Cloud Reliability"
            icon={
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="#4f46e5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
            }
          />
          <ServicesContainer>
            <Service serviceName="Infrastructure-as-Code (IaC) via Terraform" />
            <Service serviceName="Containerisation (Docker, Docker Compose)" />
            <Service serviceName="Automated Regression Testing & Smoke Testing" />
            <Service serviceName="Production Observability, Logging, & Monitoring" />
            <Service serviceName="Continuous Integration / Continuous Deployment (CI/CD)" />
          </ServicesContainer>
          <ServiceHeading
            heading="Frontend Engineering"
            icon={
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="2" y1="8" x2="22" y2="8" />
                <rect
                  x="14"
                  y="11"
                  width="7"
                  height="10"
                  rx="1"
                  fill="#000000"
                />
                <path d="M6 12l-2 2 2 2" />
              </svg>
            }
          ></ServiceHeading>
          <ServicesContainer>
            <Service serviceName="Cross-Platform Mobile Development" />
            <Service serviceName="Responsive Web Dashboards & UI Components" />
            <Service serviceName="Embeddable Third-Party Widgets" />
            <Service serviceName="State Management & Real-Time Data Syncing" />
          </ServicesContainer>
          <ServiceHeading
            heading="Technical Leadership"
            icon={
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="#0891b2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            }
          ></ServiceHeading>
          <ServicesContainer>
            <Service serviceName="Technical Roadmapping & Strategy" />
            <Service serviceName="Code-Review Standards & Mentorship" />
            <Service serviceName="Multi-Tenant SaaS Development" />
            <Service serviceName="Quarterly Planning (OKR/KPI Alignment)" />
          </ServicesContainer>
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
          <p className="text-center text-[2.5rem] md:text-[5.4rem] font-[400] leading-[1.259] tracking-[-0.05rem] text-black frank mb-[7rem] md:mb-[15rem]">
            Here are some projects I have worked
            <br className="hidden md:block" /> on lately. Feel free to check
            <br className="hidden md:block" />
            them out{" "}
          </p>
          <ProjectCard
            title="LocalRamp"
            projectUrl="https://localramp.co/"
            tagline="Offramp and Onramp Payments for Emerging Markets."
            techStack="React, Node.js, PostgreSQL, Redis"
            imageSrc="/images/Localramp.png"
            description="A high-performance crypto infrastructure provider specializing in instant fiat-to-crypto onboarding and offboarding for emerging markets. The platform integrates local payment networks with top blockchain networks for secure, real-time stablecoin settlements."
            role="Lead Software Developer"
          />
        </div>
      </section>

      {/*reveiws section*/}
      <section
        id="reveiws"
        className="flex justify-center pt-[13.6rem] pb-[13.5rem] md:pt-[18.44rem] md:pb-[16rem] bg-prbg px-[3rem] relative"
      >
        <div className="absolute flex gap-[20px] bottom-[10rem] md:bottom-[13.5rem] translate-x-[50%] md:translate-x-0 right-[50%] md:right-[13rem]">
          <button
            onClick={() => {
              setReview1(true);
              // setReview2(false);
            }}
            className={`block w-[10px] h-[10px] leading-[10px] rounded-full ${review1 ? "bg-purplink" : "bg-black/40"} border-none p-0 m-0 cursor-pointer text-transparent shadow-none text-0`}
          />
          {/* <button
            onClick={() => {
              setReview1(false);
              setReview2(true);
            }}
            className={`block w-[10px] h-[10px] leading-[10px] rounded-full ${review2 ? "bg-purplink" : "bg-black/40"} border-none p-0 m-0 cursor-pointer text-transparent shadow-none text-0`}
          /> */}
        </div>

        <div
          className={`w-[89%] max-w-[1280px] ${review1 ? "commentOpen" : "commentClosed"}`}
        >
          <p className="text-[2rem] text-justify md:text-left md:text-[3rem] lg:text-[3.2rem] xl:text-[3.8rem]  font-normal leading-[1.8] roboto text-black">
            At Local Ramp, Iyanuoluwa was a skilled front-end developer,
            creating responsive and user-friendly interfaces for our currency
            conversion platform. They effectively integrated real-time data and
            optimized performance, enhancing the UI for a smooth user
            experience. his work was crucial in delivering a modern and
            efficient platform
          </p>
          <div className="flex items-center gap-6 mt-[8rem] ">
            <div className="w-[7.2rem] h-[7.2rem] relative">
              {" "}
              <Image
                src="/images/localramp_logo.jpeg"
                fill
                alt="comment"
                className="rounded-[50%] object-cover"
              />
            </div>
            <div>
              <h1 className="text-[2.4rem] leading-[1.5] roboto font-[700]">
                TJ
              </h1>
              <h6 className="text-[1.8rem] leading-[1.333] text-black/70 roboto font-normal">
                Software Engineer, LocalRamp
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
                href="https://www.linkedin.com/in/iyanuoluwa-taiwo-540823333/"
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
            <div className="text-white/10 inline-block text-[14px]">
              {" "}
              design by StyleOut
            </div>
          </div>
          <a
            href="#intro"
            className="block ml-auto hover:bg-purplink transition-colors duration-300 bg-white/5 no-underline m-0 p-0 border-0 h-[60px] w-[60px] leading-[60px] text-center text-white uppercase bg-no-repeat bg-center bg-[url('/images/icon-arrow-up.svg')] relative"
          >
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
