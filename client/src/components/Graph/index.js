import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import "./style.css"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                // text: "Most Popular Social Networking Sites"
            },
            axisX: {
                // title: "Social Network",
                // reversed: true,
            },
            axisY: {
                labelFormatter: this.addSymbols
            },
            data: [{
                type: "bar",
                dataPoints: this.props.graphData
            }]
        }
        return (
            <div>
                <CanvasJSChart options={options} />
            </div>
        );
    }
    addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
}
export default Graph;