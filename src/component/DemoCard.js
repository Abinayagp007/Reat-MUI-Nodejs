import React from 'react';
import { Link, Card, CardContent, Typography } from '@mui/material';



const DemoCard = () => {
  return (
    <div className="css-e5kpw5">
      <Link href="/global/en/yoga-meditation/yoga-program-for-beginners" className="chakra-link css-17d7f1i">
        <Card sx={{ maxWidth: 400, margin: 'auto', marginBottom: 2 }}>
          <div className="css-jmvhnw">
            <div className="css-1o817yz">
              <img
                src="https://static.sadhguru.org/d/46272/1650345087-website-thumbnail-yogameditation-beginner-landing_0.jpg"
                alt="Beginner Programs"
                title="Beginner Programs"
                className="css-1l0l5pw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <Typography variant="h6" component="p" className="chakra-text css-aheyej" sx={{ textAlign: 'center', marginTop: 1 }}>
              Beginner Programs
            </Typography>
          </div>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <div className="css-0">
                <div className="truncate-text css-zcuaut">
                  <p>
                    Take a step towards your wellbeing with these yoga programs, designed by Sadhguru and suitable for beginners. With an array
                    of options available.
                  </p>
                </div>
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default DemoCard;
