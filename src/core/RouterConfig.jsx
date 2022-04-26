



import {
    useRoutes,
} from "react-router-dom";
import routers from "../router";


const Routes = () => {

    const elements = useRoutes(routers);
    return elements;
}



export default Routes