# My Developer Portfolio App

A modern, semantic, and maintainable website built with Nuxt 3 and TypeScript.

- [Architecture](#architecture)
   - [Directory Structure](#directory-structure)
   - [Key Features](#key-features)
   - [Component Organization](#component-organization)
   - [TypeScript Integration](#typescript-integration)
   - [State Management](#state-management)
   - [Styling](#styling)
- [Development](#development)
   - [Prerequisites](#prerequisites)
   - [Setup](#setup)
   - [Deployment](#deployment)
- [Best Practices](#best-practices)
- [Contributing](#contributing)

## Architecture

### Directory Structure

```
├── components/
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── ui/            # Reusable UI components
│   ├── features/      # Feature-specific components
│   └── shared/        # Shared components
├── composables/       # Vue composables for shared logic
├── types/            # TypeScript type definitions
├── pages/            # Page components
├── public/           # Static assets
└── assets/           # Processed assets
```

### Key Features

- **TypeScript Support**: Full type safety throughout the application
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **Component Architecture**: Well-organized, reusable components
- **Composables**: Shared logic using Vue composables
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance**: Optimized for fast loading and smooth interactions

### Component Organization

Components are organized into four main categories:

1. **Layout Components**: Components that define the overall structure of the application (Header, Footer, etc.)

2. **UI Components**: Reusable UI elements (Button, Card, Modal, etc.)

3. **Feature Components**: Components specific to certain features (ProjectCard, ExperienceTimeline, ContactForm, etc.)

4. **Shared Components**: Components used across multiple features (Icon, LoadingSpinner, etc.)

### TypeScript Integration

The application uses TypeScript for:

- Component props and emits
- API responses
- State management
- Utility functions

### State Management

State is managed using:

- Vue's Composition API
- Custom composables for shared logic
- Props and events for component communication

### Styling

- Tailwind CSS for utility-first styling
- Custom components for complex UI elements
- Responsive design patterns

## Development

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The application is deployed using:

- AWS S3 for static file hosting
- CloudFront for CDN and caching
- Route 53 for DNS management

## Best Practices

1. **Component Design**
   - Keep components small and focused
   - Use TypeScript for type safety
   - Follow Vue 3 Composition API patterns

2. **Code Organization**
   - Group related components together
   - Use clear, descriptive names
   - Document complex logic

3. **Performance**
   - Lazy load components when possible
   - Optimize images and assets
   - Use proper caching strategies

4. **Accessibility**
   - Use semantic HTML
   - Include proper ARIA attributes
   - Ensure keyboard navigation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Mail me for the `.env` file (deveci2024@gmail.com)
4. Commit your changes
5. Push to the branch
6. Create a Pull Request
