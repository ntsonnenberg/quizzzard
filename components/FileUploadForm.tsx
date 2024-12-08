"use client";

import Input_03 from "./kokonutui/input-03";
import Btn01 from "./kokonutui/btn-01";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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
    console.log(response.data);
    router.push(`/quiz?response=${encodeURI(response.data.claudeReponse)}`);

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center gap-4 w-1/3"
    >
      <Input_03 setFile={setFile} />
      <Btn01 className="w-full" isLoading={isLoading}>
        Create Quiz
      </Btn01>
    </form>
  );
}
