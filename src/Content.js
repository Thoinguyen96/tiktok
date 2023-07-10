import { useState, useRef, useContext } from "react";
import { themeContext } from "./App";

function Content() {
    const [count, setCount] = useState(100);
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs"));

        return storageJobs ?? [];
    });
    const color = useContext(themeContext);

    const handleSubmit = () => {
        setJobs((prev) => {
            const newJobs = [...prev, job];
            const jsonNewJobs = JSON.stringify(newJobs);
            localStorage.setItem("jobs", jsonNewJobs);
            return newJobs;
        });
        setJob("");
    };
    const handleDelete = (index) => {
        setJobs((prev) => {
            const clearJob = [...prev];
            clearJob.splice(index, 1);
            const jsonNewJobs = JSON.stringify(clearJob);
            localStorage.setItem("jobs", jsonNewJobs);
            return clearJob;
        });
        setJob("");
    };
    const handleDeleteAll = () => {
        setJobs((prev) => {
            const clearJob = [];
            const jsonNewJobs = JSON.stringify(clearJob);
            localStorage.setItem("jobs", jsonNewJobs);
            return clearJob;
        });
        setJob("");
    };
    let pause = useRef();

    const handleUp = () => {
        pause.current = setInterval(() => {
            setCount((prev) => {
                return prev + 1;
            });
        }, 1000);
    };
    const handlePause = () => {
        return clearInterval(pause.current);
    };
    return (
        <div className={color}>
            <button onClick={handleUp}>Up</button>
            <button onClick={handlePause}>Pause</button>
            <br></br>
            <h1>{count}</h1>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add Work</button>
            <button onClick={handleDeleteAll}>Delete All</button>
            <ul>
                {jobs.map((job, index) => {
                    return (
                        <li className="item-Work" key={index}>
                            {job}
                            <button
                                className="btn-delete"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Content;
