import Image from "next/image";
import { Fragment} from "react";
import { IoSearch } from "react-icons/io5";

import NotesCarouselWrapper from "../components/home/NoteCarouselWrapper";
import Footer from "../components/navigation/Footer";

export default function Home() {
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
      <div className="py-16 space-y-20 w-full bg-[rgb(247,247,247)] ">
        <NotesCarouselWrapper headline={"Recent notes"} link={"/notes"} />
        <NotesCarouselWrapper headline={"Featured notes"} link={"/notes"} />
      </div>
      <Footer />
    </Fragment>
  );
}
