import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SuperBerry() {
  const campusDetails = [
    {
      text: "Sri Lanka Institute Of Information Technology",
      keywords: ["Sri Lanka Institute Of Information Technology"],
    },
    {
      text: "Conducted research and published a paper at the 5th International Conference on Advancements in Computing ICAC 2023 on “Machine Learning Based Web Application Plugin for Threat Detection and IP Analysis”",
      keywords: [
        "Machine Learning Based Web Application Plugin for Threat Detection and IP Analysis",
        "research and published a paper",
      ],
    },
  ];

  const schoolDetails = [
    {
      text: "Completed high school education while engaging in Extracurricular activities.",
      keywords: ["education ", "Extracurricular"],
    },
    {
      text: "Completed G.C.E. Advanced Level ( Technology Stream 2019)",
      keywords: ["G.C.E. Advanced Level"],
    },
    {
      text: "Completed G.C.E. Ordinary Level (2016)",
      keywords: ["G.C.E. Ordinary Level "],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        {/* Degree Information */}
        <div className="flex flex-col space-y-2">
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            BSc (Hons) in Information Technology <span className="text-AAsecondary">Specializing in Cybersecurity.</span>
          </span>
          <span className="font-mono text-xs text-gray-500">2020 - 2024</span>
        </div>

        {/* Campus Details */}
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {campusDetails.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>

        {/* School Information */}
        <div className="flex flex-col space-y-2">
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Bandaranayake College Gampaha <span className="text-AAsecondary"></span>
          </span>
          <span className="font-mono text-xs text-gray-500">2011-2019</span>
        </div>

        {/* School Details */}
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {schoolDetails.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
