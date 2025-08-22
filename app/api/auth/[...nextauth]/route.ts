import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import { validateAuthConfig, authConfig } from "@/lib/auth-config"

// Validate environment variables
validateAuthConfig()

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: authConfig.google.clientId,
      clientSecret: authConfig.google.clientSecret,
    }),
    GitHubProvider({
      clientId: authConfig.github.clientId,
      clientSecret: authConfig.github.clientSecret,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Log successful sign in for debugging
      console.log("Sign in successful:", { user: user.email, provider: account?.provider })
      return true
    },
    async redirect({ url, baseUrl }) {
      // Only redirect to backend if coming from auth flow
      if (url.startsWith(baseUrl)) {
        return `${authConfig.backend.url}/my-resumes`
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
  },
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }
