# Aixandrolab · Automated Technical Portfolio <sup>v1.0.2</sup>

[![Live Site](https://img.shields.io/badge/Live%20Site-aixandrolab.ru-blue?style=for-the-badge&logo=github)](https://aixandrolab.ru)
[![GitHub license](https://img.shields.io/github/license/aixandrolab/aixandrolab.github.io)](https://github.com/aixandrolab/aixandrolab.github.io/blob/main/LICENSE)
[![GitHub release](https://img.shields.io/github/v/release/aixandrolab/aixandrolab.github.io)](https://github.com/aixandrolab/aixandrolab.github.io/)
[![GitHub stars](https://img.shields.io/github/stars/aixandrolab/aixandrolab.github.io?style=social)](https://github.com/aixandrolab/aixandrolab.github.io/stargazers)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-blue?logo=github-actions)](https://github.com/features/actions)
[![Python](https://img.shields.io/badge/Python-3.8+-green?logo=python)](https://python.org)
[![Static Site](https://img.shields.io/badge/Hosting-GitHub%20Pages-orange?logo=github)](https://pages.github.com)

**Modern, self-updating technical portfolio** showcasing expertise in **Full-Stack Python/Django development**, **cross‑platform ecosystems**, and **open‑source contributions**. This isn't just a static site—it's a fully automated ecosystem that fetches live data and builds itself daily.

---

## ⚠️ Disclaimer

**By using this software, you agree to the full disclaimer terms.**

**Summary:** Software provided "AS IS" without warranty. You assume all risks.

**Full legal disclaimer:** See [DISCLAIMER.md](https://github.com/aixandrolab/aixandrolab.github.io/blob/main/DISCLAIMER.md)

---

## Zero-Cost Automated Static Site Generator

**Serverless Static Site Generator with CI/CD**:

[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Automated-blue?logo=github-actions)](https://github.com/features/actions)
[![Python](https://img.shields.io/badge/Python-3.8+-green?logo=python)](https://python.org)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-orange?logo=github)](https://pages.github.com)

### How It Works

This site is **fully automated** — it builds and updates itself daily without any manual intervention or hosting costs!

### Key Features

| Feature               | How It Works                                              | Benefit                                                       |
|-----------------------|-----------------------------------------------------------|---------------------------------------------------------------|
| **Fully Automated**   | GitHub Actions cron job runs daily                        | Always up-to-date, zero manual work                           |
| **Dynamic Content**   | Fetches live data from GitHub, PyPI & Dev.to APIs         | Shows real repository, package, and article stats             |
| **Atomic Deployment** | Generates all pages in temp directory first               | Never broken site — all or nothing                            |
| **Auto Sitemap**      | Dynamically includes all pages                            | Perfect SEO, always current                                   |
| **Zero Cost**         | Hosted on GitHub Pages                                    | Only pay for domain name                                      |
| **Secure**            | No database, no backend                                   | Static = unhackable                                           |

### By The Numbers

```
Repository Pages: 20+ (and growing)
Package Pages:    1+ PyPI packages (outputdecorator)
Ecosystem Pages:  1 dedicated ecosystem (ToDo)
Static Pages:     7 core pages (Home, About, Expertise, Apps, Ecosystems, Projects, Packages, Articles)
Updates:          Daily automatic
Hosting Cost:     $0 (only domain)
```

### Tech Stack

```python
# The magic happens here ↓
[
    "Python 3.8+",
    "GitHub Actions (CI/CD)",
    "Jinja2 Templating",
    "GitHub API v3/v4",
    "PyPI JSON API",
    "Dev.to API",
    "Markdown parsing",
    "XML Sitemap generation",
    "Atomic file operations"
]
```

### What It Does

1. **Every day at midnight UTC**, GitHub Actions wakes up
2. Fetches **live data** from GitHub, PyPI, and Dev.to APIs
3. Generates **30+ HTML pages** in a temporary directory
4. Creates **fresh sitemap.xml** with all URLs
5. If **ALL pages** generate successfully — replaces old site atomically
6. If ANY error occurs — keeps old site untouched
7. Deploys to **GitHub Pages** automatically

### Why This Matters

> **"Build once, deploy manually" is so 2010.  
> "Build automatically, host for free" is 2026.**

This architecture demonstrates that you can run a **professional, dynamic-looking website** with zero infrastructure costs, zero maintenance, and zero security headaches — just smart automation and free tier services.

---

<p>
<b>Zero Cost • Zero Maintenance • Maximum Automation</b>
</p>

---

## Technology Stack: Under the Hood

### Frontend: The User Experience
| Technology                    | Purpose                                                                      |
|-------------------------------|------------------------------------------------------------------------------|
| **HTML5**                     | Semantic, accessible markup                                                  |
| **CSS3**                      | Custom properties, keyframe animations, responsive design                    |
| **Bootstrap 5**               | Robust grid system and pre-built components                                  |
| **Bootstrap Icons**           | Consistent, lightweight icon set                                             |
| **Vanilla JavaScript (ES6+)** | No bloat. Modular classes for particles, scroll, animations, and active nav. |

### Build System & Automation: The Engine
| Tool/Library                              | Purpose                                                                                    |
|-------------------------------------------|--------------------------------------------------------------------------------------------|
| **GitHub Actions**                        | The cron job that runs the entire show daily.                                              |
| **Python 3.8+**                           | Core language for all build scripts.                                                       |
| **Jinja2**                                | Powerful templating engine to generate detail pages from a single template.                |
| **BeautifulSoup4**                        | Parses and surgically updates the main HTML files (`projects.html`, etc.) with fresh data. |
| **Requests**                              | Fetches data from GitHub, PyPI, and Dev.to APIs.                                           |
| **Markdown**                              | Converts PyPI package descriptions from markdown to beautiful HTML for detail pages.       |
| **Pygments**                              | Provides syntax highlighting for code blocks in those markdown descriptions.               |
| **Temporary Directory + `shutil.move()`** | Implements the **atomic deployment** strategy.                                             |

### Data Sources
| Source     | API Endpoint                                  | Data Fetched                                                      |
|------------|-----------------------------------------------|-------------------------------------------------------------------|
| **GitHub** | `api.github.com/users/aixandrolab/repos`      | Repo names, descriptions, stars, forks, languages, topics, dates. |
| **PyPI**   | `pypi.org/pypi/{package_name}/json`           | Version, summary, full description (in markdown), project URLs.   |
| **Dev.to** | `dev.to/api/articles?username=aixandrolab`    | Titles, descriptions, tags, reactions, comments, reading time.    |

---

## The Main Sections: What You'll See

- **Hero Section**: Professional introduction with key metrics (Experience, Ecosystems, Repos, Projects).
- **Professional Profile**: Full-Stack Python/Django developer expertise.
- **Cross-Platform Ecosystems**: Dedicated pages for each ecosystem (ToDo: CLI, Web, Telegram, Android).
- **Automated Project Showcase**:
    - **Projects (`projects.html`)**: A grid of GitHub repos with live stats (stars, forks), topics, and a "View" button.
    - **Packages (`packages.html`)**: A grid of PyPI packages with descriptions, version badges, and a `pip install` copy button.
    - **Applications (`applications.html`)**: Desktop (PyQt), Web (Django), Mobile (Kotlin), and CLI tools.
- **Detailed Project & Package Pages**:
    - **Repository Pages**: Full-page deep dive into a single repo with all metadata.
    - **Package Pages**: Full-page view of a PyPI package with rendered README.

---

## Local Development & Manual Build

You can run the entire build process locally to test changes.

### Prerequisites
- Python 3.8+
- Git

### Setup & Build
1.  **Clone the repository**
    ```bash
    git clone https://github.com/aixandrolab/aixandrolab.github.io.git
    cd aixandrolab.github.io
    ```

2.  **Install Python dependencies**
    ```bash
    pip install requests beautifulsoup4 jinja2 markdown pygments
    ```

3.  **Run the full build pipeline (in the correct order)**
    ```bash
    # 1. Fetch the latest data from all sources
    python scripts/fetch_github.py
    python scripts/fetch_devto.py
    python scripts/fetch_pypi.py

    # 2. Update the main listing pages with new data cards
    python scripts/generate_pages.py

    # 3. Generate all detail pages AND the sitemap atomically
    python scripts/generate_repo_pages.py
    ```

4.  **Preview the site locally**
    ```bash
    python -m http.server 8000
    ```
    Open your browser to `http://localhost:8000`.

---

## License

This project is licensed under the **BSD 3-Clause License**. See the [LICENSE](LICENSE) file for details.

---

## 📬 Connect with Aixandrolab

- **🌐 Portfolio:** [aixandrolab.ru](https://aixandrolab.ru)
- **💻 GitHub:** [@aixandrolab](https://github.com/aixandrolab)
- **📝 Dev.to Blog:** [@aixandrolab](https://dev.to/aixandrolab)
- **📦 PyPI Packages:** [@aixandrolab](https://pypi.org/user/aixandrolab)

---

<div align="center">
  <sub>Built with ❤️ by Aixandrolab</sub>
  <br>
  <sub>© 2026 Aixandrolab. All rights reserved.</sub>
</div>
