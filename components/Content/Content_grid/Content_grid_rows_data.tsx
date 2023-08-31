"use client"

import Content_grid_rows_items from './Content_grid_rows_items';
import {IDataRow} from '../../Types';
import { useEffect, useState } from 'react';

interface Props {
	data: Array<IDataRow>,
};

export default function Content_grid_rows_data( { data }:Props ) {
	/* Estados */
	const [dataGrid,setDataGrid] = useState<Array<IDataRow>>([]);
	// **************************************************

	/* Eventos */
	useEffect(
		() => {
			setDataGrid( data );

			const handleNewData = ( event:any ) => {
				const newData:Array<IDataRow> = event._params[0];

				setDataGrid( newData );
			};

			window.addEventListener( 'NewData', handleNewData );

			return () => {
				window.removeEventListener( 'NewData', handleNewData );
			};
		},
		[data]
	);
	// **************************************************

	/* Render */
	return (
		<div className="cont overflow-scroll absolute w-full h-content-fill">
			{dataGrid.map( ( v, i ) => <Content_grid_rows_items key={i} data={v}></Content_grid_rows_items> )}
		</div>
	);
}