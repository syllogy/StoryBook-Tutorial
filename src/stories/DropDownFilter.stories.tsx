import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropDownFilter from '../components/DropDownFilter';
import { LanguageCode, LANGUAGES } from '../services/i18n/intl';

export default {
  title: 'DropDownFilter',
  component: DropDownFilter,
} as ComponentMeta<typeof DropDownFilter>;

const Template: ComponentStory<typeof DropDownFilter> = (args) => (
  <DropDownFilter {...args} />
);

const handleChange = (cityCode: LanguageCode) => {
  console.log('zak');
};

export const NormalDropDownFilter = Template.bind({});
NormalDropDownFilter.args = {
  options: Object.values(LANGUAGES),
  filter: LanguageCode.EN,
  placeholder: 'placeholder',
  handleChange,
};
