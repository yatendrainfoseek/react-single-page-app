import React, { Component } from 'react';

class Home extends Component{

    render(){
        return(

            <div>


<div
  id="carouselExampleControls"
  className="carousel slide carousel-fade container h-50"
  data-ride="carousel"
>

<ol className="carousel-indicators">
  <li
    data-target="#carouselExampleIndicators"
    data-slide-to={0}
    className="active"
  />
  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
</ol>
  <div className="carousel-inner">
  <div className="carousel-item active">
        <img src="images/slide01_1.jpg" className="w-100" alt="scsc" />
        <div className="carousel-caption d-none d-md-block">
            <h1>Using React Router for a Single Page Application</h1>
            <p> Router for a Single Page Application</p>
        </div>
    </div>
    <div className="carousel-item">
        <img src="images/slide02.jpg" className="w-100" alt="scsc" />
        <div className="carousel-caption d-none d-md-block ">
        <h1>Using React Router for a Single Page Application</h1>
            <p> Router for a Single Page Application</p>
        </div>
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>




            <section className="container">
                 <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                            Home
                            </li>
                        </ol>
                </nav>
            <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space content out
              within the larger container.
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="#" role="button">
                Learn more
              </a>
            </p>
          </div>
          </section>
          

          </div>
        );
    }

}

export default Home;

