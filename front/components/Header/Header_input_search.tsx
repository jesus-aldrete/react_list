'use client'

import { useEffect, useState } from "react";
import Dialog from '../Dilog';

export default function Header_input_search() {
	/* Declaraciones */
	const [showDialog,setShowDialog] = useState( false );
	// **************************************************

	/* Eventos */
	useEffect(
		() => {
			const handleKeyDown = (event: KeyboardEvent) => {
				if ( event.metaKey && event.code==='KeyK' ) {
					setShowDialog( true );
				}
			};

			window.addEventListener( 'keydown', handleKeyDown );

			return () => {
				window.removeEventListener( 'keydown', handleKeyDown );
			};
		},
		[]
	);

	const onClickDialog:React.MouseEventHandler = ( event ) => {
		const target = event.target as HTMLElement;

		if ( target.tagName!=='DIALOG' ) return;

		setShowDialog( false );
	};

	function onClick( event:React.MouseEvent<HTMLDivElement> ) {
		const target = event.target as HTMLElement;

		if ( target.tagName!=='DIV' ) return;

		setShowDialog( true );
	}
	// **************************************************

	/* Render */
	return (
		<div
			className="flex items-center gap-6 p-[6px] bg-[#F9F9F8] rounded-lg min-w-[320px]"
			onClick={onClick}
		>
			<img className="ml-[6px] pointer-events-none" src="./icons/search.svg" alt="" />
			<div className="flex-1 text-sm text-[#A3A3A3] pointer-events-none">Search...</div>
			<div className="flex items-center gap-[6px] bg-[#FFF] p-2 rounded-md border border-[#F1F1F1] pointer-events-none">
				<img src="./icons/command.svg" alt="" />
			</div>
			{showDialog ? <Dialog onClick={onClickDialog}></Dialog> : null}
		</div>
	);
}