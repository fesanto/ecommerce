import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

const FooterLink = styled.li`
  padding: 10px 0;
`;

const Tags = styled.p`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 4px 10px;
  margin: 5px 7px;
`;

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <Section>
          <div>
            <h3>Get in touch</h3>
            <ul>
              <FooterLink>
                <Link href="#">About Us</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Careers</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Press Releases</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Blog</Link>
              </FooterLink>
            </ul>
          </div>
          <div>
            <h3>Connections</h3>
            <ul>
              <FooterLink>
                <Link href="#">Facebook</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Twitter</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Instagram</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">YouTube</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">LinkedIn</Link>
              </FooterLink>
            </ul>
          </div>
          <div>
            <h3>Earnings</h3>
            <ul>
              <FooterLink>
                <Link href="#">Become an Affiliate</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Advertise your product</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Sell on Market</Link>
              </FooterLink>
            </ul>
          </div>
          <div>
            <h3>Account</h3>
            <ul>
              <FooterLink>
                <Link href="#">Your Account</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Returns Centre</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">100% purchase protection</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Chat with us</Link>
              </FooterLink>
              <FooterLink>
                <Link href="#">Help</Link>
              </FooterLink>
            </ul>
          </div>
        </Section>
        <section>
          <h3>Product tags</h3>
          <Tags>Beans</Tags>
          <Tags>Carrots</Tags>
          <Tags>Apples</Tags>
          <Tags>Garlic</Tags>
          <Tags>Mushrooms</Tags>
          <Tags>Tomatoes</Tags>
          <Tags>Chilli peppers</Tags>
          <Tags>Broccoli</Tags>
          <Tags>Watermelons</Tags>
          <Tags>Oranges</Tags>
          <Tags>Bananas</Tags>
          <Tags>Grapes</Tags>
          <Tags>Cherries</Tags>
          <Tags>Meat</Tags>
          <Tags>Seo tag</Tags>
          <Tags>Fish</Tags>
          <Tags>Seo tag</Tags>
          <Tags>Fresh food</Tags>
          <Tags>Lemons</Tags>
        </section>
      </div>
    </footer>
  );
};
