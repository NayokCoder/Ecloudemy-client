import React from "react";
import { motion } from "framer-motion";

// import BannerImg from "assets/Hero_-_Main-min.webp";

const ImgHero = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
      <div className=" xl:w-[1440px] mx-auto ">{/* <img src={BannerImg} alt="" className="w-6xl mx-auto" /> */}</div>
    </motion.div>
  );
};

export default ImgHero;
