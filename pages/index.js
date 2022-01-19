import Image from "next/image";
import { Fragment, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import NoteCard from "../components/home/NoteCard";

export default function Home() {

  const swiperRef = useRef(null);

  return (
    <Fragment>
      <div className="flex flex-col h-[90vh] bg-white relative justify-center align-middle items-center lg:w-full p-8 pt-0">
        <div className="z-10 lg:w-7/12 flex flex-col">
          <div className="px-6 pb-6 self-center">
            <Image src="/logo-text.png" height={90.5} width={422} />
          </div>
          <div>
            <form className="w-full h-14 bg-primary-white border border-minor-text rounded-xl flex align-middle px-4 mb-6">
              <IoSearch className="self-center mr-4" size={18} />
              <input
                type="text"
                placeholder='Try "React"'
                className="bg-transparent w-full focus:outline-none"
              />
            </form>
          </div>
          <p className="font-light text-major-text text-center">
            Dedicated <span className="font-semibold">space</span> for your
            personal programming-related notes.
          </p>
        </div>
        <Image src="/ornament.svg" layout="fill" className="z-0 object-cover" />
      </div>
      <div className="flex flex-col pl-10 py-16 w-full bg-[#f7f7f7]">
        <h2 className="text-3xl font-semibold">Featured Notes</h2>
        <div className="flex w-full pt-6">
          <Swiper
            spaceBetween={32}
            slidesPerView={3}
            ref={swiperRef}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <NoteCard
                title={"Flutter: loop in build() method"}
                author={"Andreas Notokusumo"}
                isStarred={true}
                tags={["flutter", "mobile"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NoteCard
                title={"Flutter: loop in build() method"}
                author={"Andreas Notokusumo"}
                isStarred={false}
                tags={["flutter", "mobile"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NoteCard
                title={"Flutter: loop in build() method"}
                author={"Andreas Notokusumo"}
                isStarred={false}
                tags={["flutter", "mobile"]}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NoteCard
                title={"Flutter: loop in build() method"}
                author={"Andreas Notokusumo"}
                isStarred={false}
                tags={["flutter", "mobile"]}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <button
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
        >
          Click
        </button>
      </div>
    </Fragment>
  );
}
