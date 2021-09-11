import React from 'react';
import Timeline from '../../Elements/Timeline'
import TImelineItem from "../../Elements/TImelineItem";
import Skills from "../../Elements/Skills";
import Skill from "../../Elements/Skill";
import Download from "../../Elements/Download"
import PageLayout from "../../Layout/PageLayout";
function Resume(props) {
    return (
        <PageLayout title={'Resume'} description={'7 Years of Experience'}>
            <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <div className="col-inner bs-30">
                        <Timeline title={'Education'}>

                            <TImelineItem
                                from={'2021'}
                                to={'Now'}
                                company={'Timesoft'}
                                position={'Front End developer'}
                                description={'Praesent dignissim sollicitudin justo, sed elementum quam lacinia\n' +
                                'quis. Phasellus eleifend tristique posuere. Sed vitae dui nec\n' +
                                'magna.'}
                            />
                        </Timeline>
                        <Timeline title={'Experience'}>
                            <TImelineItem
                                from={'2021'}
                                to={'Now'}
                                company={'Timesoft'}
                                position={'Front End developer'}
                                description={'Praesent dignissim sollicitudin justo, sed elementum quam lacinia\n' +
                                'quis. Phasellus eleifend tristique posuere. Sed vitae dui nec\n' +
                                'magna.'}
                            />
                        </Timeline>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="col-inner">
                        <Skills title={'Development skills'}>
                            <Skill name={'JavaScript'} degree={'93%'}/>
                            <Skill name={'Html'} degree={'99%'}/>
                            <Skill name={'Html'} degree={'99%'}/>
                            <Skill name={'Html'} degree={'99%'}/>
                            <Skill name={'Html'} degree={'99%'}/>
                            <Skill name={'React'} degree={'49%'}/>
                            <Skill name={'React'} degree={'49%'}/>
                            <Skill name={'React'} degree={'49%'}/>
                            <Skill name={'React'} degree={'49%'}/>
                            <Skill name={'React'} degree={'49%'}/>
                            <Skill name={'React'} degree={'49%'}/>
                            <Skill name={'React'} degree={'49%'}/>
                        </Skills>
                    </div>
                </div>
            </div>
            <Download name={'CV'} url={'/'} />
        </PageLayout>
    );
}

export default Resume;
