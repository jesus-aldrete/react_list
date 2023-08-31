export default function Content_input_search() {
	return (
		<div className="flex items-center gap-4 p-6">
			<div className="flex-1 flex items-center gap-2 p-3 bg-[#F8F8F8] rounded-lg">
				<img src="./icons/search.svg" alt="" />
				<p className="text-[#A3A3A3] text-sm">Search...</p>
			</div>
			<button className="flex items-center px-6 py-3 bg-[#F8F8F8] rounded-lg gap-3">
				<span>Filters</span>
				<img src="./icons/sliders.svg" alt="" />
			</button>
		</div>
	);
}