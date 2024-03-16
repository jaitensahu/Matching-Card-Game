
import "./App.css";
import IntroPage from "./Components/IntroPage/IntroPage";
import Context from "./Components/Context/Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroPage2 from "./Components/IntroPage/IntroPage2";
import IntroPage3 from "./Components/IntroPage/IntroPage3.jsx";
import Instruction from "./Components/IntroPage/Instruction.jsx";
import Play from "./Components/Game/Play.jsx";
function App() {
  // All Routes
  let router = createBrowserRouter([
    {
      path: "/",
      element: <IntroPage />,
    },
    {
      path: "/2",
      element: <IntroPage2 />,
    },
    {
      path: "/3",
      element: <IntroPage3 />,
    },
    {
      path: "/instructions",
      element: <Instruction />,
    },
    {
      path: "/play",
      element: <Play />,
    },
  ]);

  return (
    <>
      <Context>
        <RouterProvider router={router}/>
      </Context>
    </>
  );
}

export default App;

