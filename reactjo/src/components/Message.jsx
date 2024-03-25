export default function Message() {
    function handleCLick(){
        console.log("Clickety click")
    }
    return <div>
        <button onClick={handleCLick}>Click here to see your SHAME</button>
    </div>
}