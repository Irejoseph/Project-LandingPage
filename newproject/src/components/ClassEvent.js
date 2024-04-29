import { Component } from "react";

class ClassEvent extends Component{
    btnClick(){
        console.log("Hola Hermano")
    }

    render(){
        return (
        <div>
            Oui Oui
            <button onclick={this.btnClick}>Click</button>
        </div>)
        
    }
}

export default ClassEvent