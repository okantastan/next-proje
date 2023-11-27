import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import 'src/app/globals.css';
import styles from 'src/app/page.module.css';

async function getPosts() {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  return response.json();
}

function Products({ title, body, id, thumbnail }) {
  return (
    <div className={styles.blogsContainer}>
    <Link href={`/${id}`} className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Card Image"
          width={200}
          height={300}
        />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
    </div>
  );
}

function ProductList() {
  const [products, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data.products); // 'data.posts' kullanıldı
    }
    fetchData();
  }, []);

  return (
    <div>
      {products.map(post => (
        <Products
          key={post.id}
          id={post.id}
          title={post.title}
          thumbnail={post.thumbnail}
          body={post.body}
        />
      ))}
    </div>
  );
}

export default ProductList;


