import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <div className='container mx-auto '>
        <div className={styles.wrapper}>
          <Link href='/'>
            <a><img className='mx-auto' src='/logo_palpitebox.png' alt='PalpiteBox' /></a>
          </Link>
        </div>
      </div>
      <div className='bg-red-m p-4 rounded-b-2xl shadow-md container mx-auto text-center'>
        <Link href='/'>
          <a className='px-2 hover:underline text-white'>Home</a>
        </Link>
        <Link href='/sobre'>
          <a className='px-2 hover:underline text-white'>Sobre</a>
        </Link>
        <Link href='/contato'>
          <a className='px-2 hover:underline text-white'>Contato</a>
        </Link>
        <Link href='/pesquisa'>
          <a className='px-2 hover:underline text-white'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
export default Header