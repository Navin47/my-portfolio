import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

const Startup = (props) => {
  let WidthBy2 = 0;
  let HeightBy2 = 0;
  let greaterThanSmall = false;

  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      WidthBy2 = window.innerWidth / 2 - 48 - 20;
      HeightBy2 = window.innerHeight / 2 - 44;
      greaterThanSmall = true;
    } else {
      WidthBy2 = window.innerWidth / 2 - 28;
      HeightBy2 = window.innerHeight / 2 - 40;
    }

    console.log("width by 2: ", WidthBy2);
  }

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ opacity: { delay: 3.5, duration: 0 } }}  // Reduced delay from 4.9 to 3.5
      className="absolute h-full w-full flex justify-center items-center bg-StartupBackground"
    >
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0, scale: "100%" }}
        animate={{ opacity: [1, 0, 1], x: -WidthBy2, y: -HeightBy2, scale: greaterThanSmall ? "57%" : "50%" }}
        transition={{
          opacity: { delay: 2.5, duration: 1 },  // Reduced delay from 3 to 2.5 and duration from 1.5 to 1
          x: { duration: 0.3, delay: 3.5 },  // Reduced duration from 0.5 to 0.3 and delay from 4.5 to 3.5
          y: { duration: 0.3, delay: 3.5 },  // Reduced duration from 0.5 to 0.3 and delay from 4.5 to 3.5
          scale: { duration: 0.3, delay: 3.5 },  // Reduced duration from 0.5 to 0.3 and delay from 4.5 to 3.5
        }}
        className="relative h-24 w-24 flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: 38 }}
          transition={{
            scale: { duration: 1 },  // Reduced duration from 1.5 to 1
            rotate: { delay: 0.3, duration: 0.3 },  // Reduced delay from 0.5 to 0.3 and duration from 0.5 to 0.3
            x: { delay: 0.5, duration: 0.6 },  // Reduced delay from 0.8 to 0.5 and duration from 1 to 0.6
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, x: 0 }}
          animate={{ scale: 1, rotate: 90, x: -39 }}
          transition={{
            scale: { duration: 1 },  // Reduced duration from 1.5 to 1
            rotate: { delay: 0.3, duration: 0.3 },  // Reduced delay from 0.5 to 0.3 and duration from 0.5 to 0.3
            x: { delay: 0.5, duration: 0.6 },  // Reduced delay from 0.8 to 0.5 and duration from 1 to 0.6
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: 18, y: -34 }}
          transition={{
            opacity: { delay: 1.5, duration: 0 },  // Reduced delay from 2 to 1.5
            scale: { duration: 2 },  // Reduced duration from 2.5 to 2
            rotate: { delay: 0.3, duration: 0.3 },  // Reduced delay from 0.5 to 0.3 and duration from 0.5 to 0.3
            y: { delay: 0.8, duration: 1.5 },  // Reduced delay from 1.2 to 0.8 and duration from 2 to 1.5
            x: { delay: 1, duration: 0.4 },  // Reduced delay from 1.5 to 1 and duration from 0.5 to 0.4
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: -18, y: -34 }}
          transition={{
            opacity: { delay: 1.5, duration: 0 },  // Reduced delay from 2 to 1.5
            scale: { duration: 2 },  // Reduced duration from 2.5 to 2
            rotate: { delay: 0.3, duration: 0.3 },  // Reduced delay from 0.5 to 0.3 and duration from 0.5 to 0.3
            y: { delay: 0.8, duration: 1.5 },  // Reduced delay from 1.2 to 0.8 and duration from 2 to 1.5
            x: { delay: 1, duration: 0.4 },  // Reduced delay from 1.5 to 1 and duration from 0.5 to 0.4
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: -35, x: 18, y: 34 }}
          transition={{
            opacity: { delay: 1.5, duration: 0 },  // Reduced delay from 2 to 1.5
            scale: { duration: 2 },  // Reduced duration from 2.5 to 2
            rotate: { delay: 0.3, duration: 0.3 },  // Reduced delay from 0.5 to 0.3 and duration from 0.5 to 0.3
            y: { delay: 0.8, duration: 1.5 },  // Reduced delay from 1.2 to 0.8 and duration from 2 to 1.5
            x: { delay: 1, duration: 0.4 },  // Reduced delay from 1.5 to 1 and duration from 0.5 to 0.4
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1.05, rotate: 35, x: -18, y: 34 }}
          transition={{
            opacity: { delay: 1.5, duration: 0 },  // Reduced delay from 2 to 1.5
            scale: { duration: 2 },  // Reduced duration from 2.5 to 2
            rotate: { delay: 0.3, duration: 0.3 },  // Reduced delay from 0.5 to 0.3 and duration from 0.5 to 0.3
            y: { delay: 0.8, duration: 1.5 },  // Reduced delay from 1.2 to 0.8 and duration from 2 to 1.5
            x: { delay: 1, duration: 0.4 },  // Reduced delay from 1.5 to 1 and duration from 0.5 to 0.4
          }}
          className="absolute h-2 w-12 bg-AAsecondary rounded"
        ></motion.div>
        <motion.span
          initial={{ scale: 0, y: -2, x: -8 }}  // Adjusted initial positioning for "N"
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 1, duration: 1 } }}  // Adjust delay and duration to sync with other animations
          className="text-AAsecondary font-Text2 text-4xl absolute"
        >
          N
        </motion.span>
        <motion.span
          initial={{ scale: 0, y: -2, x: 12 }}  // Adjusted initial positioning for "J"
          animate={{ scale: 1 }}
          transition={{ scale: { delay: 1, duration: 1 } }}  // Adjust delay and duration to sync with other animations
          className="text-AAsecondary font-Text2 text-4xl absolute"
        >
          J
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Startup;
