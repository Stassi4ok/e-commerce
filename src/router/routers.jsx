import {COMMON_ROUTES, USER_ROUTES, ADMIN_ROUTES} from './routesName'
export const commonRouter = [
    {
        path:COMMON_ROUTES.HOME,
        element: <div>Home</div>,
    },
    {
        path:COMMON_ROUTES.ABOUT,
        element: <div>About</div>,
    },
    {
        path:COMMON_ROUTES.CART,
        element: <div >Cart</div>,
    },
    {
        path:COMMON_ROUTES.CONTACT,
        element: <div >CONTACT</div>,
    },
    {
        path:COMMON_ROUTES.LOGIN,
        element: <div>login</div>,
    },
    {
        path:COMMON_ROUTES.NOT_FOUND,
        element: <div>404</div>,
    },
    {
        path:COMMON_ROUTES.REGISTER,
        element: <div>register</div>,
    },
     {
        path:COMMON_ROUTES.PRODUCTS,
        element: <div>products</div>,
    },
    {
        path:COMMON_ROUTES.WISHLIST,
        element: <div>Wishlist</div>,
    },
]

export const userRouter = [
    {
        path:USER_ROUTES.CHECKOUT,
        element: <div>CHECKOUT</div>,
    },
    {
        path:USER_ROUTES.PROFILE,
        element: <div>PROFILE</div>,
    },
    {
        path:USER_ROUTES.MY_ORDERS,
        element: <div>MY_ORDERS</div>,
    },
]

export const adminRouter = [
    {
        path:ADMIN_ROUTES.ALL_ORDERS,
        element: <div>ALL_ORDERS</div>,
    },
    {
        path:ADMIN_ROUTES.ALL_USERS,
        element: <div>ALL_USERS</div>,
    },
    {
        path:ADMIN_ROUTES.DASHBOARD,
        element: <div>ALL_USERS</div>,
    }
]