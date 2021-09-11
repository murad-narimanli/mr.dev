import React from 'react';
import {name} from "../../../const/const"
import Typical from 'react-typical'
function Home(props) {
    return (
        <section className="pt-page pt-page-home pt-page-current start-page" data-id="home" data-title="Home">
            <div className="section-inner vcentered">
                <div className="mask"></div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="title-block">
                            <h2 className={'animated fadeInUp'}>
                                {name}
                            </h2>
                            <div className="owl-carousel text-rotation">
                                <div className="item">
                                    <div className="animated fadeIn sp-subtitle">
                                        <Typical
                                            wrapper={'b'}
                                            steps={[
                                                "Hi",
                                                1000,
                                                "I'm a Front End developer",
                                                1000,
                                                "Thanks for visiting 😁",
                                                1000
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Home;
