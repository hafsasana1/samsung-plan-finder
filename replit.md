# Samsung Care+ Insurance Calculator

## Overview

This is a web application that helps users compare and calculate Samsung device protection costs across different providers. Built with React, TypeScript, and Vite, the application guides users through a multi-step quiz to provide personalized insurance recommendations for Samsung Galaxy devices. Users can compare Samsung Care+, carrier insurance, and third-party providers like Asurion to make informed decisions about device protection.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for fast HMR and optimized production builds
- **React Router** (react-router-dom) for client-side routing with a multi-page quiz flow
- Component-based architecture with reusable UI elements from shadcn/ui

**UI/UX Design Pattern**
- **shadcn/ui component library** built on Radix UI primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with custom design system variables defined in CSS custom properties
- **Framer Motion** for animations and page transitions to enhance user experience
- Custom design system with HSL color scheme, gradient definitions, and consistent spacing (defined in `src/index.css`)

**State Management**
- **Context API** (`QuizContext`) for managing quiz flow state across multiple pages
- **TanStack Query** (React Query v5) for server state management and data fetching
- Local component state using React hooks for UI-specific state

**Quiz Flow Architecture**
The application implements a multi-step wizard pattern with 6-7 steps:
1. Device model selection (with search functionality)
2. Country and carrier selection
3. Coverage duration selection (12/24/36 months)
4. Plan comparison view
5. AI-powered recommendation
6. Final quote generation

Each step is a separate route/page component that updates shared context state and progresses users through the flow.

### Data Layer

**Static Data Management**
- Device models, carriers, countries, and pricing plans stored in `src/data/plans.json`
- Structured data includes:
  - Device catalog (Galaxy S24 series, Z Fold/Flip series, A series)
  - Country-specific carrier mappings
  - Multi-tier pricing (12/24/36 month plans)
  - Provider comparisons (Samsung Care+, Asurion, carrier insurance)

**No Backend/Database**
- Currently operates as a static frontend application
- All pricing and device data is hardcoded in JSON format
- No API calls or database interactions in current implementation

### Routing & Navigation

**React Router Configuration**
- Browser-based routing with catch-all 404 handling
- Primary routes:
  - `/` - Landing page
  - `/model` - Device selection (Step 1)
  - `/carrier` - Carrier selection (Step 2)
  - `/duration` - Duration selection (Step 3)
  - `/compare` - Plan comparison (Step 4)
  - `/recommendation` - AI recommendation (Step 5)
  - `/quote` - Final quote (Step 6)
  - `/tips`, `/about`, `/contact` - Informational pages
  - `/privacy-policy`, `/terms`, `/affiliate-disclosure` - Legal pages

**Layout System**
- `QuizLayout` component wraps quiz steps with consistent header, footer, and progress tracking
- Separate layouts for marketing/info pages vs quiz flow
- Sticky header and progress bar for navigation context

### Styling & Theming

**Design System**
- Custom HSL-based color palette with primary (teal #168 76% 42%), secondary (yellow), and accent (orange) colors
- CSS custom properties for theming with light/dark mode support structure
- Gradient system defined as CSS variables for consistent visual effects
- Poppins font family for typography

**Component Styling Approach**
- Tailwind utility classes for rapid development
- Class variance authority (CVA) for variant-based component styling
- shadcn/ui component customization through Tailwind config
- Responsive design with mobile-first breakpoints

### Performance Optimizations

- Vite's code splitting and tree shaking for optimized bundle sizes
- React lazy loading potential (not currently implemented but supported)
- Image optimization through Vite asset handling
- Font preloading configured in `index.html`

### SEO & Meta

- Comprehensive meta tags for SEO and social sharing (Open Graph, Twitter Cards)
- Semantic HTML structure with proper heading hierarchy
- robots.txt configured for search engine crawling
- Descriptive page titles and meta descriptions

## External Dependencies

### UI Component Libraries
- **@radix-ui/* (multiple packages)** - Headless UI primitives for accessible components (accordion, dialog, dropdown, select, tabs, toast, etc.)
- **shadcn/ui** - Pre-built component system based on Radix UI
- **lucide-react** - Icon library for consistent iconography
- **framer-motion** - Animation library for smooth transitions and micro-interactions
- **embla-carousel-react** - Carousel/slider functionality

### Form & Validation
- **react-hook-form** - Form state management and validation
- **@hookform/resolvers** - Validation schema resolvers
- **zod** (likely used with resolvers, though not directly visible in package.json snippet)

### Utilities
- **clsx** & **tailwind-merge** - Utility class merging and conditional styling
- **class-variance-authority** - Type-safe variant APIs for components
- **date-fns** - Date manipulation and formatting
- **cmdk** - Command menu component
- **input-otp** - OTP input component
- **next-themes** - Theme switching support

### Development Tools
- **TypeScript** - Static typing and enhanced IDE support
- **ESLint** - Code linting with React-specific rules
- **Vite** - Build tool and dev server
- **@vitejs/plugin-react-swc** - Fast React refresh with SWC compiler
- **lovable-tagger** - Component tagging plugin for development mode

### Future Integration Points
- **Advertising Platform**: Google AdX integration mentioned in legal pages (not yet implemented in code)
- **Analytics**: No current implementation but slots exist for tracking
- **Backend API**: Structure supports future integration for dynamic pricing data
- **Database**: May add Postgres with Drizzle ORM for persistent data storage