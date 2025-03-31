// pages/Partnership.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Partnership = () => {
    return (
        <Box sx={{ backgroundColor: '#f9f9f7', py: 10 }}>
            <Container>
                {/* Introduction Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                                 <Box
                                   sx={{
                                     display: 'inline-block',
                                     borderBottom: '3px solid #c1a361',
                                     pb: 1,
                                   }}
                                 >
                                   <Typography
                                     variant="h3"
                                     sx={{
                                       fontFamily: 'Playfair Display, serif',
                                       letterSpacing: '1px',
                                       fontWeight: 500,
                                     }}
                                   >
                                     PARTNERSHIP WITH COZY HORIZON STAYS
                                   </Typography>
                                 </Box>
                               </Box>
                   
                    <Typography
                        variant="body1"
                        sx={{
                            maxWidth: 800,
                            mt: 7,
                            mx: 'auto',
                            color: '#555',
                            textAlign: 'center',
                            mb: 6,
                        }}
                    >
                        Cozy Horizon Stays transforms short-term rentals by delivering guests a premium travel experience.
                        We offer beautifully styled apartments, lofts, and vacation homes in the most sought-after neighborhoods.
                        Our properties include hotel-style amenities, such as travel-sized toiletries, plush towels, and high-quality linens.
                        Enjoy all the comforts of home—including a fully stocked kitchen and cozy living areas!
                        Guests can relax knowing comfort, cleanliness, and safety are top priorities.
                        Our on-site teams are dedicated to providing a consistently excellent experience at every stay.
                        We’re available 24/7 via text or call to assist with any questions, needs, or special requests.
                        Planning a longer stay? Cozy Horizon
                        Stays caters to business travelers, remote workers, long-term vacationers, and digital nomads with flexible accommodations designed for extended comfort.
                        Make your stay seamless—whether you're working, relaxing, or both.
                    </Typography>
                    {/* <Button
                        variant="outlined"
                        component="a"
                        href="/contact"
                        sx={{
                            display: 'block',
                            mx: 'auto',
                            mt: 4,
                            borderColor: '#c1a361',
                            color: '#c1a361',
                            '&:hover': {
                                backgroundColor: '#c1a361',
                                color: '#fff',
                            },
                        }}
                    >
                        Contact Us to Partner
                    </Button> */}
                

                {/* FAQ Section */}
                <Box sx={{ mt: 10 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'Playfair Display, serif',
                            mb: 4,
                            textAlign: 'center',
                            letterSpacing: '1px',
                        }}
                    >
                        FREQUENTLY ASKED QUESTIONS (FAQ)
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={8}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="h6">How does Cozy Horizon Stays market its suites?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                       We advertise our suite with our direct booking, we also market them on our third-party short rental sites.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography variant="h6">Who are Cozy Horizon Stays guest and how long are their typical stays?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Cozy Horizon Stays guest include those thraveling or leisure, business, or corporate stays.
                                        Our stays range from one night to six months, with an average of three nights.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3a-content"
                                    id="panel3a-header"
                                >
                                    <Typography variant="h6">Does Cozy Horizon Stays screen their guests?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Yes. No matter the length of stay, we require identity verification and
                                        screening before a reservation. 
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4a-content"
                                    id="panel4a-header"
                                >
                                    <Typography variant="h6">Does Cozy Horizon Stays have a cleaning team?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        After each stay, our professional cleaner team will inspect and clean each unit.
                                        If a guest stays for an extended period, we clean the apartment weekly
                                        upon request.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Box>
                </motion.div>
            </Container>
        </Box>
        
    );
};

export default Partnership;
