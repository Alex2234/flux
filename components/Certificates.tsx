import React, { useState } from 'react'
import Image from 'next/image'
import { certificateData } from '@/public/data/certificates'

interface Certificate {
	id: number
	image: string
	title: string
}

const Certificates: React.FC = () => {
	const [selectedCertificate, setSelectedCertificate] =
		useState<Certificate | null>(null)

	// Open modal
	const openModal = (certificate: Certificate) => {
		setSelectedCertificate(certificate)
	}

	// Close modal
	const closeModal = () => {
		setSelectedCertificate(null)
	}

	return (
		<section
			id='certificates'
			className='py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-lg shadow-lg rounded-xl'
		>
			<div className='container mx-auto px-6 md:px-12'>
				<h2 className='text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight'>
					Сертификаты
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{certificateData.map(certificate => (
						<div
							key={certificate.id}
							className='cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center'
							onClick={() => openModal(certificate)}
						>
							<div className='relative w-full'>
								<Image
									src={certificate.image}
									alt={certificate.title}
									width={350}
									height={250}
									className='rounded-md'
								/>
							</div>
							<p className='text-center text-lg font-semibold mt-4 text-gray-700'>
								{certificate.title}
							</p>
						</div>
					))}
				</div>

				{/* Modal */}
				{selectedCertificate && (
					<div
						className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
						onClick={closeModal}
					>
						<div
							className='bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative'
							onClick={e => e.stopPropagation()} // Prevent modal close when clicking inside the modal
						>
							<button
								onClick={closeModal}
								className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl'
							>
								✕
							</button>
							<div className='relative w-full'>
								<Image
									src={selectedCertificate.image}
									alt={selectedCertificate.title}
									width={700}
									height={500}
									className='rounded-md mx-auto'
								/>
							</div>
							<h3 className='text-center text-xl font-bold mt-6 text-gray-800'>
								{selectedCertificate.title}
							</h3>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Certificates
