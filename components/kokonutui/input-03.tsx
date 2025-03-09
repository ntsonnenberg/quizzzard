"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Upload, X, FileText } from "lucide-react";
import { useFileInput } from "@/hooks/use-file-input";
import Image from "next/image";

interface Props {
  setFile: (file: File) => void;
}

export default function Input_03({ setFile }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const {
    fileName,
    fileInputRef,
    clearFile,
    error,
    validateAndSetFile,
    fileSize,
  } = useFileInput({
    accept:
      "image/*,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    maxSize: 20,
  });

  function handleFile(file: File) {
    validateAndSetFile(file);
    setFile(file);
    if (!error) {
      simulateUpload(file);
    }
  }

  function simulateUpload(file: File) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result as string);
          };
          reader.readAsDataURL(file);
        } else if (file.type === "application/pdf") {
          setPreview("/images/pdf-icon.jpg");
        }
      }
    }, 100);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) return;

    handleFile(droppedFile);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    handleFile(selectedFile);
  }

  function removeFile() {
    clearFile();
    setPreview(null);
    setUploadProgress(0);
  }

  return (
    <div className="w-full max-w-md space-y-2">
      <label className="text-sm font-medium text-muted-foreground">
        Upload file (Images, PDFs, Word Docs)
      </label>
      <div
        className={cn(
          "relative group cursor-pointer",
          "rounded-lg border-2 border-dashed",
          "transition-colors duration-200",
          isDragging
            ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10"
            : "border-muted-foreground"
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
        aria-label="Upload file"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,.doc,.docx,application/pdf"
          onChange={handleChange}
          className="hidden"
          name="file"
        />

        <div className="p-8 space-y-4">
          {!fileName ? (
            <div className="flex flex-col items-center gap-2">
              <Upload className="w-8 h-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Drag and drop or click to upload
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              {preview ? (
                <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                  <Image
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    width={50}
                    height={50}
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center">
                  <FileText className="w-8 h-8 text-muted-foreground" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {fileName || "No file selected"}
                </p>
                <p className="text-xs text-zinc-500">
                  {fileSize
                    ? `${(fileSize / 1024 / 1024).toFixed(2)} MB`
                    : "0 MB"}
                </p>
                {uploadProgress < 100 && (
                  <div className="mt-2 h-1 w-full bg-muted-foreground rounded-full overflow-hidden">
                    <div
                      className="h-full bg-secondary-variant transition-all duration-200"
                      style={{
                        width: `${uploadProgress}%`,
                      }}
                    />
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="p-1 hover:bg-muted rounded"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
