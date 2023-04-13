import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  console.log('datttt', pageProps);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
