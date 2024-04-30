import React from 'react';
import { Container, Grid, Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const FlashItem = ({ icon, color, text, link }) => (
  <li style={{ float: 'left', listStyle: 'none', position: 'relative' }}>
    <i className={`fa ${icon}`} aria-hidden="true" style={{ color: color, fontSize: '12px' }}></i>
    <Link to={link} style={{ color: '#f20000', cursor: 'pointer' }}>{text}</Link>
  </li>
);

const LayoutPage = () => {
  return (
    <Container>
      <Paper className="bottom-space" style={{ backgroundColor: '#fff', marginBottom: '10px' }}>
        <Grid container >
          <Grid item xs={12} sm={12} md={12} lg={12} >
            <div className="flash_sec" align="center" style={{ marginBottom: '5px' }}>
              {/* Your Flash Section JSX here */}
              <ul id="flash_title" className="tricker_slider" style={{ /* Your styles here */ }}>
                <FlashItem icon="fa-hand-o-right" color="#05430A" text="2023 - 2024 Kasi Aanmiga Payanam - Notice and Conditions" link="../resources/docs/hrcescroll_doc/149/document_1.pdf" />
                {/* Add more FlashItems as needed */}
              </ul>
            </div>
          </Grid>
        </Grid>
        <Grid container style={{ padding: '0px 15px' }}>
          <Grid item xs={12} sm={12} md={2} lg={2} style={{ paddingRight: '0px', paddingTop: '5px' }}>
            {/* Your Side Buttons JSX here */}
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} className="center-position">
            <div className="region region-content-middle">
              <section id="block-block-11" className="block block-block clearfix">
                <Grid container>
                  <Grid item xs={12}>
                    <div className="content-section">
                      <Typography variant="h2" className="span_subhead">
                        <label id="lbl_itms">
                          <span style={{ fontFamily: 'Arial', fontSize: '1em' }}>Hindu Religious & Charitable Endowments Department</span>
                        </label>
                      </Typography>
                      <Typography style={{ textAlign: 'justify', padding: '10px' }}>
                        {/* Your content here */}
                      </Typography>
                      <Button onClick={() => window.location.href='hrce_about.php'} className="btn btn-sm readmorebutton primary_btn" style={{ cursor: 'pointer', backgroundColor: 'rgb(0, 116, 208)', borderColor: 'rgb(214, 234, 248)' }}>
                        <label id="lbl_readmore">
                          <span style={{ fontFamily: 'Arial', fontSize: '1em' }}>More..</span>
                        </label>
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </section>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2} style={{ paddingLeft: '0px', paddingTop: '5px' }}>
            {/* Your other side buttons JSX here */}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LayoutPage;
