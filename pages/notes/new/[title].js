import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Fragment } from "react";

export default function NewNotePage() {
  const router = useRouter();
  const { title } = router.query;

  let CustomEditor;
  if (typeof window !== "undefined") {
    CustomEditor = dynamic(
      () => import("../../../components/note/CustomNoteEditor"),
      { ssr: false }
    );
  }

  return (
    <Fragment>
      <p>{title}</p>
      <div id="editorjs-container" className="hidden">
        {CustomEditor && <CustomEditor />}
      </div>
      <div id="editorjs"></div>
    </Fragment>
  );
}
