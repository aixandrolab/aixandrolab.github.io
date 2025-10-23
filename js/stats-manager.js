class StatsManager {

    updateHeaderStats(totalDownloads) {
        const stats = document.querySelectorAll('.stats-row .stat');
        if (stats.length >= 3) {
            stats[0].querySelector('.stat-number').textContent = CONFIG.COUNTERS.PUBLIC_REPOS + '+';
            stats[1].querySelector('.stat-number').textContent = CONFIG.COUNTERS.PRODUCTION_PACKAGES + '+';
            stats[2].querySelector('.stat-number').textContent = CONFIG.COUNTERS.MONTHLY_DOWNLOADS + '+';
        }
    }

    updateMetricsStats(totalDownloads) {

        const metrics = document.querySelectorAll('.metric-item .metric-number');
        if (metrics.length >= 3) {
            metrics[0].textContent = CONFIG.COUNTERS.PUBLIC_REPOS + '+';
            metrics[1].textContent = CONFIG.COUNTERS.PRODUCTION_PACKAGES + '+';
            metrics[2].textContent = CONFIG.COUNTERS.MONTHLY_DOWNLOADS + '+';
        }
    }
}