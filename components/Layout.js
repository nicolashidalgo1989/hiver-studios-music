import Navbar from './Navbar'; 
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import Classnames from 'classnames';

const Layout = ( { children, footer = true, dark = false, title } ) => {

    const router = useRouter();

    useEffect( () => {

        const handleRouteChange = url => { 
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }

    }, [])

    return (

        <div className={Classnames({'bg-dark' : dark})}> 

            <Navbar />

            <main>

                {
                    title && (
                        <h1 className={Classnames('text-center', {'text-light' : dark})}>
                            {title}
                        </h1>
                    )
                }

                {children}

            </main>

            {

                footer && (

                    <footer className="bg-dark text-light text-center">

                        <div className="container p-4">

                        Contacto: <Link href="mailto:info.hiver.studios@gmail.com">
                                <a>info.hiver.studios@gmail.com</a> 
                            </Link>
                            <p>Hiver Studios {new Date().getFullYear()} &copy; All rights reserved</p>
                        
                        </div>

                    </footer>

                ) 

            }

        </div>

    )

}

export default Layout;
