import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    title: "Electrical AutoCAD System Design",
    description:
      "Designing electrical systems using AutoCAD to create detailed and precise drawings for various projects.",
  },
  {
    title: "PLC and HMI Design",
    description:
      "Developing PLC and HMI systems using Allen Bradley and Siemens PLCs to control and automate industrial processes.",
  },
  {
    title: "Ignition Vision Design",
    description:
      "Creating visualization solutions using Ignition Vision to provide real-time monitoring and control of industrial systems.",
  },
  {
    title: "Power System Analysis",
    description:
      "Conducting studies and simulations to evaluate the stability, reliability, and efficiency of electrical power systems.",
  },
  {
    title: "Renewable Energy Systems",
    description:
      "Designing and implementing systems for harnessing renewable energy sources such as solar and wind power.",
  },
  {
    title: "Electrical Safety and Compliance",
    description:
      "Ensuring electrical systems and installations comply with safety standards and regulations to prevent hazards.",
  },
  {
    title: "Industrial Automation",
    description:
      "Implementing automated systems for manufacturing processes to improve efficiency and precision.",
  },
  {
    title: "Energy Management Systems",
    description:
      "Developing systems to monitor and optimize energy usage in industrial and commercial settings.",
  },
];

export default function Skills() {
  return (
    <section className="py-2 md:py-4 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="w-full max-w-sm bg-primary-foreground border border-gray-200 rounded-lg shadow transform transition-transform duration-300 hover:scale-95"
          >
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
