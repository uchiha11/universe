# Quick Deployment Steps

## 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/universe.git
git push -u origin main
```

## 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your "universe" repository
5. Click "Deploy"

## 3. Configure GoDaddy Domain
1. In Vercel: Settings → Domains → Add your domain
2. In GoDaddy DNS:
   - A Record: @ → 76.76.19.19
   - CNAME Record: www → cname.vercel-dns.com

Done! Your site will be live at your custom domain.