import Header from './Header'
import Footer from './Footer'
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
            <Footer />
        </div>
    )
}