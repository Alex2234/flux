import React, { useState } from 'react'
import Link from 'next/link'

interface ProductProps {
	title: string
	description: string
	image: string
	packaging: string
	volume?: string
	passportLink?: string
	isAvailable?: boolean
}

const Product: React.FC<ProductProps> = ({
	title,
	description,
	image,
	packaging,
	volume,
	passportLink,
	isAvailable,
}) => {
	const [isModalOpen, setModalOpen] = useState(false)
	const [isDescriptionExpanded, setDescriptionExpanded] = useState(false)

	// Открытие и закрытие модального окна
	const handleOrderClick = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	// Переключение полного текста описания
	const toggleDescription = () => {
		setDescriptionExpanded(prevState => !prevState)
	}

	// Ограниченное описание
	const limitedDescription = `${description.substring(0, 100)}...`

	// Обработчик клика по фону для закрытия модального окна
	const handleBackdropClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e.target === e.currentTarget) {
			closeModal()
		}
	}

	// Копирование почты
	const copyToClipboard = () => {
		navigator.clipboard.writeText('rusflux@mail.ru')
		alert('Почта скопирована в буфер обмена')
	}

	return (
		<div className='bg-white shadow-lg rounded-xl overflow-hidden flex flex-col w-80 font-montserrat transform transition-transform duration-300 ease-in-out'>
			{/* Изображение товара */}
			<div
				className='relative h-64 bg-no-repeat bg-center bg-cover'
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className='absolute inset-0 bg-black opacity-20'></div>
			</div>

			{/* Контент */}
			<div className='p-4 flex flex-col flex-grow'>
				<h3 className='text-2xl font-bold mb-2 text-gray-900'>{title}</h3>

				{/* Описание (ограниченное или полное) */}
				<p
					className={`text-gray-600 mb-4 text-base font-normal ${
						!isDescriptionExpanded && 'line-clamp-4'
					}`}
					style={{
						minHeight: '80px', // Фиксированная высота для описания
					}}
				>
					{isDescriptionExpanded ? description : limitedDescription}
				</p>

				{/* Кнопка для раскрытия/сокрытия описания */}
				<button
					onClick={toggleDescription}
					className='text-blue-500 font-medium mb-4 self-start underline'
				>
					{isDescriptionExpanded ? 'Скрыть' : 'Читать далее'}
				</button>

				<div className='mb-4'>
					<div className='text-base font-semibold text-gray-700'>
						Фасовка: <span className='font-medium'>{packaging}</span>
					</div>
					{volume && (
						<div className='text-base font-semibold text-gray-700'>
							Объем: <span className='font-medium'>{volume}</span>
						</div>
					)}
				</div>

				{/* Условный рендеринг ссылки на паспорт */}
				{passportLink && (
					<div className='mb-4'>
						<Link
							href={passportLink}
							target='_blank'
							download={passportLink}
							className='text-blue-600 font-semibold underline'
						>
							Скачать паспорт
						</Link>
					</div>
				)}

				{/* Кнопка заказа или сообщение о недоступности */}
				<div className='mt-auto'>
					{isAvailable ? (
						<button
							onClick={handleOrderClick}
							className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition duration-300 ease-in-out w-full'
						>
							Заказать от 10 шт.
						</button>
					) : (
						<p className='text-red-500 text-center font-semibold'>
							Товар нет в наличии
						</p>
					)}
				</div>
			</div>

			{/* Модальное окно с вариантами связи */}
			{isModalOpen && (
				<div
					className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
					onClick={handleBackdropClick} // Закрытие по клику на фон
				>
					<div className='bg-white p-6 rounded-lg w-96'>
						<h3 className='text-2xl font-semibold mb-4'>Связаться с нами</h3>
						<div className='space-y-4'>
							{/* Номер телефона */}
							<a
								href='tel:+79103201522'
								className='w-full block py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-center'
							>
								Позвонить: +7 (910) 320-15-22
							</a>

							{/* WhatsApp */}
							<a
								href='https://wa.me/79103201522'
								target='_blank'
								rel='noopener noreferrer'
								className='w-full block py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 text-center'
							>
								Написать в WhatsApp
							</a>

							{/* Telegram */}
							<a
								href='https://t.me/andrew_1n'
								target='_blank'
								rel='noopener noreferrer'
								className='w-full block py-2 px-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 text-center'
							>
								Написать в Telegram
							</a>

							{/* Почта */}
							<div className='w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-lg text-center'>
								<p>
									Почта: <span className='font-semibold'>rusflux@mail.ru</span>
								</p>
								<button
									onClick={copyToClipboard}
									className='mt-2 text-blue-500 underline hover:text-blue-700'
								>
									Скопировать почту
								</button>
							</div>

							{/* Кнопка отмены */}
							<button
								className='w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600'
								onClick={closeModal}
							>
								Отмена
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Product
