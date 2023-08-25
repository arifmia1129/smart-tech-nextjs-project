# Welcome to the Smart Tech PC Builder website! This project is built using Next.js, a React framework, to create a user-friendly platform where users can build their own PC by selecting various components. Below are the details and instructions for setting up and understanding the project.

### Live site link: https://smart-tech-arifmia1129.vercel.app

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Responsive Design](#responsive-design)

## Features

### Navbar

- The website features a "PC Builder" button that redirects users to the PC Builder page.
- The navbar includes a Categories dropdown with different PC component categories.
- Each category has a corresponding route for easy navigation.

### Home Page

- The home page showcases 6 random Featured Products, each with relevant information such as image, name, category, price, availability status, and rating.
- Clicking on a Featured Product takes the user to the product detail page.
- Featured Categories section provides quick access to specific component categories.

### Featured Category Sections

- Clicking on any of the Featured Categories redirects users to pages displaying at least 3 products from that category.
- Each product card shows important information like image, name, category, price, availability status, and rating.
- Clicking on a product card leads to the product detail page.

### Product Detail Page

- Detailed information is available for each PC component, including image, name, category, availability status, price, description, key features, individual rating, average rating, and reviews.
- Users can read and contribute reviews for components.

### PC Builder Page

- Users can select components to build their PC in the PC Builder page.
- Categories like CPU, RAM, Motherboard, etc., are available with "Choose" buttons.
- After selecting a category, users can choose from at least 3 components of that category.
- Components can be added to the PC Builder list.
- The "Complete Build" button becomes active after adding a minimum of 5-6 components.

## Bonus Features

- The PC Builder page is protected, and only logged-in users can access it.
- User authentication is enabled using NextAuth with social login providers like Google and GitHub.
- A success alert is displayed upon clicking the "Complete Build" button.
- The home page includes a hero/banner section and a footer.

## Responsive Design

The Smart Tech PC Builder website is designed to be responsive, providing an optimal viewing experience across various devices, including mobile and desktop.
