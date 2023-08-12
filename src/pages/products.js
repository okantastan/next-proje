import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "src/app/styles.module.css";

function Products({ title, body, id }) {
  return (
    <Link href={`/${id}`} className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Card Image"
          fill
        />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  );
}

export default Products;
