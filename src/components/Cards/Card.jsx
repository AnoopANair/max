import image from "../../assets/react.svg"
import styles from './Card.module.css'


function Card(){
    return (
        <div className={styles.card}>
            <img className={styles.card_image} alt="image 1 " src={image}></img>
            <h2 className={styles.card_title}>Card1</h2>
            <p className={styles.card_text}>Descriptions asdfasdfsdfsdfsdfds
                sdfsdf
                sdfsdfsd
                fsdf
                sdfsdfsdfs
                dfs
            </p>
        </div>
    )
}

export default Card