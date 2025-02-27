const Main = () => {
	return (
		<>
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
