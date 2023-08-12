import Image from 'next/image'
import styles from './page.module.css'

export default function Home({ urunler = [] }) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>deneme</h1>
        <p>
          Düzenlemek için şurayı&nbsp;
          <code className={styles.code}>src/app/page.js</code>
          &nbsp;değiştirin.
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarafından{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {urunler.map(urun => (
          <div key={urun.id} className={styles.card}>
            <h2>{urun.name}</h2>
            <p>{urun.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  alert('asdasdas');
  try {
    const cevap = await fetch('https://dummyjson.com/products?limit=10');
    if (!cevap.ok) {
      throw new Error('API response was not ok.');
    }
    const data = await cevap.json();
    console.log(data); // Bu kısmı ekleyin
    return {
      props: {
        urunler: data  // Varsayılan olarak boş bir dizi atanır
      }
    }
  } catch (error) {
    console.error("API'dan veri alınırken bir hata oluştu:", error);
    return {
      props: {
        urunler: []  // Hata durumunda boş bir dizi döner
      }
    }
  }
}