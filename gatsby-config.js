module.exports = {
  siteMetadata: {
    title: `Travel Biryani`,
    description: `Indian Food blog aiming to share easy vegetarian, non vegetarian recipes,  without loosing the authentic taste of regional cuisines, covering Indian recipes and recipes from around the world.`,
    author: `Mehjooba Roushan Mazumdar`,
    twitterId: `@travelBiryani`,
    siteUrl: `https://travelbiryani.com`,
    genre: 'Food Tutorials',
    keywords: [`Food Blog`],
    email: `admin@travelbiryani.com`,
    social: [
      'https://www.facebook.com/travelBiryani/'
    ],
    contactSupport: 'https://www.facebook.com/travelBiryani/',
    bingId: '',
    menuLinks: [
      {name: 'Tags', link: '/tags/'}
    ],
    footerLinks: [{name: 'About', link: '/detailed-food-tutorials/'}, {name: 'Terms of Use', link: '/terms-of-use/'}, {name: 'Privacy Policy', link: '/privacy-policy/'}],
    displayFooterMessage: true,
    comments: 'true' // Enable disable comments
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog-starter",
      options: {
        trackingId: "UA-27634418-7",
        postsPath: "posts",
        imagesPath: "images",
        postsPerPage: "12",
        mailchimpURL: ""
      },
    },
    {
      resolve: `gatsby-plugin-manifest`, //<- Creates manifest file
      options: {
        name: "Travel Biryani",
        short_name: "TravelBiryani",
        description: "Food Blog",
        start_url: "/",
        background_color: "#673ab7",
        theme_color: "#673ab7",
        display: "standalone",
        icon: "images/icon.png",
      },
    },
    `gatsby-plugin-offline`, //<- Adds service worker; Add after gatsby-plugin-manifest
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            'Referrer-Policy: no-referrer-when-downgrade'
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false, 
        mergeDefaultDirectives: true,
        directives: {
          "default-src": "'self' disqus.com marketingplatform.google.com/about/analytics/ c.disquscdn.com www.google-analytics.com www.google.com/analytics/",
          "script-src": "'self' 'unsafe-inline' www.google-analytics.com c.disquscdn.com travel-biryani.disqus.com", //<- 'unsafe-inline' is unsafe and is required by Disqus
          "style-src": "'self' 'unsafe-inline' c.disquscdn.com", //<- "'unsafe-inline'" should be avoided but the plugin was broken with mergeStyleHashes
          "img-src": "'self' data: www.google-analytics.com referrer.disqus.com c.disquscdn.com",
          "connect-src": "'self' www.google-analytics.com"
        }
      }
    }
  ]
}
