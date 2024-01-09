import { createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import Error from "./Error/Error";
import AllCards from "./AllCards/AllCards";
import ShowCard from "./ShowCard/ShowCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/cards",
    element: <AllCards />,
    errorElement: <Error />,
  },
  {
    path: "/cards/:cardNumber/:cardOrientation",
    element: <ShowCard />,
    errorElement: <Error />,
  },
]);

export default router;
