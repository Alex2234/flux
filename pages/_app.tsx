import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/Footer'
import Script from 'next/script'
import { Inter, Montserrat } from '@next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Официальный сайт компании Русский флюс</title>
				<meta
					name='description'
					content='Купить флюс паяльный. Купить материалы для паяния. Купить флюс. купить припой. Русский флюс официальный сайт.'
				/>
				<meta name='keywords' content='флюс, припой, паяние, пайка' />
				<meta name='author' content='Русский флюс' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='canonical' href='https://rusflux31.ru' />
				<meta name='yandex-verification' content='5da2125cbf1f92a7' />
			</Head>

			{/* Яндекс.Метрика (JS-код) */}
			<Script
				id='yandex-metrika'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){
              (m[i].a=m[i].a||[]).push(arguments)
            };
            m[i].l=1*new Date();
            k=e.createElement(t), a=e.getElementsByTagName(t)[0];
            k.async=1; k.src=r; a.parentNode.insertBefore(k,a)
          })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(99876721, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
          });
        `,
				}}
			/>

			{/* Яндекс.Метрика (noscript для пользователей без JS) */}
			<noscript>
				<div>
					<img
						src='https://mc.yandex.ru/watch/99876721'
						style={{ position: 'absolute', left: '-9999px' }}
						alt=''
					/>
				</div>
			</noscript>

			<main
				className={`container mx-auto  ${inter.className} ${montserrat.className}`}
			>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	)
}
