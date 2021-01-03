import React from 'react';

import Layout from "gatsby-theme-blog-starter/src/components/layout/layout"
import Seo from "gatsby-theme-blog-starter/src/components/seo/Seo"
import PageLayout from "gatsby-theme-blog-starter/src/components/layout/PageLayout";

const About = () => {
  return(
  <Layout>
    <Seo 
      title="Confirm Subscription for Travel Biryani"
      description="Confirm Email Subscription for Travel Biryani"
      keywords={["Detailed Food Tutorials", "vegetarian recipes", "non vegetarian recipes"]}
      slug="confirm-subscription"  />
    
    <PageLayout title="Action Required: Email Address Confirmation">
      <h2>Thanks for Subscribing Us</h2>

      <p> We have sent an email to confirm your Email Address. Please check your inbox</p>
      <p> If you didn't find a confirmation email in your inbox, check your Promotion folder or Spam folder </p>
      
      <p>If you still face problems, please <a href="https://www.facebook.com/travelBiryani/" target="_blank" rel="nofollow noopener noreferrer">contact us</a>.</p>
    </PageLayout>
    
  </Layout>
)}

export default About