import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ActionAreaCard({ title, description }) { // Destructure the props in the function parameter
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          {/* Use the title prop instead of hardcoded text */}
          <Typography gutterBottom variant="h5" component="div">
            {title} {/* Render the title prop here */}
          </Typography>
          {/* Use the description prop instead of hardcoded text */}
          <Typography variant="body2" color="text.secondary">
            {description} {/* Render the description prop here */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;
