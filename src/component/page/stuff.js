import React, { Component } from 'react';

class Stuff extends Component{

    render(){
        return(
            <section className="container">
                <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                            Stuff
                            </li>
                        </ol>
                </nav>
            <div className="row">
                    <div className="col-md-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-header">Featured</div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-8 offset-md-1" >


                        <div className="card">
                                <div className="card-header">
                                    Featured
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
            </div>
            </section>
        );

    }

}

export default Stuff;