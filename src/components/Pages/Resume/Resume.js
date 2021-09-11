import React, {useEffect} from 'react';
import Timeline from '../../Elements/Timeline'
import TImelineItem from "../../Elements/TImelineItem";
import Skills from "../../Elements/Skills";
import Skill from "../../Elements/Skill";
import Download from "../../Elements/Download"
import PageLayout from "../../Layout/PageLayout";
import {useDispatch, useSelector} from "react-redux";
import {getAbout, getEducation, getExperience, getSkills} from "../../../redux/actions";
function Resume(props) {
    const educations = useSelector(s => s.educations)
    const experiences = useSelector(s => s.experiences)
    const skills = useSelector(s => s.skills)
    const about = useSelector(s => s.about)
    const dispatch = useDispatch()

    useEffect(()=>{
        !educations.length && dispatch(getExperience())
        !skills.length && dispatch(getSkills())
        !experiences.length &&  dispatch(getEducation())
        Object.keys(about).length === 0 && dispatch(getAbout())
    },[])

    return (
        <PageLayout title={'Resume'} description={'7 Years of Experience'}>
            <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <div className="col-inner bs-30">
                        <Timeline title={'Education'}>
                            {educations.length > 0 &&
                             <>
                                 {educations.map((l ,i)=>(
                                         <TImelineItem
                                             key={i}
                                             from={l.from}
                                             to={l.to}
                                             company={l.company}
                                             position={l.title}
                                             description={l.description}
                                         />
                                     ))
                                 }
                             </>
                            }
                        </Timeline>
                        <Timeline title={'Experience'}>
                            {experiences.map((l ,i)=>(
                                <TImelineItem
                                    key={i}
                                    from={l.from}
                                    to={l.to}
                                    company={l.company}
                                    position={l.title}
                                    description={l.description}
                                />
                            ))
                            }
                        </Timeline>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                    <div className="col-inner">
                        <Skills title={'Development skills'}>
                            {skills.map((l ,i) =>(
                                <Skill key={i} name={l.name} degree={`${l.degree}%`} />
                            ))}
                        </Skills>
                    </div>
                </div>
            </div>
            <Download name={'CV'} url={about.url} />
        </PageLayout>
    );
}

export default Resume;
