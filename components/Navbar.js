import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <section id='navbar'>
        <div className="container">
            <header>
                <Link href="/"><Image className='logo' src="/logo.svg" alt="logo" width={184.34} height={46.77}/></Link>
                <nav>
                    <li>
                        <Link href="/o_mnie"><a>O mnie</a></Link>
                        <Link href="zakres_terapii"><a>Zakres terapii</a></Link>
                        <Link href="/cennik"><a>Cennik</a></Link>
                        <Link href="/blog"><a>Blog</a></Link>
                    </li>
                    <Link href="/kontakt"><button>Kontakt</button></Link>
                </nav>
            </header>
        </div>
    </section>
  )
}

export default Navbar