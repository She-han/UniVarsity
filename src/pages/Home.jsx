import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

import c1 from "../assets/1.jpeg";
import c2 from "../assets/2.jpeg";
import c3 from "../assets/3.jpeg";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode } from "swiper/modules";

const Home = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="w-full lg:ml-[25%] max-w-[1000px] xl:max-w-[1139px] p-5 md:p-6 lg:p-8 mx-auto items-center justify-between">
        <div className="flex flex-col items-center justify-between w-full">
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            loop={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, FreeMode]}
            className="w-full mx-auto h-[150px] md:h-[300px] "
          >
            <SwiperSlide>
              <div className="bg-gray-800 cursor-pointer group rounded-xl">
                <div className="flex flex-col items-start ">
                  <img
                    src={b1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 "
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-800 cursor-pointer group rounded-xl">
                <div className="flex flex-col items-start ">
                  <img
                    src={b2}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 "
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-800 cursor-pointer group rounded-xl">
                <div className="flex flex-col items-start ">
                  <img
                    src={b3}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 "
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-800 cursor-pointer group rounded-xl">
                <div className="flex flex-col items-start ">
                  <img
                    src={b4}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 "
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-full lg:ml-[25%] max-w-[1000px] xl:max-w-[1139px] p-5 md:p-6 lg:p-8 mx-auto items-center justify-between">
        <div className="flex flex-col items-start justify-start mx-auto ">
          <h2 className="flex mb-4 text-xl text-gray-600 hover:font-medium lg:text-2xl">
            Competitions
            <div className="mt-[7px] ml-4">
              <MdOutlineKeyboardDoubleArrowRight />
            </div>
          </h2>
        </div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center justify-between w-full"
        >
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, FreeMode]}
            className="w-full mx-auto"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c2}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Genesiz
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Kothalawala Defence University
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c3}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    HackElite
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    University of Moratuwa
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c2}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
      <div className="w-full lg:ml-[25%] max-w-[1000px] xl:max-w-[1139px] p-5 md:p-6 lg:p-8 mx-auto items-center justify-between">
        <div className="flex flex-col items-start justify-start mx-auto ">
          <h2 className="flex mb-4 text-xl text-gray-600 hover:font-medium lg:text-2xl">
            Workshops
            <div className="mt-[7px] ml-4">
              <MdOutlineKeyboardDoubleArrowRight />
            </div>
          </h2>
        </div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center justify-between w-full"
        >
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, FreeMode]}
            className="w-full mx-auto"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c2}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Genesiz
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Kothalawala Defence University
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c3}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    HackElite
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    University of Moratuwa
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c2}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
      <div className="w-full lg:ml-[25%] max-w-[1000px] xl:max-w-[1139px] p-5 md:p-6 lg:p-8 mx-auto items-center justify-between">
        <div className="flex flex-col items-start justify-start mx-auto ">
          <h2 className="flex mb-4 text-xl text-gray-600 hover:font-medium lg:text-2xl">
            Events
            <div className="mt-[7px] ml-4">
              <MdOutlineKeyboardDoubleArrowRight />
            </div>
          </h2>
        </div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col items-center justify-between w-full"
        >
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay, FreeMode]}
            className="w-full mx-auto"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c2}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Genesiz
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Kothalawala Defence University
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c3}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    HackElite
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    University of Moratuwa
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c2}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-5 bg-gray-800 cursor-pointer lg:p-6 group rounded-xl ">
                <div className="flex flex-col items-start ">
                  <img
                    src={c1}
                    alt="Competition 1"
                    className="w-full h-auto duration-300 rounded-lg group-hover:scale-105"
                  />
                  <h3 className="mt-4 text-lg text-gray-300 md:text-xl text-start ">
                    Code Rally
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 text-start opacity-60 ">
                    Informatics Institute of Technology
                  </p>
                  <div className="flex items-start justify-start gap-2 mt-3 text-xl text-purple-600 md:text-2xl md:gap-5 xl:gap-5 xl:text-3xl ">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.linkedin.com/in/shehan-garusingharachchi-56072a236/"
                        role="button"
                      >
                        <AiFillLinkedin />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a href="https://github.com/She-han" role="button">
                        <FaRegHeart />
                      </a>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <a
                        href="https://www.instagram.com/shehan_indu/"
                        role="button"
                      >
                        <AiFillInstagram />
                      </a>
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
