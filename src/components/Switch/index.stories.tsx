import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
	title: "Components/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: {
			options: ["md", "sm", "lg"],
			control: { type: "radio" },
		},
		disabled: {
			control: { type: "boolean" },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "md",
	},
};
