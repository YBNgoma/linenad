# LinenAd 2.0 - Luxury Bedding E-Commerce

A high-fidelity, interactive prototype for a luxury bedding e-commerce brand with an innovative Agent/Runner business model.

## 🌟 Features

### Storefront (Landing Page)
- **Immersive Hero Section** - "Sleep Like Royalty" with magnetic hover CTA
- **Smart Product Grid** - 4 luxury products with image cross-fade on hover
- **Quick View Animation** - Slide-up button on product hover
- **Trust Signals Bar** - Free delivery, cash on delivery, quality guarantee
- **WhatsApp Concierge** - Floating action button with tooltip

### Agent Dashboard
- **Stats Overview** - Revenue, commission, and pending payout cards with glassmorphism
- **Referral Tool** - Copy link with confetti animation
- **Gamified Leaderboard** - Top agents with trend indicators
- **Responsive Sidebar** - Dark midnight blue with mobile drawer

### Design System
- **Color Palette**: Cream (#FAFAF9), Midnight Blue (#0F172A), Champagne Gold (#D4AF37)
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Effects**: Glassmorphism, deep shadows, smooth animations
- **Dark Mode**: "Night Luxe" theme with toggle

## 🚀 Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Router** - Routing
- **Canvas Confetti** - Celebration effects

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment to Cloudflare Pages

### Via GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: LinenAd 2.0"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/linenAD.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Select **Connect to Git**
   - Choose your GitHub repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
     - **Root directory**: `/`
   - Click **Save and Deploy**

3. **Custom Domain (Optional)**
   - In Cloudflare Pages, go to **Custom domains**
   - Add your domain (e.g., `linenad.com`)
   - Update DNS records as instructed

### Via Direct Upload

```bash
# Build the project
npm run build

# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist --project-name=linenad
```

## 📱 Mobile Optimization

The app is fully responsive with a mobile-first approach:
- Hamburger menu for mobile navigation
- Responsive grid layouts (1 col → 2 col → 4 col)
- Touch-friendly buttons and interactions
- Optimized images and animations for mobile

## 🎨 Customization

### Update WhatsApp Number
Edit `/src/components/WhatsAppFAB.jsx`:
```javascript
const whatsappNumber = "263771234567"; // Your number
```

### Modify Product Data
Edit `/src/data/mockData.js` to update products, stats, and leaderboard.

### Change Color Palette
Edit `/tailwind.config.js` to customize colors:
```javascript
colors: {
  cream: { DEFAULT: '#FAFAF9' },
  midnight: { DEFAULT: '#0F172A' },
  gold: { DEFAULT: '#D4AF37' },
}
```

## 🧪 Testing Checklist

- [ ] Hero section displays correctly
- [ ] Product hover effects work (image cross-fade, Quick View button)
- [ ] WhatsApp FAB tooltip appears on hover
- [ ] Dark mode toggle works and persists
- [ ] Agent dashboard stats display correctly
- [ ] Referral link copy triggers confetti
- [ ] Leaderboard highlights current user
- [ ] Mobile menu works on small screens
- [ ] All animations are smooth

## 📄 License

ISC

## 👨‍💻 Author

Built with ❤️ for LinenAd 2.0
