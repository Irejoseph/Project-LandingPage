import Code from "./Code"
import Getout from "./Getout"

export default function Condcomp() {
    const display = false
    return display ? <Code /> : <Getout />
}

