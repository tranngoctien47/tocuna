import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateApi from "../../Api/CreateApi";
import { getVideo } from "../../redux/reducers/videoReducer";
const WithGetApi = (Component) => {
    const NewComponent = (props) => {

        const dispatch = useDispatch()
        const [data, setData] = useState(null)

        useEffect(async () => {
            dispatch(HandleGetVideo(page))

        }, [])
        if (!data) return "...loading";
        return <Component {...data} />;
    };
    return NewComponent;
};
export default WithGetApi;
