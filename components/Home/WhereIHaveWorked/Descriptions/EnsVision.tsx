import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Deputy Team Lead of a SOC team of 25 analysts catering for one of the leading private organisations in Sri Lanka.",
      keywords: ["Team Lead ", "SOC", "private", "Sri Lanka"],
    },
    {
      text: "Translating information from technical to executive/management terminology on a daily, weekly and monthly basis to communicate SOC status and progress to top-level management.",
      keywords: ["technical", "executive/management", "SOC status", "progress", "top-level management", "Translating"],
    },
    {
      text: "Rule logic verification and fine-tuning.",
      keywords: ["logic", "verification", "fine-tuning" ],
    },
    {
      text: "SIEM asset and log coverage assurance and quantifying through purple teaming in a simulated and live environment",
      keywords: ["asset ", "ENlog coverageS", "purple teaming ", "log coverage assurance","quantifying" ],
    },
    {
      text: "XDR monitoring, response and remediation with workstations and servers.",
      keywords: ["XDR "," monitoring"," response  ", "remediation", "workstations ", "servers", ],
    },
    {
      text: "Threat hunting co-ordination and activities for the above systems.",
      keywords: ["Threat hunting" ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          ASSOCIATE ENGINEER – INFORMATION SECURITY <span className="text-AAsecondary">@SOC</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2024 June – PRESENT</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.crypto-gen.com/", "_blank")}
          >
            crypto-gen.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
