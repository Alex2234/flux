import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const accepted = localStorage.getItem('cookies_accepted')
		if (!accepted) {
			setVisible(true)
		}
	}, [])

	const accept = () => {
		localStorage.setItem('cookies_accepted', '1')
		setVisible(false)
	}

	if (!visible) return null

	return (
		<div className='fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white px-4 py-3 shadow-lg'>
			<div className='container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm'>
				<p>
					Мы используем файлы cookie для улучшения работы сайта. Продолжая
					использовать сайт, вы соглашаетесь с{' '}
					<Link href='/privacy' className='underline hover:text-gray-300'>
						политикой конфиденциальности
					</Link>.
				</p>
				<button
					onClick={accept}
					className='shrink-0 bg-white text-gray-900 font-medium px-5 py-1.5 rounded hover:bg-gray-200 transition-colors cursor-pointer'
				>
					Принять
				</button>
			</div>
		</div>
	)
}
