import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import ArtifactDetails from "../components/ArtifactDetails";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import MyArtifacts from "../pages/MyArtifacts";
import LikedArtifacts from "../pages/LikedArtifacts";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/artifactDetails/:id',
                element:<PrivateRoute></PrivateRoute>
            },
            {
                path:'/allArtifacts',
                element:<AllArtifacts></AllArtifacts>
            },
            {
                path:'/addArtifacts',
                element:<PrivateRoute><AddArtifacts></AddArtifacts></PrivateRoute>
            },
            {
                path:'/myArtifacts',
                element:<PrivateRoute></PrivateRoute>
            },
            {
                path:'/likedArtifacts',
                element:<PrivateRoute><LikedArtifacts></LikedArtifacts></PrivateRoute>
            }
        ]
    }
])

export default router