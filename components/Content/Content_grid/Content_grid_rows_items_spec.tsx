'use client'

import { ReactNode } from "react";

interface Props {
	children: ReactNode,
};

export default function Content_grid_rows_items_spec({ children }:Props) {
	return (
		<div className="text-[#5E5E5E] text-xs bg-[#F3F3F3] px-2 py-[6px] rounded-[5px]">{children}</div>
	);
}