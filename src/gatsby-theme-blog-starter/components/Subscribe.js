import React from 'react';
import {Card, CardContent, TextField, Typography, Button} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import {useStaticQuery, graphql} from 'gatsby';

const Subscribe = () => {

  const theme = useTheme();
  const { site : {siteMetadata : {options : {showSubscriptionWidget, mailchimpURL}}} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            options {
              showSubscriptionWidget
              mailchimpURL
            }
          }
        }
      }
    `
  )

  return (
      { showSubscriptionWidget } && <Card>
        <CardContent>
          <Typography variant='h5' component='h3' color='primary' align='center' >
            Stay in touch
          </Typography>
          <Typography variant='body1' >
            Receive E Mail notification of Latest Blogs
          </Typography>
          <form action={mailchimpURL} 
            method="post" 
            className="sendfox-form" id="1d5wpj"
            target="_blank" noValidate>
            <TextField
              type="text"
              placeholder="First Name"
              name="first_name"
              label="First Name"
              margin="normal"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              type="text"
              placeholder="Last Name"
              name="last_name"
              label="Last Name"
              margin="normal"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              type="email"
              placeholder="Email"
              name="email"
              label="Email"
              margin="normal"
              variant="outlined"
              fullWidth
              required
            />
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
            	<input type="text" name="a_password" tabIndex="-1" defaultValue="" autoComplete="off" />
            </div>
            <Button
              type="submit"
              fullWidth
              {...theme.button}        
            >
            Subscribe
          </Button>
          </form>
        </CardContent>
      </Card>
  );
}

export default Subscribe;