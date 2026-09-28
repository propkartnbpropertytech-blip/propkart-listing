# 🏡 PropKart Listing

> **Public Real Estate Directory & Verified Property Showcase**  
> Dedicated, modern light-theme property showcase application for prospective buyers, tenants, and investors across Gujarat. Live at `listing.nbpropertytech.com`.

---

## 🌟 Overview

**PropKart Listing** is the public-facing inventory showcase of the PropKart ecosystem. Built entirely with a crisp, modern **Light Theme**, it presents verified properties synchronized with the PropKart Operations Desk (`panel.nbpropertytech.com`).

```
┌─────────────────────────────────────────────────────────┐
│               PropKart Listing (Public)                 │
│        Live at: listing.nbpropertytech.com              │
│  • 100% Light Theme          • Custom Architectural BG  │
│  • 3 Tabs: Pre-sales/Rent/Sale • Scoped Universal Search │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼ HTTPS
┌─────────────────────────────────────────────────────────┐
│               Shared Backend API & VPS                  │
│       Node.js / Express • PostgreSQL • Traefik          │
└──────────────────────────▲──────────────────────────────┘
                           │
                           ▼ HTTPS
┌─────────────────────────────────────────────────────────┐
│              PropKart Panel (Admin / Ops)               │
│  • Live Showcase Toggles     • PropKart Software Sync   │
│  • Pre-sales Form Builder    • Lead Conversion          │
└─────────────────────────────────────────────────────────┘
```

---

## ✨ Features

- **100% Light Theme Design:** Pristine whites, soft off-whites, frosted glassmorphic card containers, and emerald accents.
- **Architectural Hero Background:** Features an iconic modern villa over lush nature with sunlight lighting.
- **The 3 Main Showcase Tabs:**
  - `🏢 Pre-sales`: Upcoming projects, new launches, RERA registration numbers, and possession timelines.
  - `🔑 Rent`: High-floor apartments, corporate offices, industrial sheds, and storage land for rent.
  - `🏷️ Re-sale`: Verified resale flats, luxury independent bungalows, pre-leased offices, and investment land.
- **Universal Scoped Search:**
  - Keyword search across project titles, developer/builder names, localities, and cities.
  - Asset category filtering: `Residential`, `Commercial`, `Industrial`, `Land & Plot`.
  - Configuration filtering: `1 BHK`, `2 BHK`, `3 BHK`, `4+ BHK`.
  - When searching within a tab (e.g. "Pre-sales"), the search is scoped particularly to that category.
- **Strict Published Visibility:** Displays strictly verified properties where the toggle is turned ON (`is_published: true`) in PropKart Panel.
- **Interactive Property Detail Lightbox:** Complete architectural specifications, photo gallery, RERA certification badge, and location navigation.
- **One-Click WhatsApp Outreach:** Instant scheduling of site visits and inquiry dispatch directly via WhatsApp.

---

## 🛠️ Local Development

### Prerequisites
- Node.js `>= 18.0.0`
- npm `>= 9.0.0`

### Setup

```bash
# 1. Navigate to directory
cd PropKart_Listing

# 2. Install dependencies
npm install

# 3. Start local development server (Port 3002)
npm run dev
```

The application will run locally at `http://localhost:3002`.

### Production Build

```bash
# Compile and bundle
npm run build

# Preview build locally
npm run preview
```

---

## 🚀 Production Deployment (`listing.nbpropertytech.com`)

Automated continuous deployment is handled via GitHub Actions:
- **Workflow:** [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
- **Target URL:** `https://listing.nbpropertytech.com`

### Required GitHub Secrets

Configure these in **Repository Settings → Secrets and variables → Actions**:

| Secret Name | Description | Example / Format |
|---|---|---|
| `VPS_HOST` | Hostinger VPS Public IP Address | `<your-server-ip>` |
| `VPS_USERNAME` | SSH User | `root` |
| `VPS_SSH_KEY` | Dedicated OpenSSH ed25519 Private Key | `-----BEGIN OPENSSH PRIVATE KEY----- ...` |
| `VPS_SSH_PASSWORD` | Fallback SSH password (if key omitted) | `<your-ssh-password>` |
| `VPS_PORT` | SSH Port (default: `22`) | `22` |

---

## 📄 License

Proprietary software. All rights reserved by **NB Property Technology**.
