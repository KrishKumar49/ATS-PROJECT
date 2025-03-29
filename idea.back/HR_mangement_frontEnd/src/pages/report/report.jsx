import React from "react";
import { Link } from "react-router-dom";
import "./report.css";
import NavBar from "../../components/navbar/navbar";

const Reports = () => {
    return (
        <>
        <NavBar />
        <div className="report-container">
            <h2>REPORTS</h2>
            <div className="report-tabs">
                <Link to="/reports/timeToHire">
                    <button>Time To Hire Report</button>
                </Link>
                <Link to="/reports/openPosition">
                    <button>Open Positions Report</button>
                </Link>
                <Link to="/reports/applicantProgress">
                    <button>Applicant Progress Report</button>
                </Link>
                <Link to="/reports/hiringEfficiency">
                    <button>Hiring Efficiency Report</button>
                </Link>
            </div>
            <div className="bg-container-reports">
        </div>
        </div>
        </>
    );
};

export default Reports;
