import React, {useEffect} from 'react';
import portfolio from '../../../images/portfolio/2.jpg'
import PageLayout from "../../Layout/PageLayout";
import PortfolioItem from "../../Elements/PortfolioItem";
import {useDispatch, useSelector} from "react-redux";
import {getPortfolios} from "../../../redux/actions";
import {url} from "../../../const/const";

function Portfolio(props) {
    const portfolios = useSelector(s => s.portfolios)
    const dispatch = useDispatch()

    useEffect(()=>{
        !portfolios.length && dispatch(getPortfolios())
    },[])

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
                            {portfolios.length > 0 &&
                                <>
                                    {portfolios.map((l ,i)=>(
                                        <PortfolioItem
                                            key={i}
                                            src={url + l.cover.url}
                                            name={l.title}
                                            category={l?.category?.name}
                                            url={l.url}
                                        />
                                    ))}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}


export default Portfolio;
