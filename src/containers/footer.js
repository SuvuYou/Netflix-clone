import React from "react";
import Footer from "../components/footer";

export default function FooterContainer() {
  return (
    <React.Fragment>
      <Footer>
        <Footer.Link src="#">
          <Footer.Title>Questions? Contact us.</Footer.Title>
        </Footer.Link>

        <Footer.BoxContainer>
          <Footer.Link src="#">FAQ</Footer.Link>
          <Footer.Link src="#">Help Center</Footer.Link>
          <Footer.Link src="#">Account</Footer.Link>
          <Footer.Link src="#">Media Center</Footer.Link>
          <Footer.Link src="#">Investor Relations</Footer.Link>
          <Footer.Link src="#">Jobs</Footer.Link>
          <Footer.Link src="#">Ways to Watch</Footer.Link>
          <Footer.Link src="#">Terms of Use</Footer.Link>
          <Footer.Link src="#">Privacy</Footer.Link>
          <Footer.Link src="#">Cookie Preferences</Footer.Link>
          <Footer.Link src="#">Corporate Information</Footer.Link>
          <Footer.Link src="#">Contact Us</Footer.Link>
          <Footer.Link src="#">Speed Test</Footer.Link>
          <Footer.Link src="#">Legal Notices</Footer.Link>
          <Footer.Link src="#">Only on Netflix</Footer.Link>
        </Footer.BoxContainer>
        <Footer.Text>Netflix Ukraine</Footer.Text>
      </Footer>
    </React.Fragment>
  );
}
