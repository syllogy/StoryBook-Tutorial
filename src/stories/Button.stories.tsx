import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonType } from '../components/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const CancelButton = Template.bind({});
CancelButton.args = {
  buttonType: ButtonType.CANCEL,
  text: 'click me ',
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  buttonType: ButtonType.SUBMIT,
  text: 'click me ',
};
