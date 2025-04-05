import type { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button.atom';

export default {
  component: Button,
  title: 'Components/Button',
  args: { variant: { style: 'outline' } },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  return <Button {...args}>Submit</Button>;
};

export const Outline = Template.bind({});
