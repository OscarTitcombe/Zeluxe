# Zeluxe Landing Page

A premium, clean, and high-converting landing page for Zeluxe - the insights engine powering Gen Z beauty trends.

## 🚀 Features

- **Modern Design**: Clean, elegant layout inspired by premium brands like Superhuman
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth scroll animations using Framer Motion
- **Premium Aesthetic**: Gen Z-native design with luxury brand positioning
- **High Conversion**: Optimized CTAs and clear value proposition

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Inter Font** - Clean, modern typography

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Design System

### Colors
- **Primary**: Zeluxe Purple (`#d946ef`)
- **Background**: Cream (`#fefefe`)
- **Text**: Charcoal (`#1a1a1a`)
- **Accent**: Slate (`#64748b`)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Buttons**: Primary and secondary button styles
- **Sections**: Consistent padding and spacing
- **Animations**: Fade-in and slide-up effects

## 📄 Page Sections

1. **Hero Section** - Main value proposition and CTAs
2. **Problem/Opportunity** - Pain points and market gaps
3. **Solution** - How Zeluxe solves the problem
4. **How It Works** - 3-step process explanation
5. **Social Proof** - Trust indicators and statistics
6. **Dashboard Mockup** - Visual representation of the product
7. **CTA Section** - Final conversion opportunity
8. **Footer** - Navigation and company information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` directory
- **AWS S3**: Build and upload static files
- **Custom Server**: Use `npm run start` for production

## 📝 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  'zeluxe': {
    50: '#fdf4ff',
    // ... other shades
  }
}
```

### Content
Update the content in `app/page.tsx` to match your brand voice and messaging.

### Animations
Modify Framer Motion animations in each component for different effects.

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### File Structure
```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── tailwind.config.js   # Tailwind configuration
├── package.json         # Dependencies
└── README.md           # This file
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal JavaScript bundle
- **Images**: Optimized and responsive

## 📄 License

This project is proprietary to Zeluxe. All rights reserved.

---

Built with ❤️ for Zeluxe - The insights engine powering Gen Z beauty trends. 