import Code from "./Code"
import Getout from "./Getout"

export default function Condcomp() {
    let messageOne = <Code />
    let messageTwo = <Getout />
    const display = false
    if(display) {
        return messageOne
    } else {
        return messageTwo
    }
}

