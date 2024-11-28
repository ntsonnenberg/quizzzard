import FileInput from "@/components/FileInput";
import Btn01 from "@/components/kokonutui/btn-01";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-bold text-4xl">Welcome to Quizzard</h1>
        <h2 className="font-thin">Please upload a notes to analyze</h2>
      </div>
      <FileInput />
      <Btn01 className="w-2/3">Create Quiz</Btn01>
    </div>
  );
}
