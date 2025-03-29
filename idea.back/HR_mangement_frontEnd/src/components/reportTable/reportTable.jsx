// import React from "react";

// const ReportTable = ({ columns, data }) => {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     {columns.map((column, index) => (
//                         <th key={index}>{column}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((item, index) => (
//                     <tr key={index}>
//                         <td>{item.jobTitle || 'N/A'}</td>
//                         <td>{item.averageTimeToHire !== undefined ? item.averageTimeToHire : 'N/A'}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default ReportTable;




import React from "react";

const ReportTable = ({ columns, data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{item[column.accessor] || "N/A"}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ReportTable;
