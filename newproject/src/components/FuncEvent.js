function FuncEvent(){
    const btnClick = () => {
        console.log("Button hass been clicked oo!!")
    }

    return <div>
        Function  
        <button onClick={btnClick} > Click Here </button>
    </div>
}

export default FuncEvent