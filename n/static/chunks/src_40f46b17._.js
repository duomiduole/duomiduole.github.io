(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_40f46b17._.js", {

"[project]/src/utils/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getPathName": (()=>getPathName)
});
const getPathName = {
    home: ()=>'/',
    cctv: ()=>'/n/cctv',
    hot: ()=>`/n/hot`,
    nav: ()=>`/n/nav`,
    stock: ()=>`/n/stock`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/nav/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// filepath: /workspaces/duomiduole.github.io/src/components/nav/index.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/space/index.js [app-client] (ecmascript) <locals> <export default as Space>");
'use client';
;
;
;
;
const Index = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "nav-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$space$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Space$3e$__["Space"], {
            className: "nav-space",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    className: "nav-button",
                    onClick: ()=>{
                        open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathName"].home());
                    },
                    type: "link",
                    size: "small",
                    children: "首页"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/index.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    className: "nav-button",
                    onClick: ()=>{
                        open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathName"].nav());
                    },
                    type: "link",
                    size: "small",
                    children: "热点导航"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/index.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    className: "nav-button",
                    onClick: ()=>{
                        open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathName"].hot());
                    },
                    type: "link",
                    size: "small",
                    children: "今日热搜"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/index.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    className: "nav-button",
                    onClick: ()=>{
                        open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathName"].stock());
                    },
                    type: "link",
                    size: "small",
                    children: "股市概览"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/index.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                    className: "nav-button",
                    onClick: ()=>{
                        open(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPathName"].cctv());
                    },
                    type: "link",
                    size: "small",
                    children: "新闻联播"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/index.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/nav/index.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/nav/index.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
};
_c = Index;
const __TURBOPACK__default__export__ = Index;
var _c;
__turbopack_context__.k.register(_c, "Index");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/constants/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Day": (()=>Day),
    "DayColors": (()=>DayColors),
    "backgroundColor": (()=>backgroundColor),
    "fontColor": (()=>fontColor),
    "green": (()=>green),
    "navData": (()=>navData),
    "red": (()=>red),
    "wan": (()=>wan),
    "yi": (()=>yi)
});
const red = '#fa7575';
const green = '#42c542';
const wan = 10000;
const yi = wan * wan;
const Day = [
    '周日',
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六'
];
const DayColors = [
    '',
    '#73c0de',
    '#fac858',
    '#ee6666',
    '#91cc75',
    '#3ba272',
    ''
];
const backgroundColor = '#144bc5';
const fontColor = '#000';
const navData = [
    {
        "category": "AI工具",
        "items": [
            {
                "title": "ChatGPT",
                "icon": "https://openai.com/favicon.ico",
                "desc": "强大的AI对话模型",
                "href": "https://openai.com"
            },
            {
                "title": "文心一言",
                "icon": "https://wenxin.baidu.com/favicon.ico",
                "desc": "百度的AI语言模型",
                "href": "https://wenxin.baidu.com"
            },
            {
                "title": "Midjourney",
                "icon": "https://www.midjourney.com/favicon.ico",
                "desc": "AI绘画工具",
                "href": "https://www.midjourney.com"
            },
            {
                "title": "Stable Diffusion",
                "icon": "https://stability.ai/favicon.ico",
                "desc": "开源AI绘画模型",
                "href": "https://stability.ai"
            },
            {
                "title": "文心一格",
                "icon": "https://yiyan.baidu.com/favicon.ico",
                "desc": "百度的AI绘画平台",
                "href": "https://yiyan.baidu.com"
            }
        ]
    },
    {
        "category": "自媒体平台",
        "items": [
            {
                "title": "微信公众号",
                "icon": "https://mp.weixin.qq.com/favicon.ico",
                "desc": "微信官方自媒体平台",
                "href": "https://mp.weixin.qq.com"
            },
            {
                "title": "今日头条",
                "icon": "https://mp.toutiao.com/favicon.ico",
                "desc": "字节跳动旗下的内容平台",
                "href": "https://mp.toutiao.com"
            },
            {
                "title": "百家号",
                "icon": "https://baijiahao.baidu.com/favicon.ico",
                "desc": "百度的自媒体平台",
                "href": "https://baijiahao.baidu.com"
            },
            {
                "title": "企鹅号",
                "icon": "https://om.qq.com/favicon.ico",
                "desc": "腾讯的自媒体平台",
                "href": "https://om.qq.com"
            },
            {
                "title": "搜狐号",
                "icon": "https://mp.sohu.com/favicon.ico",
                "desc": "搜狐的自媒体平台",
                "href": "https://mp.sohu.com"
            }
        ]
    },
    {
        "category": "数据分析",
        "items": [
            {
                "title": "百度指数",
                "icon": "https://index.baidu.com/favicon.ico",
                "desc": "分析关键词热度",
                "href": "https://index.baidu.com"
            },
            {
                "title": "微信指数",
                "icon": "https://weixin.qq.com/favicon.ico",
                "desc": "微信平台的数据分析",
                "href": "https://weixin.qq.com"
            },
            {
                "title": "头条指数",
                "icon": "https://mp.toutiao.com/favicon.ico",
                "desc": "今日头条的数据分析",
                "href": "https://mp.toutiao.com"
            },
            {
                "title": "阿里指数",
                "icon": "https://index.1688.com/favicon.ico",
                "desc": "阿里巴巴的数据分析平台",
                "href": "https://index.1688.com"
            },
            {
                "title": "抖音数据",
                "icon": "https://www.douyin.com/favicon.ico",
                "desc": "抖音的数据分析工具",
                "href": "https://www.douyin.com"
            }
        ]
    },
    {
        "category": "图片素材",
        "items": [
            {
                "title": "Unsplash",
                "icon": "https://unsplash.com/favicon.ico",
                "desc": "免费高质量图片素材",
                "href": "https://unsplash.com"
            },
            {
                "title": "Pexels",
                "icon": "https://www.pexels.com/favicon.ico",
                "desc": "免费图片和视频素材",
                "href": "https://www.pexels.com"
            },
            {
                "title": "Pixabay",
                "icon": "https://pixabay.com/favicon.ico",
                "desc": "免费图片、矢量图等",
                "href": "https://pixabay.com"
            },
            {
                "title": "Canva",
                "icon": "https://www.canva.com/favicon.ico",
                "desc": "在线设计平台",
                "href": "https://www.canva.com"
            },
            {
                "title": "站酷海洛",
                "icon": "https://www.zcool.com.cn/favicon.ico",
                "desc": "高质量图片素材",
                "href": "https://www.zcool.com.cn"
            }
        ]
    },
    {
        "category": "视频素材",
        "items": [
            {
                "title": "Pexels Video",
                "icon": "https://www.pexels.com/favicon.ico",
                "desc": "免费视频素材",
                "href": "https://www.pexels.com/video"
            },
            {
                "title": "Videvo",
                "icon": "https://www.videvo.net/favicon.ico",
                "desc": "免费视频素材库",
                "href": "https://www.videvo.net"
            },
            {
                "title": "Pixabay Video",
                "icon": "https://pixabay.com/favicon.ico",
                "desc": "免费视频素材",
                "href": "https://pixabay.com/video"
            },
            {
                "title": "Vimeo Stock",
                "icon": "https://stock.vimeo.com/favicon.ico",
                "desc": "付费视频素材",
                "href": "https://stock.vimeo.com"
            },
            {
                "title": "Shutterstock",
                "icon": "https://www.shutterstock.com/favicon.ico",
                "desc": "付费视频和图片素材",
                "href": "https://www.shutterstock.com"
            }
        ]
    },
    {
        "category": "写作辅助",
        "items": [
            {
                "title": "Grammarly",
                "icon": "https://www.grammarly.com/favicon.ico",
                "desc": "语法检查和写作辅助",
                "href": "https://www.grammarly.com"
            },
            {
                "title": "Hemingway",
                "icon": "https://hemingwayapp.com/favicon.ico",
                "desc": "写作风格检查工具",
                "href": "https://hemingwayapp.com"
            },
            {
                "title": "CoSchedule",
                "icon": "https://coschedule.com/favicon.ico",
                "desc": "内容日历管理工具",
                "href": "https://coschedule.com"
            },
            {
                "title": "Evernote",
                "icon": "https://evernote.com/favicon.ico",
                "desc": "笔记和写作工具",
                "href": "https://evernote.com"
            },
            {
                "title": "Scrivener",
                "icon": "https://www.literatureandlatte.com/favicon.ico",
                "desc": "专业的写作软件",
                "href": "https://www.literatureandlatte.com"
            }
        ]
    },
    {
        "category": "社交媒体管理",
        "items": [
            {
                "title": "Hootsuite",
                "icon": "https://hootsuite.com/favicon.ico",
                "desc": "社交媒体管理平台",
                "href": "https://hootsuite.com"
            },
            {
                "title": "Buffer",
                "icon": "https://buffer.com/favicon.ico",
                "desc": "社交媒体内容发布工具",
                "href": "https://buffer.com"
            },
            {
                "title": "Sprout Social",
                "icon": "https://sproutsocial.com/favicon.ico",
                "desc": "社交媒体管理工具",
                "href": "https://sproutsocial.com"
            },
            {
                "title": "Followerwonk",
                "icon": "https://followerwonk.com/favicon.ico",
                "desc": "Twitter分析工具",
                "href": "https://followerwonk.com"
            },
            {
                "title": "BuzzSumo",
                "icon": "https://buzzsumo.com/favicon.ico",
                "desc": "内容分析和社交媒体分析",
                "href": "https://buzzsumo.com"
            }
        ]
    },
    {
        "category": "SEO工具",
        "items": [
            {
                "title": "Ahrefs",
                "icon": "https://ahrefs.com/favicon.ico",
                "desc": "SEO分析和反链检查",
                "href": "https://ahrefs.com"
            },
            {
                "title": "SEMrush",
                "icon": "https://www.semrush.com/favicon.ico",
                "desc": "SEO和内容优化工具",
                "href": "https://www.semrush.com"
            },
            {
                "title": "Moz",
                "icon": "https://moz.com/favicon.ico",
                "desc": "SEO分析和工具",
                "href": "https://moz.com"
            },
            {
                "title": "Google Search Console",
                "icon": "https://search.google.com/favicon.ico",
                "desc": "谷歌搜索控制台",
                "href": "https://search.google.com"
            },
            {
                "title": "Bing Webmaster Tools",
                "icon": "https://www.bing.com/favicon.ico",
                "desc": "必应站长工具",
                "href": "https://www.bing.com"
            }
        ]
    },
    {
        "category": "设计工具",
        "items": [
            {
                "title": "Adobe XD",
                "icon": "https://www.adobe.com/favicon.ico",
                "desc": "界面设计工具",
                "href": "https://www.adobe.com"
            },
            {
                "title": "Figma",
                "icon": "https://www.figma.com/favicon.ico",
                "desc": "协作设计工具",
                "href": "https://www.figma.com"
            },
            {
                "title": "Sketch",
                "icon": "https://www.sketch.com/favicon.ico",
                "desc": "UI设计工具",
                "href": "https://www.sketch.com"
            },
            {
                "title": "Canva",
                "icon": "https://www.canva.com/favicon.ico",
                "desc": "在线设计平台",
                "href": "https://www.canva.com"
            },
            {
                "title": "Dribbble",
                "icon": "https://dribbble.com/favicon.ico",
                "desc": "设计作品展示平台",
                "href": "https://dribbble.com"
            }
        ]
    },
    {
        "category": "营销工具",
        "items": [
            {
                "title": "Mailchimp",
                "icon": "https://mailchimp.com/favicon.ico",
                "desc": "邮件营销工具",
                "href": "https://mailchimp.com"
            },
            {
                "title": "HubSpot",
                "icon": "https://www.hubspot.com/favicon.ico",
                "desc": "营销和销售平台",
                "href": "https://www.hubspot.com"
            },
            {
                "title": "ClickFunnels",
                "icon": "https://clickfunnels.com/favicon.ico",
                "desc": "营销漏斗构建工具",
                "href": "https://clickfunnels.com"
            },
            {
                "title": "ActiveCampaign",
                "icon": "https://www.activecampaign.com/favicon.ico",
                "desc": "自动化营销工具",
                "href": "https://www.activecampaign.com"
            },
            {
                "title": "GetResponse",
                "icon": "https://www.getresponse.com/favicon.ico",
                "desc": "邮件营销和自动化工具",
                "href": "https://www.getresponse.com"
            }
        ]
    },
    {
        "category": "学习资源",
        "items": [
            {
                "title": "Coursera",
                "icon": "https://www.coursera.org/favicon.ico",
                "desc": "在线课程平台",
                "href": "https://www.coursera.org"
            },
            {
                "title": "edX",
                "icon": "https://www.edx.org/favicon.ico",
                "desc": "在线学习平台",
                "href": "https://www.edx.org"
            },
            {
                "title": "Udemy",
                "icon": "https://www.udemy.com/favicon.ico",
                "desc": "在线课程平台",
                "href": "https://www.udemy.com"
            },
            {
                "title": "Skillshare",
                "icon": "https://www.skillshare.com/favicon.ico",
                "desc": "创意和技能学习平台",
                "href": "https://www.skillshare.com"
            },
            {
                "title": "LinkedIn Learning",
                "icon": "https://www.linkedin.com/favicon.ico",
                "desc": "职业学习平台",
                "href": "https://www.linkedin.com"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/nav/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$row$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/row/index.js [app-client] (ecmascript) <export default as Row>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/col/index.js [app-client] (ecmascript) <export default as Col>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/nav/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const Index = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/nav/page.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navData"]?.map?.((category, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: '1px solid #eaeaea',
                            paddingBottom: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    marginBottom: '16px'
                                },
                                children: category?.category
                            }, void 0, false, {
                                fileName: "[project]/src/app/nav/page.tsx",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$row$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Row$3e$__["Row"], {
                                gutter: [
                                    16,
                                    16
                                ],
                                children: category?.items?.map((item, idx)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$col$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Col$3e$__["Col"], {
                                        xs: 12,
                                        sm: 8,
                                        md: 6,
                                        lg: 4,
                                        xl: 4,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item?.href,
                                            style: {
                                                display: 'block',
                                                textDecoration: 'none',
                                                color: 'inherit',
                                                padding: '8px 12px',
                                                border: '1px solid #eaeaea',
                                                borderRadius: '8px',
                                                transition: 'background-color 0.3s'
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = '#f5f5f5',
                                            onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: item?.icon,
                                                            alt: item?.title,
                                                            style: {
                                                                width: '32px',
                                                                height: '32px',
                                                                objectFit: 'cover'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/nav/page.tsx",
                                                            lineNumber: 32,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '13px',
                                                                fontWeight: '500',
                                                                whiteSpace: 'nowrap',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis'
                                                            },
                                                            children: item?.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/nav/page.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/nav/page.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: '8px',
                                                        fontSize: '11px',
                                                        color: '#666',
                                                        display: '-webkit-box',
                                                        WebkitBoxOrient: 'vertical',
                                                        WebkitLineClamp: 2,
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        title: item?.desc,
                                                        children: item?.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/nav/page.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/nav/page.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/nav/page.tsx",
                                            lineNumber: 19,
                                            columnNumber: 33
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/src/app/nav/page.tsx",
                                        lineNumber: 18,
                                        columnNumber: 36
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/nav/page.tsx",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/app/nav/page.tsx",
                        lineNumber: 12,
                        columnNumber: 24
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/nav/page.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/nav/page.tsx",
        lineNumber: 8,
        columnNumber: 12
    }, this);
};
_c = Index;
const __TURBOPACK__default__export__ = Index;
var _c;
__turbopack_context__.k.register(_c, "Index");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_40f46b17._.js.map