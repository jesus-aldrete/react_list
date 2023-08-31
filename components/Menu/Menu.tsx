import Menu_button from './Menu_button';

export default function Menu() {
	return (
		<div className="flex gap-6 px-8 border-b-[1px] border-[#f3f3f1]">
			<Menu_button active={true}>Overview</Menu_button>
			<Menu_button>Tasks</Menu_button>
			<Menu_button>Projects</Menu_button>
			<Menu_button>Payments</Menu_button>
			<Menu_button>Users</Menu_button>
		</div>
	);
}