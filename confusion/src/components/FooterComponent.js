import React from "react";

const Footer = (props) => {
    return (
      <div className="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  {/* <Link to="/home">Home</Link> */}
                  <a href="#">Home</a>
                </li>
                <li>
                  {/* <Link to="/aboutus">About Us</Link> */}
                  <a href="#">About</a>
                </li>
                <li>
                  {/* <Link to="/menu">Menu</Link> */}
                  <a href="#">Menu</a>
                </li>
                <li>
                  {/* <Link to="/contactus">Contact Us</Link> */}
                  <a href="contactus.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-7 col-sm-5">
              <h5>Our Address</h5>
              <address>
                121, Clear Water Bay Road <br />
                Clear Water Bay, Kowloon <br />
                HONG KONG <br />
                <i className="fa fa-phone fa-lg"> : +85212345678</i> <br />
                <i className="fa fa-fax fa-lg"> : +85287654321</i> <br />
                <i className="fa fa-envelope fa-lg"></i> :{' '}
                <a href="mailto:confusion@food.net">consfusion@food.net</a>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://google.com/+"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-facebook"
                  href="http://www.facebook.com/profile.php?id="
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-linkedin"
                  href="http://www.linkedin.com/in/"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-twitter"
                  href="http://twitter.com/"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-social-icon btn-google"
                  href="http://youtube.com/"
                >
                  <i className="fa fa-youtube"></i>
                </a>
                <a className="btn btn-social-icon" href="mailto:">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p>© Copyright 2018 Ristorante Con Fusion</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;