/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://rusflux31.ru', // Замените на ваш домен
	generateRobotsTxt: true, // Генерация robots.txt
	sitemapSize: 100, // Количество ссылок в одном файле
	changefreq: 'daily', // Частота обновления
	priority: 0.7, // Приоритет страниц
}
