import {Login,Products,Signup,Wishlist,Cart,Home,PageNotFound,OrderSummary} from "./pages/main";
import {AddressList,RequireAuth} from './components';
import Mockman from 'mockman-js';
const ROUTES = [
    {
        path:"/",
        element:<Home />
    },
    {
        path:"login",
        element:<Login />
    },
    {
        path:"signup",
        element:<Signup/>
    },
    {
        path:"products",
        element:<Products/>
    },
    {
        path:'/',
        element:<RequireAuth/>,
        children:[
            {
                path:"wishlist",
                element:<Wishlist/>
            },
            {
                path:"cart",
                element:<Cart/>
            },
            {
                path:"address",
                element:<AddressList/>
            },
            {
                path:"order-summary",
                element:<OrderSummary/>
            },
        ]
    },
    {
        path:"*",
        element:<PageNotFound/>
    },
    {
        path:"mock",
        element:<Mockman />
    }
]
export {ROUTES}