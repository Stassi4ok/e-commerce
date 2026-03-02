export const COMMON_ROUTES = {
    HOME: "/",
    LOGIN: '/login',
    REGISTER: '/register',
    // links should use the base path; optional category handled in router config
    PRODUCTS: '/products',
    PRODUCT: '/product/:id',
    CART: '/cart',
    WISHLIST: '/wishlist',
    ABOUT: '/about',
    CONTACT: '/contact',
    NOT_FOUND: '/404'
}

export const USER_ROUTES = {
    CHECKOUT: '/checkout',
    PROFILE: '/profile',
    MY_ORDERS: '/my-orders'

}

export const ADMIN_ROUTES = {
    DASHBOARD: '/dashboard',
    ALL_USERS: '/all-users',
    ALL_ORDERS: '/all-orders'
}