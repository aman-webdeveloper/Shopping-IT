# Random IT Solutions Website

A modern, responsive e-commerce landing page for Random IT Solutions Pvt Ltd, an Indian technology company specializing in laptops, desktops, accessories, CCTV installation, and biometric systems.

## Quick Start

1. **Extract the archive**
   ```bash
   tar -xzf random-it-solutions-website.tar.gz
   cd random-it-solutions-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**

   **For Windows (PowerShell/CMD):**
   ```cmd
   start-dev.bat
   ```
   
   **OR manually:**
   ```cmd
   npx cross-env NODE_ENV=development tsx server/index.ts
   ```

   **For Mac/Linux:**
   ```bash
   ./start-dev.sh
   ```
   
   **OR manually:**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The website will be available at `http://localhost:5000`

## Windows Users

If you encounter the error `'NODE_ENV' is not recognized`, use the provided batch file `start-dev.bat` which handles the cross-platform environment variables automatically.

## Features

- ✅ Responsive design optimized for all devices
- ✅ Modern React frontend with TypeScript
- ✅ Express.js backend with REST API
- ✅ Product categories and featured products
- ✅ Company services showcase
- ✅ Customer testimonials
- ✅ Complete contact information for 4 team members
- ✅ Social media integration (Facebook, LinkedIn, Instagram, Twitter, YouTube, WhatsApp)
- ✅ WhatsApp integration for customer inquiries
- ✅ Professional blue and green color scheme

## Project Structure

```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and configurations
├── server/           # Express.js backend
├── shared/           # Shared TypeScript types
├── attached_assets/  # Company logo and media files
└── package.json      # Dependencies and scripts
```

## Contact Information

**Primary Contact:** Mr. RAGHAV - 8448870418, Raghav@randomitsolutions.com

**Office Address:** 2nd Floor, M46, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122001

**Business Hours:** Monday-Friday, 8am-5pm

## Technologies Used

- **Frontend:** React 18, TypeScript, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js, TypeScript
- **UI Components:** Radix UI, shadcn/ui
- **Icons:** Lucide React, React Icons
- **State Management:** TanStack Query
- **Routing:** Wouter

## Development

- **Start development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`

## Deployment

This project is configured for easy deployment on platforms like Replit, Vercel, or Netlify. The build output will be in the `dist/` directory.

---

Built with ❤️ for Random IT Solutions Pvt Ltd