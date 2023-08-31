import Content_input_search from './Content_input_search';
import Content_grid from './Content_grid/Content_grid';

export default function Content() {
	return (
		<div className="flex-1 flex items-center justify-center relative overflow-hidden">
			<div className="absolute w-full h-1/2 top-0 bg-[#FFF] z-0"></div>
			<div className="absolute w-full h-1/2 bottom-0 bg-gradient-custom z-0"></div>
			<div className="flex flex-col z-10 w-[910px] relative">
				<div className="absolute translate-y-[-100%] top-[-40px]">
					<h1 className='text-4xl text-[#1B1B18]'>Contractors</h1>
					<p className='text-sm text-black-gray mt-2'>Lorem ipsum dolor sit amet consectetur. Lacus semper convallis non et vel nec sit proin. </p>
				</div>
				<div className="bg-[#FFF] dark:shadow-dark-custom">
					<Content_input_search></Content_input_search>
					<Content_grid></Content_grid>
				</div>
			</div>
		</div>
	);
}