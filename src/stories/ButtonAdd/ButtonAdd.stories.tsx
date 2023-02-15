import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonAdd  from './ButtonAdd';

export default {
  title: 'Example/ButtonAdd',
  component: ButtonAdd,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonAdd>;

const Template: ComponentStory<typeof ButtonAdd> = (args) => <ButtonAdd {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};