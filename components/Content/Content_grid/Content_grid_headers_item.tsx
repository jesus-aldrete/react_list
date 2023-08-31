import { ReactNode } from "react";

interface Props {
	children     : ReactNode,
	first       ?: boolean,
	width_column?: number,
}

export default function Content_grid_headers_item({ children, first, width_column }:Props) {
	return (
		<div
			className={`flex items-center gap-[2px] uppercase text-[#868683] text-xs ${ first ? 'flex-1' : '' }`}
			style={{width:width_column}}
		>
			{children}
			<img src="./icons/chevron-colors.svg" alt="" />
		</div>
	);
}