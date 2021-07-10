import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/BlogPost.module.scss'

export default function BlogPost ({ children, meta}) {
    return (
        <article className={ styles.article }>
            <div className={ styles.header }>
                <Image
                    src={ `/img/${meta.image}` }
                    alt={ meta.title }
                    layout="fixed"
                    height={ 300 }
                    width={ 300 }
                />
                <div>
                    <Link href="/">
                        Back  
                    </Link>
                    <p>
                        { meta.date }
                    </p>
                </div>
            </div>
            <div className={ styles.content }>
                { children }
            </div>
        </article>
    )
}