import styles from '../styles/butom.module.scss'

const Button = ({children}) => {

    console.log('styles', styles)

    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

export { Button }