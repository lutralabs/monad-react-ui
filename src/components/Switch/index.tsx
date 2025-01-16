"use client";

import { cn } from "@/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const switchVariants = cva(
	"peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed data-[state=checked]:bg-monad-purple data-[state=unchecked]:bg-gray-80 disabled:opacity-50",
	{
		variants: {
			size: {
				sm: "h-[20px] w-[40px]",
				md: "h-[30px] w-[60px]",
				lg: "h-[41px] w-[81px]",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

const thumbVariants = cva(
	"pointer-events-none block rounded-full bg-white ring-0 transition-transform data-[state=unchecked]:translate-x-0",
	{
		variants: {
			size: {
				sm: "h-[17px] w-[17px] data-[state=checked]:translate-x-[20px]",
				md: "h-[25px] w-[25px] data-[state=checked]:translate-x-[32px]",
				lg: "h-[34px] w-[34px] data-[state=checked]:translate-x-[44px]",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

export interface SwitchProps
	extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
		VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	SwitchProps
>(({ className, size, ...props }, ref) => {
	return (
		<SwitchPrimitives.Root
			className={cn(switchVariants({ size }), className)}
			{...props}
			ref={ref}
		>
			<SwitchPrimitives.Thumb className={cn(thumbVariants({ size }))} />
		</SwitchPrimitives.Root>
	);
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, switchVariants };
