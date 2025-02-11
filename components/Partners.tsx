import React from 'react'
import Image from 'next/image'
import { partnersData } from '@/public/data/partners'

const Partners: React.FC = () => {
	return (
		<section
			id='partners'
			className='py-16 mt-8'
			style={{
				backgroundImage: "url('./images/background4.webp')",
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='container mx-auto px-4 md:px-12 text-center'>
				<h2
					className='relative z-50 text-4xl font-extrabold text-white mb-12 tracking-tight font-slovic'
					style={{
						textShadow: '3px 3px 3px black',
					}}
				>
					Наши партнёры
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8'>
					{partnersData.map(partner => (
						<div
							key={partner.id}
							className='flex justify-center items-center bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow'
						>
							<Image
								src={partner.logo}
								alt={partner.name}
								width={300}
								height={200}
								className='object-fit max-w-full h-auto'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Partners
