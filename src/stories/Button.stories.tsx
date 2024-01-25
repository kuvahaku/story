import type { Meta, StoryObj } from "storybook-solidjs";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NZL0ZFjHwiQgTCUgb1bhPo/Untitled?type=design&node-id=1-6&mode=design&t=Whhgjc1nyb1TUZdV-11",
      allowFullscreen: true,
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
};
