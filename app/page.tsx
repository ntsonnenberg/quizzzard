import FileUploadForm from "@/components/FileUploadForm";
import Btn10 from "@/components/kokonutui/btn-10";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <Btn10 defaultMode="light" className="absolute top-10 right-10" />
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-bold text-4xl">Welcome to QuizZzarD</h1>
        <h2 className="font-thin">Please upload class notes to analyze</h2>
      </div>
      <FileUploadForm />
    </div>
  );
}
