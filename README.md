# Insurance Underwriting Dashboard

This is a front-end application built with **Angular** that serves as a high-fidelity UI implementation of an insurance underwriter's workbench. The project features two main screens: a comprehensive Dashboard for an at-a-glance overview and a detailed Account Page for in-depth analysis of a specific client.

This application was developed as a test assignment to demonstrate skills in creating complex, data-driven user interfaces with a component-based architecture, responsive design, and interactive elements.

**[Live Demo]** (https://angular-dashboard-app-sigma.vercel.app))

## ✨ Key Features & Implemented Components

The project visually implements all required UI blocks, simulating a real-world underwriting environment. The focus was on the visual and structural implementation rather than complex business logic.

#### Dashboard Page (`/`)
- **Global Navigation:** A responsive navigation bar with active state highlighting managed by Angular Router.
- **Work Queue Component:** A UI for a task table demonstrating tab-based navigation for filtering data, managed by component properties.
- **Portfolio Goals Component:** A set of custom-styled progress bars and indicators to visually represent portfolio targets.
- **Quick Actions Component:** A panel layout with fully styled, interactive buttons.
- **Market Intelligence Component:** A UI widget for displaying a list of market news items.
- **My Accounts Table Component:** The layout for a detailed data grid, showcasing custom styling for status indicators, data tags, and interactive elements.

#### Account Page (`/accounts`)
- **Dynamic Header & Breadcrumbs:** A flexible header component that displays client-specific information and breadcrumb navigation.
- **Modular Component Suite:** The page is composed of numerous distinct components:
  - **Performance Metrics & Policies:** High-level overview cards with custom layouts.
  - **Account Status & Compliance:** Stepper components to visualize workflow progression.
  - **Account Details (Winnability):** A complex, multi-part component demonstrating deep nesting, data visualization, and layout for AI-powered recommendations.
  - **Communication Component:** A mail-like widget to display a thread of messages with different states.
  - **Policies Table Component:** A detailed data grid layout with all policies related to the account.
- **UI Interactivity:** Dropdown menus on action buttons in tables provide access to more options.
- **Responsiveness:** All pages and key components are designed to adapt to smaller screen sizes (tablets).

## 🛠️ Tech Stack

- **Angular:** The core framework used for building this component-based user interface.
- **TypeScript:** The primary language for writing application logic and defining data structures.
- **Angular Router:** Used for client-side routing between the Dashboard and Account pages.
- **Bootstrap Icons:** Used as an icon font for the entire application.
- **Angular CLI:** The command-line interface for project creation, component generation, and running a development server.
- **Vanilla CSS:** All styling is done with pure CSS3, utilizing modern features like Flexbox and Grid Layout.

## 🤖 AI Tools Usage

As encouraged by the assignment, an AI assistant (**Gemini Pro by Google**) was actively used throughout the development process for:
- Step-by-step migration of the entire application from a React prototype to Angular.
- Generating Angular components, templates, and TypeScript logic.
- Debugging complex issues related to CSS layout, TypeScript errors, and Angular's specific features.
- Refactoring code to adhere to best practices.

## 🚀 Getting Started

To run this project locally, ensure you have [Node.js](https://nodejs.org/) and the [Angular CLI](https://angular.dev/cli) installed on your machine.

1.  **Clone the repository:**
    ```bash
    git clone [your_repository_link]
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd [folder_name]
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    ng serve
    ```
    The application will be available at `http://localhost:4200`.

## 📁 Project Structure

The project utilizes a logical and scalable folder structure, conventional for Angular applications.
```
/src
|-- /app
|   |-- /components     # All reusable UI components (AccountStatus, PoliciesTable, etc.)
|   |-- /data           # Mock data in JSON format
|   |-- /pages          # Page-level components (Dashboard, Account)
|   |-- app.config.ts   # Main application configuration
|   |-- app.routes.ts   # Main application routes
|   |-- app.ts          # The root component logic
|   |-- app.html        # The root component template
|-- /assets         # Static assets like images
|-- main.ts         # The application's entry point
|-- styles.css      # Global styles
```