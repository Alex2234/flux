import Main from '@/components/Main'
import CategoriesPage from './categories'
import Header from '@/components/Header'
import Certificates from '@/components/Certificates'
import Partners from '@/components/Partners'
import Contacts from '@/components/Contacts'

export default function Home() {
	return (
		<div>
			<Header visible={true} />
			<section id='main' className=' bg-gray-200'>
				<Main />
			</section>
			<section id='products' className='scroll-mt-40 p-8'>
				<CategoriesPage />
			</section>
			<section id='certificates' className='p-8'>
				<Certificates />
			</section>
			<section id='partners' className='p-8'>
				<Partners />
			</section>
			<section id='contacts'>
				<Contacts />
			</section>
		</div>
	)
}
