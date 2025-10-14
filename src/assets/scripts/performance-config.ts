// Performance optimization configuration
export const performanceConfig = {
    // Enable compression
    compression: {
        enabled: true,
        threshold: 1024, // Compress files larger than 1KB
        level: 6, // Compression level (1-9)
    },

    // Cache settings
    cache: {
        static: '1d', // Cache static assets for 1 day
        js: '1y', // Cache JS files for 1 year
        css: '1y', // Cache CSS files for 1 year
        html: '1h', // Cache HTML files for 1 hour
    },

    // Preload critical resources
    preload: {
        enabled: true,
        critical: [
            '/dist/assets/index.691dfd76.js',
            '/dist/assets/index.741f95c0.css',
            './index.css',
            '/scripting/polyfills/bundle.js',
            '/scripting/systemjs/system.js'
        ]
    },

    // Lazy loading configuration
    lazyLoad: {
        enabled: true,
        threshold: 0.1, // Load when 10% visible
        rootMargin: '50px'
    },

    // Performance monitoring
    monitoring: {
        enabled: true,
        metrics: ['LCP', 'FID', 'CLS', 'TTFB'],
        reportInterval: 5000 // Report every 5 seconds
    }
};

// Performance optimization utilities
export const performanceUtils = {
    // Measure performance metrics
    measurePerformance: () => {
        if (!('performance' in window)) return null;

        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');

        return {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        };
    },

    // Preload resource
    preloadResource: (href, as, crossorigin = 'anonymous') => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        link.crossOrigin = crossorigin;
        document.head.appendChild(link);
    },

    // Lazy load script
    lazyLoadScript: (src, callback) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        if (callback) script.onload = callback;
        document.head.appendChild(script);
    }
};
