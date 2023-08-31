import './globals.css';

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
      <body>{children}</body>
    </html>
  )
}
