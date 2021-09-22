import React, { useState } from "react";
import { Delete as DeleteIcon } from "@material-ui/icons";
import {
  FileInputContainer,
  TextContainer,
  UploadButton,
  DeleteButton,
  Spinner,
} from "./FormUploadButton.style";
import CustomUploadIcon from "./UploadIcon";

export interface Props {
  id: string;
  label: string;
  fileName: string | null;
  className?: string;
  loading?: boolean;
  onFileChange(file: File, id: string): void;
  onDelete(id: string): void;
}

const FormButtonUpload: React.FunctionComponent<Props> = ({
  id,
  className,
  label,
  fileName,
  onFileChange,
  loading,
  onDelete,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [fileLoading, setFileLoading] = useState(loading);
  const handleFileChange = () => {
    if (inputRef.current === null) return;
    inputRef.current.value = "";
    inputRef.current.click();
  };

  const handleFileDelete = () => {
    onDelete(id);
  };

  React.useEffect(() => {
    const { current } = inputRef;

    const handleFileChange = (): void => {
      if (
        current === null ||
        current.files === null ||
        current.files.length === 0
      )
        return;

      const file = current.files[0];
      setFileLoading(true);
      setTimeout(() => {
        setFileLoading(false);
        onFileChange(file, id);
      }, 1000);
    };

    current && current.addEventListener("change", handleFileChange);

    return () => {
      current && current.removeEventListener("change", handleFileChange);
    };
  }, [inputRef, onFileChange, id]);

  return (
    <FileInputContainer className={className}>
      <input hidden type="file" ref={inputRef} />
      <UploadButton
        component="span"
        variant="contained"
        uploaded={Boolean(fileName)}
        endIcon={<CustomUploadIcon uploaded={Boolean(fileName)} />}
        onClick={handleFileChange}
        disabled={fileLoading}
      >
        <TextContainer uploaded={Boolean(fileName)}>
          <span className="button-label"> {label}</span>
          <span className="button-typohraphy">{fileName || label}</span>
        </TextContainer>
      </UploadButton>
      {fileLoading ? (
        <Spinner size={20} />
      ) : (
        fileName && (
          <DeleteButton onClick={handleFileDelete}>
            <DeleteIcon />
          </DeleteButton>
        )
      )}
    </FileInputContainer>
  );
};

export default FormButtonUpload;
