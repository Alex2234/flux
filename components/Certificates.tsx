import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
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

	// Блокировка прокрутки при открытом модальном окне
	useEffect(() => {
		if (selectedCertificate) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [selectedCertificate])

	// Функция для открытия модального окна
	const openModal = (certificate: Certificate) => {
		setSelectedCertificate(certificate)
	}

	// Функция для закрытия модального окна
	const closeModal = () => {
		setSelectedCertificate(null)
	}

	return (
		<section
			id='certificates'
			className='py-16  mt-8'
			style={{
				backgroundImage: "url('./images/background3.webp')",
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='container mx-auto px-6 md:px-12'>
				<h2
					className='relative z-50 text-4xl font-extrabold text-center mb-12 tracking-tight text-white font-slovic'
					style={{
						textShadow: '3px 3px 3px black',
					}}
				>
					Сертификаты
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{certificateData.map(certificate => (
						<div
							key={certificate.id}
							className='cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center'
							onClick={() => openModal(certificate)}
						>
							<div className='relative w-full flex items-center justify-center'>
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

				{/* Модальное окно через React Portal */}
				{selectedCertificate &&
					ReactDOM.createPortal(
						<div
							className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'
							onClick={closeModal}
						>
							<div
								className='relative bg-white rounded-lg shadow-lg max-w-4xl w-auto p-4 flex flex-col items-center'
								onClick={e => e.stopPropagation()} // Предотвращает закрытие при клике внутри окна
							>
								{/* Кнопка закрытия */}
								<button
									onClick={closeModal}
									className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl'
								>
									✕
								</button>

								{/* Изображение */}
								<Image
									src={selectedCertificate.image}
									alt={selectedCertificate.title}
									width={800}
									height={600}
									className='rounded-md object-contain max-w-full max-h-[90vh]'
								/>

								{/* Заголовок */}
								<h3 className='text-center text-xl font-bold mt-4 text-gray-800'>
									{selectedCertificate.title}
								</h3>
							</div>
						</div>,
						document.body
					)}
			</div>
		</section>
	)
}

export default Certificates
