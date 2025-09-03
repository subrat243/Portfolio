# Portfolio Maintenance Guide

## 🛠️ Comprehensive Guide to Prevent Recurring Issues

This guide helps you maintain your portfolio and prevent common issues from recurring.

---

## 📋 Quick Health Check

Before making changes, run these commands to ensure everything is working:

```bash
npm run lint          # Check for code quality issues
npm run build         # Test production build
npm run dev           # Start development server
```

All commands should complete without errors.

---

## 🔧 Common Issues & Permanent Solutions

### 1. **Navigation Link Issues**

**Problem:** Links break or don't navigate properly

**Solution:**
- All navigation links are now centralized in `config/app-config.ts`
- Use hash links for same-page navigation: `#about`, `#skills`
- Use full URLs for external links: `https://example.com`

**To Update Navigation:**
```typescript
// Edit config/app-config.ts
navigation: {
  links: [
    { title: "Home", href: "/", isExternal: false },
    { title: "About", href: "#about", isExternal: false },
    // Add new links here
  ],
}
```

### 2. **Image Loading Issues**

**Problem:** Images fail to load or show broken links

**Solution:**
- All image paths are centralized in `config/app-config.ts`
- Automatic fallback to `/Cyber-Security.png` for broken images
- Validation functions prevent invalid image paths

**To Add New Images:**
1. Place image in `/public` folder
2. Update `assets.images` in `config/app-config.ts`
3. Use `getSafeAssetUrl()` helper function

### 3. **CSS Class Malformation**

**Problem:** CSS classes have syntax errors like `opacity-[0.9]]`

**Solution:**
- Automatic CSS class sanitization with `sanitizeClassName()`
- ESLint rules prevent common mistakes
- Centralized theme configuration

**Best Practices:**
```typescript
// Good
className="opacity-[0.9] bg-purple-500"

// Bad (automatically fixed)
className="opacity-[0.9]] bg-purple-500"
```

### 4. **Social Media Links**

**Problem:** Social links become outdated or malformed

**Solution:**
- All social links centralized in `config/app-config.ts`
- Automatic URL validation
- Single source of truth for all social platforms

**To Update Social Links:**
```typescript
// Edit config/app-config.ts
social: {
  x: "https://x.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
  // Links are automatically validated
}
```

### 5. **Animation Errors**

**Problem:** Framer Motion animations cause crashes

**Solution:**
- Error boundary wraps all components
- Safe animation wrapper with fallbacks
- Centralized animation configuration

---

## 🎯 Configuration Management

### Central Configuration File

All settings are now in `config/app-config.ts`. This prevents:
- Duplicate configurations
- Inconsistent URLs
- Hard-to-find settings
- Configuration drift

### Key Configuration Sections:

1. **Site Information**
2. **Navigation Links**
3. **Social Media URLs**
4. **Asset Paths**
5. **CV Download Link**
6. **Projects Data**
7. **Skills Categories**
8. **Animation Settings**
9. **Theme Colors**

---

## 🔒 Error Prevention System

### Error Boundary

- Wraps entire application
- Catches runtime errors
- Shows user-friendly error messages
- Logs errors for debugging

### Validation Functions

- `validateNavLink()` - Ensures links are properly formatted
- `validateImageSrc()` - Prevents broken image sources
- `sanitizeClassName()` - Fixes CSS class issues
- `validateSocialLink()` - Validates social media URLs

### Safe API Requests

```typescript
import { safeApiRequest } from '@/lib/error-handler';

const { success, data, error } = await safeApiRequest('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

---

## 📦 Update Procedures

### 1. Updating CV Link

```typescript
// config/app-config.ts
cv: {
  downloadUrl: "YOUR_GOOGLE_DRIVE_LINK_HERE",
}
```

**Steps:**
1. Upload CV to Google Drive
2. Set permissions to "Anyone with link can view"
3. Copy link and update config
4. For direct download, replace `/view?usp=sharing` with `/export?format=pdf&download=1`

### 2. Adding New Projects

```typescript
// config/app-config.ts
projects: [
  {
    id: "unique-project-id",
    title: "Project Title",
    description: "Project description...",
    image: "/path-to-image.png",
    link: "https://github.com/username/repo",
    technologies: ["Tech1", "Tech2"],
    featured: true,
  },
]
```

### 3. Updating Skills

```typescript
// config/app-config.ts
skills: {
  categories: [
    {
      title: "New Skill Category",
      items: ["Skill 1", "Skill 2", "Skill 3"],
    },
  ],
}
```

### 4. Changing Theme Colors

```typescript
// config/app-config.ts
theme: {
  colors: {
    primary: {
      purple: "#your-purple-color",
      cyan: "#your-cyan-color",
    },
  },
}
```

---

## 🧪 Testing Checklist

Before deploying changes, verify:

- [ ] `npm run build` completes successfully
- [ ] `npm run lint` shows no errors
- [ ] All navigation links work
- [ ] Social media links open correctly
- [ ] CV download button works
- [ ] Images load properly
- [ ] Animations work smoothly
- [ ] Mobile responsiveness maintained
- [ ] Contact form functions (if using)

---

## 🚀 Deployment Best Practices

### Before Each Deployment:

1. **Run Full Test Suite**
```bash
npm run lint
npm run build
```

2. **Check Configuration**
```bash
# Verify all URLs in config are valid
# Check that CV link is updated
# Ensure all assets exist
```

3. **Test in Development**
```bash
npm run dev
# Test all functionality manually
```

### After Deployment:

1. **Verify Live Site**
2. **Test All Links**
3. **Check Mobile View**
4. **Verify Analytics (if configured)**

---

## 🔍 Troubleshooting

### Build Failures

1. Check for TypeScript errors
2. Verify all imports are correct
3. Ensure all assets exist
4. Check ESLint issues

### Runtime Issues

1. Check browser console for errors
2. Error boundary will catch and display issues
3. Check network tab for failed requests

### Navigation Issues

1. Verify links in `config/app-config.ts`
2. Check for typos in href attributes
3. Ensure hash links start with `#`

---

## 📚 File Structure

```
portfolio/
├── config/
│   └── app-config.ts          # Central configuration
├── lib/
│   └── error-handler.tsx      # Error handling utilities
├── components/
│   ├── error-boundary.tsx     # Error boundary component
│   ├── main/                  # Main components
│   └── sub/                   # Sub components
├── constants/
│   └── index.ts               # Constants (uses config)
└── MAINTENANCE.md             # This file
```

---

## 🎯 Key Principles

1. **Single Source of Truth** - All configuration in one place
2. **Error Prevention** - Validate everything before use
3. **Graceful Degradation** - Always have fallbacks
4. **User Experience First** - Never show technical errors to users
5. **Maintainable Code** - Clear structure and documentation

---

## 📞 Support

If you encounter issues not covered in this guide:

1. Check the error boundary logs
2. Review browser console errors
3. Verify configuration in `app-config.ts`
4. Test in development mode first
5. Check if the issue is environment-specific

---

## 🔄 Regular Maintenance Tasks

### Weekly:
- [ ] Check all external links work
- [ ] Verify CV download link
- [ ] Test contact form (if applicable)

### Monthly:
- [ ] Update dependencies
- [ ] Review and update projects
- [ ] Check performance metrics
- [ ] Update skills if needed

### Quarterly:
- [ ] Review and update configuration
- [ ] Update personal information
- [ ] Refresh social media links
- [ ] Consider design improvements

---

**Remember: With the new centralized configuration and error handling system, most recurring issues are now automatically prevented or gracefully handled.**

---

*Last Updated: December 2024*
*Next Review: March 2025*