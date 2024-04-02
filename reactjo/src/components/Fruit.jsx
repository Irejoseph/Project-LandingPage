<<<<<<< HEAD
export default function Fruit({name, price, emoji, soldout}) {
  return  (
    <>
      {/* {name}  {price} */}
       
        <li>
          {name} {price} {emoji} {soldout ? "soldOut" : ""}
        </li>
      
    </>
=======
export default function Fruit({name, price}) {
  return  (
  <li>
    {name} - {price}
  </li>
>>>>>>> todolist
  )
}