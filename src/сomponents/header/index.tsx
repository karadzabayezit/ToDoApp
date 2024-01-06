
import Logo from './logo';
import styles from './styles.module.scss';

function Header () {

  type Link = { name: string, url: string }
  const links: Link[] = [ 
    {name: 'Яндекс', url: 'https://ya.ru/'},
    {name: 'Гугл', url: 'https://www.google.com/'},
    {name: 'Ютуб', url: 'https://www.youtube.com/'},
    {name: 'Хабр', url: 'https://habr.com/'},
  ]
  


  return (
    <header className={styles.header_container} >
      <Logo />
      <div className={styles.header} >

        {links.map(({name, url}) => (
          <a href={url} key={name}>{name}</a>
        ))}
      
      </div>
    </header>
  )

}

export default Header