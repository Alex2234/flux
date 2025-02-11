import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Nav from './Nav'

interface HeaderProps {
	visible: boolean
}

const Header: React.FC<HeaderProps> = ({ visible }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header>
			{/* Контакты и кнопка для мобильной версии */}
			<div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-6 flex justify-between items-center md:hidden'>
				{/* Этот блок будет виден только на мобильных устройствах */}
				<div className='flex items-center space-x-8'>
					{/* Мобильная кнопка для открытия меню */}
					<button
						className='text-gray-900 text-2xl'
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
