import Main from '@/components/Main'
import Title from '@/components/Title'
import CategoriesPage from './categories'
import Header from '@/components/Header'
import Certificates from '@/components/Certificates'
import Partners from '@/components/Partners'
import Contacts from '@/components/Contacts'

export default function Home() {
	return (
		<>
			<div
				style={{
					backgroundImage: `url('/images/Russia-Flag.webp')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					height: 'auto',
				}}
			>
				<Header visible={true} />
				<Title />
			</div>
			<section id='main'>
				<Main />
			</section>
			<section id='products' className='scroll-mt-40'>
				<CategoriesPage />
			</section>
			<section id='certificates' className='scroll-mt-40'>
				<Certificates />
			</section>
			<section id='partners' className='scroll-mt-40'>
				<Partners />
			</section>
			<section id='contacts' className='scroll-mt-40'>
				<Contacts />
			</section>
		</>
	)
}
