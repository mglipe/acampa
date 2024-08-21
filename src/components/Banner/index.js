import styles from './Banner.module.css'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.message}>
                <h3>Welcome</h3>
                {/* <img src={} alt=''/> */}
            </div>
        </div>
    )
}