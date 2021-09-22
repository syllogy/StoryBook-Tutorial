import React from 'react';
import { CloudUpload } from '@material-ui/icons';
import { FormattedMessage } from 'react-intl';
import UploadIcon from './UploadIcon';
import { IconContainer, IconText } from './CustomUploadIcon.style';

interface Props {
  uploaded: boolean;
}
const CustomUploadIcon: React.FunctionComponent<Props> = ({ uploaded }) => {
  return uploaded ? (
    <IconContainer>
      <CloudUpload />
      <IconText>
        <FormattedMessage id="file-upload.upload-btn" />
      </IconText>
    </IconContainer>
  ) : (
    <UploadIcon />
  );
};

export default CustomUploadIcon;
