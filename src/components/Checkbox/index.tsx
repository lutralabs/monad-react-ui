"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";

const checkboxVariants = cva(
	"peer shrink-0 rounded-[4px] border-2 border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white",
	{
		variants: {
			size: {
				sm: "h-[20px] w-[20px]",
				md: "h-[30px] w-[30px]",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

const checkboxIndicatorVariants = cva("", {
	variants: {
		size: {
			sm: "h-4 w-4",
			md: "h-6 w-6",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface CheckboxProps
	extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
		VariantProps<typeof checkboxVariants> {}

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	CheckboxProps
>(({ className, size, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(checkboxVariants({ size }), className)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn(
				"pointer-events-none flex items-center justify-center rounded-sm bg-primary ring-0 transition-transform",
			)}
		>
			<Check className={cn(checkboxIndicatorVariants({ size }))} />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
