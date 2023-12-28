import styles from "./project.module.css"
import Link from 'next/link'

export default function ProjectList()   {
    return(
        <main>
            <h1>ProjectList</h1>
            <ul className='{styles.ul'>
                <li>
                    <Link href='/project/jobit'>
                    Jobit
                    </Link>
                </li>
                <li>
                    <Link href='/project/carrent'>
                    Car Rent 
                    </Link>
                </li>
                <li>
                    <Link href='/project/hipnode'>
                    Hipnode
                    </Link>
                </li>

            </ul>
        </main>
    )
} 