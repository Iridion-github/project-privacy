import Head from 'next/head'

export const Header = function (props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"></meta>
      <meta httpEquiv="content-language" content="it"></meta>
      {/* <meta name="viewport" content="width=1500"></meta> [MEMO] Per avere il sito settato su UNRESPONSIVE */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
    </Head>
  )
}