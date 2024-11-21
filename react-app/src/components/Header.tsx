import Home from './Home'
import styles from './ul.module.css'


const Header = () => {
  return (
    <div>
        <h1 className={styles.header}>
            Slaughter Gang plc
        </h1>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}><a href="/Home.tsx" target='_blank'>Home</a></li>
            <li className={styles.li}><a href="#">Contact</a></li>
            <li className={styles.li}><a href="#">About</a></li>
          </ul>
        </nav>
        <hr></hr>
    </div>
    
  )
}

export default Header