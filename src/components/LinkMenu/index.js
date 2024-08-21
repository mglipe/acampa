import { Link, useLocation } from "react-router-dom";
import styles from './LinkMenu.module.css'
export default function LinkMenu({children, to}){
    const location = useLocation();
    return(
        <Link 
            className={`
                ${styles.link}
                ${location.pathname === to ? styles.linkSelected : ''}
            `
            } 
            to={to}
        >
            {children}
        </Link>
    )
}