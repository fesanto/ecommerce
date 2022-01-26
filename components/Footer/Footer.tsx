import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
  margin: 20px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
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
            <Navigation
              title="Get in touch"
              footerLink={[
                {
                  link: "About Us",
                  path: "/about",
                },
                {
                  link: "Career",
                  path: "/career",
                },
                {
                  link: "Press Releases",
                  path: "/press",
                },
                {
                  link: "Blog",
                  path: "/blog",
                },
              ]}
            />
          </div>
          <div>
            <Navigation
              title="Connections"
              footerLink={[
                {
                  link: "Facebook",
                  path: "https://www.facebook.com",
                },
                {
                  link: "Twitter",
                  path: "https://twitter.com",
                },
                {
                  link: "Instagram",
                  path: "https://instagram.com",
                },
                {
                  link: "Youtube",
                  path: "https://youtube.com",
                },
                {
                  link: "LinkedIn",
                  path: "https://www.linkedin.com",
                },
              ]}
            />
          </div>
          <div>
            <Navigation
              title="Earnings"
              footerLink={[
                {
                  link: "Become an Affiliate",
                  path: "/become-an-affiliate",
                },
                {
                  link: "Advertise your product",
                  path: "/advertise-your-product",
                },
                {
                  link: "Sell on Market",
                  path: "/sell-on-market",
                },
              ]}
            />
          </div>
          <div>
            <Navigation
              title="Account"
              footerLink={[
                {
                  link: "Your account",
                  path: "/your-account",
                },
                {
                  link: "Returns Centre",
                  path: "/returns-centre",
                },
                {
                  link: "100% purchase protection",
                  path: "/protection",
                },
                {
                  link: "Chat with us",
                  path: "/chat-with-us",
                },
                {
                  link: "Help",
                  path: "/help",
                },
              ]}
            />
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
