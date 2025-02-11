import React from 'react'
import Image from 'next/image'

interface NavProps {
	isMenuOpen: boolean
	visible: boolean
}

const Nav: React.FC<NavProps> = ({ isMenuOpen, visible }) => {
	return (
		<div className={`${visible ? 'block' : 'hidden'}`}>
			<nav
				className={`${
					isMenuOpen ? 'block' : 'hidden'
				} md:block bg-white overflow-hidden`}
			>
				<div className='max-w-7xl mx-auto  sm:px-6 lg:px-8'>
					{/* Контейнер для логотипа и меню, используем flex для выравнивания */}
					<div className='flex items-center justify-between'>
						<Image
							src='/images/logo.svg'
							alt='logo'
							width={160}
							height={40}
							priority
							className='w-20 md:w-24 lg:w-44'
						/>
						{/* Меню */}
						<ul className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 py-4 font-slovic'>
							<li>
								<a
									href='#main'
									className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-lg md:text-md lg:text-2xl font-medium'
								>
									Главная
								</a>
							</li>
							<li>
								<a
									href='#products'
									className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-lg md:text-md lg:text-2xl font-medium'
								>
									Продукция
								</a>
							</li>
							<li>
								<a
									href='#certificates'
									className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-lg md:text-md lg:text-2xl font-medium'
								>
									Сертификаты
								</a>
							</li>
							<li>
								<a
									href='#partners'
									className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-lg md:text-md lg:text-2xl font-medium'
								>
									Наши партнёры
								</a>
							</li>
							<li>
								<a
									href='#contacts'
									className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-lg md:text-md lg:text-2xl font-medium'
								>
									Контакты
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Nav
