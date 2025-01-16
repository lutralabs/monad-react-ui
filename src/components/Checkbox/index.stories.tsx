import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { Label } from "../Label";

const meta: Meta<typeof Checkbox> = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	argTypes: {
		size: {
			options: ["md", "sm"],
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
			<Checkbox id="Checkbox" {...args} />
			<Label htmlFor="Checkbox" className="text-lg font-medium text-gray-40">
				Checkbox
			</Label>
		</div>
	),
	args: {
		size: "md",
	},
};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex flex-col gap-y-4">
			<div className="flex items-center gap-x-2">
				<Checkbox id="checkbox-small" size={"sm"} />
				<Label
					htmlFor="checkbox-small"
					className="font-medium text-md text-gray-40"
				>
					Checkbox
				</Label>
			</div>
			<div className="flex items-center gap-x-2">
				<Checkbox id="checkbox-medium" size={"md"} />
				<Label
					htmlFor="checkbox-medium"
					className="text-lg font-medium text-gray-40"
				>
					Checkbox
				</Label>
			</div>
		</div>
	),
	args: {
		size: "md",
	},
};
