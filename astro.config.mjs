// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from "@lorenzo_lewis/starlight-utils";
//import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            favicon: './src/assets/VO_Small_Logo.png',
            title: 'Home',
            logo: { src: './src/assets/VO_Small_Logo.png', },
            plugins: [
                starlightUtils({
                    multiSidebar: {
                        switcherStyle: "dropdown", // "Dropdown", "horizontalList" or "hidden"
                    },
                }),
            ],
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/Vionyta' },
                { icon: 'email', label: 'Email', href: 'mailto:waikitong168@gmail.com@' },
                { icon: 'instagram', label: 'Whatsapp', href: 'https://wa.me/85598449299' },
                { icon: 'telegram', label: 'Telegram', href: 'https://t.me/victorong99899' },
            ],
            sidebar: [
                {
                    label: "Interactive Resume",
                    autogenerate: { directory: "/aboutme" },
                },
            ],
            //components: {
            //    Header: './src/components/Header.astro',
            //},
            //vite: {
            //    plugins: [tailwindcss()],
            //},
        }),
    ],
});