import React from 'react'

const Contacts: React.FC = () => {
	const phoneNumber = '+7 (910) 320-15-22'
	const email = 'rusflux@mail.ru'
	const address = 'г. Белгород, ул. Магистральная, д. 55а, офис 5'
	const telegramLink = 'https://t.me/andrew_1n'
	const whatsappLink = 'https://wa.me/79103201522'

	return (
		<section
			id='contacts'
			className='py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-lg shadow-lg rounded-xl'
		>
			<div className='container mx-auto px-6 md:px-12'>
				<h2 className='text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-tight'>
					Контакты
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{/* Контактная информация */}
					<div className='flex flex-col items-start p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow'>
						<h3 className='text-xl font-semibold mb-2 text-gray-900'>
							Телефон
						</h3>
						<a
							href={`tel:${phoneNumber}`}
							className='text-lg text-blue-600 hover:underline'
						>
							{phoneNumber}
						</a>
					</div>

					<div className='flex flex-col items-start p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow'>
						<h3 className='text-xl font-semibold mb-2 text-gray-900'>
							Электронная почта
						</h3>
						<a
							href={`mailto:${email}`}
							className='text-lg text-blue-600 hover:underline'
						>
							{email}
						</a>
					</div>

					<div className='flex flex-col items-start p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow'>
						<h3 className='text-xl font-semibold mb-2 text-gray-900'>Адрес</h3>
						<p className='text-lg text-gray-700'>{address}</p>
					</div>

					{/* Социальные сети и мессенджеры */}
					<div className='flex flex-col items-start p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow'>
						<h3 className='text-xl font-semibold mb-4 text-gray-900'>
							Наши мессенджеры
						</h3>
						<div className='flex space-x-6'>
							<a
								href={telegramLink}
								target='_blank'
								rel='noopener noreferrer'
								className='px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition'
							>
								Telegram
							</a>
							<a
								href={whatsappLink}
								target='_blank'
								rel='noopener noreferrer'
								className='px-4 py-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition'
							>
								WhatsApp
							</a>
						</div>
					</div>

					{/* Юридическая информация */}
					<div className='col-span-1 sm:col-span-2 md:col-span-3 p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow'>
						<h3 className='text-xl font-semibold mb-4 text-gray-900'>
							ООО Русский Флюс
						</h3>
						<p className='text-lg text-gray-700 mb-2'>ИНН: 3123459216</p>
						<p className='text-lg text-gray-700 mb-2'>ОГРН: 1193123021530</p>
						<p className='text-lg text-gray-700'>
							Дата регистрации: 27.08.2019
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts
