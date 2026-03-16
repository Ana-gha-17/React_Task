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

                <div className="section">
                    <Link to="/timer">
                        <button className="task-btn">
                            Task 2
                        </button>
                    </Link>
                </div>

                <div className="section">
                    <Link to="/calculator">
                        <button className="task-btn">
                            Task 3
                        </button>
                    </Link>
                </div>

                <div className="section">
                    <Link to="/random-color">
                        <button className="task-btn">
                            Task 4
                        </button>
                    </Link>
                </div>

                <div className="section">
                    <Link to="/filter-products">
                        <button className="task-btn">
                            Task 5
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Home;