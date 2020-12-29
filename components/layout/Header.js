import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Header = function (props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"></meta>
      {/* <meta name="viewport" content="width=1500"></meta> [MEMO] Per avere il sito settato su UNRESPONSIVE */}
      <link rel="icon" href="/favicon.ico" />
      <link href="../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css" rel="stylesheet" />
      <link href="../node_modules/@blueprintjs/core/lib/css/blueprint.css" rel="stylesheet" />
    </Head>
  )
}