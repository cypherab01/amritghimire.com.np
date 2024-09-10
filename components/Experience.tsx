import React from "react";

const Experience = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-primary">Experience</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {/* Triad Asia Pvt. Ltd. */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Electrical Engineer at Triad Asia Pvt. Ltd.
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2022 – Current
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Responsible for handling support calls, diagnosing issues, and
            providing remote resolutions. Works with PLC, HMI, and SCADA
            software, including Allen-Bradley and Siemens systems. Utilizes
            MySQL, Linux OS, and Microsoft software for creating electrical
            drawings and solutions.
          </p>
        </li>

        {/* Internship at NEA */}
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Electrical Engineering Intern at NEA (Nepal Electricity Authority)
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022 – July 2022
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Gained hands-on experience with TOD meter installation and reading.
            Developed a practical understanding of the electrical distribution
            system, contributing to foundational knowledge in the field.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default Experience;
