# 🚀 Cybersecurity Portfolio - Subrat Samantaray

Welcome to my interactive cybersecurity portfolio built with Next.js 14, featuring stunning 3D animations, space-themed design, and cutting-edge web technologies.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/subrat243/portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue)](https://www.typescriptlang.org/)

## 🌟 Features

### 🎭 Interactive 3D Experience
- **Animated Star Field**: 5000+ particles creating a dynamic space environment
- **Video Backgrounds**: Immersive blackhole, skills, and encryption-themed visuals
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Responsive Design**: Seamless experience across all devices

### 🔐 Cybersecurity Focus
- **Skills Showcase**: Network Security, Penetration Testing, VAPT, Digital Forensics
- **Featured Projects**: Automated vulnerability detection, network stress testing tools
- **Security Tools**: Nmap, Wireshark, Metasploit, Burp Suite, and more
- **Compliance Frameworks**: NIST, ISO 27001/27002, PCI DSS, HIPAA

### 🛠️ Technical Excellence
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first styling with custom animations
- **Three.js**: 3D graphics and animations
- **Optimized Performance**: Image optimization, lazy loading, caching

## 🚀 Live Demo

Visit the live portfolio: [https://subrat-portfolio.vercel.app](https://your-vercel-url-here)

## 📸 Screenshots

### Hero Section
![Hero Section](./public/screenshots/hero.png)

### Skills Showcase
![Skills Section](./public/screenshots/skills.png)

### Projects Portfolio
![Projects Section](./public/screenshots/projects.png)

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14, React 18 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, CSS3 |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Animations** | Framer Motion |
| **Icons** | Heroicons, React Icons |
| **Deployment** | Vercel |
| **Tools** | ESLint, PostCSS, Autoprefixer |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/subrat243/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```
   Add your environment variables:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── main/             # Main page sections
│   ├── sub/              # Reusable components
│   └── ui/               # UI components
├── config/               # Configuration files
├── constants/            # App constants
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── videos/          # Background videos
│   ├── projects/        # Project images
│   └── ...              # Other assets
├── scripts/              # Build scripts
└── ...
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run verify-deployment` | Verify deployment readiness |
| `npm run pre-deploy` | Complete pre-deployment check |

## 🎨 Customization

### 1. Personal Information
Update your details in `config/app-config.ts`:

```typescript
export const APP_CONFIG = {
  site: {
    name: "Your Name Portfolio",
    title: "Your Name | Your Title",
    description: "Your description here",
    // ... other settings
  },
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    // ... other social links
  },
  // ... other configurations
}
```

### 2. Projects
Add your projects in `config/app-config.ts`:

```typescript
projects: [
  {
    id: "your-project-id",
    title: "Your Project Title",
    description: "Project description here",
    image: "/projects/your-project-image.jpg",
    link: "https://github.com/your-username/your-project",
    technologies: ["Technology", "Stack"],
    featured: true,
  },
  // ... more projects
]
```

### 3. Skills
Customize your skills in the same config file:

```typescript
skills: {
  categories: [
    {
      title: "Your Skill Category",
      items: ["Skill 1", "Skill 2", "Skill 3"],
    },
    // ... more categories
  ],
}
```

## 🎬 Adding Custom Videos

1. **Optimize your videos** (recommended: WebM format, <25MB for Vercel)
2. **Place videos** in the `public/videos/` directory
3. **Update references** in the respective components
4. **Test locally** before deployment

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Configure environment variables (if needed)
   - Deploy automatically on push

3. **Verify deployment**
   ```bash
   npm run verify-deployment
   ```

### Other Platforms

The project is compatible with:
- Netlify
- GitHub Pages (with static export)
- AWS Amplify
- Firebase Hosting

## 🐛 Troubleshooting

### Common Issues

**Build Failures**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Video Not Loading**
- Ensure videos are optimized and <25MB
- Check video file paths in components
- Verify MIME types in middleware

**Styling Differences**
- Run the pre-deploy verification script
- Check Tailwind configuration
- Verify CSS variables are consistent

**Performance Issues**
- Optimize images and videos
- Check bundle size with `npm run build`
- Monitor Core Web Vitals

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Load JS**: ~358 kB (optimized)
- **Core Web Vitals**: Excellent ratings
- **SEO Optimized**: Meta tags, structured data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js Community** for amazing 3D graphics capabilities
- **Framer Motion** for smooth animations
- **Next.js Team** for the excellent framework
- **Vercel** for seamless deployment
- **Tailwind CSS** for utility-first styling

## 📞 Contact

**Subrat Samantaray**
- 🌐 Website: [Your Portfolio URL]
- 💼 LinkedIn: [linkedin.com/in/subrat243](https://linkedin.com/in/subrat243)
- 🐙 GitHub: [github.com/subrat243](https://github.com/subrat243)
- 📧 Email: subratsamantaray43@gmail.com
- 🐦 X (Twitter): [@0xSubrat](https://x.com/0xSubrat)

---

⭐ **If you found this project helpful, please consider giving it a star!** ⭐

---

*Built with ❤️ by Subrat Samantaray*