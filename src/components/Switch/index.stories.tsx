import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";
import { Label } from "../Label";

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
	render: (args) => (
		<div className="flex items-center gap-x-2">
			<Switch id="switch" {...args} />
			<Label htmlFor="switch" className="text-xl">
				Switch
			</Label>
		</div>
	),
	args: {
		size: "md",
	},
};
