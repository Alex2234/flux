const Title = () => {
	return (
		<>
			{/* Первый экран с картинкой hohloma.webp */}
			<section
				id='main'
				className='relative flex items-center justify-center overflow-hidden h-80'
			>
				<div className='text-center  font-slovic text-[#ffffff]'>
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
		</>
	)
}

export default Title
