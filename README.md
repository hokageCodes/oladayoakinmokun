# Oladayo Akinmokun - Professional Website

A modern, professional website for Oladayo Akinmokun (The Cyber Lawyer), showcasing her expertise in cybersecurity law, data privacy, and personal branding.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

This project is a full-stack web application built using modern JavaScript/TypeScript technologies. It serves as a professional platform for Oladayo Akinmokun to showcase her expertise, achievements, publications, and speaking engagements while providing resources and maintaining engagement with her audience.

## Features

### Multi-Page Structure
- **Home** - Overview with hero section and highlights of key sections
- **About** - Professional background, qualifications, and career journey
- **Projects** - Showcase of notable projects and case studies
- **Speaking** - Past and upcoming speaking engagements
- **Awards** - Recognition and achievements
- **Books** - Published works and resources
- **Media** - Press features and media appearances
- **Resources** - Valuable tools, guides, and reference materials
- **Facts** - Interesting tidbits and professional insights
- **Contact** - Contact form and communication options

### Key Components
- Responsive navigation with mobile support
- Newsletter subscription functionality
- Contact form with backend data storage
- Social media integration
- Professional branding throughout
- SEO optimization

## Technology Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Wouter** - Lightweight routing
- **TanStack Query** - Data fetching and state management
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **React Hook Form** - Form validation and management
- **Zod** - Schema validation

### Backend
- **Express** - Node.js web application framework
- **Drizzle ORM** - Database toolkit
- **In-Memory Storage** - Fast data storage for development

## Architecture

The application follows a modern web architecture:

1. **Client-Side Rendering** - React-based frontend with client-side routing
2. **API-Based Communication** - REST API endpoints for data exchange
3. **Modular Component Structure** - Reusable components organized by function
4. **Type-Safe Development** - TypeScript throughout for code quality
5. **Responsive Design** - Mobile-first approach with Tailwind CSS

## Project Structure

```
├── client/                  # Frontend code
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions and constants
│   │   ├── pages/           # Page components
│   │   ├── sections/        # Page sections
│   │   ├── App.tsx          # Main application component
│   │   └── main.tsx         # Application entry point
│   └── index.html           # HTML template
├── server/                  # Backend code
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Data storage implementation
│   └── vite.ts              # Vite integration
├── shared/                  # Shared code between client and server
│   └── schema.ts            # Database schema and types
└── [Configuration Files]    # Various configuration files
```

## Data Models

The application uses the following data models:

- **User** - Authentication and user management
- **ContactSubmission** - Contact form submissions
- **Newsletter** - Newsletter subscription information

## Setup & Installation

For detailed setup instructions, please refer to the [SETUP.md](SETUP.md) file.

Quick start:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

This application can be deployed to any Node.js-compatible hosting platform:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the built application to your hosting provider of choice (Vercel, Netlify, Heroku, etc.)

## Future Enhancements

Planned features for future development:

- **Blog System** - Content management for articles and blog posts
- **Client Portal** - Password-protected area for clients
- **Event Calendar** - Interactive calendar for speaking engagements
- **Testimonial Submission** - Allow visitors to submit testimonials
- **Advanced Analytics** - Track user engagement and content performance

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All libraries and frameworks used in this project
- Contributors and maintainers

---

© 2023 Oladayo Akinmokun. All Rights Reserved.