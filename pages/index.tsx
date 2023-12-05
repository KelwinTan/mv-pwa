import CallToActionWithAnnotation from "@components/hero/hero";
import FooterWithLogoCentered from "@components/navigation/footer";
import NavWithAction from "@components/navigation/navbar";
import { User, onAuthStateChanged } from "@firebase/auth";
import styles from "@styles/Home.module.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Home: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup the observer when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <>
      <NavWithAction />

      <div className={styles.container}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Maker&apos;s Venture</title>
          <meta name="description" content="Maker's Venture Auth PWA" />
          <meta name="theme-color" content="#FFF" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
        </Head>

        <main className={styles.main}>
          <CallToActionWithAnnotation />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
        <FooterWithLogoCentered />
      </div>
    </>
  );
};

export default Home;
