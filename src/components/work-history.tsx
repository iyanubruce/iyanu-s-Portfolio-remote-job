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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
}
