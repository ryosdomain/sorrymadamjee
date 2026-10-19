import React from "react";
import Header from "./components/header";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import Tictactoe from "./components/tictactoe"
import RockPaperScissors from "./components/rockPaperScissors";
import Layout from "./components/layout";
const App = () => {
  const router = createBrowserRouter(
    [
      {path: '/',
        element: <Layout />,
        children:[
          {
        path:'/',
        index: true,
        element: <Tictactoe />
      },
      {
        path:"/rockpaperscissors",
        element: <RockPaperScissors />
      }
        ]
      }
      
    ]
  )
  return (
    <div>
      <div className="bg-black/95 h-full border ">
        <div className="mx-5 lg:w-200 lg:m-auto pt-10 border-x border-yellow-200">
          
          <RouterProvider router={router}></RouterProvider>
        </div>
        
      </div>
    </div>
  );
};

export default App;
