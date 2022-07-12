import React from "react";

function Contact(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                <div class="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        121, Clear Water Bay Road
                        <br />
                        Clear Water Bay, Kowloon
                        <br />
                        HONG KONG
                        <br />
                        <i class="fa fa-phone fa-lg"></i> Tel.: +852 1234 5678
                        <br />
                        <i class="fa fa-fax fa-lg"></i> Fax: +852 8765 4321
                        <br />
                        <i class="fa fa-envelope fa-lg"></i> Email:
                        <a href="mailto:confusion@food.net">
                            {" "}
                            confusion@food.net
                        </a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div class="col-12 col-sm-11 offset-sm-1">
                    <div class="btn-group" role="group">
                        <a
                            href="tel:+85212345678"
                            role="button"
                            className="btn btn-primary"
                        >
                            <i className="fa fa-phone"></i> Call
                        </a>
                        <a href="#" role="button" className="btn btn-info">
                            <i className="fa fa-skype"></i> Skype
                        </a>
                        <a
                            href="mailto:confusion@food.net"
                            role="button"
                            className="btn btn-success"
                        >
                            <i className="fa fa-envelope-o"></i> Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
