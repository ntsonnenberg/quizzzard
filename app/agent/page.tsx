import FileUploadForm from "@/components/FileUploadForm";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-10 justify-center items-center h-screen">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-6xl text-primary">
            Welcome to Quizzzard
          </h1>
          <h2 className="font-thin text-2xl">
            Please upload class notes to analyze
          </h2>
        </div>
        <FileUploadForm />
      </div>
    </div>
  );
}
