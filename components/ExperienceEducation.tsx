import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import Divider from "./ui/Divider";

export default function ExperienceEducation() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Experience & Education</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Education Section */}
        <div className="w-full md:w-1/2">
          <Education />
        </div>
        {/* Experience Section */}

        <div className="block md:hidden">
          <Divider />
        </div>

        <div className="w-full md:w-1/2">
          <Experience />
        </div>
      </div>
    </section>
  );
}
