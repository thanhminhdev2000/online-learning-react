# Online Learning React Application

## Project Description

Online Learning React Application is a frontend interface built using ReactJS for an online learning platform. The project provides users with an interface to access courses, register, view lessons, and interact with the learning content.

## Features

- View list of courses
- Register for courses
- View lesson details
- Interact with learning content and exercises
- Search for courses by category or name
- Upload learning materials

## Project Structure

The project has the following folder structure:

```
online-learning-react/
├── api-hooks/         # Hooks for API calls
├── api-swagger/       # Swagger integration for API endpoints
├── common/            # Utility functions and shared constants
├── components/        # Reusable UI components
├── config/            # General configuration of the application (e.g., API endpoint)
├── pages/             # Main pages of the application
├── store/             # State management of the application (Zustand)
├── utils/             # Utility functions for the application
├── public/            # Static files like index.html, images
├── src/               # Main source code folder
│   ├── App.js         # Main application file
│   └── index.js       # Application entry point
├── package.json       # Project information and dependencies
└── README.md          # README file
```

## Installation

### System Requirements

- Node.js installed (at least v14.0.0)
- npm or yarn

### Installation Steps

1. Clone the project:

   ```bash
   git clone https://github.com/thanhminhdev2000/online-learning-react.git
   cd online-learning-react
   ```

2. Create .env file in root directory:

   ```bash
   VITE_API_URL=
   VITE_API_PREFIX=
   ```

3. Install dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

4. Run the project in development mode:

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

5. Open your browser and access [http://localhost:3000](http://localhost:3000) to view the interface.

## Technologies Used

- **ReactJS**: The main framework for building the user interface
- **React Router**: Handles navigation between pages
- **Zustand**: State management
- **Axios**: HTTP client library for backend communication

## Usage

For testing purposes, you can use the following accounts:

**Admin Account**:

- Username: admin1
- Password: zzzxxx

**User Account**:

- Username: user11
- Password: zzzxxx

## Contribution

If you want to contribute to the project, please create a **Pull Request** or a new **Issue**. All contributions are welcome!

## Contact

- **Author**: Nguyen Thanh Minh
- **Email**: [thanhminh.nguyendev@gmail.com](mailto:thanhminh.nguyendev@gmail.com)
- **Deployed at**: [http://52.207.226.211/](http://52.207.226.211/)

Thank you for your interest in our project!
