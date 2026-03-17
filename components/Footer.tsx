import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white p-4 mt-8'>
			<div className='container mx-auto text-center space-y-1'>
				<p>
					© {new Date().getFullYear()} ООО &quot;Русский Флюс&quot;. Все права
					защищены.
				</p>
				<p>
					<Link
						href='/privacy'
						className='text-gray-400 hover:text-white text-sm transition-colors'
					>
						Политика конфиденциальности
					</Link>
				</p>
			</div>
		</footer>
	)
}

export default Footer
