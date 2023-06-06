module.exports = {
    theme: '',
    title: 'Qtum',
    description: 'Qtum',
    base: '/',
    dest: "dist",
    port: '8080', themeConfig: {
        nav: [
            {
                text: ' 首页 ',
                link: '/',
            },
            {
                text: ' 组件 ',
                link: '/comps/',
            },
        ],
        sidebar: { // 配置侧边栏部分
            '/comps/': ['/comps/', '/comps/button.md'],
        },
    },
    head: [],
    plugins: [
        'demo-container',
    ],
    markdown: {},
}
