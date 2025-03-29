import React from "react";
import './candidate.css';
import { Link } from "react-router-dom";
import NavBar from "../../../components/navbar/navbar";

const Candidate = () => {
    return (
        <>
            <NavBar />
            <div className="candidate-page">
                <div className="container-wrapper">
                    <div className="add-candidate">
                        <Link
                            to='/candidate/addCandidate'
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <button className="prime-button">
                                <i className="fa-solid fa-address-book"></i>
                                <span>Add New Candidate</span>
                            </button>
                        </Link>
                    </div>
                    <div className="search-candidate">
                        <Link
                            to='/candidate/viewCandidate'
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <button className="prime-button">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span>Candidates</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Candidate;
