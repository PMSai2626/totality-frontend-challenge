# Booking management System

##Project Overview

This is a comprehensive Booking management system built using Next.js and Recat. The application allows users to browser Properties, add items to the their cart, and proceed to a secure Payment Process. The system ensures a responsive and user-friendly experience across various devices.


##Table of Contents


- [features](#features)
- [Tech stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Deployement](#deployement)
- [Approach](#approach)
- [Additional Notes](#additional-notes)
- [Contributions](#contributions)
- [License](#license)

## Features 
- **Responsive navabr:** A responsive navigation bar with links to Home, Properties, and cart pages.
-**cart management:** users can view items in their cart and procees to payment.
-**payment Peocessing:**A form to collect payment details and display a success message upon completion

-**Image Handling:** Ensure all required fields are filled defore processing payment.

-**From Validation:** Ensure all requires fields are filled before processing payment.

-**Mobile Responsiveness:** The application is optimized for mobile and desktop views.

**tech Stack

- **Frontend:**
- [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
  - [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- **State Management:**
  - [React Context](https://reactjs.org/docs/context.html): To manage the cart state.
- **Image Handling:**
  - [Next/Image](https://nextjs.org/docs/api-reference/next/image): Optimized image component for Next.js.


## Project Structure

|-- app
| |-- context
| | |-- CartContext.js
| |-- components
| | |-- Navbar.js
| |-- pages
| | |-- index.js
| | |-- properties.js
| | |-- cart.js
| | |-- payment.js
|-- public
| |-- images
|-- styles
| |-- globals.css
|-- README.md
|-- package.json




## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/booking-management-system.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd booking-management-system
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

2. **Build the project for production:**

    ```bash
    npm run build
    ```

3. **Start the production server:**

    ```bash
    npm start
    ```

## Deployment

To deploy this application to Netlify, follow these steps:

1. **Install Netlify CLI:**

    ```bash
    npm install -g netlify-cli
    ```

2. **Build the project:**

    ```bash
    npm run build
    ```

3. **Deploy using Netlify CLI:**

    ```bash
    netlify deploy
    ```

4. **Follow the prompts to link to your Netlify account and site.**

## Approach

### Responsive Design

- Utilized Tailwind CSS to create a responsive layout ensuring usability across various devices.
- Employed flex and grid utilities to structure components efficiently.

### State Management

- Used React Context API to manage the cart state globally, providing a seamless experience for adding and viewing cart items across different components.

### Form Validation

- Implemented form validation to ensure all required fields are filled before processing the payment.
- Used state to manage form data and error messages, providing real-time feedback to users.

### Mobile Optimization

- Ensured the application is fully responsive, using utility classes from Tailwind CSS to adjust layouts and elements for smaller screens.
- Added scrollable containers and handled overflow to maintain usability on mobile devices.

