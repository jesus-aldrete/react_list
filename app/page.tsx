import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Content from '../components/Content/Content';

export default function Home() {
	return (
		<main className="absolute w-full h-full flex flex-col overflow-hidden">
			<Header></Header>
			<Menu></Menu>
			<Content></Content>
		</main>
	)
}
