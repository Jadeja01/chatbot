"use client"
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
                console.log('Bootstrap JS loaded successfully');
            })
            .catch(err => {
                console.error('Error loading Bootstrap JS:', err);
            });
    }, []);

    return <Component {...pageProps} />;
}