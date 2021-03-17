import Layout from '../components/Layout';
import Link from 'next/link';

const _error = ({statusCode}) => { 

    return (

        <Layout>

            {
                <>

                statusCode ? (

                    <div className="text-center"> 
                        <h1>Error {statusCode}</h1>
                    </div>
                    
                    <p>No es posible cargar datos en estos momentos</p>


                ) : (
                    
                    <p>No es posible cargar datos en estos momentos</p>
                    
                )

                </>
                
            }

            <Link href="/">
                <a>Actualizar</a>
            </Link>

        </Layout> 
    
    )

}

export default _error;
