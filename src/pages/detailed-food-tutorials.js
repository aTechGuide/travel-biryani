import React from 'react';

import Layout from "gatsby-theme-blog-starter/src/components/layout/layout"
import Seo from "gatsby-theme-blog-starter/src/components/seo/Seo"
import AboutLayout from '../components/layouts/AboutLayout';

const About = () => {
  return(
  <Layout>
    <Seo 
      title="Detailed and Easy Food Recipes for beginners"
      description="Detailed and Easy Food Recipes for beginners. Easy vegetarian recipes and non vegetarian recipes with step by step instructions and pictures"
      tags={["Detailed Food Tutorials", "vegetarian recipes", "non vegetarian recipes"]}
      slug="/detailed-food-tutorials"  />
    
    <AboutLayout />
  </Layout>
)}

export default About