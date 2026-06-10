import React from "react";
import ExperienceCard, { ExperienceCardProps } from "./experience-card";

export default function WorkHistory() {
  const experiences: ExperienceCardProps[] = [
    {
      dateRange: "January 2023 – September 2024",
      companyName: "Localramp",
      roleTitle: "Lead Software Developer / Full-Stack Engineer",
      description: `When I joined LocalRamp as Lead Developer, I wore two main hats. I stepped in to lead our backend engineering team, while simultaneously operating as a full-stack engineer to bridge our entire product together. On the backend, I led the team in architecting a high-security fiat-to-crypto gateway, ensuring our infrastructure could safely handle automated payout logic and high-concurrency transaction volumes.\n\nOn the frontend, I took complete ownership of building our core infrastructure, user dashboards, and embeddable widgets from scratch. My goal was to take those complex blockchain data layers and turn them into clean, lightning-fast, responsive interfaces. By leading the backend strategy and executing the frontend delivery, I was able to ensure our real-time payment APIs and user-facing dashboards worked together perfectly without missing a beat.`,
    },
    {
      dateRange: "September 2024 – Present",
      companyName: "Taja",
      roleTitle: "Backend Engineer",
      description: `At Taja, I joined as a Backend Engineer focused on making sure our core systems and client applications ran smoothly and reliably. My day-to-day was centered around designing, building, and maintaining the RESTful APIs that served as the backbone for our frontend services, ensuring data flowed seamlessly across our platforms. One of my favorite wins during my time there was diving deep into our database schemas, query logic, and server-side operations to uncover performance bottlenecks. By refactoring inefficient database queries and streamlining our data delivery models, I managed to shave 10% off our overall platform load times, which gave our data processing efficiency a massive boost and significantly improved the end-user experience. Beyond the database level, I collaborated heavily with our frontend developers and UI/UX designers, acting as the primary technical bridge to make sure our complex backend functionality integrated perfectly with clean, responsive, and high-performing user-facing features.`,
    },
    {
      dateRange: "October 2025 – May 2026", // Adjust these months to match your actual timeline
      companyName: "Kite",
      roleTitle: "Technical Lead & Full-Stack Engineer (Contract)",
      description: `At Kite, a borderless fintech platform offering global bank accounts and virtual dollar cards, I stepped in as Technical Lead and Senior Full-Stack Engineer for their enterprise infrastructure layer. I directed a team of three engineers to establish our technical roadmap, code-review standards, and quarterly planning workflows, keeping system uptime at a rock-solid 99.9%. On the backend, I architected a unified API layer that integrated major payment networks like The Graph and Hifi Bridge, streamlining complex financial rails into a single interface. I also designed a scalable microservices architecture to execute a zero-downtime migration from a legacy monolith, which successfully slashed p99 latency by 40%. To ensure stability, I introduced automated regression testing across all payment flows—cutting production bug escape rates by over 50%—and adopted Terraform and Docker Compose to cut environment provisioning times down to under 30 minutes.\n\nOn the frontend, I co-developed the cross-platform mobile application to ensure seamless state management and real-time syncing with our unified APIs. By optimizing mobile rendering and data-fetching strategies, I delivered a responsive user experience that significantly lowered battery consumption on target devices. Ultimately, my full-stack ownership bridged the gap between complex financial infrastructure and intuitive UI components, accelerating global transaction completion rates across the platform.`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
}
