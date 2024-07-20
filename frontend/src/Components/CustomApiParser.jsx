import axios from "axios";
import { useState, useEffect } from "react";

export const customReactQuery = (urlPath) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await axios.get(urlPath);
                console.log(response.data);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        })();
    }, []);

    return [data, error, loading];
};
