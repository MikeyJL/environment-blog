import Header from './Header'
import { useState, useEffect } from "react";
import styles from '../styles/Layout.module.css'

export default function Layout ({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const [transitionStage, setTransitionStage] = useState('fadeOut')

    useEffect(() => {
        setTransitionStage('fadeIn');
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage('fadeOut');
    }, [children, setDisplayChildren, displayChildren]);

    return  (
        <div>
            <Header /> 
            <div
                onTransitionEnd={ () => {
                    if (transitionStage == 'fadeOut') {
                        setDisplayChildren(children)
                        setTransitionStage('fadeIn')
                    }
                } }
                className={ `${styles.content} ${styles[transitionStage]}` }
            >
                { displayChildren }   
            </div>
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