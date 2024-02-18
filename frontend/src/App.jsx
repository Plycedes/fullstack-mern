import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios
            .get("/api/pirates")
            .then((response) => {
                setPirates(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    return (
        <>
            <h1>I Love Nico Robin</h1>
            <p>Pirates: {pirates.length}</p>

            {pirates.map((pirate, index) => (
                <div key={pirate.id}>
                    <h3>{pirate.name}</h3>
                    <p>{pirate.title}</p>
                </div>
            ))}
        </>
    );
}

export default App;

