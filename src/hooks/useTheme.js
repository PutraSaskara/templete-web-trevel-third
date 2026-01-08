import { useEffect } from 'react';
import { siteConfig } from '../data/site-config';

export function useTheme() {
    useEffect(() => {
        const root = document.documentElement;
        const { colors, layout } = siteConfig.theme;
        const { favicon, siteName } = siteConfig.global;

        // Inject color variables
        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-secondary', colors.secondary);
        root.style.setProperty('--color-accent', colors.accent);
        root.style.setProperty('--color-background', colors.background);
        root.style.setProperty('--color-surface', colors.surface);
        root.style.setProperty('--color-text', colors.text);

        // Inject layout variables
        root.style.setProperty('--radius', layout.radius);

        // Update favicon if provided
        if (favicon) {
            const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
            link.type = favicon.endsWith('.svg') ? 'image/svg+xml' : 'image/x-icon';
            link.rel = 'icon';
            link.href = favicon;
            document.head.appendChild(link);
        }

        // Update document title
        document.title = `${siteName} - Experience the Magic of Bali`;
    }, []);
}
