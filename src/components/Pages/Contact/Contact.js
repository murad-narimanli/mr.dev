import React, {useEffect} from 'react';
import PageLayout from "../../Layout/PageLayout";
import Box from "../../Elements/Box";
import ContactForm from "../../Elements/ContactForm";
import {useDispatch, useSelector} from "react-redux";
import {getAbout} from "../../../redux/actions";
function Contact(props) {
    const dispatch = useDispatch()
    const about = useSelector(s => s.about)
    useEffect(()=>{
        Object.keys(about).length === 0 && dispatch(getAbout())
    },[])

    return (
        <PageLayout title={'Contact'} description={'Get in Touch'}>
            <div className="row">
                <Box
                    icon={<i className="lnr lnr-phone-handset"></i>}
                    text={about.phone}
                />
                <Box
                    icon={<i className="lnr lnr-map-marker"></i>}
                    text={about.address}
                />
                <Box
                    icon={<i className="lnr lnr-envelope"></i>}
                    text={<a className="__cf_email__"
                        href="mailto:narimanli.murad@gmail.com">narimanli.murad@gmail.com</a>}
                />
                <Box
                    icon={<i className="lnr lnr-checkmark-circle"></i>}
                    text={about.Freelance ? 'Available' : 'Not Available'}
                />
            </div>
            <ContactForm/>
        </PageLayout>
    );
}


export default Contact;
