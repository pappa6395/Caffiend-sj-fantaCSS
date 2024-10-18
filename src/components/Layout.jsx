import React, { useState } from 'react'
import { BiSolidCoffee } from "react-icons/bi";
import Authentication from './Authentication';
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';

const Layout = (props) => {

    const { children } = props
    const [showModal, setShowModal] = useState(false)
    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className='text-gradient'>CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
           {globalUser ? (
                <button onClick={logout}>
                    <p>Logout</p>
                </button>
            ) : (
                <button onClick={setShowModal}>
                <p>Sign up free</p>
                <BiSolidCoffee />
                </button>
            )}
        </header>
    )

    const footer = (
        <footer>
            <p><span className='text-gradient'>Caffiend</span> was made by <a 
            href='linkedin.com/in/nontachai-pahsukkul-b987082a7'>Nontachai</a> <br/> using the <a 
            href='http://www.fantacss.smoljames.com' target="_blank"
            >FantaCSS</a> design library.<br />Check outthe project on 
            <a target='_blank' href='https://www.github.com/pappa6395'> Github</a>!</p>
        </footer>
    )

    function handleCloseModal() {
        setShowModal(false)
    }

  return (
    <div>
       {showModal && 
        ( <Modal handleCloseModal={handleCloseModal}>
            <Authentication handleCloseModal={handleCloseModal} />
        </Modal>)}
        {header}
        <main>
            {children}
        </main>
        {footer}
    </div>
  )
}

export default Layout