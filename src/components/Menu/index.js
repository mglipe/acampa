import LinkMenu from 'components/LinkMenu'
import styles from './Menu.module.css'

export default function Menu(){
    const links = [
        {name: 'Início', path: '/'},
        {name: 'Eventos', path: '/Eventos'},
        {name: 'Mensagem', path:'/Mensagem'},
        {name: 'Experiência', path: '/Experiencia'},
    ];

    return(
        <div className={styles.menu}>
            {links.map((link)=>(
                <LinkMenu key={link.name} to={link.path}>
                    {link.name}
                </LinkMenu>
            ))}
        </div>
    )
}