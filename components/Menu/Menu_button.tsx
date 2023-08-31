import { ReactNode } from "react";

interface Props {
	children: ReactNode,
	active ?: boolean,
};

export default function Menu_button({ children, active }:Props) {
	return (
		<button
			className='text-sm text-[#A3A3A3] py-[10px]'
			style={{
				borderBottom: active ? 'solid 2px #1b1b18' : '',
				color       : active ? '#1B1B18'           : '#A3A3A3',
			}}
		>
			{children}
		</button>
	);
}