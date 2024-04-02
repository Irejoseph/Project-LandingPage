import Code from "./Code"
import Getout from "./Getout"

<<<<<<< HEAD
export default function Condcomp() {
    const display = false
    return display ? <Code /> : <Getout />
=======

export default function Condcomp() {
    let messageOne = <Code />
    let messageTwo = <Getout />
    const display = false
    if(display) {
        return messageOne
    } else {
        return messageTwo
    }
>>>>>>> todolist
}

