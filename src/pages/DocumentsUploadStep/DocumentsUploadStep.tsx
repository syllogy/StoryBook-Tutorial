import React, { useContext, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Button, { ButtonType } from "../../components/Button";
import DropDownFilter from "../../components/DropDownFilter";
import langageContext from "../../context/langage-context";
import { LanguageCode, LANGUAGES } from "../../services/i18n/intl";
import {
  DocumentsStepContainer,
  DocumentsStepTitle,
  FileInput,
  Spinner,
  StepButtonContainer,
  Header,
} from "./DocumentsUploadStep.style";

export interface Document {
  id: string;
  fileName: string | null;
  label: string;
  loading: boolean;
  error: boolean;
}

const DOCUMENTS: Document[] = [
  {
    id: "00",
    fileName: "",
    label: "Label 1",
    loading: false,
    error: false,
  },
  {
    id: "01",
    fileName: "",
    label: "Label 2",
    loading: false,
    error: false,
  },
];

const DocumentsUploadStep: React.FunctionComponent<{}> = () => {
  const intl = useIntl();
  const { locale, changeLocaleHandler } = useContext(langageContext);
  const [documents, setDocuments] = useState(DOCUMENTS);

  const hasInProgressOperation = React.useMemo(
    () => documents.filter((doc) => doc.loading).length > 0,
    [documents]
  );

  const onFileChange = (file: File, id: string) => {
    console.log("onFileChange");
    const documentsClone = [...documents];
    const doc = documentsClone.find((doc) => doc.id === id);
    if (doc) {
      doc.fileName = file.name;
    }
    setDocuments(documentsClone);
  };

  const onDeleteFile = (id: string) => {
    console.log("onDelete");
    const documentsClone = [...documents];
    const doc = documentsClone.find((doc) => doc.id === id);
    if (doc) {
      doc.fileName = "";
    }
    setDocuments(documentsClone);
  };

  const onValidateStep = () => {
    console.log("onFileChange");
  };

  const onCancelStep = () => {
    console.log("onDelete");
  };

  const handleChangeFromCity = (languageCode: LanguageCode) => {
    changeLocaleHandler(languageCode);
  };
  return (
    <DocumentsStepContainer>
      <Header>
        <DocumentsStepTitle>
          <FormattedMessage id="document-step.title" />
        </DocumentsStepTitle>
        <DropDownFilter
          options={Object.values(LANGUAGES)}
          filter={locale}
          handleChange={handleChangeFromCity}
          placeholder={intl.formatMessage({ id: "document-step.language" })}
        />
      </Header>
      <div>
        {documents.map(({ id, fileName, label, loading, error }) => (
          <FileInput
            key={id}
            id={id}
            fileName={fileName}
            loading={loading}
            error={error}
            label={label}
            onFileChange={onFileChange}
            onDelete={onDeleteFile}
          />
        ))}
      </div>
      <StepButtonContainer>
        <Button
          buttonType={ButtonType.SUBMIT}
          text="Next Step"
          isDisabled={hasInProgressOperation}
          endIcon={hasInProgressOperation ? <Spinner size={20} /> : undefined}
          onClick={() => onValidateStep()}
        />
        <Button
          type="button"
          buttonType={ButtonType.FILLED}
          text="Cancel"
          onClick={() => onCancelStep()}
        />
      </StepButtonContainer>
    </DocumentsStepContainer>
  );
};

export default DocumentsUploadStep;
