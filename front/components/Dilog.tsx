'use client'

import { useEffect, useRef, useState } from "react";

interface Props {
  onClick: React.MouseEventHandler;
}

export default function Dilog({ onClick }:Props) {
	/* Declaraciones */
	const inputRef                    = useRef<HTMLInputElement>( null );
	const [isFocus,setIsFocus]        = useState( false );
	const [inputValue, setInputValue] = useState('');
	// **************************************************

	/* Eventos */
	useEffect(
		() => {
			inputRef.current?.focus();
		},
		[]
	)

	function onBlurInput() {
		setIsFocus( false );
	}
	function onFocusInput() {
		setIsFocus( true );
	}
	// **************************************************

	/* Render */
	return (
		<dialog onClick={onClick} className='fixed w-full h-full top-0 left-0 z-20 bg-[rgba(255,255,255,.60)] flex items-center justify-center'>
			<div className="cont flex flex-col bg-[#FFF] w-[676px] h-[360px] rounded-[5px] dark:shadow-dark-custom">
				<div className="relative p-6">
					<div className="relative">
						<span
							className="text-[#999] text-xl ease-out transition-opacity duration-[.3s]"
							style={{ opacity: !!inputValue ? '0' : ( isFocus ? '.5' : '1' ) }}
						>Type something</span>
						<input
							ref={inputRef}
							type="text"
							className="absolute top-0 left-0 w-full h-full bg-[transparent] border-none outline-none"
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							onFocus={onFocusInput}
							onBlur={onBlurInput}
						/>
					</div>
				</div>
				<p className="text text-[#868683] text-[10px] uppercase mx-6">Recommended</p>
				<ul className="list mx-2 mt-3">
					<li className="bg-[#FFF] py-3 px-4 rounded-[8px] text-[#555] text-sm cursor-pointer duration-[1s] ease-out hover:bg-[#F6F6F6]">Title goes here</li>
					<li className="bg-[#FFF] py-3 px-4 rounded-[8px] text-[#555] text-sm cursor-pointer duration-[1s] ease-out hover:bg-[#F6F6F6]">Title goes here</li>
					<li className="bg-[#FFF] py-3 px-4 rounded-[8px] text-[#555] text-sm cursor-pointer duration-[1s] ease-out hover:bg-[#F6F6F6]">Title goes here</li>
					<li className="bg-[#FFF] py-3 px-4 rounded-[8px] text-[#555] text-sm cursor-pointer duration-[1s] ease-out hover:bg-[#F6F6F6]">Title goes here</li>
					<li className="bg-[#FFF] py-3 px-4 rounded-[8px] text-[#555] text-sm cursor-pointer duration-[1s] ease-out hover:bg-[#F6F6F6]">Title goes here</li>
					<li className="bg-[#FFF] py-3 px-4 rounded-[8px] text-[#555] text-sm cursor-pointer duration-[1s] ease-out hover:bg-[#F6F6F6]">Title goes here</li>
				</ul>
			</div>
		</dialog>
	);
}