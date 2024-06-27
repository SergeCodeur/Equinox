"use client";
import { CircleBlueIcon } from "@/assets/icons/SvgIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const UploadForm = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

  const onDrop = async (files: File[]) => {
    const newFiles = files.slice(0, 3);
    const updatedFiles = [...acceptedFiles, ...newFiles].slice(0, 3);
    setAcceptedFiles(updatedFiles);
  };

  const maxFilesMessage = "Max 3 files allowed";
  // const fileNotSupportedMessage = "File type not supported";
  // const dropFilesMessage = "Drop the files here...";
  const selectFilesMessage = "PDF, Word ou Pages (max 30mo)";

  const isMaxFilesReached = acceptedFiles.length === 3;

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    maxFiles: 3,
    accept: {
      "text/plain": [".txt"],
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".doc", ".docx"],
    },
    multiple: true,
    maxSize: 5 * 1024 * 1024, // 5MB in bytes
    onDrop,
  });

  const removeFile = (fileToRemove: File) => {
    const updatedFiles = acceptedFiles.filter((file) => file !== fileToRemove);
    setAcceptedFiles(updatedFiles);
  };

  const renderStatutsMessage = () => {
    if (isDragActive) {
      // if (isDragReject)
      //   return (
      //     <p className="text-center text-xl-500 text-black">
      //       {fileNotSupportedMessage}
      //     </p>
      //   );
      // if (isDragAccept)
      //   return (
      //     <p className="text-center text-xl-500 text-black">
      //       {dropFilesMessage}
      //     </p>
      //   );
      if (isMaxFilesReached)
        return (
          <p className="text-center text-xl-500 text-black">
            {maxFilesMessage}
          </p>
        );
    } else {
      return (
        <span className="flex flex-col gap-[7px]">
          <span className="text-base-600 text-white">
            Cliquez pour{" "}
            <span className="text-primary">télécharger un cours</span>
          </span>
          <span className="text-center text-xs text-white/50">
            {selectFilesMessage}
          </span>
        </span>
      );
    }
  };

  const filesUploaded = acceptedFiles.map((file) => (
    <li
      key={file.name}
      className="bg-primary px-5 rounded flex items-center justify-between min-w-[300px] w-full"
    >
      <span className="text-white">
        {file.name} - {file.size} bytes
      </span>
      <Button className="px-0" onClick={() => removeFile(file)}>
        delete
      </Button>
    </li>
  ));

  const filesLength = filesUploaded.length;

  const handleUploaedFiles = async () => {
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      // formData.append("folder", id);
      formData.append("name", file.name);
      formData.append("file", file);
    });
  };

  return (
    <>
      <div
        className={cn(
          "rounded-[9px] border border-white/10 border-solid grid w-full justify-center items-center py-8 px-[115px] bg-secondary cursor-pointer"
          // {
          //   "bg-green-100 border-green-300": isDragAccept,
          //   "bg-red-100 border-red-300":
          //     isDragReject || (isDragActive && isMaxFilesReached),
          // }
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="gap-4 flex flex-col items-center justify-center w-full">
          <span
            className={`flex justify-center items-center w-12 h-12 bg-gray-100 rounded-full ${
              isDragActive && "hidden"
            }`}
          >
            <CircleBlueIcon width={44} height={44} />
          </span>
          {renderStatutsMessage()}
        </div>
      </div>
      {filesLength > 0 && (
        <ul className="rounded border-x-2 border-b-2 border-dashed border-gray-100 w-full p-2 flex gap-1">
          {filesUploaded}
        </ul>
      )}
    </>
  );
};

export default UploadForm;
