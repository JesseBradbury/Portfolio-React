// React 
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// Styles
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';


// Fonts for Material Ui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// Main Routes
import Root from './routes/root'
import ErrorPage from "./error-page";
import AboutMe from "./components/AboutMe"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"


// React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AboutMe />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ]
  },
]);

// Theme for Material Ui
const theme = createTheme({
  palette: {
    primary: {
      main: "#A3B4A2",
    },
    secondary: {
      main: "#A3B4A2",
    },
  },
  typography: {

    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),

    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
