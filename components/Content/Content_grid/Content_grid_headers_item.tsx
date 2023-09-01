"use client"

import { ReactNode, useRef, useState } from "react";
import { EStateOrder } from '../../Types';

interface Props {
	children     : ReactNode,
	first       ?: boolean,
	width_column?: number,
}

export default function Content_grid_headers_item({ children, first, width_column }:Props) {
	/* Declaraciones */
	const divRef = useRef<HTMLDivElement>( null );
	const [stateOrder,setStateOrder] = useState<EStateOrder>( EStateOrder.NoOrder );
	// **************************************************

	/* Eventos */
	async function onClickIcon() {
		let newState = EStateOrder.NoOrder;

		switch ( stateOrder ) {
			case EStateOrder.NoOrder  : newState = EStateOrder.Acending ; break;
			case EStateOrder.Acending : newState = EStateOrder.Decending; break;
			case EStateOrder.Decending: newState = EStateOrder.NoOrder  ; break;
		}

		setStateOrder( newState );

		const res = await fetch( '/api/order', {
			method : 'POST',
			headers: { "Content-Type": "application/json" },
			body   : JSON.stringify({
				value: divRef.current?.innerText || '',
				state: newState,
			}),
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
		<div
			ref={divRef}
			className={`flex items-center gap-[2px] uppercase text-[#868683] text-xs ${ first ? 'flex-1' : '' }`}
			style={{width:width_column}}
		>
			{children}
			<button onClick={onClickIcon}>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M7.6038 3.01468C7.80395 2.75468 8.19605 2.75468 8.3962 3.01468L10.8444 6.195C11.0975 6.52379 10.8631 7 10.4482 7H5.55179C5.13687 7 4.90249 6.52379 5.15559 6.195L7.6038 3.01468Z"
						fill="#A3A3A3"
						style={{
							opacity: stateOrder===EStateOrder.NoOrder ? .5 : ( stateOrder===EStateOrder.Decending ? .5 : 1 ),
						}}
					/>
					<path
						d="M7.6038 12.9853C7.80395 13.2453 8.19605 13.2453 8.3962 12.9853L10.8444 9.805C11.0975 9.47621 10.8631 9 10.4482 9H5.55179C5.13687 9 4.90249 9.47621 5.15559 9.805L7.6038 12.9853Z"
						fill="#A3A3A3"
						style={{
							opacity: stateOrder===EStateOrder.NoOrder ? .5 : ( stateOrder===EStateOrder.Acending ? .5 : 1 ),
						}}
					/>
				</svg>
			</button>
		</div>
	);
}