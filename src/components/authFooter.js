import React from "react";
import footerdata from "../data/footerdata.json";

const LoginFooter = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imgattr = "Footer logo";
  return (
    <div
      className="bg-gray d-flex align-items-center"
      style={{ height: "15vh" }}
    >
      <footer className="container">
        <div className="custom-navbar">
          <a className="footer-logo" href="#">
            <img src={publicUrl + footerdata.footerlogo} alt={imgattr} />
          </a>
          <div>
            <div className="d-flex align-items-center">
              <span className="font-weight-bold text-dark">FOLLOW US</span>
              <ul className="social-icon">
                {footerdata.socialicon.map((item, i) => (
                  <li key={i}>
                    <a href={item.url} target="_blank">
                      <i className={item.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          className="copy-right text-center font-weight-bold text-dark"
          dangerouslySetInnerHTML={{ __html: footerdata.copyrighttext }}
        ></div>
      </footer>
    </div>
  );
};
export default LoginFooter;
