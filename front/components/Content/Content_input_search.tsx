"use client"

import { useRef, useState } from "react";

export default function Content_input_search() {
	/* Declaraciones */
	const inputRef                   = useRef<HTMLInputElement>( null );
	const [isFocus,setIsFocus]       = useState( false );
	const [valueInput,setValueInput] = useState('');
	// **************************************************

	/* Eventos */
	function onBlur() {
		setIsFocus( false );
	}
	function onFocus() {
		setIsFocus( true );
	}
	function onClickBox( event:React.MouseEvent<HTMLDivElement> ) {
		const target = event.target as HTMLElement;

		if ( target.tagName!=='DIV' ) return;

		inputRef.current?.focus();
	}

	async function onClickFilter() {
		const res = await fetch( '/api/filter', {
			method : 'POST',
			headers: { "Content-Type": "application/json" },
			body   : JSON.stringify({ value:valueInput }),
		});

		if ( !res.ok ) {
			console.error( await res.text() );
			return;
		}

		( window as any ).Trigger( 'NewData', await res.json() );
	}
	// **************************************************

	/* Render */
	return (
		<div className="flex items-center gap-4 p-6">
			<div
				className="flex-1 flex items-center gap-2 p-3 bg-[#F8F8F8] rounded-lg cursor-text"
				onClick={onClickBox}
			>
				<img src="./icons/search.svg" alt="" className="pointer-events-none"/>
				<div className="relative flex-1">
					<p
						className="text-[#A3A3A3] text-sm transition-opacity duration-[.3s] ease-out pointer-events-none"
						style={{ opacity: !!valueInput ? '0' : ( isFocus ? '.5' : '1' ) }}
					>Search...</p>
					<input
						ref={inputRef}
						type="text"
						className="absolute top-0 left-0 w-full h-full outline-none border-none bg-[transparent]"
						value={valueInput}
						onChange={(e)=>setValueInput(e.target.value)}
						onBlur={onBlur}
						onFocus={onFocus}
					/>
				</div>
			</div>
			<button
				className="flex items-center px-6 py-3 bg-[#F8F8F8] rounded-lg gap-3 duration-[.3s] ease-out hover:bg-[#E1E1E1] active:transition-none active:bg-[#C9C9C9]"
				onClick={onClickFilter}
			>
				<span>Filters</span>
				<img src="./icons/sliders.svg" alt="" />
			</button>
		</div>
	);
}