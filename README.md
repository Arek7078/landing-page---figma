# Serendale AI - Landing Page

[![Figma Design](https://img.shields.io/badge/Figma-Design-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/BfTEURpgIZOl0ROscQ1B0J/Serendale.ai---AI-based-Blockchain-Hero-Exploration--Community-?node-id=0-1&p=f&t=9Bi2TiZr59WJV689-0)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge)]()

> 🎨 **A modern, responsive landing page for Serendale AI** - Built with HTML5, Tailwind CSS, and vanilla JavaScript. Features mobile-first design, interactive navigation, and beautiful gradient effects.

## 🚀 Live Demo

🔗 **[View Live Demo](https://yourusername.github.io/serendale-ai-landing)** _(Replace with your GitHub Pages URL)_

## 📄 Project Description

This project is a **landing page** created as part of learning front-end development. The page was designed in **Figma** and then coded in HTML with **Tailwind CSS**, presenting a fictional blockchain platform **Serendale AI**.

## 🎨 Figma Design

**[🔗 View Figma Design](https://www.figma.com/design/BfTEURpgIZOl0ROscQ1B0J/Serendale.ai---AI-based-Blockchain-Hero-Exploration--Community-?node-id=0-1&p=f&t=9Bi2TiZr59WJV689-0)**

The landing page was created based on a design made in Figma, which allowed for:

- Precise design reproduction
- Maintaining visual consistency
- Learning to work with design tools
- Understanding the design-to-code workflow

## 🚀 Technologies

- **HTML5** - Page structure and semantic markup
- **Tailwind CSS** - Utility-first CSS framework for styling and responsive design
- **JavaScript (ES6)** - Interactive mobile menu functionality
- **Fontshare** - Custom fonts (Clash Grotesk, Cabinet Grotesk, Chillax, Space Grotesk)
- **Material Symbols** - Google Material Icons for UI elements
- **CDN** - Tailwind CSS Browser CDN for development

## ✨ Features

- **Responsive Design** - Optimized for all device sizes using Tailwind's responsive utilities
- **Mobile Menu** - JavaScript-powered hamburger menu with smooth toggle functionality
- **Gradient Text Effects** - Eye-catching title styling with Tailwind gradients
- **Interactive Buttons** - Gradient backgrounds with hover and scale effects
- **Navigation Menu** - Functional header navigation with mobile hamburger menu
- **Social Media Icons** - Links to social platforms with hover animations
- **Modern Typography** - Multiple custom font families integrated with Tailwind
- **Material Icons** - Google Material Symbols for consistent UI elements
- **Mobile-First Approach** - Designed for mobile devices first using Tailwind's responsive design
- **Utility-First Styling** - Built with Tailwind CSS utility classes for maintainable code

## 🎯 Educational Purpose

This project was created for educational purposes to:

- Learn how to convert Figma designs to code
- Practice modern Tailwind CSS utility-first methodology
- Implement JavaScript for interactive UI components
- Understand mobile-first responsive design principles
- Learn DOM manipulation and event handling
- Master CSS animations and transitions with Tailwind
- Understand the landing page creation process with utility frameworks
- Improve front-end development skills using modern web technologies
- Learn the benefits of utility-first CSS architecture

## 📁 Project Structure

```
serendale-ai-landing/
├── index.html              # Main HTML file with Tailwind CSS classes
├── README.md              # Project documentation
├── css/                   # Stylesheets directory
│   └── style.css          # Additional CSS styles
├── script/                # JavaScript files directory
│   └── script.js          # Mobile menu functionality & DOM manipulation
├── icons/                 # Social media icons
│   ├── Vector.png         # Social media icon
│   ├── Vector (1).png     # Social media icon
│   ├── Vector (2).png     # Social media icon
│   └── Vector (3).png     # Social media icon
└── img/                   # Images directory
    └── Serendale.ai Alternate.png  # Hero background image
```

## 🔗 Demo

**Quick Start:**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/serendale-ai-landing.git
   cd serendale-ai-landing
   ```

2. **Open the project**

   - **Option A**: Open `index.html` directly in your browser
   - **Option B**: Use Live Server in VS Code for hot reload
   - **Option C**: Use Python server: `python -m http.server 8000`

3. **View the site**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or simply open `index.html` in your preferred browser

**No build process required!** This project uses vanilla HTML, CSS, and JavaScript with CDN-based Tailwind CSS.

### 📱 Mobile Menu Functionality

The mobile menu includes:

- **Hamburger Icon** - Material Symbols "menu" icon that toggles navigation
- **Responsive Toggle** - Shows/hides navigation and social links on mobile
- **Dynamic Layout** - Changes header from horizontal to vertical layout
- **JavaScript Control** - Manages visibility and layout classes dynamically
- **Event Handling** - Proper click event management for menu interactions

## 📱 Responsiveness

The page was designed with responsiveness in mind using Tailwind CSS responsive utilities and adapts to different screen sizes:

- **Desktop** (lg: 1024px+) - Full layout with large typography using `lg:` prefixes
- **Tablet** (md: 768px - 1023px) - Adjusted spacing and font sizes using `md:` prefixes
- **Mobile Large** (sm: 640px - 767px) - Stacked layout with optimized content using `sm:` prefixes
- **Mobile Small** (default: <640px) - Compact design for small screens with base classes

Tailwind's responsive design follows a mobile-first approach where base classes apply to all screen sizes and larger breakpoints override when needed.

## 🎨 Color Scheme

- **Background**: Black (`bg-black`)
- **Text**: White (`text-white`)
- **Title Gradient**: From #FF1CF7 to #00F0FF (`bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]`)
- **Buttons**: Blue and purple gradients using Tailwind gradient utilities

## ⚡ Tailwind CSS Features Used

- **Utility Classes** - Complete styling using utility-first approach
- **Responsive Design** - `sm:`, `md:`, `lg:`, `xl:` breakpoint prefixes
- **Custom Colors** - Using arbitrary values with `[]` notation for brand colors
- **Flexbox & Grid** - Modern layout with `flex`, `grid`, and related utilities
- **Typography** - Custom font families and responsive text sizing
- **Gradients** - Text and background gradients for visual appeal
- **Hover Effects** - Interactive states with `hover:` prefix and scale transforms
- **Transitions** - Smooth animations with `transition-transform duration-300`
- **Spacing** - Consistent spacing using Tailwind's spacing scale

## 🎮 JavaScript Features

- **Mobile Menu Toggle** - Hamburger menu functionality for mobile devices
- **DOM Manipulation** - Dynamic class toggling for responsive navigation
- **Event Listeners** - Click handlers for interactive menu behavior
- **Material Icons Integration** - Google Material Symbols for UI consistency
- **Responsive Navigation** - Adaptive menu layout based on screen size

## 📂 File Details

### Core Files

- **`index.html`** - Main page with semantic HTML5 structure, Tailwind classes, and Material Icons
- **`script/script.js`** - Vanilla JavaScript for mobile menu functionality and DOM manipulation
- **`css/style.css`** - Additional custom styles and CSS overrides

### Assets

- **`icons/`** - Social media icons in PNG format (Vector.png, Vector (1).png, Vector (2).png, Vector (3).png)
- **`img/`** - Background images and visual assets for the landing page

### Documentation

- **`README.md`** - Comprehensive project documentation with setup instructions

## 🛠️ Design Process

1. **Figma Design** - Created the initial design concept
2. **HTML Structure** - Built semantic HTML markup with proper IDs
3. **Tailwind Integration** - Implemented responsive styles using Tailwind CSS utilities
4. **JavaScript Development** - Added interactive mobile menu functionality
5. **Component Styling** - Applied Tailwind classes for layout, typography, and effects
6. **Responsive Design** - Used Tailwind's responsive prefixes for different screen sizes
7. **Icon Integration** - Implemented Material Symbols for consistent UI
8. **Testing** - Verified cross-browser compatibility and mobile responsiveness
9. **Optimization** - Enhanced performance and accessibility with modern practices

## 📄 License

This project is created for educational purposes only.

## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub repository
2. Go to Settings → Pages
3. Select source: Deploy from branch
4. Choose branch: `main` and folder: `/ (root)`
5. Your site will be available at: `https://yourusername.github.io/repository-name`

### Netlify/Vercel

- Simply connect your GitHub repository
- Deploy automatically on every push to main branch

## 🤝 Contributing

This is a learning project, but feedback and suggestions are always welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

---

💡 **Note**: This is an educational project created for learning front-end development. The design originates from Figma and was implemented using HTML, Tailwind CSS, and JavaScript.

**Implementation Details**:

- Uses Tailwind CSS Browser CDN v4 for development
- Mobile menu implemented with vanilla JavaScript
- Google Material Symbols for consistent iconography
- Responsive design with mobile-first approach

**Figma Design Credits**: [Serendale.ai Design File](https://www.figma.com/design/BfTEURpgIZOl0ROscQ1B0J/Serendale.ai---AI-based-Blockchain-Hero-Exploration--Community-?node-id=0-1&p=f&t=9Bi2TiZr59WJV689-0)
