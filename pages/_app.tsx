import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className='container mx-auto font-sans'>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	)
}
