import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Recommendation from './pages/Recommendation';
import Error from './pages/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/recommendation",
      element: <Recommendation />,
    },
    {
      path: "*",
      element: <Error/>
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
