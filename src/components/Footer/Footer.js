import React from "react";
import "./Footer.scss";
import FooterInput from "./FooterInput";

const Footer = () => {
  const HOTLINE_BOX = ["0938.188.188", "1900.686.999"];
  const HOTLINE_CONTACT = ['0938.168.168']
  const INFO = [
    "About us",
    "About us",
    "Contact with us",
    "Partner",
    "Recuire",
  ];
  const POLICY = [
    "Exchange policy",
    "Warranty policy",
    "Privacy policy",
    "Refund policy",
  ];
  const FAQ = [
    "Payment and shipping",
    "Size guide",
    "Check order infomation",
    "Frequently asked questions",
  ];

  return (
    <div className="Footer__container">
      <div className="Footer__information">
        <div className="Hotline__box">
          <h4>ONLINE SHOPPING</h4>
          {HOTLINE_BOX.map((number, index) => {
            return (
              <h5 key={index}>{number}</h5>
            )
          })}
          <p>sales.online@speak.com</p>
        </div>
        
        <div className="Hotline__contact">
          <h4>HOTLINE_CONTACT</h4>
          {HOTLINE_CONTACT.map((number, index) => {
            return (
              <h5 key={index}>{number}</h5>
            )
          })}
          <p>customercare@speak.com</p>
        </div>

        <div className="Footer__info">
          <h4>INFO</h4>
          {INFO.map((info, index) => {
            return <p key={index}>{info}</p>;
          })}
        </div>

        <div className="Footer__policy">
          <h4>POLICY</h4>
          {POLICY.map((info, index) => {
            return <p key={index}>{info}</p>;
          })}
        </div>

        <div className="Footer__FAQ">
          <h4>FAQ</h4>
          {FAQ.map((info, index) => {
            return <p key={index}>{info}</p>;
          })}
        </div>
      </div>
      <div className="Footer__input">
        <FooterInput
          className="Footer__voucher"
          placeholder="Enter your email"
          title="Sign up for promotions"
          button="SEND"
        />
        <FooterInput
          className="Footer__order"
          placeholder="Enter your mobile phone or your order id"
          title="Look up your order"
          button="SEND"
        />
      </div>
      <div className="Footer__copyright">
        <h5>SPEAK GROUP MANUFACTURING TRADING & SERVICE CO., LTD</h5>
        <p>
          Address: 68-70 Nguyen Trai, Thanh Xuan Distric, Ha Noi/ Phone number:
          0938188188/ BR no:41C8013931 date 09/03/2011, the place of issuing the
          People's Committee of Thanh Xuan District
        </p>
      </div>
    </div>
  );
};

export default Footer;
