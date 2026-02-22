import {commonRouter,userRouter,adminRouter} from './routers'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Template} from '../template/template'



const ROLES = {
    GUEST: 'guest',
    USER: 'user',
    ADMIN: 'admin'
}

const role = ROLES.GUEST

function getRoutersByRole(role){
    
    const routersByRole = {
        [ROLES.GUEST]: commonRouter,
        [ROLES.USER]:[ ...commonRouter,...userRouter],
        [ROLES.ADMIN]: adminRouter
    };
    return routersByRole[role] || [];

}




function MyAppRouter() {
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