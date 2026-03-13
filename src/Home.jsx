import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div>

            <h1>REACT TASKS</h1>

            <div className="container">

                <div className="section">
                    <Link to="/counter">
                        <button className="task-btn">
                            Task 1
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Home;