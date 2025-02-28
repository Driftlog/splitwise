import { useRoutes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Error from "./components/Error";

export default function Routes() {

    let routes = useRoutes([
        {path:'/', element:<Homepage/>},
        {path:'/login', element: <Login/>},
        {path:'/signUp', element: <Signup/>},
        {path:'*', element:<Error/>}
    ])

    return routes
}