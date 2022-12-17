import React from "react";
import "../../Styles/Footer/footer.scss";
import { NavHashLink } from "react-router-hash-link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <button className="back_to_top_btn">
        <NavHashLink to={"#top"} smooth>
          ᐱ Back top top
        </NavHashLink>
      </button>
      <div className="email_input_section">
        <h3 className="email_title">
          GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION
        </h3>
        <div>
          <input type="text" placeholder="Enter your email address" />
          <button>subscribe</button>
        </div>
      </div>

      <section>
        <div className="section_heading">
          Online Fashion Shopping on NNNOW.com
        </div>
        <p className="section_text">
          NNNOW.com is the digital destination of Arvind Lifestyle Brands
          Limited - for you, this means NNNOW.com is the official online store
          India’s largest and most loved brands. Topping the charts are U. S.
          Polo Assn., Sephora, Flying Machine, Arrow, Tommy Hilfiger, Calvin
          Klein and many more!
        </p>
      </section>
      <section>
        <div className="section_heading">Why buy on NNNOW?</div>
        <p className="section_text">
          What’s the big deal about shopping on a brand’s official online store,
          you say? For starters, you get access to 100% of the styles that a
          brand has to offer in a season, (something no other website can
          promise). If you don’t like missing out, NNNOW.com should be your
          go-to site for the hottest and the best in online fashion shopping
          experience. Secondly, don’t we all hate fake merchandise? Well, a
          brand’s official website gives a 100% guarantee of authenticity and
          quality so that you can go on shopping without a worry in the world!
        </p>
      </section>
      <section>
        <div className="section_heading">
          One-stop Destination for your Favourite Brands & Categories
        </div>
        <p className="section_text">
          If you’re the kind of person for whom Polo T-shirts only from U.S.
          Polo Assn., cosmetics only from Sephora, jeans and jackets only from
          Flying machine, work wear only from Arrow and everyday outfits only
          from the best brands will do, you’ll find your soul mate in NNNOW. To
          make the deal sweeter, when you shop on NNNOW.com you enjoy benefits
          that you’ll find nowhere else. For example, if your online order
          doesn’t fit you well, you can get it altered, returned or exchanged at
          a store near you for free! In case you’re in a hurry, you can place an
          order online and pick it up from your nearest store too. Wow! This
          just keeps getting better, right? But, we’ve saved the best for the
          last.
        </p>
      </section>
      <section>
        <div className="section_heading">
          Earn reward points on every purchase
        </div>
        <p className="section_text">
          No truly authentic branded shopping experience is complete if you
          can’t earn and spend branded reward points. And we’ve taken care of
          that on NNNOW.com. Every time you buy from us you’ll earn reward
          points just the way you would, had you shopped at any of our branded
          outlets. You can also spend your reward points online or at any store
          you visit.
          <br />
          <br /> Welcome to NNNOW.com - the future of online shopping.
        </p>
      </section>
      <section>
        <div className="footer_links_title">
          <div>WHO WE ARE</div>
          <div>FREQUENTLY ASKED QUESTIONS</div>
          <div>CONTACT US</div>
        </div>
        <div className="social_media_icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <span>© 2022 NNNOW</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </section>
      <section>
        <div className="footer_links_title">TOP BRANDS</div>
        <span>U.S. Polo Assn.</span>
        <span>Aeropostale</span>
        <span>Ed Hardy</span>
        <span>Flying Machine</span>
        <span>Sephora</span>
        <span>Arrow</span>
        <span>Tommy Hilfiger</span>
        <span>Calvin Klein</span>
      </section>
      <section>
        <div className="footer_links_title">TOP CATEGORIES</div>
        <span>Men Clothing</span>
        <span>Beauty</span>
        <span>Men Accessories</span>
        <span>Kids</span>
        <span>Women Accessories</span>
        <span>Offers</span>
        <span>New Arrivals</span>
      </section>
    </div>
  );
};

export default Footer;
