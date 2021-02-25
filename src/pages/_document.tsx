import Document, {Html, Head, Main, NextScript} from 'next/document';
export default class MyDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />  
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Days+One&family=Oswald:wght@200;300;400;500&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;1,100&family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet" />
                    </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}