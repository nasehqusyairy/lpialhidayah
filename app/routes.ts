import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('components/layouts/default.tsx', [
        index('routes/home.tsx'),
        route('about', 'routes/about.tsx'),
        route('contact', 'routes/contact.tsx'),
        route('news', 'routes/news.tsx'),
    ]),
] satisfies RouteConfig;
