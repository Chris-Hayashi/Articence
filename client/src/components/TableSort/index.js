import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';
import { csv } from 'd3';

const row = d => {
    d.sl_no = parseInt(d.sl_no);
    d.ssc_p = parseFloat(d.ssc_p);
    d.hsc_p = parseFloat(d.hsc_p);
    d.degree_p = parseFloat(d.degree_p);
    d.etest_p = parseFloat(d.etest_p);
    d.mba_p = parseFloat(d.mba_p);
    d.salary = parseInt(d.salary);
    // d.gender = +d.gender;
    // d.ssc_b = +d.ssc_b;
    // d.hsc_b = +d.hsc_b;
    // d.hsc_s = +d.hsc_s;
    // d.degree_t = +d.degree_t;
    // d.workex = +d.workex;
    // d.specialisation = +d.specialisation;
    // d.status = +d.status;
    return d;
}

const TableSort = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        csv('data.csv', row).then(data => {
            console.log("data: ", data);
            setData(data);
        });
    }, []);

    const columns = [{
        id: "sl_no",
        Header: "sl_no",
        accessor: d => d.sl_no
        // defaultSortDesc: true
    }, {
        Header: "gender",
        accessor: "gender"
    }, {
        id: "ssc_p",
        Header: "ssc_p",
        accessor: d => d.ssc_p
    }, {
        Header: "ssc_b",
        accessor: "ssc_b"
    }, {
        id: "hsc_p",
        Header: "hsc_p",
        accessor: d => d.hsc_p
    }, {
        Header: "hsc_b",
        accessor: "hsc_p"
    }, {
        Header: "hsc_s",
        accessor: "hsc_s"
    }, {
        id: "degree_p",
        Header: "degree_p",
        accessor: d => d.degree_p
    }, {
        Header: "degree_t",
        accessor: "degree_t"
    }, {
        Header: "workex",
        accessor: "workex"
    }, {
        id: "etest_p",
        Header: "etest_p",
        accessor: d => d.etest_p
    }, {
        Header: "specialisation",
        accessor: "specialisation"
    }, {
        id: "mba_p",
        Header: "mba_p",
        accessor: d => d.mba_p
    }, {
        Header: "status",
        accessor: "status"
    }, {
        id: "salary",
        Header: "salary",
        accessor: d => d.salary
    }];

    return (
        <div>
            
        <ReactTable data={data} columns={columns} />
        </div>
    );
}

export default TableSort;

// class TableSort extends Component {

//     render() {
        // const [data, setData] = useState([]);
        // useEffect(() => {
        //     csv('data.csv').then(data => {
        //         setData(data);
        //     })
        // }, []);
//         // const data =[{

//         // }];

        // const columns = [{
        //     Header: "sl_no"
        // }, {
        //     Header: "gender"
        // }, {
        //     Header: "ssc_p"
        // }, {
        //     Header: "ssc_b"
        // }, {
        //     Header: "hsc_p"
        // }, {
        //     Header: "hsc_b"
        // }, {
        //     Header: "hsc_s"
        // }, {
        //     Header: "degree_p"
        // }, {
        //     Header: "degree_t"
        // }, {
        //     Header: "workex"
        // }, {
        //     Header: "etest_p"
        // }, {
        //     Header: "specialisation"
        // }, {
        //     Header: "mba_p"
        // }, {
        //     Header: "status"
        // }, {
        //     Header: "salary"
        // }];
        
        // return (
        //     <div>
                
        //     <ReactTable data={data} columns={columns} />
        //     </div>
        // );

//     }
// }

// export default TableSort;