import React from 'react'
import Categories from '@/components/Categories'
import { categories } from '@/public/data/categories'

const CategoriesPage: React.FC = () => {
	return (
		<section
			id='categories'
			className='py-16 bg-cover bg-center backdrop-blur-lg shadow-lg mt-8'
			style={{ backgroundImage: "url('./images/background2.webp')" }}
		>
			{/* <div className='absolute inset-0 bg-white opacity-40'></div> */}
			<div className='container mx-auto px-6 md:px-12 text-center'>
				<h1
					className='relative z-50 text-4xl font-extrabold text-white mb-12 tracking-tight font-slovic'
					style={{
						textShadow: '3px 3px 3px black',
					}}
				>
					Наша продукция
				</h1>
				<div className='flex flex-wrap justify-center gap-8'>
					{categories.map((categorie, index) => (
						<Categories
							key={index}
							title={categorie.title}
							description={categorie.description}
							image={categorie.image}
							link={categorie.link}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default CategoriesPage
