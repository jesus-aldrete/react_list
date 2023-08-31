'use client'

import Checked from '@/components/Checked';
import Content_grid_rows_items_spec from './Content_grid_rows_items_spec';
import Content_grid_rows_items_letter from './Content_grid_rows_items_letter';
import { IDataRow } from '../../Types';
import { useState, useEffect } from 'react';

interface Props {
	data: IDataRow,
};

export default function Content_grid_rows_items({ data:{ name, specialities, day_rate, availability } }:Props) {
	/* Declaraciones */
	const [isChecked,setIsChecked] = useState( false );
	// **************************************************

	/* Eventos */
	useEffect(
		() => {
			const handleChangeCheck = ( event:any ) => {
				const [value] = event._params;

				setIsChecked( value );
			};

			window.addEventListener( 'ChangeCheck', handleChangeCheck );

			return () => {
				window.removeEventListener( 'ChangeCheck', handleChangeCheck );
			};
		},
		[]
	);

	function onChangeCheck( value:boolean ) {
		setIsChecked( value );
	}
	// **************************************************

	/* Render */
	return (
		<div
			className="cont flex items-center px-6 py-4 gap-1 duration-[.3s] ease-out hover:bg-[#FAFAFA] text-[#1B1B18]"
			style={{
				background: isChecked ? '#377FE9' : '',
				color     : isChecked ? 'white'   : '#1B1B18',
			}}
		>
			<div className="name flex-1 text-xs flex items-center gap-2">
				<Checked onChange={onChangeCheck} checked={isChecked}></Checked>
				<Content_grid_rows_items_letter name={name}></Content_grid_rows_items_letter>
				{name}
			</div>
			<Content_grid_rows_items_spec data={specialities}></Content_grid_rows_items_spec>
			<div className="day_rate w-[120px] text-xs">$ {day_rate}</div>
			<div className="availability w-[120px] text-xs">{ availability ? 'Yes' : 'No' }</div>
		</div>
	);
}