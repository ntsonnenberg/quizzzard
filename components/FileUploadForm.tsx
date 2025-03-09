"use client";

import Input_03 from "./kokonutui/input-03";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import MorphingText from "./eldoraui/morphingtext";

export default function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleFormSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsLoading(true);
    const data = new FormData();
    if (!file) {
      return;
    }

    data.append("file", file);

    const response = await axios.post("/api/process-file", data);
    router.push(`/quiz?response=${encodeURI(response.data.text)}`);

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center gap-4 w-2/3"
    >
      <div className="flex flex-col gap-4 w-2/3 items-center">
        <Input_03 setFile={setFile} />
        <button className="primary filled py-2 mt-6 rounded-lg px-4 flex gap-2 items-center">
          Create Quiz {isLoading && <span className="button-loader"></span>}
        </button>
      </div>
      {isLoading && (
        <div className="w-full pt-20">
          <MorphingText
            texts={[
              "Processing File",
              "Extracting Text",
              "Injesting Context",
              "Analyzing Notes",
              "Preparing Questions",
              "Learning Content",
              "Writing Phrases",
            ]}
          />
        </div>
      )}
    </form>
  );
}
