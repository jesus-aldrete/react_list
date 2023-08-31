'use client'

import Checked from '@/components/Checked';
import Content_grid_rows_items_spec from './Content_grid_rows_items_spec';
import { IDataRow } from '../../Types';

interface Props {
	data: IDataRow,
};

export default function Content_grid_rows_items({ data:{ name, specialities, day_rate, availability } }:Props) {
	function RenderLetter() {
		let   color:string;
		const nameProc = name.slice( 0, 1 ).toUpperCase();

		switch ( nameProc ) {
			case 'B': color = '#3E4589'; break;
			case 'C': color = '#883E89'; break;
			case 'D': color = '#89863E'; break;
			case 'E': color = '#893E3E'; break;
			case 'F': color = '#4E984D'; break;
			case 'G': color = '#4D5498'; break;
			case 'H': color = '#974D98'; break;
			case 'I': color = '#98954D'; break;
			case 'J': color = '#984D4D'; break;
			case 'K': color = '#216B20'; break;
			case 'L': color = '#20276B'; break;
			case 'M': color = '#6A206B'; break;
			case 'N': color = '#6B6820'; break;
			case 'O': color = '#6B2020'; break;
			case 'P': color = '#3F893E'; break;
			case 'Q': color = '#3E4589'; break;
			case 'R': color = '#883E89'; break;
			case 'S': color = '#89863E'; break;
			case 'T': color = '#893E3E'; break;
			case 'U': color = '#4E984D'; break;
			case 'V': color = '#4D5498'; break;
			case 'W': color = '#974D98'; break;
			case 'X': color = '#98954D'; break;
			case 'Y': color = '#984D4D'; break;
			case 'Z': color = '#216B20'; break;
			default : color = '#3F893E'; break;
		}

		return <span
			className='letter rounded-[8px] p-[10px] text-[#FFF] text-sm leading-none'
			style={{ background:color }}
		>{nameProc}</span>;
	}
	function RenderSpecialities() {
		switch ( specialities.length ) {
			case 1:
			return <Content_grid_rows_items_spec>{specialities[0]}</Content_grid_rows_items_spec>;

			case 2:
			return specialities.map(
				( v, i ) => <Content_grid_rows_items_spec key={i}><span>{v}</span></Content_grid_rows_items_spec>
			);

			default: return (
				<>
					{
						specialities.slice( 0, 2 ).map(
							( v, i ) => <Content_grid_rows_items_spec key={i}>{v}</Content_grid_rows_items_spec>
						)
					}
					<Content_grid_rows_items_spec>{ specialities.length - 2 }+</Content_grid_rows_items_spec>
				</>
			);
		}
	}

	return (
		<div className="cont flex items-center px-6 py-4 gap-1">
			<div className="name flex-1 text-[#1B1B18] text-xs flex items-center gap-2">
				<Checked></Checked>
				{RenderLetter()}
				{name}
			</div>
			<div className="specialities flex gap-1 w-[296px] overflow-hidden">{RenderSpecialities()}</div>
			<div className="day_rate w-[120px] text-[#1B1B18] text-xs">$ {day_rate}</div>
			<div className="availability w-[120px] text-[#1B1B18] text-xs">{ availability ? 'Yes' : 'No' }</div>
		</div>
	);
}