import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button Atomic',
  tags: ['autodocs'],
};

export const Primary: StoryObj<typeof meta> = {
  args: {
    variant: 'btn-primary',
    children: 'btn-primary',
    className: 'p-7',
  },
};

export const Other: StoryObj<typeof meta> = {
  args: {
    variant: 'btn-success',
  },
  render: (args) => (
    <Button {...args} style={{ color: 'red' }}>
      OTHER
    </Button>
  ),
};
export const Others: StoryObj<typeof meta> = {
  render: () => (
    <div>
      <Button variant='btn-primary' style={{ color: 'red' }}>
        OTHER
      </Button>
    </div>
  ),
};

export default meta;
