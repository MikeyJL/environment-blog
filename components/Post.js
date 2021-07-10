import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Post.module.scss'

export const Post = ({post}) => {
    const {
        link,
        module: {meta},
    } = post
    
    return (
        <article className={styles.article}>
            <Image
                src={`/svg/${meta.image}`}
                height={300}
                width={300}
                alt={meta.title}
                className={styles.image}
            />
            <div className={styles.header}>
                <h3>
                    {meta.title}
                </h3>
                <p>
                    {meta.description}
                </p>
                <Link href={`/blog${link}`}>
                    <a>
                        Read more
                    </a>
                </Link>
            </div>
        </article>
    )
}