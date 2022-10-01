import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import AlgoSigner from './AlgoSigner/AlgoSigner'

const Post = () => {
  return (
    <div>
        <Card sx={{margin:5}} 
      // sx={{ maxWidth: 345 }}
      >
        {/* <CardMedia
          component="img"
          height="20%"
          image= {process.env.PUBLIC_URL + "ten_academy.png"}
          alt="ten academy training"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Please Use the Algosigner Utility
          </Typography>
          <AlgoSigner/>
          {/* <Typography variant="body2" color="text.secondary">
          Exceptional junior AI and Web3 engineers ready for remote jobs globally.  Demonstrable technical and professional competency, trained by an award-winning not-for-profit.  No hiring fees.
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Apply for Training</Button>
          
        </CardActions>
      </Card>
    </div>
  )
}

export default Post