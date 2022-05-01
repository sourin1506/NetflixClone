import React from "react";
import { Footer } from "../components";
export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Question ? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">Faq</Footer.Link>
          <Footer.Link href="#">Investor Relation</Footer.Link>
          <Footer.Link href="#">Ways to watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of use</Footer.Link>
          <Footer.Link href="#">Contact us</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Accounts</Footer.Link>
          <Footer.Link href="#">Redeem Gift Card</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Buy Gift Card</Footer.Link>
          <Footer.Link href="#">Cookie Preference</Footer.Link>
          <Footer.Link href="#">Legal Notice</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Text>Netflix India</Footer.Text>
    </Footer>
  );
}
