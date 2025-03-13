import FileUploadForm from "@/components/FileUploadForm";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center mb-20">
      <div className="flex flex-col gap-4 text-center items-center">
        <h1 className="font-bold text-3xl lg:text-6xl text-primary">
          Welcome to Quizzzard
        </h1>
        <h2 className="font-bold text-lg lg:text-2xl">
          Please upload class notes to analyze
        </h2>
      </div>
      <FileUploadForm />
    </div>
  );
}
