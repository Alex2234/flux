import React from 'react'
import { useRouter } from 'next/router'
import { productsData } from '@/public/data/products'
import Product from '@/components/Product'
import Header from '@/components/Header'

const CategoryProductsPage = () => {
	const router = useRouter()
	const { category } = router.query

	const products = category
		? productsData[category as keyof typeof productsData]
		: []

	if (!products || products.length === 0) {
		return (
			<div className='text-center'>
				<button
					onClick={() => router.back()}
					className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ml-3'
				>
					← Назад
				</button>
				<p className='mt-4'>Товары не найдены для данной категории.</p>
			</div>
		)
	}

	// Проверка на наличие свойства volume в объекте product
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const hasVolume = (product: any): product is { volume: string } =>
		product && typeof product.volume === 'string'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const haspassportLink = (product: any): product is { passportLink: string } =>
		product && typeof product.passportLink === 'string'

	return (
		<div>
			<Header visible={false} />
			<div className='bg-gray-100'>
				<button
					onClick={() => router.back()}
					className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 mb-8 text-lg font-medium ml-3'
				>
					← Назад
				</button>
				<div className='flex flex-wrap justify-center gap-6'>
					{products.map((product, index) => (
						<Product
							key={index}
							title={product.title}
							description={product.description}
							image={product.image}
							packaging={product.packaging}
							volume={hasVolume(product) ? product.volume : undefined}
							passportLink={
								haspassportLink(product) ? product.passportLink : undefined
							}
							isAvailable={product.isAvailable}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CategoryProductsPage
