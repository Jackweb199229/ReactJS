
import  styles from './Header.module.css';
function Header() {

    return (
        <div className={styles.header}>
        <h1> This is The Header </h1>
        <button className={styles.btn}> Login </button>

        </div>
    );
}

export default Header;