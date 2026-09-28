# 🏡 PropKart Listing (`propkart-listing`)

> **Official Public Real Estate Directory & Verified Property Showcase**  
> Powered by **NB Property Technology Pvt Ltd** • Gujarat RERA Registered: `AG/GJ/AHMEDABAD/AHMEDABAD CITY/AA06870/170831R1`  
> Repository: [`propkart-listing`](https://github.com/propkartnbpropertytech-blip/propkart-listing)  
> Live Showcase: `https://listing.nbpropertytech.com`

---

## 🌟 Overview

**PropKart Listing** is the official public real estate showcase platform of the PropKart ecosystem, curated strictly for **Ahmedabad** prime residential, commercial, industrial, and investment properties.

Engineered with an ultra-clean, Apple-inspired **100% Light Theme**, PropKart Listing presents handpicked, verified inventory across three core real estate pillars:
1. **🏢 Pre-sales Launches**: Upcoming builder projects, developer launches, RERA registered developments, and early-bird investor pricing.
2. **🔑 Premium Rentals**: Verified high-floor residential apartments, commercial corporate spaces, and industrial sheds for lease.
3. **🏷️ High-Yield Re-sale**: Title-verified direct-owner resale flats, luxury bungalows, pre-leased offices, and investment plots.

```
┌─────────────────────────────────────────────────────────────────┐
│               PropKart Listing (Public Showcase)                │
│         https://github.com/propkartnbpropertytech-blip/        │
│                       propkart-listing                          │
│   • Ahmedabad-Only Directory     • 3D Dual-Tone Typography      │
│   • Universal Search Bar         • Interactive Channel Cards    │
│   • Elevated Property Tiles      • Instant WhatsApp Inquiries   │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼ HTTPS
┌─────────────────────────────────────────────────────────────────┐
│                  Shared API & Production VPS                    │
│            Node.js / Express • PostgreSQL • Hostinger           │
│                 https://propconnect.nbpropertytech.com          │
└───────────────────────────────▲─────────────────────────────────┘
                                │
         ┌──────────────────────┴──────────────────────┐
         ▼                                             ▼
┌─────────────────────────────┐         ┌─────────────────────────────┐
│    PropConnect Gateway      │         │      PropKart Panel         │
│     (Property Intake)       │         │    (Operations Desk)        │
│  • Rent & Re-sale Intake    │         │  • "Show on Listing" Toggle │
│  • Direct-Owner Verification│         │  • Real-time Inventory Sync │
└─────────────────────────────┘         └─────────────────────────────┘
```

---

## ✨ Design & Experience Highlights

- **Universal Search Experience**:
  - Full-width landing page search bar with default blinking cursor and clean ellipsis (`Search Listing...`).
  - Seamlessly searches titles, localities, developers, and property types.
- **Auto-Adjustable 3D Dual-Tone Typography**:
  - Header title *"Discover Your Next Exclusive Home"* rendered in premium 3D dual-tone styling with fluid `clamp()` responsive scaling across all screen sizes.
- **Scroll-Triggered Channel Showcase**:
  - The hero landing page displays the 3D typography and universal search above the fold.
  - Scrolling down reveals the 3 distinct cards (**Pre-sales**, **Rent**, **Re-sale**), each featuring high-resolution architectural visuals and rich hover descriptions.
- **Elevated Property Tiles**:
  - Property cards in all categories render with default elevated shadow aesthetics (`shadow-md hover:shadow-xl`), rounded contours, and clear pricing badges.
- **Rent & Re-sale "Show on Listing" Live Ingestion**:
  - Verified properties submitted via PropConnect are published directly to the public Listing showcase with one click from the Operations Desk.
  - Zero-reload real-time cross-tab synchronization via `BroadcastChannel('propkart_listing_channel')`.
- **Dedicated Assistance & List Property Hub**:
  - Assistance hotline and listing options available in the footer and quick-action modals.
- **Strict Location Scope**:
  - Focused strictly on Ahmedabad prime growth corridors (SG Highway, Sindhu Bhavan, Bopal, Satellite, Prahlad Nagar, GIFT City corridor, Sanand, etc.).

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Real-Time Cross-Tab Sync**: HTML5 BroadcastChannel API + Storage Events
- **CI/CD**: GitHub Actions + Hostinger VPS automated deployment

---

## 💻 Local Development

### Prerequisites
- Node.js `>= 18.0.0`
- npm `>= 9.0.0`

### Quick Start

```bash
# 1. Clone repository
git clone https://github.com/propkartnbpropertytech-blip/propkart-listing.git
cd propkart-listing

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env

# 4. Start local development server (Port 3004)
npm run dev

# 5. Production build and typecheck
npm run build

# 6. Preview production build
npm run preview
```

The application runs locally at `http://localhost:3004`.

---

## ⚙️ Environment Variables

Configure `.env` using `.env.example`:

```env
# Production API endpoint
VITE_API_URL=/api/v1

# Central Backend URL
VITE_BACKEND_URL=https://propconnect.nbpropertytech.com
```

---

## 🚀 CI/CD & Hostinger VPS Deployment Guide

Automated deployments are powered by GitHub Actions in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Every push to `main` builds the optimized production bundle and securely syncs it to your Hostinger VPS via SSH.

### 1. Configure GitHub Secrets

Navigate to **GitHub Repository → Settings → Secrets and variables → Actions** and add the following repository secrets:

| Secret Name | Required | Description | Example / Default |
|---|---|---|---|
| `VPS_HOST` | **Yes** | Hostinger VPS Public IP or hostname | `185.199.xxx.xxx` |
| `VPS_USERNAME` | No | SSH username on VPS | `root` (default) |
| `VPS_SSH_KEY` | **Recommended** | OpenSSH Private Key (`~/.ssh/id_rsa` or `id_ed25519`) | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `VPS_SSH_PASSWORD`| Fallback | SSH user password (used if key not provided) | `<your-root-password>` |
| `VPS_PORT` | No | SSH port | `22` (default) |
| `VPS_LISTING_PATH`| No | Target directory on VPS | `/var/www/propkart-listing` |

### 2. Hostinger VPS Server Setup (One-Time)

Log into your Hostinger VPS via terminal:

```bash
ssh root@<YOUR_VPS_IP>

# Create deployment directory
mkdir -p /var/www/propkart-listing
chown -R www-data:www-data /var/www/propkart-listing
chmod -R 755 /var/www/propkart-listing
```

### 3. Nginx Configuration for Hostinger VPS

Create or edit `/etc/nginx/sites-available/propkart-listing`:

```nginx
server {
    listen 80;
    server_name listing.nbpropertytech.com;

    root /var/www/propkart-listing;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss text/javascript;

    # Single Page Application routing fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets aggressively
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

Enable the site and reload Nginx:
```bash
ln -s /etc/nginx/sites-available/propkart-listing /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 4. Enable Free SSL via Let's Encrypt (Certbot)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d listing.nbpropertytech.com
```

### 5. Automated CI/CD Trigger

Once GitHub Secrets are in place, any commit pushed to the `main` branch will automatically trigger `.github/workflows/deploy.yml`:
1. Checkout the latest code
2. Install dependencies
3. Build the production Vite bundle
4. Securely upload the bundle to `/var/www/propkart-listing/` on the Hostinger VPS
5. Set permissions and reload Nginx / web services

---

## 🏛️ Regulatory & Company Information

- **Company**: NB Property Technology Pvt. Ltd.
- **RERA Registration**: `AG/GJ/AHMEDABAD/AHMEDABAD CITY/AA06870/170831R1`
- **Official Property Showcase**: Ahmedabad, Gujarat

---

## 📄 License

Proprietary © NB Property Technology Pvt Ltd. All rights reserved.
