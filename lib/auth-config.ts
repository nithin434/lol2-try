// Auth configuration validation
export const authConfig = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  },
  github: {
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  },
  nextauth: {
    url: process.env.NEXTAUTH_URL || 'https://syntexa.app',
    secret: process.env.NEXTAUTH_SECRET!,
  },
  backend: {
    url: process.env.BACKEND_API_URL || 'http://35.200.140.65:5000',
  },
}

// Validate required environment variables
export function validateAuthConfig() {
  const required = [
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET', 
    'GITHUB_ID',
    'GITHUB_SECRET',
    'NEXTAUTH_SECRET'
  ]

  const missing = required.filter(key => !process.env[key])
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}
