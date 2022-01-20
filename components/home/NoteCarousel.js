import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import NoteCard from "./NoteCard"

export default function NotesCarousel({
    swiperRef,
    swiperActiveIndex,
    setSwiperActiveIndex,
    setIsSwiperEnded
}) {
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={3}
      ref={swiperRef}
      onReachEnd={() => {
        setIsSwiperEnded(true);
      }}
      onActiveIndexChange={(swiper) => {
        if (swiperActiveIndex > swiper.activeIndex) {
          setIsSwiperEnded(false);
        }
        setSwiperActiveIndex(swiper.activeIndex);
      }}
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
  );
}
