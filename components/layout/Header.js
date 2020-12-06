import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Header = function (props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css" rel="stylesheet" />
      <link href="../node_modules/@blueprintjs/core/lib/css/blueprint.css" rel="stylesheet" />
    </Head>
  )
}