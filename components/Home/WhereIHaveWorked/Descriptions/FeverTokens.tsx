import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Led and coordinated security operations during assigned shifts, ensuring 24/7 coverage and overseeing junior analysts.",
      keywords: ["security operations "," 24/7"," overseeing" ],
    },
    {
      text: "Acted as the primary contact for security incidents, triaging and delegating tasks for efficient investigation and resolution.",
      keywords: ["security incidents"," delegating"," investigation"," resolution",],
    },
    {
      text: "Monitored SIEMs (McAfee and Fortinet), analyzing client logs based on predefined rules and escalating suspicious alerts within SLA timeframes.",
      keywords: ["(McAfee and Fortinet)"," suspicious "," SLA",],
    },
    {
      text: "Monitored additional security tools, including CrowdStrike EDR, Kaspersky Security Center, McAfee ePolicy Orchestrator, Wazuh, and Imperva SecureSphere WAFs.",
      keywords: ["CrowdStrike EDR"," Kaspersky Security Center"," McAfee ePolicy Orchestrator"," Wazuh","Imperva SecureSphere"],
    },
    {
      text: "Conducted thorough shift handovers, briefing incoming analysts on active incidents, investigations, and key security events..",
      keywords: ["shift handovers"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Junior SOC Analyst(Shift Lead)
          <span className="text-AAsecondary">@ SOC</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">2022 Sep – 2023 March </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.crypto-gen.com/", "_blank")}
          >
            crypto-gen.com
          </span>
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
