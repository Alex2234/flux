import React from 'react'
import Categories from '@/components/Categories'
import { categories } from '@/public/data/categories'

const CategoriesPage: React.FC = () => {
	return (
		<section
			id='categories'
			className='py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-lg shadow-lg rounded-xl'
		>
			<div className='container mx-auto px-6 md:px-12 text-center'>
				<h1 className='text-4xl font-extrabold text-gray-800 mb-12 tracking-tight'>
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
