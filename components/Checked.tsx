"use client"

import { useState } from "react";

interface Props {
	onChange?: (value:boolean)=>void,
};

export default function Checked( { onChange }:Props ) {
	/* Declaraciones */
	const [valueInput,setValueInput] = useState( false );
	// **************************************************

	/* Eventos */
	function onChangeInput( event:React.ChangeEvent<HTMLInputElement> ) {
		const newState = event.target.checked;

		setValueInput( newState );
		onChange?.( newState );
	}
	// **************************************************

	/* Render */
	return (
		<div
			className="relative border-[#DDDDDD] border-[1px] w-[15px] h-[15px] rounded-sm uppercase"
			style={{
				borderColor    : valueInput ? 'transparent' : '#DDDDDD',
				backgroundColor: valueInput ? '#377FE9'     : 'transparent',
			}}
		>
			<img src="./icons/check.svg" alt="" className="pointer-events-none"/>
			<input
				type="checkbox"
				className="absolute appearance-none top-0 left-0 w-full h-full z-10"
				checked={valueInput}
				onChange={onChangeInput}
			/>
		</div>
	);
}