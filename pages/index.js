import Image from "next/image";
import { IoSearch } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col h-[90vh] relative justify-center align-middle items-center lg:w-full p-8 pt-0">
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
      <div>
        <h2 className="text-lg text-red-50">WOi leng</h2>
      </div>
    </div>
  );
}
