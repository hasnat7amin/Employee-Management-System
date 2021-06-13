import React from 'react'
function Home() {
    return (
        <div >
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img-responsive" src="https://wallpaperaccess.com/full/656665.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-responsive" src="https://i.pinimg.com/originals/e2/34/b5/e234b5999940f25089b7bfd89ab74651.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://www.teahub.io/photos/full/18-187369_internet-business-technology-hd-wallpaper-business-tech-wallpaper.jpg" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
        </div>
        <div class="container-fluid bg-dark text-white text-center py-2 ">
            <h2>EMS CEO Message</h2>
        </div>

        <div class="container-fluid">
            <div class="row">
            <div class='col-md-6 col-sm-12 bg-dark '>
                <img class="bg-dark" src="https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=6&m=1059661424&s=612x612&w=0&h=Wkp3Rs2F_90PtZu07-fR1YmzGjsw5qj73D42doCo1Gc=" alt="CEO image" />
            </div>
            <div class='col-md-6 col-sm-12 bg-dark text-white'>
                    <h2>Hasnat Amin</h2>
                    <p>Welcome to Exam Management System!

                        As you navigate our website, I hope you learn more about the qualities that make our company an outstanding provider of essential   services and a wonderful place to build a career.

                        We provide service with a human touch.

                     </p>
                </div>
                
            </div>
        </div>

      <div class="container-fluid my-3 py-4 bg-dark text-center text-white">
      Copyright © Exam Management System {new Date().getFullYear()}
      </div>

    </div>
    )
}

export default Home
