import Link from 'next/link'
import { Component } from 'react'
import styles from '../styles/Footer.module.scss'

export default class Footer extends Component {
    render () {
        return (
            <footer className={ styles.footer }>
                <div>
                    <p>
                        <strong>Environment First</strong> Copyright 2021
                    </p>
                </div>
                <p className={styles.author}>
                    Built by <a href="https://mikeylau.uk" target="_blank" rel="noreferrer">Mikey Lau</a>
                </p>        
            </footer>
        )
    }
} 