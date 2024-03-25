export default function Fruit({name, price, emoji, soldout}) {
  return  (
    <>
      {/* {name}  {price} */}
       
        <li>
          {name} {price} {emoji} {soldout ? "soldOut" : ""}
        </li>
      
    </>
  )
}