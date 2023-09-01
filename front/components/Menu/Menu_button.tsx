import { ReactNode } from "react";
import Link from "next/link";

interface Props {
	children: ReactNode,
	active ?: boolean,
	href    : string,
};

export default function Menu_button({ children, active, href }:Props) {
	return (
		<Link
			href={href}
			className='text-sm text-[#A3A3A3] py-[10px]'
			style={{
				borderBottom: active ? 'solid 2px #1b1b18' : '',
				color       : active ? '#1B1B18'           : '#A3A3A3',
			}}
		>
			{children}
		</Link>
	);
}