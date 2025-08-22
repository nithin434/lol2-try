# Deployment Checklist

## ✅ Pre-Deployment Steps

### 1. Environment Variables
- [ ] Create `.env.local` file with all required variables
- [ ] Generate secure `NEXTAUTH_SECRET` using `openssl rand -base64 32`
- [ ] Verify all OAuth credentials are correct

### 2. OAuth Provider Configuration

#### Google OAuth Console
- [ ] Add `https://syntexa.app/api/auth/callback/google` to Authorized redirect URIs
- [ ] Add `https://syntexa.app` to Authorized JavaScript origins
- [ ] Verify Client ID and Secret match environment variables

#### GitHub OAuth App
- [ ] Set Authorization callback URL to `https://syntexa.app/api/auth/callback/github`
- [ ] Set Homepage URL to `https://syntexa.app`
- [ ] Verify Client ID and Secret match environment variables

### 3. Domain Configuration
- [ ] Ensure `syntexa.app` is properly configured
- [ ] Verify HTTPS is enabled
- [ ] Check DNS settings

## ✅ Testing Steps

### 1. Local Testing
- [ ] Run `npm run dev` and test authentication flow
- [ ] Visit `/test-auth` to verify session management
- [ ] Test Google login flow
- [ ] Test GitHub login flow
- [ ] Verify redirect to backend works

### 2. Production Testing
- [ ] Deploy to production
- [ ] Test authentication on live domain
- [ ] Verify redirects work correctly
- [ ] Check error handling

## ✅ Troubleshooting

### Common Issues

1. **"Invalid redirect URI" error**
   - Check OAuth provider redirect URI settings
   - Ensure exact match with callback URLs

2. **"NEXTAUTH_SECRET not set" error**
   - Verify `.env.local` file exists
   - Check environment variable name

3. **Authentication fails silently**
   - Check browser console for errors
   - Verify OAuth credentials are correct
   - Check network connectivity

4. **Redirect not working**
   - Verify `BACKEND_API_URL` is correct
   - Check if backend server is accessible

### Debug Mode
Set `NODE_ENV=development` to enable debug logging in NextAuth.

## ✅ Security Checklist

- [ ] OAuth secrets are not committed to version control
- [ ] `NEXTAUTH_SECRET` is strong and unique
- [ ] HTTPS is properly configured
- [ ] Environment variables are secure
- [ ] No sensitive data in client-side code

## ✅ Performance

- [ ] Authentication flow is fast (< 3 seconds)
- [ ] No unnecessary redirects
- [ ] Session management is efficient
- [ ] Error handling is graceful
