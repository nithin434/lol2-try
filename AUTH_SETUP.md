# Authentication Setup Guide

## Overview
This application uses NextAuth.js v5 with Google and GitHub OAuth providers. After successful authentication, users are redirected to your backend server at `http://35.200.140.65:5000/my-resumes`.

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=https://syntexa.app
NEXTAUTH_SECRET=your-nextauth-secret-key-here-change-in-production

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# GitHub OAuth
GITHUB_ID=your-github-client-id-here
GITHUB_SECRET=your-github-client-secret-here

# Backend API URL
BACKEND_API_URL=http://35.200.140.65:5000
```

### 2. Generate NextAuth Secret
Generate a secure random string for `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

### 3. OAuth Provider Configuration

#### Google OAuth
- **Authorized redirect URIs**: `https://syntexa.app/api/auth/callback/google`
- **Authorized JavaScript origins**: `https://syntexa.app`

#### GitHub OAuth
- **Authorization callback URL**: `https://syntexa.app/api/auth/callback/github`
- **Homepage URL**: `https://syntexa.app`

### 4. How It Works

1. **User clicks Google/GitHub login button** on `/login` page
2. **NextAuth redirects to OAuth provider** (Google/GitHub)
3. **User authenticates** with the provider
4. **Provider redirects back** to NextAuth callback URL
5. **NextAuth processes the authentication** and creates a session
6. **User is redirected** to `http://35.200.140.65:5000/my-resumes`

### 5. Session Management
- Sessions are managed by NextAuth.js
- No local database required (stateless JWT sessions)
- Session data is available in the frontend via `useSession()` hook

### 6. Backend Integration
The backend at `http://35.200.140.65:5000` should:
- Accept authenticated users from this frontend
- Handle user sessions independently
- Provide the `/my-resumes` endpoint and other authenticated routes

### 7. Production Deployment
For production deployment on `syntexa.app`:
1. Set `NEXTAUTH_URL=https://syntexa.app`
2. Update OAuth provider redirect URIs to use `syntexa.app`
3. Generate a secure `NEXTAUTH_SECRET`
4. Ensure HTTPS is properly configured

### 8. Security Notes
- Keep OAuth secrets secure and never commit them to version control
- Use environment variables for all sensitive configuration
- Regularly rotate OAuth secrets
- Monitor authentication logs for suspicious activity
