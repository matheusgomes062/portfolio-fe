import { z } from 'zod';

const envSchema = z.object({
  // Database
  DATABASE_URL: z.string().url(),

  // NextAuth
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_URL: z.string().url(),

  // GitHub OAuth
  GITHUB_ID: z.string().min(1),
  GITHUB_SECRET: z.string().min(1),

  // Spotify API
  SPOTIFY_CLIENT_ID: z.string().min(1).optional(),
  SPOTIFY_CLIENT_SECRET: z.string().min(1).optional(),
  SPOTIFY_REFRESH_TOKEN: z.string().min(1).optional(),

  // Dev.to API
  DEV_TO_API_KEY: z.string().min(1).optional(),

  // Google APIs
  GOOGLE_CLIENT_EMAIL: z.string().email().optional(),
  GOOGLE_PRIVATE_KEY: z.string().min(1).optional(),

  // Environment
  NODE_ENV: z.string().refine((val) => ['development', 'production', 'test'].includes(val as string)).default('development'),
});

export const env = envSchema.parse(process.env);

// Helper function to check if optional services are configured
export const hasSpotify = !!(env.SPOTIFY_CLIENT_ID && env.SPOTIFY_CLIENT_SECRET && env.SPOTIFY_REFRESH_TOKEN);
export const hasDevTo = !!env.DEV_TO_API_KEY;
export const hasGoogle = !!(env.GOOGLE_CLIENT_EMAIL && env.GOOGLE_PRIVATE_KEY);