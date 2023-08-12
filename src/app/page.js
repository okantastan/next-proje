import styles from './page.module.css'
import Products from "../pages/products.js";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

export default async function Home() {
  const { posts } = await getPosts();

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => (
        <Products key={post.id} {...post} />
      ))}
    </div>
  );
}