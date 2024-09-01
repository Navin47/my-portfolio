import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
  const tasks = [
    {
      text: "Demonstrated a commitment to continuous learning, actively engaging in ongoing training to stay abreast of evolving SOC technologies and best practices",
      keywords: ["continuous learning"," actively engaging"," SOC"," best practices",],
    },
    {
      text: "Monitored SIEMs, analyzing various client logs according to pre-defined rules and procedures.",
      keywords: [" SIEMs"," pre-defined rules "],
    },
    {
      text: "Investigate new alerts from SIEMs ensuring thorough analysis before escalating suspicious findings to respective clients within SLA timeframes.",
      keywords: ["new alerts"," escalating suspicious"," SLA ",,],
    },
    {
      text: "Authored detailed threat intelligence reports, delivering actionable insights on emerging threats.",
      keywords: ["threat intelligence reports",],
    },

  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Trainee SOC Analyst
          <span className="text-AAsecondary">@ SOC</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2022 March – 2023 Sep </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
