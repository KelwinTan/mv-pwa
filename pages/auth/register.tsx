import RegisterCard from "@components/auth/Register";
import NavWithAction from "@components/navigation/navbar";
import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavWithAction />

      <RegisterCard></RegisterCard>
    </>
  );
}
