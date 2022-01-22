import dynamic from "next/dynamic";
import NewNotePage from "../../../components/note/NewNotePage";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../../../components/note/NewNotePage"),
  { ssr: false }
);

const isServer = () => typeof window === "undefined";

export default function NewNoteWrapper() {
  return <div>{isServer && <DynamicComponentWithNoSSR />}</div>;
}
