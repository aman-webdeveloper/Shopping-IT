# Overview

This is a full-stack business website for "Random IT Solutions Pvt Ltd," an Indian technology company specializing in laptops, desktops, accessories, CCTV installation, and biometric systems. The application features a modern React frontend with a Node.js/Express backend, designed to showcase products and services while facilitating customer inquiries through WhatsApp integration. 

**Latest Updates (Jan 2025):**
- Integrated company logo from uploaded assets
- Updated all contact information with complete team details
- Added multiple contact emails for different team members
- Added office address: 2nd Floor, M46, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122001
- Updated phone contacts for 4 team members with business hours (Mon-Fri 8am-5pm)
- Added comprehensive social media links (Facebook, LinkedIn, Instagram, Twitter, YouTube, WhatsApp)
- Enhanced social media section with platform-specific hover colors and tooltips
- Primary contact: Mr. RAGHAV - 8448870418, Raghav@randomitsolutions.com

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client uses a modern React stack with TypeScript:
- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **Component Library**: Radix UI primitives with shadcn/ui component system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Design System**: Custom color palette with neutral base colors and CSS custom properties

The architecture follows a component-based approach with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/`
- Business logic components for different sections (header, hero, categories, etc.)
- Custom hooks for mobile detection and toast notifications

## Backend Architecture

The server uses Express.js with TypeScript:
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js for REST API endpoints
- **Development**: tsx for TypeScript execution
- **Data Storage**: In-memory storage implementation with interfaces for future database integration
- **API Design**: RESTful endpoints for products, categories, and testimonials
- **Development Tools**: Vite integration for hot module replacement in development

Key backend features:
- Modular route handling with centralized error management
- Logging middleware for API request monitoring
- Interface-based storage system allowing easy migration to database solutions
- Sample data initialization for immediate functionality

## Data Layer

Currently implements an in-memory storage system:
- **Storage Interface**: `IStorage` defining contracts for data operations
- **Implementation**: `MemStorage` class with Map-based data storage
- **Schema Definition**: Drizzle ORM schemas for PostgreSQL (prepared for future database integration)
- **Data Models**: Products, Categories, and Testimonials with proper TypeScript typing

The schema is configured for PostgreSQL using Drizzle ORM, with migrations directory set up for future database deployment.

## Build and Development

- **Development**: Concurrent client and server development with hot reloading
- **Production Build**: Vite builds the client, esbuild bundles the server
- **TypeScript**: Shared types between client and server through `shared/` directory
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`, `@assets/`)

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, TanStack Query for state management
- **Backend**: Express.js, Node.js with TypeScript support
- **Build Tools**: Vite, esbuild, tsx for development and production builds

## UI and Styling
- **Radix UI**: Complete set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (Simple Icons for social media)

## Database and ORM (Prepared)
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect configured
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **Drizzle Kit**: Database migration and introspection tools

## Form and Validation
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration with validation libraries
- **Drizzle Zod**: Schema validation integration

## Development Tools
- **TypeScript**: Full type safety across client and server
- **PostCSS**: CSS processing with Autoprefixer
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: Type-safe variant API for component styling

## External Services Integration
- **WhatsApp Business**: Direct customer communication through wa.me links
- **Email**: Contact forms using mailto links
- **Unsplash**: Stock images for product and category visuals

The application is designed for easy deployment to platforms like Replit, with development-specific plugins and error handling for the Replit environment.