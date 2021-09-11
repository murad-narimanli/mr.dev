import React from 'react';
import PageLayout from "../../Layout/PageLayout";
import Box from '../../Elements/Box';
function About(props) {
    return (
        <PageLayout title={'About Me'} description={'Artist, Thinker, Creative Doer'}>
            <div className="row bs-30">
                <div className="col-xs-6 col-sm-6">
                    <h3>I am Web Designer @ Company.com</h3>
                    <p>Praesent ut tortor consectetur, semper sapien non, lacinia augue. Aenean arcu
                        libero, facilisis et nisi non, tempus faucibus tortor. Mauris vel nulla aliquam,
                        pellentesque enim ac, faucibus tortor. Nulla odio nibh, cursus sit amet urna id,
                        dignissim euismod augue.</p>
                    <p>Duis sollicitudin, libero porttitor rutrum ultrices, turpis lorem fermentum
                        justo, quis ornare augue tortor non est. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                <div className="col-xs-6 col-sm-6">
                    <ul className="info-list">
                        <li><span className="title">Age</span><span className="value">29</span></li>
                        <li><span className="title">Address</span><span
                            className="value">88 Some Street, Some Town</span>
                        </li>
                        <li>
                            <span className="title">e-mail</span>
                            <span className="value">
                                <a
                                    href="mailto:narimanli.murad@gmail.com">
                                    <span
                                        className="__cf_email__">narimanli.murad@gmail.com
                                    </span>
                                 </a>
                            </span>
                        </li>
                        <li><span className="title">Phone</span><span className="value">+99455 623 05 99</span>
                        </li>
                        <li><span className="title">Skype</span><span className="value">murad.narimanli</span></li>
                        <li><span className="title">Freelance</span><span
                            className="value available">Available</span></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="col-inner">
                        <div className="block-title"><h3>What I Do</h3></div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="col-inner">
                        <div className="info-list-w-icon">
                            <div className="info-block-w-icon">
                                <div className="ci-icon"><i className="lnr lnr-store"></i></div>
                                <div className="ci-text"><h4>Ecommerce</h4>
                                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                                        tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                                        nibh. Ut non sodales odio.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <div className="col-inner">
                        <div className="info-list-w-icon">
                            <div className="info-block-w-icon">
                                <div className="ci-icon"><i className="lnr lnr-flag"></i></div>
                                <div className="ci-text"><h4>Management</h4>
                                    <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio
                                        tortor bibendum massa, sit amet ultricies ex lectus scelerisque
                                        nibh. Ut non sodales odio.</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12">
                    <div className="block-title"><h3>Fun Facts</h3></div>
                </div>
                <Box
                    icon={<i className="lnr lnr-smile"></i>}
                    text={'Happy Clients'}
                    number={'2,325'}
                    gray={false}
                />
                <Box
                    icon={<i className="lnr lnr-clock"></i>}
                    text={'Working Hours'}
                    number={'7,325'}
                    gray={true}
                />
                <Box
                    icon={<i className="lnr lnr-checkmark-circle"></i>}
                    text={'Awards Won'}
                    number={'12'}
                    gray={false}
                />
                <Box
                    icon={<i className="lnr lnr-coffee-cup"></i>}
                    text={'Coffee Consumed'}
                    number={'1200'}
                    gray={true}
                />
            </div>
        </PageLayout>
    );
}


export default About;
