import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./pages/LoginPage";
import History from "./pages/History";
import Playlist from "./pages/Playlist";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/playlist",
    element: <Playlist />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
