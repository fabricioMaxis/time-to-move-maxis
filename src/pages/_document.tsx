import Document, {Html, Head, Main, NextScript} from 'next/document'

/*Em document vou colocar tudo que é estatico, tudo que vai se manter
em todas a telas independente de quais eu for acessar*/ 
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}