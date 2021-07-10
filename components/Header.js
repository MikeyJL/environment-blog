import Link from 'next/link'
import { Component } from 'react'
import styles from '../styles/Header.module.scss'

export default class Header extends Component {
    render () {
        return (
            <nav className={styles.nav}>
                <Link href="/" >Home</Link>
            </nav>
        )
    }
}