import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import Layout from '../../components/layout';

export default function FirstPost(){
  return (
    <Layout>
      <Head>
        <title>The First Page</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">back to the main page</Link>
      </h2>
    </Layout>

  );

  const YourComponent = () => (
    <Image
      src="/images/profile.jpg"
      height={144}
      width={144}
      alt="Your Name"
    />
  )
}