import React, { useState } from 'react'
import Image from 'next/image'
import { FaWhatsapp, FaTelegram, FaBars, FaTimes } from 'react-icons/fa'
import Nav from './Nav'

interface HeaderProps {
	visible: boolean
}

const Header: React.FC<HeaderProps> = ({ visible }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg z-50'>
			<div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-6 flex justify-between items-center'>
				<div className='flex items-center space-x-6'>
					{/* Логотип */}
					<Image
						src='/images/logo.svg'
						alt='logo'
						width={256}
						height={64}
						priority
						className='w-32 md:w-48 lg:w-56'
					/>
					{/* Адрес компании */}
					<div className='hidden md:block xl:text-xl lg:text-base md:text-sm font-medium text-gray-700 max-w-[280px]'>
						<p className='font-semibold'>Адрес компании:</p>
						<p>г. Белгород, ул. Магистральная д. 55а, оф. 5</p>
					</div>
				</div>

				{/* Контакты и кнопка для мобильной версии */}
				<div className='flex items-center space-x-8'>
					<div className='hidden md:flex items-center space-x-10'>
						<div className='flex items-center'>
							<span className='text-gray-700 text-left xl:text-xl lg:text-base md:text-sm font-medium max-w-[140px]'>
								Напишите, мы онлайн
							</span>
							<a
								href='https://wa.me/79103201522'
								target='_blank'
								rel='noopener noreferrer'
								className='text-green-500 text-xl transform transition-all duration-300 hover:scale-110'
							>
								<FaWhatsapp className='w-12 h-12 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
							</a>
							<a
								href='https://t.me/andrew_1n'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-500 text-xl transform transition-all duration-300 hover:scale-110'
							>
								<FaTelegram className='w-12 h-12 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
							</a>
						</div>

						<div className='text-gray-700'>
							<p className='xl:text-xl lg:text-base md:text-sm font-medium'>
								Звоните Пн-Пт: 9:00 - 18:00
							</p>
							<a
								href='tel:+79103201522'
								className='xl:text-xl lg:text-lg md:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300'
							>
								+7 (910) 320-15-22
							</a>
						</div>
					</div>

					{/* Мобильная кнопка для открытия меню */}
					<button
						className='md:hidden text-gray-900 text-2xl'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>

			{/* Меню с анимацией для мобильных устройств */}
			<Nav isMenuOpen={isMenuOpen} visible={visible} />
		</header>
	)
}

export default Header
