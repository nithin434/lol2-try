import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"

// Check for proper NEXTAUTH_SECRET
if (!process.env.NEXTAUTH_SECRET || process.env.NEXTAUTH_SECRET === 'your-nextauth-secret-key-here-change-in-production') {
  console.error("❌ NEXTAUTH_SECRET is not properly set. Please generate a secure secret.")
  throw new Error("NEXTAUTH_SECRET must be a proper generated secret, not the placeholder value")
}

// Check other required environment variables
const requiredVars = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GITHUB_ID: process.env.GITHUB_ID,
  GITHUB_SECRET: process.env.GITHUB_SECRET,
}

const missingVars = Object.entries(requiredVars)
  .filter(([key, value]) => !value)
  .map(([key]) => key)

if (missingVars.length > 0) {
  console.error(`❌ Missing environment variables: ${missingVars.join(', ')}`)
  throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`)
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Log successful sign in for debugging
      console.log("Sign in successful:", { user: user.email, provider: account?.provider })
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback:", { url, baseUrl, backendUrl: process.env.BACKEND_API_URL })
      // Only redirect to backend if coming from auth flow
      if (url.startsWith(baseUrl)) {
        return `${process.env.BACKEND_API_URL || 'http://35.200.140.65:5000'}/my-resumes`
      }
      return url
    },
    async session({ session, token }) {
      // Add user ID to session for backend integration
      if (token.sub) {
        session.user.id = token.sub
      }
      return session
    },
    async jwt({ token, user, account }) {
      // Add provider info to token
      if (account) {
        token.provider = account.provider
      }
      return token
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth-error', // Custom error page
  },
  debug: true, // Enable debug for troubleshooting
})

export { handler as GET, handler as POST }
