import React from 'react';
import portfolio from '../../../images/portfolio/2.jpg'
import PageLayout from "../../Layout/PageLayout";
import PortfolioItem from "../../Elements/PortfolioItem";

function Portfolio(props) {
    return (
        <PageLayout title={'Portfolio'} description={'My Works'}>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="portfolio-content">
                        <ul className="portfolio-filters">
                            <li className="active"><a className=" btn btn-sm btn-link">All</a></li>
                            <li className=""><a className=" btn btn-sm btn-link">All</a></li>
                        </ul>

                        <div className="portfolio-grid four-columns">
                            <PortfolioItem
                                src={portfolio}
                                name={'TestName'}
                                category={'Website'}
                                url={'www.example.com'}
                            />
                            <PortfolioItem
                                src={portfolio}
                                name={'TestName'}
                                category={'Website'}
                                url={'www.example.com'}
                            />
                            <PortfolioItem
                                src={portfolio}
                                name={'TestName'}
                                category={'Website'}
                                url={'www.example.com'}
                            />
                            <PortfolioItem
                                src={portfolio}
                                name={'TestName'}
                                category={'Website'}
                                url={'www.example.com'}
                            />
                            <PortfolioItem
                                src={portfolio}
                                name={'TestName'}
                                category={'Website'}
                                url={'www.example.com'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}


export default Portfolio;
