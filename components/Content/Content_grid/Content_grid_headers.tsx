import Content_grid_headers_item from './Content_grid_headers_item';
import Checked from '../../Checked';

export default function Content_grid_headers() {
	return (
		<div className="flex items-center px-6 py-3 gap-1">
			<Content_grid_headers_item first={true}>
				<Checked></Checked>
				<span className='ml-[7px]'>Fullname</span>
			</Content_grid_headers_item>
			<Content_grid_headers_item width_column={293}>Specialities</Content_grid_headers_item>
			<Content_grid_headers_item width_column={120}>Day rate</Content_grid_headers_item>
			<Content_grid_headers_item width_column={120}>Availability</Content_grid_headers_item>
		</div>
	);
}