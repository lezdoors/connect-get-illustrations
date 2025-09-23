# 🚀 VERCEL DEPLOYMENT GUIDE

## Quick Deploy to Vercel

### Option 1: GitHub Integration (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"  
3. Import from GitHub: `lezdoors/connect-get-illustrations`
4. Vercel will auto-detect Vite settings
5. Deploy! 🚀

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
# Follow the prompts
```

## ✅ What's Already Configured

- **vercel.json**: Proper SPA routing configuration
- **React Router**: Fixed navigation for Vercel compatibility  
- **Build Settings**: Vite build outputs to `dist/` folder
- **Caching**: Optimal headers for static assets
- **Routing**: All URLs route to index.html for SPA functionality

## 🔧 Vercel Settings (Auto-configured)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist", 
  "framework": "vite"
}
```

## 🧪 Testing After Deployment

1. **Homepage**: Verify hero section loads properly
2. **Form Flow**: Test mini form → step 2 redirect  
3. **Direct URLs**: Test `/enedis-raccordement` direct access
4. **Mobile**: Verify responsive design works

## 🌐 Domain Configuration

After deployment, you can:
1. Add custom domain in Vercel dashboard
2. Configure DNS with your domain provider
3. Vercel handles SSL certificates automatically

## 📞 Contact Info Update

Don't forget to update these in production:
- Phone number: Currently `09 70 70 95 70`
- Email: Currently `serviceclient@raccordement-connect.com`  
- Domain references in sitemap.xml and robots.txt

Your site is now **100% Vercel-ready**! 🎉