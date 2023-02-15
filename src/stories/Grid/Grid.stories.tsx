import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from './Grid';

export default {
  title: 'Example/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const LoggedOut = Template.bind({});


