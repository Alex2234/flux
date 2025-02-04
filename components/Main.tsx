const Main = () => {
	return (
		<>
			{/* Первый экран с картинкой hohloma.webp */}
			<section
				id='main'
				className='relative flex items-center justify-center bg-cover bg-center overflow-hidden'
				style={{
					backgroundImage: `url('/images/hohloma.webp')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Затемняющий слой */}
				<div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-30'></div>

				{/* Текст с отступами сверху и снизу */}
				<div className='text-center relative z-10 font-slovic text-[#f6fbff] mt-12 mb-12'>
					{/* Светло-серый цвет */}
					<h1
						className='text-5xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-6xl tracking-wide drop-shadow-lg'
						style={{
							textShadow: '2px 2px 2px black', // Черная обводка 1 пиксель
						}}
					>
						Паяльные материалы от компании &quot;РУССКИЙ ФЛЮС&quot;
					</h1>
				</div>
			</section>

			{/* Второй экран с картинкой background.webp, теперь как изображение */}
			<section
				id='second'
				className='relative flex items-center justify-center'
			>
				<img
					src='/images/background.webp'
					alt='Background'
					className='w-full h-auto object-cover'
				/>
			</section>
		</>
	)
}

export default Main
