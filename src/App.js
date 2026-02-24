import {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurnatsMenu from "./components/RestaurnatsMenu";
import userContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Arun B L"
        }
        setUserName(data.name)
    }, [])

    return (
        <Provider store = {appStore}>
        <userContext.Provider value = {{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </userContext.Provider>
        </Provider>
    )
}

const Grocery = lazy(() => import("./components/Grocery"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />    
        },{
                path: "/retaurnats/:resId",
                element: <RestaurnatsMenu />    
        },
        {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
        },
        {
            path: "/cart",
            element: <Cart />
        }
            ],
        errorElement: <Error/>
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)