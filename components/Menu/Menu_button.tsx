import { ReactNode } from "react";

interface Props {
	children: ReactNode,
	active ?: boolean,
};

export default function Menu_button({ children, active }:Props) {
	return (
		<button className={`text-sm text-[#A3A3A3] py-[10px] ${ active ? 'text-[#1B1B18] border-b-[2px] border-[#1b1b18]' : '' }`}>
			{children}
		</button>
	);
}