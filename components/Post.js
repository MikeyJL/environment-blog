import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Post.module.css'

export const Post = ({post}) => {
    const {
        link,
        module: {meta},
    } = post
    
    return (
        <article className={styles.article}>
            <Image
                src={`/img/${meta.image}`}
                alt={meta.title}
                layout="responsive"
                height={300}
                width={300}
                className={styles.image}
                priority={true}
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