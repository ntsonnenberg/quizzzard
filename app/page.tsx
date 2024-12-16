import FileUploadForm from "@/components/FileUploadForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="font-bold text-4xl">Welcome to QuizZzarD</h1>
        <h2 className="font-thin">Please upload class notes to analyze</h2>
      </div>
      <FileUploadForm />
    </div>
  );
}
