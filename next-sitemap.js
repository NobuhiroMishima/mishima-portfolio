module.exports = {
    siteUrl: 'https://mishimaworks.jp',
    generateRobotsTxt: true,
    exclude: ['/api/*'],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://mishimaworks.jp/sitemap.xml',
        ],
    },
};
