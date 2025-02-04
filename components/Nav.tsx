import React from 'react'

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
				} md:block bg-white shadow-lg overflow-hidden`}
			>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<ul className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 py-4'>
						<li>
							<a
								href='#main'
								className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-xl font-medium'
							>
								Главная
							</a>
						</li>
						<li>
							<a
								href='#products'
								className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-xl font-medium'
							>
								Продукция
							</a>
						</li>
						<li>
							<a
								href='#certificates'
								className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-xl font-medium'
							>
								Сертификаты
							</a>
						</li>
						<li>
							<a
								href='#partners'
								className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-xl font-medium'
							>
								Наши партнёры
							</a>
						</li>
						<li>
							<a
								href='#contacts'
								className='text-gray-900 hover:text-blue-600 transition-all duration-300 text-xl font-medium'
							>
								Контакты
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Nav
