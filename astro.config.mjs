// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
//import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Home',
            //logo: { src: './src/assets/VO_Small_Logo.png', },
            plugins: [
                starlightUtils({
                    navLinks: {
                        leading: { useSidebarLabelled: "leadingNavLinks" },
                    },
                }),
            ],
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/Vionyta' },
                { icon: 'email', label: 'Email', href: 'https://astro.build/chat' },
                { icon: 'instagram', label: 'Whatsapp', href: 'https://wa.me/85598449299' },
                { icon: 'telegram', label: 'Telegram', href: 'https://t.me/victorong99899' },
            ],
            sidebar: [{
                label: "leadingNavLinks",
                items: [
                    { label: "Certificates", link: "/cert/" },
                    { label: "Company", link: "/company/" }
                ]
            }],
            //components: {
            //    Header: './src/components/Header.astro',
            //},
            //vite: {
            //    plugins: [tailwindcss()],
            //},
        }),
    ],
});