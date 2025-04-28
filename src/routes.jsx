import { Route } from "react-router-dom";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieCard from "./components/MovieCard";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops! Looks like something went wrong.</h1>
    </div>
  );
};


const routes = [
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/actors',
    element: <Actors/>
  },
  {
    path: '/directors',
    element:<Directors/>
  },
  {
    path: '/movie/:id',
    element:<Movie/>
  },
  {
    path: "/bad-route", 
    element: <div>Oops! Looks like something went wrong.</div>,
  },

];

export default routes;