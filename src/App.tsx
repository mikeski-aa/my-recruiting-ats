import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import LoginReg from "./components/LoginReg";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NewReq from "./components/NewReq";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home></Home> },
        { path: "/newreq", element: <NewReq /> },
      ],
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
