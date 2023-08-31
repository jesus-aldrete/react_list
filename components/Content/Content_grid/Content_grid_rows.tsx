import Content_grid_rows_items from './Content_grid_rows_items';
import { GetContractors } from '../../Data'

export default async function Content_grid_rows() {
	const data_stripe = await GetContractors();

	return (
		<div className="cont overflow-scroll absolute w-full h-content-fill">
			{data_stripe.map( ( v, i ) => <Content_grid_rows_items key={i} data={v}></Content_grid_rows_items> )}
		</div>
	);
}