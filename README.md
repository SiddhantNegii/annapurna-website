<img width="1919" height="931" alt="image" src="https://github.com/user-attachments/assets/b1b4707b-30f9-449a-9130-bf20a468279e" />

# Annapurna Indian Restaurant Website

This repository contains the source code for the official website of Annapurna, an authentic Indian restaurant located in Füssen, Germany. This project was developed on a freelance basis to establish a modern, engaging, and professional digital storefront for the client.

**Live Website:** [**https://annapurna-website.vercel.app/**](https://annapurna-website.vercel.app/)

-----

## ✨ Features

  * **Fully Responsive Design:** A mobile-first approach ensures a seamless and visually consistent experience on all devices, from smartphones to desktops.
  * **Bilingual Support (DE/EN):** The entire website is internationalized, allowing users to switch between German and English content with a single click.
  * **Dynamic & Engaging UI:** Built with Framer Motion to include smooth page transitions, on-scroll reveal animations, and subtle micro-interactions that enhance the user experience.
  * **Interactive Image Gallery:** A full-screen lightbox gallery with keyboard and on-screen controls for intuitive navigation through high-quality food and restaurant photos.
  * **Data-Driven Menu:** The restaurant's menu is dynamically rendered from a central `menu.json` file, making it incredibly easy for the client to update dishes, descriptions, and prices without touching any code.
  * **Integrated Google Maps:** An embedded, interactive map shows the restaurant's precise location for user convenience.

-----

## 🛠️ Tech Stack

This project was built using a modern, efficient, and scalable tech stack:

  * **Frontend:** [React.js](https://reactjs.org/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  * **Animations:** [Framer Motion](https://www.framer.com/motion/)
  * **Internationalization (i18n):** [react-i18next](https://react.i18next.com/)
  * **Routing:** [React Router](https://reactrouter.com/)
  * **Deployment:** [Vercel](https://vercel.com/)
  * **CI/CD:** [GitHub Actions](https://github.com/features/actions)

-----

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/SiddhantNegii/annapurna-website.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd annapurna-website
    ```

3.  **Install the dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

-----

## 📝 How to Update Content

One of the key features of this project is the ease of content management for the client.

### Updating the Menu

To add, remove, or modify menu items, simply edit the **`src/assets/menu.json`** file. The website will automatically update with the new information upon the next deployment.

Each dish object follows this structure:

```json
{
  "name_en": "Butter Chicken",
  "name_de": "Butter Hähnchen",
  "description_en": "Chicken from the clay oven in a butter-tomato sauce",
  "description_de": "Hähnchen aus dem Lehmofen in einer Butter-Tomaten-Sauce",
  "price": "€15.90",
  "image": "/images/butter-chicken.jpg"
}
```

### Updating Text Content

General text content (like hero section taglines or button text) is managed in the translation files located in `public/locales/en/translation.json` and `public/locales/de/translation.json`.

-----

## 📁 Project Structure

The project follows a standard React application structure to keep the codebase organized and maintainable.

```
annapurna-website/
├── public/
│   └── locales/      # Translation files
├── src/
│   ├── assets/       # Images and menu.json
│   ├── components/   # Reusable React components (Navbar, Hero, Menu, etc.)
│   ├── pages/        # Page components (HomePage, FullMenuPage, etc.)
│   ├── App.jsx       # Main application component with routing
│   ├── index.css     # Global styles and Tailwind directives
│   └── main.jsx      # Application entry point
└── tailwind.config.js # Tailwind CSS configuration
```
