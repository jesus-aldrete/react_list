'use client'

import { ReactNode } from "react";

interface Props {
	data: Array<string>,
};

export default function Content_grid_rows_items_spec( { data }:Props ) {
	const render_data = [];

	switch ( data.length ) {
		case 1 : render_data.push( data[0] ); break;
		case 2 :
		default:
			render_data.push( ...data.slice( 0, 2 ) );
			( data.length - 2 ) && render_data.push( `${data.length - 2}+` );
	}

	return (
		<div className="specialities flex gap-1 w-[296px] overflow-hidden">
			{render_data.map(
				( v, i ) => <div key={i} className=" text-xs bg-[rgba(0,0,0,.08)] px-2 py-[6px] rounded-[5px]">{v}</div>
			)}
		</div>
	);
}