# Kamar International - Because dreams matter

A modern, responsive website for Kamar International built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Beautiful Design**: Modern gradient background with floating particles
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎭 **Smooth Animations**: Framer Motion animations for enhanced user experience
- 📝 **Contact Form**: Functional contact form with validation
- 🧭 **Smooth Navigation**: Smooth scrolling navigation between sections
- 📱 **Mobile Menu**: Collapsible mobile navigation menu

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kamar-international
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
kamar-international/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   └── utils/
│       └── formHandler.ts       # Form handling utilities
├── public/                      # Static assets
├── package.json
├── tailwind.config.js
└── README.md
```

## Sections

1. **Hero Section**: Main landing area with company name and tagline
2. **What We Do**: Services offered by the company
3. **Who We Are**: About section with company description
4. **Our Products**: Product showcase section
5. **Find Us**: Location section with map placeholder
6. **Contact Us**: Contact form and company details

## Customization

### Colors

The main color scheme uses pink gradients. You can customize colors in:

- `src/app/globals.css` - CSS custom properties
- Tailwind classes throughout the components

### Content

Update the content in `src/app/page.tsx`:

- Company information
- Services descriptions
- Contact details
- Form handling logic

### Styling

Modify styles using Tailwind CSS classes or update `src/app/globals.css` for custom CSS.

## Form Integration

The contact form is currently set up with a mock handler. To integrate with a real backend:

1. Update `src/utils/formHandler.ts` with your API endpoint
2. Add proper error handling and validation
3. Consider adding reCAPTCHA for spam protection

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Responsive images and layouts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:

- Email: info@kamarinternational.com
- Phone: +92 XXX XXXXXXX

---

Built with ❤️ for Kamar International
