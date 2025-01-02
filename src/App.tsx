import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import LoginReg from "./components/LoginReg";
import Layout from "./components/Layout";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [{ index: true, element: <Home></Home> }],
    },
    {
      path: "/login",
      element: <LoginReg></LoginReg>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
