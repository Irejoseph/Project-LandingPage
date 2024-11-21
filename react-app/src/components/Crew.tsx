import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import styles from "./crew.module.css"


const Crew = (props: any) => {
  return (
    <div className={styles.squad}>
        <h1>Squad</h1>
        <br />
        <div>
            <h3>Name: {props.name1}</h3>
            <h3>Othername: {props.sqn1}</h3>
            <h4>Title: {props.title1}</h4>
            <button type="button" className={styles.btn}>Click to view profile</button>
        </div>
        <br />
        <div>
            <h3>Name: {props.name2}</h3>
            <h3>Othername: {props.sqn2}</h3>
            <h4>Title: {props.title2}</h4>
            <button type="button" className={styles.btn}>Click to view profile</button>
        </div>
        <br />
        <div>
            <h3>Name: {props.name3}</h3>
            <h3>Othername: {props.sqn3}</h3>
            <h4>Title: {props.title3}</h4>
            <button type="button" className={styles.btn}>Click to view profile</button>
        </div>
        <br />
        <div>
            <h3>Name: {props.name4}</h3>
            <h3>Othername: {props.sqn4}</h3>
            <h4>Title: {props.title4}</h4>
            <button type="button" className={styles.btn}>Click to view profile</button>
        </div>
        <br />
        <div>
            <h3>Name: {props.name5}</h3>
            <h3>Othername: {props.sqn5}</h3>
            <h4>Title: {props.title5}</h4>
            <button type="button" className={styles.btn}>Click to view profile</button>
        </div>
        <br />
        <div>
            <h3>Name: {props.name6}</h3>
            <h3>Othername: {props.sqn6}</h3>
            <h4>Title: {props.title6}</h4>
            <button type="button" className={styles.btn}>Click to view profile</button>
        </div>
        <br />
        <div>
            <h3>Name: {props.name7}</h3>
            <h3>Othername: {props.sqn7}</h3>
            <h4>Title: {props.title7}</h4>
            <button type="button" className={styles.btn}>Click to view profile</button>
        </div>
    </div>
  )
}

export default Crew