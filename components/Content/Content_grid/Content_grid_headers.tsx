"use client"

import Content_grid_headers_item from './Content_grid_headers_item';
import Checked from '../../Checked';
import { useEffect } from 'react';

interface Props {
	onChange?: (value:boolean)=>void,
};

export default function Content_grid_headers( { onChange }:Props ) {
	/* Eventos */
	useEffect(
		() => {
			( window as any ).Trigger = function( event:string, ...params:Array<any> ) {
				if ( typeof event==='string' && event!='' ) {
					const evt:any = new Event( event, { bubbles:true, cancelable:false } );
					evt._params   = params;

					this.dispatchEvent( evt );
				}
			};
		},
		[]
	);

	function onChangeCheck( value:boolean ) {
		onChange?.( value );
		( window as any ).Trigger( 'ChangeCheck', value );
	}
	// **************************************************

	return (
		<div className="flex items-center px-6 py-3 gap-1">
			<Content_grid_headers_item first={true}>
				<Checked onChange={onChangeCheck}></Checked>
				<span className='ml-[7px]'>Fullname</span>
			</Content_grid_headers_item>
			<Content_grid_headers_item width_column={293}>Specialities</Content_grid_headers_item>
			<Content_grid_headers_item width_column={120}>Day rate</Content_grid_headers_item>
			<Content_grid_headers_item width_column={120}>Availability</Content_grid_headers_item>
		</div>
	);
}