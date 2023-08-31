import Content_grid_headers from './Content_grid_headers';
import Content_grid_rows from './Content_grid_rows';

export default function Content_grid() {
	return (
		<div className="h-[340px] relative flex-1">
			<Content_grid_headers></Content_grid_headers>
			<Content_grid_rows></Content_grid_rows>
		</div>
	);
}