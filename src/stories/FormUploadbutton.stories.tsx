import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormUploadButton from '../components/FormUploadButton';

export default {
  title: 'FormUploadButton',
  component: FormUploadButton,
} as ComponentMeta<typeof FormUploadButton>;

const Template: ComponentStory<typeof FormUploadButton> = (args) => (
  <FormUploadButton {...args} />
);

const onFileChange = (file: File) => {
  console.log('onFileChange');
};
const onDelete = () => {
  console.log('onDelete');
};

export const NormalCustomStep = Template.bind({});
NormalCustomStep.args = {
  label: 'label',
  fileName: 'filename',
  loading: false,
  onDelete,
  onFileChange,
};
