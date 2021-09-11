import React, {useEffect} from 'react';
import PageLayout from "../../Layout/PageLayout";
import Box from '../../Elements/Box';
import {useDispatch, useSelector} from "react-redux";
import {getAbout, getDoings} from "../../../redux/actions";

function About(props) {
    const dispatch = useDispatch()
    const about = useSelector(s => s.about)
    const doings = useSelector(s => s.doings)
    useEffect(()=>{
        !doings.length && dispatch(getDoings())
        Object.keys(about).length === 0 && dispatch(getAbout())
    },[])

    return (
        <PageLayout title={'About Me'} description={'Artist, Thinker, Creative Doer'}>
            <div className="row bs-30">
                <div className="col-xs-6 col-sm-6">
                    <h3>{about.title}</h3>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: about.description,
                        }}
                    />
                </div>
                <div className="col-xs-6 col-sm-6">
                    <ul className="info-list">
                        <li>
                            <span className="title">Age</span>
                            <span className="value">{about.age}</span>
                        </li>
                        <li>
                            <span className="title">Address</span>
                            <span className="value">{about.address}</span>
                        </li>
                        <li>
                            <span className="title">e-mail</span>
                            <span className="value">
                                <a
                                    href={`mailto:${about.email}`}>
                                    <span
                                        className="__cf_email__">{about.email}
                                    </span>
                                 </a>
                            </span>
                        </li>
                        <li><span className="title">Phone</span><span className="value">{about.phone}</span>
                        </li>
                        <li><span className="title">Skype</span><span className="value">{about?.skype}</span></li>
                        <li>
                            <span className="title">Freelance</span>
                            <span className="value available">{about.Freelance ? 'Available' : 'Not Available'}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="col-inner">
                        <div className="block-title"><h3>What I Do</h3></div>
                    </div>
                </div>
                {
                    doings.length > 0 &&
                        <>
                            {doings.map((l , i)=>(
                                <div key={i} className="col-xs-12 col-sm-6">
                                    <div className="col-inner">
                                        <div className="info-list-w-icon">
                                            <div className="info-block-w-icon">
                                                <div className="ci-text">
                                                    <h4>{l.title}</h4>
                                                    <p>{l.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                }

            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="block-title"><h3>Fun Facts</h3></div>
                </div>
                <Box
                    icon={<i className="lnr lnr-smile"></i>}
                    text={'Happy Clients'}
                    number={about.clients}
                    gray={false}
                />
                <Box
                    icon={<i className="lnr lnr-clock"></i>}
                    text={'Working Hours'}
                    number={about?.hours}
                    gray={true}
                />
                <Box
                    icon={<i className="lnr lnr-checkmark-circle"></i>}
                    text={'Awards Won'}
                    number={about?.awards}
                    gray={false}
                />
                <Box
                    icon={<i className="lnr lnr-coffee-cup"></i>}
                    text={'Coffee Consumed'}
                    number={about.coffee}
                    gray={true}
                />
            </div>
        </PageLayout>
    );
}


export default About;
