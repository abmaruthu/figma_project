import React from 'react';
import { Home } from './pages/Home';
import { Product_manager } from './pages/Product_manager';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/product",
      element: <Product_manager/>,
    },
  ]);
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;








