import Layout from '../components/Layout';
import Link from 'next/link';

const Custom404 = () => (
    <>
        <Layout>
            <div className="text-center"> 
                <h1>404</h1>
                <p>Esta página no existe</p>
                <Link href="/">
                    <a>Volver</a>
                </Link>
            </div>
        </Layout>
    </>

)

export default Custom404;
