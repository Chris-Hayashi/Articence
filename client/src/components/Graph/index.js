import React, { Component } from 'react';
import { VictoryBoxPlot, VictoryChart } from 'victory';
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./style.css";

class Graph extends Component {
    render(props) {

        const options = [
            "Males",
            "Females",
            "Both"
        ];
        
        const defaultOption = options[0];
        var graphData = this.props.graphData;

        const onSelect = (res) => {
            // state.x_axis = res;
            console.log("onSelect res: ", res);
            switch(res.value) {
                case "Males":
                    graphData = this.props.graphData.filter(person => person.gender === "M")
                    break;
                case "Females":
                    graphData = this.props.graphData.filter(person => person.gender === "F")
                    break;
                case "Both":
                    graphData = this.props.graphData;
                }
            console.log("graphData (inside onSelect): ", graphData);
        }

        // console.log("graphData: ", this.props.graphData);



        return (
            <div>
                <div id="dropdown">
                    <Dropdown options={options} onChange={onSelect} defaultOption={defaultOption} placeholder="Select an option" />;
                </div>
                <div id="graph">
                    <VictoryChart domainPadding={20}>
                        <VictoryBoxPlot
                            boxWidth={20}
                            categories={{
                                x: ["ssc_p", "hsc_p", "degree_p"]
                            }}
                            data={
                                // graphData
                                [
                                    { x: "ssc_p", y: [1, 2, 3, 5] },
                                    { x: "hsc_p", y: [3, 2, 8, 10] },
                                    { x: "degree_p", y: [2, 8, 6, 5] },
                                ]
                            }
                        />
                    </VictoryChart>
                </div>
            </div>
        );
    }
}

export default Graph;