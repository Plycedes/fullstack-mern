import { customReactQuery } from "./Components/CustomApiParser";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
    const [search, setSearch] = useState("Luffy");
    const [pirates, setPirates] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    //const [pirates, error, loading] = customReactQuery("/api/pirates?search=" + search);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await axios.get("/api/pirates?search=" + search, {
                    signal: controller.signal,
                });
                console.log(response.data);
                setPirates(response.data);
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    return;
                }
                setError(true);
                console.log(error);
                setLoading(false);
            }
        })();

        //cleanup
        return () => {
            controller.abort();
        };
    }, [search]);

    return (
        <>
            <h1>CUSTOM API HOOK</h1>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {loading && <h1>Loading...</h1>}
            {error && <h1>Something went wrong</h1>}

            {!loading && !error && <h2>Number of pirates: {pirates.length}</h2>}
        </>
    );
}

export default App;

