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
                <p>
                    Built by <Link href="https://mikeylau.uk">Mikey Lau</Link>
                </p>        
            </footer>
        )
    }
} 