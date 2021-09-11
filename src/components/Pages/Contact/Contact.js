import React from 'react';
import PageLayout from "../../Layout/PageLayout";
import Box from "../../Elements/Box";
import ContactForm from "../../Elements/ContactForm";
function Contact(props) {
    return (
        <PageLayout title={'Contact'} description={'Get in Touch'}>
            <div className="row">
                <Box
                    icon={<i className="lnr lnr-phone-handset"></i>}
                    text={'+99455 623 05 99'}
                />
                <Box
                    icon={<i className="lnr lnr-map-marker"></i>}
                    text={'Baku Azerbaijan'}
                />
                <Box
                    icon={<i className="lnr lnr-envelope"></i>}
                    text={<a className="__cf_email__"
                        href="mailto:narimanli.murad@gmail.com">narimanli.murad@gmail.com</a>}
                />
                <Box
                    icon={<i className="lnr lnr-checkmark-circle"></i>}
                    text={'Freelance Available'}
                />
            </div>
            <ContactForm/>
        </PageLayout>
    );
}


export default Contact;
