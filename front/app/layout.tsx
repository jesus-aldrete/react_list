import './globals.css';
import Header from '@/components/Header/Header';
import Menu from '@/components/Menu/Menu';

export const metadata = {
  title: 'Teqqed',
  description: 'prueba front end',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='flex flex-col h-full w-full absolute'>
				<Header></Header>
				<Menu></Menu>
				{children}
			</body>
		</html>
	);
}
