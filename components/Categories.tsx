import React from 'react'
import Link from 'next/link'

interface CategoriesProps {
	title: string
	description: string
	image: string
	link: string
}

const Categories: React.FC<CategoriesProps> = ({
	title,
	description,
	image,
	link,
}) => {
	return (
		<div className='rounded-lg'>
			<Link
				href={link}
				className='bg-white shadow-lg rounded-xl overflow-hidden flex flex-col w-80 font-montserrat transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl'
			>
				{/* Изображение */}
				<div
					className='relative h-64 bg-no-repeat bg-center bg-cover'
					style={{ backgroundImage: `url(${image})` }}
				>
					<div className='absolute inset-0 bg-black opacity-20'></div>
				</div>

				<div className='p-6 flex flex-col flex-grow'>
					<h3 className='text-3xl font-bold mb-2 text-gray-900'>{title}</h3>
					<p className='text-gray-600 mb-4 flex-grow text-lg font-medium'>
						{description}
					</p>
					<div className='mt-4'>
						<span className='inline-block text-blue-600 font-semibold py-2 px-4 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-lg cursor-pointer'>
							Подробнее
						</span>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Categories
