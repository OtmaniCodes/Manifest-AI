import { createBrowserRouter } from "react-router-dom";
import NotFoundRoute from "../view/routes/not-found";

const router = createBrowserRouter([
    {
        path: HOME_ROUTE,
        element:  (<>
                <Navbar />
                <NotFoundRoute />
            </>)
        
    },
    {
        path: "*",
        element: <NotFoundRoute />,
    },
]);

export default router;
