import { ReactNode } from "react";

interface Props {
	children: ReactNode,
};

export default function Header_button_icon({ children }:Props) {
	return (
		<button className="p-[10px]">
			<span>{children}</span>
		</button>
	);
}