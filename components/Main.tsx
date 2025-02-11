const Main = () => {
	return (
		<>
			{/* Первый экран с картинкой hohloma.webp */}
			<section
				id='main'
				className='relative flex items-center justify-center bg-white overflow-hidden py-20 h-80'
			>
				{/* Изображение в левом верхнем углу */}
				<div
					className='absolute top-1/2 -translate-y-1/2 left-0 w-40 h-80 md:w-84 md:h-54 lg:w-40 lg:h-60'
					style={{
						backgroundImage: `url('/images/title.png')`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
					}}
				></div>

				{/* Изображение в правом нижнем углу */}
				<div
					className='absolute bottom-1/2 translate-y-1/2 right-0 w-40 h-80 md:w-84 md:h-54 lg:w-40 lg:h-60'
					style={{
						backgroundImage: `url('/images/title.png')`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
					}}
				></div>

				<div className='text-center relative z-10 font-slovic text-[#ffffff]'>
					<h1
						className='text-5xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-6xl tracking-wide drop-shadow-lg'
						style={{
							textShadow: '2px 2px 2px black',
						}}
					>
						Паяльные материалы от компании &quot;РУССКИЙ ФЛЮС&quot;
					</h1>
				</div>
			</section>

			{/* Второй экран с картинкой background.webp, теперь как изображение */}
			<section
				id='second'
				className='relative flex items-center justify-center shadow-[0px_-4px_10px_rgba(0,0,0,0.4)]'
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
