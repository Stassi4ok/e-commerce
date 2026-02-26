import {commonRouter,userRouter,adminRouter} from './routers'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Template} from '../template/template'
import {useContext} from 'react'
import {CurrencyUser, ROLES} from '../context/userContext'





function getRoutersByRole(role){
    
    const routersByRole = {
        [ROLES.GUEST]: commonRouter,
        [ROLES.USER]:[ ...commonRouter,...userRouter],
        [ROLES.ADMIN]: adminRouter
    };
    return routersByRole[role] || [];

}




function MyAppRouter() {
    const {user} = useContext(CurrencyUser);
    const role = user.role;
    console.log(user);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Template />,
            children: getRoutersByRole(role),
        }
    ]);
  return <RouterProvider router={router} />;
}

export default MyAppRouter;