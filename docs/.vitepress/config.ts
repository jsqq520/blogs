import { defineConfig } from 'vitepress';

export default defineConfig({
    title: "hjq's blog",
    description: "学习笔记",
    themeConfig: {
        // 导航栏
        nav: [
            {
                text: '前端',
                ariaLabel: 'front',
                link: '/note/front/',
            },
            {
                text: '后端',
                ariaLabel: 'end',
                link: '/note/end/'
            }
        ],
        // 侧边栏
        sidebar: {
            '/note/front/': [
                {
                    text: 'JavaScript',
                    children: [
                        { text: 'JavaScript进阶', link: '/note/front/JavaScript/' },
                    ]
                },
            ],
            '/note/end/': [
                {
                    text: 'python',
                    children: [
                        { text: 'python基础', link: '/note/end/Python/' },
                    ]
                },
            ],
        },

    }


})
