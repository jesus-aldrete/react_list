import Content_grid_rows_data from './Content_grid_rows_data';
import { GetContractors } from '../../Data'

export default async function Content_grid_rows() {
	const data_stripe = await GetContractors();

	return (
		<Content_grid_rows_data data={data_stripe}></Content_grid_rows_data>
	);
}