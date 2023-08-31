interface Props {
	name: string,
};

export default function Content_grid_rows_items( { name }:Props ) {
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

	return (
		<span
			className='letter rounded-[8px] text-[#FFF] text-sm leading-none flex items-center justify-center w-[24px] h-[24px]'
			style={{ background:color }}
		>{nameProc}</span>
	);
}