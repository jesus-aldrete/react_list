"use client"

import { usePathname } from "next/navigation";
import Menu_button from './Menu_button';

export default function Menu() {
	/* Declaraciones */
	const pathName = usePathname();
	// **************************************************

	/* Render */
	return (
		<div className="flex gap-6 px-8 border-b-[1px] border-[#f3f3f1]">
			<Menu_button href="/"         active={pathName==="/"        }>Overview</Menu_button>
			<Menu_button href="/tasks"    active={pathName==="/tasks"   }>Tasks</Menu_button>
			<Menu_button href="/projects" active={pathName==="/projects"}>Projects</Menu_button>
			<Menu_button href="/payments" active={pathName==="/payments"}>Payments</Menu_button>
			<Menu_button href="/users"    active={pathName==="/users"   }>Users</Menu_button>
		</div>
	);
}