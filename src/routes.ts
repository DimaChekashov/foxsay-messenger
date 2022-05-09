import Chat from "./components/Chat";
import Login from "./components/Login";
import { ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: ROUTE.LOGIN,
        Component: Login
    }
];

export const privateRoutes = [
    {
        path: ROUTE.CHAT,
        Component: Chat
    }
];