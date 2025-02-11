import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='ru'>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@400;500;600&display=swap'
						rel='stylesheet'
					/>

					{/* Яндекс.Метрика */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){
                    (m[i].a=m[i].a||[]).push(arguments)
                  };
                  m[i].l=1*new Date();
                  k=e.createElement(t);
                  a=e.getElementsByTagName(t)[0];
                  k.async=1;
                  k.src=r;
                  a.parentNode.insertBefore(k,a)
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(99876721, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
                });
              `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
