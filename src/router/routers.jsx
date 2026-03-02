import {COMMON_ROUTES, USER_ROUTES, ADMIN_ROUTES} from './routesName'
import {NotFoundPage,AboutPage,RegisterPage,LoginPage,ProductPage,ProductsPage, HomePage} from '../pages/common'
export const commonRouter = [
    {
        path:COMMON_ROUTES.HOME,
        element: <HomePage />,
    },
    {
        path:COMMON_ROUTES.ABOUT,
        element: <AboutPage />,
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
        element: <LoginPage />,
    },
    {
        path:COMMON_ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
    },
    {
        path:COMMON_ROUTES.REGISTER,
        element: <RegisterPage/>,
    },
    {
        // support `/products` and `/products/Phones` etc.
        path: `${COMMON_ROUTES.PRODUCTS}/:category?`,
        element: <ProductsPage />,
    },
    {
        path:COMMON_ROUTES.PRODUCT,
        element: <ProductPage />,
    },
    {
        path:COMMON_ROUTES.WISHLIST,
        element: <div>Wishlist</div>,
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
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
        element: <div>DASHBOARD</div>,
    }
]