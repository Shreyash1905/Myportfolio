# UI/UX Designer & Web Developer Portfolio

A beautiful, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, dark/light theme toggle, and EmailJS contact form integration.

## Features

- 🎨 **Modern Design** - Clean, professional design with deep indigo/teal color scheme
- ✨ **Smooth Animations** - Powered by Framer Motion for delightful micro-interactions
- 🌙 **Dark/Light Theme** - Automatic theme detection with manual toggle
- 📱 **Fully Responsive** - Works perfectly on all devices (320px - 1920px)
- 📧 **Contact Form** - EmailJS integration for serverless email delivery
- ♿ **Accessible** - Semantic HTML, keyboard navigation, ARIA labels
- 🔍 **SEO Optimized** - Meta tags, Open Graph, proper heading structure

## Sections

1. **Hero** - Animated entrance with floating decorative elements
2. **About** - Education and personal introduction
3. **Skills** - Animated skill bars with percentages
4. **Projects** - Interactive project cards with modal details
5. **Achievements** - Recognition and activities
6. **Contact** - Email form with validation
7. **Footer** - Social links and credits

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## EmailJS Configuration

To receive contact form submissions via email:

1. **Create an EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/) and sign up
   
2. **Add an Email Service**
   - Connect your email provider (Gmail, Outlook, etc.)
   - Note your **Service ID**

3. **Create an Email Template**
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Message subject
     - `{{message}}` - Message content
   - Note your **Template ID**

4. **Get Your Public Key**
   - Go to Account > API Keys
   - Copy your **Public Key**

5. **Configure Environment Variables**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env with your credentials
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Testing EmailJS

1. Open your site in development mode
2. Fill out the contact form
3. Check your EmailJS dashboard for test emails
4. Verify emails arrive at your inbox

## Customization

### Personal Information

Edit `src/components/Hero.tsx`:
- Update headline and description

Edit `src/components/About.tsx`:
- Change education details
- Update location and interests

### Skills

Edit `src/components/Skills.tsx`:
- Modify `technicalSkills` array with your skills and percentages
- Update `designTools` and `softSkills` arrays

### Projects

Edit `src/components/Projects.tsx`:
- Update the `projects` array with your work
- Add project descriptions, tags, and highlights

### Social Links

Edit `src/components/Footer.tsx`:
- Update `socialLinks` with your actual profile URLs

### Colors & Theming

Edit `src/index.css`:
- Modify CSS variables in `:root` and `.dark` for light/dark themes
- Primary color: `--primary` (indigo)
- Secondary color: `--secondary` (teal)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import project at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables in Site Settings

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form
- **Lucide React** - Icons

## Design Tokens

The design system is defined in `src/index.css` and `tailwind.config.ts`:

```css
/* Primary Colors */
--primary: 243 75% 59%;      /* Deep Indigo */
--secondary: 168 76% 42%;    /* Vibrant Teal */

/* Fonts */
font-display: 'Poppins'      /* Headings */
font-sans: 'Inter'           /* Body text */
```

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by a passionate developer
