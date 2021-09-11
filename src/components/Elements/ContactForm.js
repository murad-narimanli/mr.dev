import React from 'react';

function ContactForm(props) {
    return (
        <div className="row">
            <div className=" col-xs-12 col-sm-12 ">
                <div className="col-inner ts-20">
                    <div className="block-title"><h3>How Can I Help You?</h3></div>
                    <form
                        action="https://lmpixels.com/demo/kerge-html/animated/version-2-dark/contact_form/contact_form.php"
                        className="contact-form"
                        id="contact_form"
                        method="post">
                        <div className="messages"></div>
                        <div className="controls two-columns">
                            <div className="fields clearfix">
                                <div className="left-column">
                                    <div className="form-group form-group-with-icon">
                                        <input className="form-control"
                                               data-error="Name is required."
                                               id="form_name"
                                               name="name"
                                               placeholder="Full Name"
                                               required="required"
                                               type="text"/>
                                        <div className="form-control-border"></div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group form-group-with-icon">
                                        <input className="form-control"
                                               data-error="Valid email is required."
                                               id="form_email"
                                               name="email"
                                               placeholder="Email Address"
                                               required="required"
                                               type="email" />
                                        <div className="form-control-border"></div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group form-group-with-icon"><input
                                        className="form-control" data-error="Subject is required." id="form_subject"
                                        name="subject" placeholder="Subject"
                                        required="required" type="text"/>
                                        <div className="form-control-border"></div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="right-column">
                                    <div className="form-group form-group-with-icon">
                                  <textarea
                                      className="form-control" data-error="Please, leave me a message." id="form_message"
                                      name="message" placeholder="Message" required="required"
                                      rows="7"></textarea>
                                        <div className="form-control-border"></div>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <input className="button btn-send" type="submit" value="Send message" /></div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default ContactForm;
