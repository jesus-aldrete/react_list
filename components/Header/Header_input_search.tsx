export default function Header_input_search() {
	return (
		<div className="flex items-center gap-6 p-[6px] bg-[#F9F9F8] rounded-lg min-w-[320px]">
			<img className="ml-[6px]" src="./icons/search.svg" alt="" />
			<div className="flex-1 text-sm text-[#A3A3A3]">Search...</div>
			<button className="flex items-center gap-[6px] bg-[#FFF] p-2 rounded-md border border-[#F1F1F1]">
				<img src="./icons/command.svg" alt="" />
			</button>
		</div>
	);
}