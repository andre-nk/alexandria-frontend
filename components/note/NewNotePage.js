import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { useCreateNote } from "../../hooks/useCreateNote";

const isServer = () => typeof window === "undefined";

export default function NewNotePage() {
  const router = useRouter();
  const [noteTitle, setNoteTitle] = useState("");
  const [CustomEditor, setCustomEditor] = useState(null);

  useEffect(() => {
    const { title } = router.query;
    setNoteTitle(title);

    // if (typeof window !== "undefined" && CustomEditor === null) {

    // }
  }, []);

  return (
    isServer && (
      <div className="py-8 pr-8 pl-10 min-h-screen flex bg-[rgb(247,247,247)]">
        <div className="w-full">
          <div className="relative flex w-full justify-center items-center">
            <input
              value={noteTitle}
              onChange={(e) => {
                setNoteTitle(e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  console.log(noteTitle);
                }
              }}
              className="absolute bg-transparent outline-none text-center text-md capitalize font-medium text-major-text"
            />
            <div className="w-full flex justify-between items-center">
              <button className="px-5 py-[0.4rem] flex justify-center items-center rounded-md bg-primary-white hover:bg-gray-100 duration-200 border-2 border-primary-border">
                Back
              </button>
              <button className="px-5 py-[0.4rem] flex justify-center items-center rounded-md bg-primary-white hover:bg-gray-100 duration-200 border-2 border-primary-border">
                Show toolbar
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center py-10">
            <div
              id="editorjs"
              className="w-full self-center lg:w-7/12 px-8 py-10 h-auto bg-primary-white rounded-sm drop-shadow-xl"
            ></div>
          </div>
        </div>
        {/* <div className="w-1/4">

      </div> */}
      </div>
    )
  );
}
