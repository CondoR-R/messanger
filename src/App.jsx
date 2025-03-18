import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/layout/Layout";
import MainPage from "./pages/mainPage/MainPage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/loginPage/RegistrationPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
