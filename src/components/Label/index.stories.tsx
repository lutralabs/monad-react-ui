import type { Meta, StoryObj } from "@storybook/react";
import { Label } from ".";

const meta: Meta<typeof Label> = {
	title: "Components/Label",
	component: Label,
	parameters: {
		layout: "centered",
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Custom Label",
	},
};
