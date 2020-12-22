import { Provider } from 'next-auth/client';


function Hi5({ Component, pageProps }) {
    return (
        <Provider session={pageProps.session}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default Hi5;
