import Layout from '../components/Layout';
import Link from 'next/link'
import { skills, projects, equipment,services } from '../profile'; 

const Index = () => (

    <Layout dark>

        {/** header card */}

        <header className="banner mb-2"> 
            <div class="banner-content">
                <h1>Hiver Studios</h1>
                <h3 className="my-4">Diseño sonoro y producción musical</h3>
                <Link href="mailto:info.hiver.studios@gmail.com">
                    <a className="btn btn-lg btn-danger">Contacto</a>
                </Link>
            </div>
            <img src="/hiver-studios.jpg" alt="Hiver Studios" className="img-fluid"/>
        </header>

        <div className="container py-4">

            {/** portfolio  */}

            <div className="row mb-5">

                <div className="col-md-12">

                    <h2 className="text-light text-center mb-5">Portfolio</h2>

                </div>

                {

                    projects.map( ({name,client,type,year,description,format,link}, index) => (
                        
                        <div className="col-lg-4 col-sm-6 mb-5" key={index}>
                            <div className="card h-100"> 
                                <div className="overflow"> 
                                    <iframe className="iframe" src={`https://bandcamp.com/EmbeddedPlayer/${type != 'Single' ? 'album' : 'track' }=${link}/size=large/bgcol=333333/linkcol=ffffff/minimal=true/transparent=true/`} seamless></iframe>     
                                </div>
                                <div className="card-body">
                                    <h3>{name}</h3>
                                    <h4>{client}</h4>
                                    <h5>{format}</h5>
                                    <h6>{year}</h6>
                                    <p>{description}</p> 
                                </div>
                            </div> 
                        </div>

                    ))

                }
                

                <Link href="/portfolio">
                    <a className="btn btn-lg btn-dark my-3 mx-auto d-none">Ver más proyectos</a>
                </Link> 
    
            </div>

            {/** Second Section */}

            <div className="row mb-5">
                <div className="col-md-4 d-none">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h2>Skills</h2>
                            {
                                skills.map ( ({skill, percentage}, i) => (

                                    <div className="py-3" key={i}>
                                        <h3>{skill}</h3>
                                        <div className="progress" key={i}>  
                                            <div 
                                                className="progress-bar" 
                                                role="progressbar" 
                                                style={{width: `${percentage}%`}}
                                                aria-valuenow="50"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >        
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-12 d-none">
                    <div className="col-md-12">

                        <h2 className="text-light text-center mb-5">Equipamiento</h2>

                    </div>
                    <div className="card bg-light">
                        <div className="card-body"> 

                            <ul className="list-group list-group-dark">

                                {

                                    equipment.map(({name,brand,qty,img}, index) => (

                                        <li className="list-group-item" key={index}>
                                            <h4>{qty}x {name} {brand}</h4>   
                                        </li>

                                    ))

                                }

                            </ul>

                            <Link href="/">
                                <a className="btn btn-dark my-3 mx-auto btn-lg d-none">Ver más</a>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="col-md-12">

                        <h2 className="text-light text-center my-5">Servicios</h2>

                    </div>
                    <div className="card bg-light">
                        <div className="card-body"> 

                            <ul className="list-group list-group-dark">

                                {

                                    services.map(({name,description}, index) => (

                                        <li className="list-group-item" key={index}>
                                            <h4>{name}</h4>   
                                            <p>{description}</p>
                                        </li>

                                    ))

                                }

                            </ul>

                            <Link href="/">
                                <a className="btn btn-dark my-3 mx-auto btn-lg d-none">Ver más</a>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </Layout>

)

export default Index;
