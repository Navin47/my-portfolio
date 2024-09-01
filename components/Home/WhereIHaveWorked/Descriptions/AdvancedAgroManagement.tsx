import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AdvancedAgroManagement() {
  const tasks = [
    {
      text: "Vice-Captain of Rugby Team (Bandaranayake College 2017-2019)",
      keywords: ["Vice-Captain"],
    },
    {
      text: "Member of the Rugby Team (Bandaranayake College 2011- 2019)",
      keywords: ["Rugby Team"],
    },
    {
      text: " Member of Sport Club (Bandaranayake College 2011-2019)",
      keywords: ["Sport Club"],
    },
    {
      text: "Member of Technology Club (Bandaranayake College 2018-2019)",
      keywords: ["Technology Club"],
    },
    {
      text: "Member of Gaming Club  (Bandaranayake College & SLIIT)",
      keywords: ["Gaming Club"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
             <span className="text-AAsecondary">Extracurricular Activities. </span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500"> </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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
