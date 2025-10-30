# Matheus Gomes Portfolio

![Portfolio Preview](https://user-images.githubusercontent.com/47605309/209061871-90fa5ebc-0a87-4b44-b1bc-f2fd8d13df90.png)

A modern, responsive personal portfolio website built with [Next.js](https://nextjs.org/) to showcase projects, blog posts, experiences, and professional background. Features include a guestbook, Spotify integration, and blog integration.

## Features

- **Homepage**: Welcome section, featured projects, and latest blog posts from Dev.to.
- **About Page**: Professional journey, experiences, and social media links.
- **Projects Page**: Showcase of personal and professional projects.
- **Guestbook**: Visitor interactions stored in MongoDB.
- **Blog Integration**: Pulls articles from Dev.to API.
- **Spotify Integration**: Displays currently playing song and top tracks.
- **Dark Mode**: Theme switching with `next-themes`.
- **Analytics**: Vercel Analytics for site metrics.

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM with MongoDB
- **Authentication**: NextAuth.js
- **Content**: Markdown files
- **External APIs**: Dev.to, GitHub, Spotify, Google APIs
- **Deployment**: Vercel
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- MongoDB database (for guestbook and auth)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/matheusgomes062/portfolio-fe.git
    cd portfolio-fe
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Set up environment variables:
    Copy `.env.example` to `.env.local` and fill in the required values:
    - `DATABASE_URL`: MongoDB connection string
    - `NEXTAUTH_SECRET`: Random secret for NextAuth
    - `NEXTAUTH_URL`: Your app's URL
    - Spotify API keys (for now-playing integration)
    - Dev.to API key (if needed)
    - Google API credentials (if used)

4. Generate Prisma client:
    ```bash
    pnpm run postinstall
    ```

5. Run the development server:
    ```bash
    pnpm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
pnpm run build
pnpm run start
```

## Project Structure

- `pages/`: Next.js pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions and configurations
- `content/`: Markdown files for posts and experiences
- `public/`: Static assets and JSON data
- `prisma/`: Database schema and migrations
- `styles/`: Global and component-specific CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `pnpm run lint`
5. Submit a pull request

## Deployment

Deploy to Vercel by connecting your GitHub repository. Ensure environment variables are set in Vercel dashboard.

For more details, see [Next.js deployment docs](https://nextjs.org/docs/deployment).

## License

This project is open source and available under the [MIT License](LICENSE).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/matheusgomes062/portfolio-fe.git
   cd portfolio-fe
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in the required values:
   - `DATABASE_URL`: MongoDB connection string
   - `NEXTAUTH_SECRET`: Random secret for NextAuth
   - `NEXTAUTH_URL`: Your app's URL
   - Spotify API keys (for now-playing integration)
   - Dev.to API key (if needed)
   - Google API credentials (if used)

4. Generate Prisma client:
   ```bash
   pnpm run postinstall
   ```

5. Run the development server:
   ```bash
   pnpm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
pnpm run build
pnpm run start
```

## Project Structure

- `pages/`: Next.js pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions and configurations
- `content/`: Markdown files for posts and experiences
- `public/`: Static assets and JSON data
- `prisma/`: Database schema and migrations
- `styles/`: Global and component-specific CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `pnpm run lint`
5. Submit a pull request

## Deployment

Deploy to Vercel by connecting your GitHub repository. Ensure environment variables are set in Vercel dashboard.

For more details, see [Next.js deployment docs](https://nextjs.org/docs/deployment).

## License

This project is open source and available under the [MIT License](LICENSE).

- MongoDB database (for guestbook and auth)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/matheusgomes062/portfolio-fe.git
   cd portfolio-fe
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in the required values:
   - `DATABASE_URL`: MongoDB connection string
   - `NEXTAUTH_SECRET`: Random secret for NextAuth
   - `NEXTAUTH_URL`: Your app's URL
   - Spotify API keys (for now-playing integration)
   - Dev.to API key (if needed)
   - Google API credentials (if used)

4. Generate Prisma client:
   ```bash
   pnpm run postinstall
   ```

5. Run the development server:
   ```bash
   pnpm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
pnpm run build
pnpm run start
```

## Project Structure

- `pages/`: Next.js pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions and configurations
- `content/`: Markdown files for posts and experiences
- `public/`: Static assets and JSON data
- `prisma/`: Database schema and migrations
- `styles/`: Global and component-specific CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `pnpm run lint`
5. Submit a pull request

## Deployment

Deploy to Vercel by connecting your GitHub repository. Ensure environment variables are set in Vercel dashboard.

For more details, see [Next.js deployment docs](https://nextjs.org/docs/deployment).

## License

This project is open source and available under the [MIT License](LICENSE).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/matheusgomes062/portfolio-fe.git
   cd portfolio-fe
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in the required values:
   - `DATABASE_URL`: MongoDB connection string
   - `NEXTAUTH_SECRET`: Random secret for NextAuth
   - `NEXTAUTH_URL`: Your app's URL
   - Spotify API keys (for now-playing integration)
   - Dev.to API key (if needed)
   - Google API credentials (if used)

4. Generate Prisma client:
   ```bash
   pnpm run postinstall
   ```

5. Run the development server:
   ```bash
   pnpm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
pnpm run build
pnpm run start
```

## Project Structure

- `pages/`: Next.js pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions and configurations
- `content/`: Markdown files for posts and experiences
- `public/`: Static assets and JSON data
- `prisma/`: Database schema and migrations
- `styles/`: Global and component-specific CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `pnpm run lint`
5. Submit a pull request

## Deployment

Deploy to Vercel by connecting your GitHub repository. Ensure environment variables are set in Vercel dashboard.

For more details, see [Next.js deployment docs](https://nextjs.org/docs/deployment).

## License

This project is open source and available under the [MIT License](LICENSE).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/matheusgomes062/portfolio-fe.git
   cd portfolio-fe
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in the required values:
   - `DATABASE_URL`: MongoDB connection string
   - `NEXTAUTH_SECRET`: Random secret for NextAuth
   - `NEXTAUTH_URL`: Your app's URL
   - Spotify API keys (for now-playing integration)
   - Dev.to API key (if needed)
   - Google API credentials (if used)

4. Generate Prisma client:
   ```bash
   pnpm run postinstall
   ```

5. Run the development server:
   ```bash
   pnpm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
pnpm run build
pnpm run start
```

## Project Structure

- `pages/`: Next.js pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions and configurations
- `content/`: Markdown files for posts and experiences 
- `public/`: Static assets and JSON data
- `prisma/`: Database schema and migrations
- `styles/`: Global and component-specific CSS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `pnpm run lint`
5. Submit a pull request

## Deployment

Deploy to Vercel by connecting your GitHub repository. Ensure environment variables are set in Vercel dashboard.

For more details, see [Next.js deployment docs](https://nextjs.org/docs/deployment).

## License

This project is open source and available under the [MIT License](LICENSE).

