# 🔧 Git Setup Guide for Portfolio Repository

This guide will help you set up the repository correctly with the new GitHub URL and deploy it to Vercel.

## 📋 Prerequisites

- Git installed on your system
- GitHub account
- Vercel account (optional, for deployment)

## 🚀 Repository Setup

### 1. Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd portfolio.github.io

# Initialize git (if not already initialized)
git init

# Check current remote (if any)
git remote -v
```

### 2. Update Remote Origin

If you have an existing remote, update it to the new repository:

```bash
# Remove existing remote (if different)
git remote remove origin

# Add the new remote
git remote add origin https://github.com/subrat243/portfolio.git

# Verify the new remote
git remote -v
```

### 3. Prepare for Initial Commit

```bash
# Check git status
git status

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Cybersecurity portfolio with Next.js 14"
```

### 4. Push to GitHub

```bash
# Create and switch to main branch (if not already on main)
git branch -M main

# Push to GitHub (first time)
git push -u origin main
```

## 🔒 Setting up GitHub Repository

### 1. Create Repository on GitHub

1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Repository name: `portfolio`
4. Description: "Interactive Cybersecurity Portfolio with Next.js 14"
5. Set to **Public** (recommended for portfolio)
6. **DO NOT** initialize with README, .gitignore, or license (since you already have files)
7. Click "Create repository"

### 2. Repository Settings

After creating the repository:

1. **About Section**:
   - Description: "🚀 Interactive Cybersecurity Portfolio featuring 3D animations, Next.js 14, and modern web technologies"
   - Website: Add your Vercel deployment URL
   - Topics: `portfolio`, `nextjs`, `cybersecurity`, `typescript`, `threejs`, `framer-motion`

2. **Pages Setup** (Optional):
   - Go to Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `main` / `/ (root)`

## 🚀 Vercel Deployment Setup

### Option 1: Automatic Deployment (Recommended)

1. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your `subrat243/portfolio` repository

2. **Configure Project**:
   - Project Name: `subrat-portfolio` (or your preference)
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   ```
   RESEND_API_KEY=your_api_key_here
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your portfolio will be live at `https://your-project-name.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name: subrat-portfolio
# - Directory: ./
# - Override settings? No

# For production deployment
vercel --prod
```

## 🔄 Development Workflow

### Daily Development

```bash
# Pull latest changes (if working in team)
git pull origin main

# Create a new feature branch
git checkout -b feature/new-feature

# Make your changes...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new project showcase section"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
# After review and merge, switch back to main
git checkout main
git pull origin main
```

### Quick Updates

```bash
# Make changes...
git add .
git commit -m "update: improve mobile responsiveness"
git push origin main
```

## 🎯 Pre-Deployment Checklist

Before pushing changes, always run:

```bash
# Verify everything is working
npm run pre-deploy

# This runs:
# 1. ESLint check
# 2. Build verification
# 3. Deployment readiness check
```

## 🔧 Troubleshooting

### Common Issues

**1. Permission Denied (GitHub)**
```bash
# If you get permission errors, ensure SSH key is set up or use HTTPS
git remote set-url origin https://github.com/subrat243/portfolio.git
```

**2. Large Files Warning**
```bash
# If you have large video files, ensure they're under 25MB for Vercel
# Check file sizes:
find public/videos -name "*.webm" -exec ls -lh {} \;
```

**3. Build Fails on Vercel**
```bash
# Check build locally first:
npm run build

# If successful locally but fails on Vercel:
# 1. Check environment variables
# 2. Verify all dependencies are in package.json
# 3. Check Vercel function logs
```

**4. Different Styling on Deployment**
```bash
# Run the deployment verification:
npm run verify-deployment

# This checks for common deployment issues
```

## 📊 Repository Maintenance

### Regular Tasks

1. **Keep Dependencies Updated**:
   ```bash
   # Check for updates
   npm outdated
   
   # Update packages
   npm update
   ```

2. **Security Audits**:
   ```bash
   # Check for vulnerabilities
   npm audit
   
   # Fix automatically
   npm audit fix
   ```

3. **Performance Monitoring**:
   - Monitor Vercel Analytics
   - Check Lighthouse scores regularly
   - Monitor Core Web Vitals

## 🎉 Success!

Once completed, you should have:

- ✅ Repository properly set up on GitHub
- ✅ Automatic deployments configured on Vercel
- ✅ Portfolio accessible at your custom URL
- ✅ Consistent styling between local and production
- ✅ All features working correctly

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review [DEPLOYMENT_FIXES.md](./DEPLOYMENT_FIXES.md)
3. Check Vercel deployment logs
4. Ensure all prerequisites are met

---

**Repository**: https://github.com/subrat243/portfolio  
**Last Updated**: December 2024  
**Version**: 1.0.0