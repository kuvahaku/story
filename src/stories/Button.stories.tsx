import type { Meta, StoryObj } from "storybook-solidjs";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: { table: { disable: true } }, // disable className from being shown
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "storybook-button storybook-button--primary",
    label: "Primary",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NZL0ZFjHwiQgTCUgb1bhPo/chromatic-test?type=design&node-id=1-6&mode=dev",
      allowFullscreen: true,
    },
  },
};

export const Secondary: Story = {
  args: {
    className: "storybook-button storybook-button--secondary",
    label: "Secondary",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/NZL0ZFjHwiQgTCUgb1bhPo/chromatic-test?type=design&node-id=121-10&mode=dev",
    },
  },
};
