import { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    render() {
        return(
        <div className="container">
            <p className="ticktack">{this.state.time}</p>
        </div>
        );
    }
}