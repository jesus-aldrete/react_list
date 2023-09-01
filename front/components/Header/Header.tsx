import Header_button_menu from './Header_button_menu';
import Header_input_search from './Header_input_search';
import Header_button_icon from './Header_button_icon';

export default function Header() {
	return (
		<header className='flex items-center px-8 py-4 gap-3 border-b-[1px] border-[#f3f3f1]'>
			<img className='w-6 h-6 brightness-[.1]' src="./xing_logo.png" alt="" />
			<div className="line w-[1px] h-10 bg-[#F3F3F2] ml-1"></div>
			<Header_button_menu></Header_button_menu>
			<div className="cont flex-1 flex flex-row-reverse">
				<Header_input_search></Header_input_search>
			</div>
			<Header_button_icon>
				<img src='./icons/help.svg' alt="" />
			</Header_button_icon>
			<Header_button_icon>
				<img src='./icons/bell.svg' alt="" />
			</Header_button_icon>
			<button>
				<img src='./teqqed_logo.svg' alt="" />
			</button>
		</header>
	);
}