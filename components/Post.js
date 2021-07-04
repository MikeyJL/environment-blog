import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Post.module.css'

export const Post = ({ post }) => {
    const {
        link,
        module: { meta },
    } = post
    
    return (
        <article className={ styles.article }>
            <Image
                src={ `/img/${meta.image}` }
                alt={ meta.title }
                layout="responsive"
                height={ 300 }
                width={ 300 }
                className={ styles.image }
            />
            <div className={ styles.header }>
                <h2>
                    { meta.title }
                </h2>
                <p>
                    { meta.description }
                </p>
            </div>
            <Link href={ `/blog${link} `}>
                <a>
                    Read more
                </a>
            </Link>
        </article>
    )
}