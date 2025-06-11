# two-brothers-website

## Getting Started

To start the project locally, follow these steps:

1. **Install Dependencies**:
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   Use the following command to start the development server:
   ```bash
   npm run dev
   ```

3. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` (or the port specified in the terminal) to view the application.

## Deployment

This project is automatically deployed to GitHub Pages.

### Build Process and Order of Operations

1.  **Trigger**: The deployment process is triggered by a push to the `main` branch.
2.  **GitHub Actions Workflow**: A GitHub Actions workflow (defined in `.github/workflows/deploy.yml`) automates the deployment.
3.  **Checkout Code**: The workflow first checks out the latest version of the source code from the `main` branch.
4.  **Install Dependencies**: It then installs all necessary project dependencies using `npm install`.
5.  **Build Project**: The project is built using `npm run build`. This command compiles the React/TypeScript application and generates static HTML, CSS, and JavaScript files in the `./dist` directory.
6.  **Deploy to `gh-pages` Branch**: The static files from the `./dist` directory are then deployed to a separate branch named `gh-pages`.
7.  **GitHub Pages Serves Site**: GitHub Pages is configured to serve the website from the content of the `gh-pages` branch.

This ensures that any changes pushed to the `main` branch are automatically built and deployed to the live GitHub Pages site.

## Configuration

In the general settings for your repo, make sure the GitHub token/workflow has permissions to push to the `gh-pages` branch. This is typically set up in the repository settings under "Actions" and "General".

