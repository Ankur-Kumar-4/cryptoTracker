import React from "react";
import Button from "../common/Button";
import gradient from "../../assets/gradient.png";
import phone from "../../assets/phone.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className=" bg-black h-[171vw] md:h-[105vh] flex md:flex-row flex-col">
      <div className="flex flex-col">
        <motion.h1 className="text-white md:text-8xl text-5xl font-bold md:mt-16 mt-10 ms-12 text-stroke">
          Track Crypto
        </motion.h1>
        <motion.h1
          className="text-blue md:text-8xl text-5xl font-bold md:mt-7 mt-2 ms-12 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="text-grey mt-6 ms-12 text-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="flex ms-12 gap-6 md:mt-11 mt-7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Link to="/dashboard">
            <Button text="Dashboard" type="btn" />
          </Link>
          <Button text="share" type="outlined" />
        </motion.div>
      </div>
      <div className="mt-24 md:mt-[14vh] ms-[35vw] md:ms-[auto] w-[30%] relative bottom-3 left-0">
        <motion.img
          className=" md:h-auto md:w-[24vw] absolute z-10 md:-left-14 md:-top-12 -left-8 top-1"
          src={phone}
          alt="phone image"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />

        <img
          className="w-[70vw] md:w-[20vw] absolute"
          src={gradient}
          alt="gradient"
        />
      </div>
    </div>
  );
}

export default MainComponent;
