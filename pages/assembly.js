import React from "react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ['latin'] })

export default function Assembly () {
    return (

        <section id="assembly" style={styles.assembly}>

        <h1>Assembly</h1>

        <p className={inter.className}>
            Furniture, PlayScapes, Mechanical...
        </p>
            

        </section>

    )

}