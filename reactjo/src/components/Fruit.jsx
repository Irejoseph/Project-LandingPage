export default function Fruit({name, price, emoji}) {
  return  (
    <>
      {/* {name}  {price} */}
      {price > 9 ? (
        <li>
          {name} {price} {emoji}
        </li>
      ) : (
        ""
      )}
    </>
  )
}