import Image from "next/image";
import FloatingAction from "./components/organisms/Quicks";
import FloatingActionButton from "./components/atoms/QuickButton";
import Quicks from "./components/organisms/QuicksContainer";

export default function Home() {
  const onTaskClick = async () => {
    "use server";
    console.log("clicked");
  };

  const onFloatingBtnClick = async () => {
    "use server";
    console.log("expand");
  };
  return (
    <main className=" min-h-[100vh] bg-black">
      <Quicks />
    </main>
  );
}
