import { customReactQuery } from "./Components/CustomApiParser";
import "./App.css";

function App() {
    const [pirates, error, loading] = customReactQuery("/api/pirates");

    if (error) {
        return <h1>Something went wrong</h1>;
    }

    if (loading) {
        return <h1>Loading</h1>;
    }

    return (
        <>
            <h1>CUSTOM API HOOK</h1>
            <h2>Number of pirates: {pirates.length}</h2>
        </>
    );
}

export default App;

// const customReactQuery = (urlPath) => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState(false);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         (async () => {
//             try {
//                 setError(false);
//                 setLoading(true);
//                 const response = await axios.get(urlPath);
//                 console.log(response.data);
//                 setData(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 setError(true);
//                 setLoading(false);
//             }
//         })();
//     }, []);

//     return [data, error, loading];
// };

