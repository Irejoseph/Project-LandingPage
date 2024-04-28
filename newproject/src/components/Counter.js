import { Component } from "react"

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter: 5
        }
    }

    increase(){
        this.setState({
            counter: this.state.counter * 2
        })
    }

    render(){
        return (<div> 
            <h3>Count is: {this.state.counter} </h3>
            <button onClick={() => this.increase()}>Effect</button>
        </div>)
    }
}

export default Counter