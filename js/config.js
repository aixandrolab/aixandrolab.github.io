const CONFIG = {
    GITHUB_USERNAME: 'aixandrolab',
    DEVTO_USERNAME: 'aixandrolab',
    EXCLUDED_REPOSITORIES: ['aixandrolab'],

    COUNTERS: {
        PUBLIC_REPOS: 17,
        PRODUCTION_PACKAGES: 1,
        MONTHLY_DOWNLOADS: 2000,
    },

    SCROLL_OFFSET: 80,

    PYPI_PACKAGES: [
        'outputdecorator',
    ],

    CACHE_CONFIG: {
        REPOSITORIES: {
            TTL: 24 * 60 * 60 * 1000,
            KEY: 'github_repos_cache'
        },
        ARTICLES: {
            TTL: 2 * 60 * 60 * 1000,
            KEY: 'devto_articles_cache'
        },
        PYPI: { TTL: 24 * 60 * 60 * 1000, KEY: 'pypi_packages_cache' }
    },
};