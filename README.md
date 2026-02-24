# YourCar - Premium Landing Page

This project is a high-end automotive landing page built for **YourCar**, following a specific premium design with minimalist aesthetics, bold typography, and a sophisticated color palette.

## 🛠 Project Updates & Technical Details

Each file has been meticulously updated to align with the new visual identity:

### 1. `index.html`
- **Structure**: Reorganized to include specific professional sections: **About Us**, **Services**, **Our Fleet**, **Gallery**, **Testimonials**, and **Brand Partners**.
- **SEO & Accessibility**: Implemented semantic HTML5 tags and descriptive alt text for all images.
- **Typography**: Integrated **Outfit** (for headings) and **Inter** (for body text) to create a modern, premium feel.

### 2. `style.css`
- **Visual Identity**: Implemented the primary brand color (`#ba210c`) throughout all interactive elements.
- **Background Headers**: Created a unique aesthetic using large, faded background text (e.g., "ABOUT US") to add depth to each section.
- **Responsive Layouts**: Fixed the navbar with a glassmorphism effect on scroll and ensured the grid systems (3-column gallery and cars) adapt perfectly to mobile screens.
- **Aesthetics**: Added smooth transitions, custom box shadows, and hover effects (scaling images and shifting cards) to provide a high-end user experience.

### 3. `main.js`
- **Dynamic Content**: Updated the engine to fetch and render car cards, a multi-image gallery, and star-rated testimonials from `data.json`.
- **Shopping Cart Engine**: 
    - Implemented a complete cart management system with `localStorage` persistence.
    - Added real-time quantity controls (increase/decrease) and a "Delete All" function.
    - Integrated the cart sidebar with smooth CSS transitions and a dedicated overlay.
- **UI Logic**: Added scroll-event listeners to handle dynamic navbar styling.

### 4. `data.json`
- **Standardized Data**: Rewrote the JSON structure to include car descriptions, seat/luggage capacities, gallery paths, and testimonial meta-data (ratings and names).

### 5. `/images`
- **Custom Assets**: Generated and integrated high-quality automotive photography:
    - `car-top-down.png`: A clean profile view for the About section.
    - `brands.png`: A minimalist strip of world-class car brand logos.
    - `gallery-*.png`: High-performance car images for the visual showcase.
    - `hero-bg.png`: An action-oriented hero background.

## 🚀 How to Run
Since the application uses `fetch()` to load the `data.json` file, it **must** be run through a local web server (such as VS Code's **Live Server**) to avoid browser security (CORS) issues when loading local files.
