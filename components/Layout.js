import Header from './Header'
import styles from '../styles/Layout.module.css'

export default function Layout ({ children }) {
        return  (
        <div>
            <Header />            
            { children }
            <footer className={ styles.footer }>
                <div>
                    <p>
                        <b>Environment First</b> Copyright 2021
                    </p>
                </div>
                <div>
                
                </div>
            </footer>
        </div>
    )
}