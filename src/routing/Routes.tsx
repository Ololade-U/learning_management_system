import App from "../App";
import Courses from "../Components/Courses";
import Hero from "../Components/Hero";
import LearningPath from "../Components/LearningPath";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Hero /> },
      { path: "/courses", element: <Courses /> },
      { path: "/learning-path", element: <LearningPath /> },
    ],
  },
]);

export default router