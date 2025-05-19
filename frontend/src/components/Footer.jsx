

// // import React from 'react';
// // import Box from '@mui/material/Box';
// // import Typography from '@mui/material/Typography';
// // import Link from '@mui/material/Link';
// // import Divider from '@mui/material/Divider';
// // import Avatar from '@mui/material/Avatar';
// // import GitHubIcon from '@mui/icons-material/GitHub';

// // const team = [
// //   { name: 'Shashwat Singh', github: 'https://github.com/alicesmith' },
// //   { name: 'Shashwat Raj Singh', github: 'https://github.com/bobjohnson' },
// //   { name: 'Bh. Shashwat Singh Chauhan', github: 'https://github.com/carollee' },
// // ];

// // export default function Footer() {
// //   return (
// //     <Box component="footer" sx={{
// //       bgcolor: '#1e293b', 
// //       color: '#fff', 
// //       py: 3.5, 
// //       px: 3, 
// //       mt: 6,
// //       boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
// //     }}>
// //       <Box sx={{ 
// //         maxWidth: 1200, 
// //         mx: 'auto',
// //         display: 'flex', 
// //         flexDirection: { xs: 'column', md: 'row' }, 
// //         alignItems: 'center', 
// //         justifyContent: 'space-between',
// //         gap: 3
// //       }}>
// //         <Box>
// //           <Typography variant="h6" sx={{ 
// //             mb: 1,
// //             fontWeight: 600,
// //             letterSpacing: '0.5px'
// //           }}>
// //             Our Team
// //           </Typography>
          
// //           <Box sx={{ 
// //             display: 'flex', 
// //             flexDirection: { xs: 'column', sm: 'row' }, 
// //             flexWrap: 'wrap',
// //             gap: { xs: 1.5, sm: 2 } 
// //           }}>
// //             {team.map((member, idx) => (
// //               <Box 
// //                 key={member.name} 
// //                 sx={{ 
// //                   display: 'flex', 
// //                   alignItems: 'center',
// //                   gap: 1
// //                 }}
// //               >
// //                 <Avatar 
// //                   sx={{ 
// //                     width: 32, 
// //                     height: 32, 
// //                     bgcolor: '#64748b',
// //                     fontSize: '0.9rem',
// //                     fontWeight: 'bold'
// //                   }}
// //                 >
// //                   {member.name.split(' ').map(n => n[0]).join('')}
// //                 </Avatar>
// //                 <Link 
// //                   href={member.github} 
// //                   color="inherit" 
// //                   underline="hover" 
// //                   target="_blank" 
// //                   rel="noopener"
// //                   sx={{ 
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     gap: 0.75,
// //                     fontWeight: 500,
// //                     color: '#e2e8f0',
// //                     transition: 'color 0.2s',
// //                     '&:hover': {
// //                       color: '#ffffff'
// //                     }
// //                   }}
// //                 >
// //                   {member.name}
// //                   <GitHubIcon fontSize="small" />
// //                 </Link>
// //               </Box>
// //             ))}
// //           </Box>
// //         </Box>
        
// //         <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
// //         <Divider sx={{ width: '100%', display: { xs: 'block', md: 'none' }, my: 1 }} />
        
// //         <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
// //           <Typography variant="body1" sx={{ fontWeight: 500 }}>
// //             Resume Skill Extractor
// //           </Typography>
// //           <Typography variant="body2" sx={{ mt: 0.5, color: '#cbd5e1' }}>
// //             &copy; {new Date().getFullYear()} All rights reserved.
// //           </Typography>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // }

// // import React, { useState } from 'react';
// // import { 
// //   Box, 
// //   Typography, 
// //   Link, 
// //   Divider, 
// //   Avatar, 
// //   Paper,
// //   Container,
// //   Grid,
// //   IconButton,
// //   Tooltip,
// //   Collapse,
// //   Button,
// //   Zoom,
// //   useMediaQuery,
// //   useTheme
// // } from '@mui/material';
// // import GitHubIcon from '@mui/icons-material/GitHub';
// // import LinkedInIcon from '@mui/icons-material/LinkedIn';
// // import EmailIcon from '@mui/icons-material/Email';
// // import TwitterIcon from '@mui/icons-material/Twitter';
// // import CodeIcon from '@mui/icons-material/Code';
// // import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import MailOutlineIcon from '@mui/icons-material/MailOutline';
// // import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

// // const team = [
// //   { 
// //     name: 'Shashwat Singh', 
// //     github: 'https://github.com/alicesmith',
// //     linkedin: 'https://linkedin.com/in/shashwatsingh',
// //     email: 'shashwat@example.com',
// //     role: 'Lead Developer',
// //     twitter: 'https://twitter.com/shashwatsingh'
// //   },
// //   { 
// //     name: 'Shashwat Raj Singh', 
// //     github: 'https://github.com/bobjohnson',
// //     linkedin: 'https://linkedin.com/in/shashwatrajsingh',
// //     email: 'shashwatraj@example.com',
// //     role: 'UX Designer',
// //     twitter: 'https://twitter.com/shashwatrajsingh'
// //   },
// //   { 
// //     name: 'Bh. Shashwat Singh Chauhan', 
// //     github: 'https://github.com/carollee',
// //     linkedin: 'https://linkedin.com/in/shashwatsinghchauhan',
// //     email: 'bhshashwat@example.com',
// //     role: 'AI Engineer',
// //     twitter: 'https://twitter.com/shashwatsinghchauhan'
// //   },
// // ];

// // const footerLinks = [
// //   { title: 'Privacy Policy', href: '/privacy' },
// //   { title: 'Terms of Service', href: '/terms' },
// //   { title: 'Contact Us', href: '/contact' },
// //   { title: 'About', href: '/about' },
// // ];

// // export default function Footer({ darkMode = false }) {
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //   const isTablet = useMediaQuery(theme.breakpoints.down('md'));
// //   const [expanded, setExpanded] = useState(false);
// //   const [hoveredMember, setHoveredMember] = useState(null);
  
// //   const handleExpandClick = () => {
// //     setExpanded(!expanded);
// //   };
  
// //   const currentYear = new Date().getFullYear();
  
// //   const bgGradient = darkMode 
// //     ? 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)' 
// //     : 'linear-gradient(to bottom, #1e293b 0%, #0f172a 100%)';
    
// //   const footerCardBg = darkMode 
// //     ? 'rgba(30, 41, 59, 0.5)' 
// //     : 'rgba(15, 23, 42, 0.5)';
    
// //   return (
// //     <Box component="footer" sx={{
// //       position: 'relative',
// //       bgcolor: 'transparent',
// //       color: '#fff',
// //       pt: 6,
// //       pb: 4,
// //       mt: 8,
// //       overflow: 'hidden',
// //       '&:before': {
// //         content: '""',
// //         position: 'absolute',
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         bottom: 0,
// //         background: bgGradient,
// //         zIndex: -2,
// //       },
// //     }}>
// //       {/* Decorative elements */}
// //       <Box sx={{
// //         position: 'absolute',
// //         top: -100,
// //         left: -100,
// //         width: 300,
// //         height: 300,
// //         borderRadius: '50%',
// //         background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)',
// //         zIndex: -1,
// //       }} />
      
// //       <Box sx={{
// //         position: 'absolute',
// //         bottom: -80,
// //         right: -80,
// //         width: 200,
// //         height: 200,
// //         borderRadius: '50%',
// //         background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
// //         zIndex: -1,
// //       }} />
      
// //       <Container maxWidth="lg">
// //         <Grid container spacing={4}>
// //           {/* Team Section */}
// //           <Grid item xs={12} md={7}>
// //             <Box sx={{ mb: 3 }}>
// //               <Typography variant="h5" sx={{ 
// //                 mb: 1,
// //                 fontWeight: 700,
// //                 letterSpacing: '0.5px',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 gap: 1,
// //               }}>
// //                 <LightbulbOutlinedIcon sx={{ color: '#3b82f6' }} /> 
// //                 Meet Our Team
// //               </Typography>
// //               <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500 }}>
// //                 Our talented team of developers and designers working to bring you the best resume analysis tools.
// //               </Typography>
// //             </Box>
            
// //             <Grid container spacing={2}>
// //               {team.map((member, idx) => (
// //                 <Grid item xs={12} sm={expanded ? 12 : 6} md={expanded ? 12 : 4} key={member.name}>
// //                   <Zoom in={true} style={{ transitionDelay: `${idx * 100}ms` }}>
// //                     <Paper 
// //                       elevation={hoveredMember === member.name ? 8 : 2}
// //                       sx={{ 
// //                         p: expanded ? 2 : 1.5, 
// //                         borderRadius: '12px',
// //                         background: footerCardBg,
// //                         backdropFilter: 'blur(8px)',
// //                         transition: 'all 0.3s ease',
// //                         border: '1px solid rgba(255,255,255,0.05)',
// //                         height: '100%',
// //                         display: 'flex',
// //                         flexDirection: expanded ? 'row' : 'column',
// //                         alignItems: expanded ? 'flex-start' : 'center',
// //                         '&:hover': {
// //                           transform: 'translateY(-4px)',
// //                           boxShadow: theme.shadows[8],
// //                           borderColor: 'rgba(59,130,246,0.3)',
// //                         }
// //                       }}
// //                       onMouseEnter={() => setHoveredMember(member.name)}
// //                       onMouseLeave={() => setHoveredMember(null)}
// //                     >
// //                       <Avatar 
// //                         sx={{ 
// //                           width: expanded ? 60 : 48, 
// //                           height: expanded ? 60 : 48, 
// //                           bgcolor: '#3b82f6',
// //                           fontSize: expanded ? '1.2rem' : '1rem',
// //                           fontWeight: 'bold',
// //                           mb: expanded ? 0 : 1.5,
// //                           mr: expanded ? 2 : 0,
// //                           boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
// //                           border: '2px solid rgba(255,255,255,0.1)',
// //                         }}
// //                       >
// //                         {member.name.split(' ').map(n => n[0]).join('')}
// //                       </Avatar>
                      
// //                       <Box sx={{ 
// //                         textAlign: expanded ? 'left' : 'center',
// //                         flexGrow: 1,
// //                       }}>
// //                         <Typography 
// //                           variant="subtitle1" 
// //                           sx={{ 
// //                             fontWeight: 600,
// //                             color: '#fff',
// //                             mb: 0.5
// //                           }}
// //                         >
// //                           {member.name}
// //                         </Typography>
                        
// //                         <Typography 
// //                           variant="caption" 
// //                           sx={{ 
// //                             color: 'rgba(255,255,255,0.7)',
// //                             display: 'block',
// //                             mb: 1
// //                           }}
// //                         >
// //                           {member.role}
// //                         </Typography>
                        
// //                         <Box sx={{ 
// //                           display: 'flex', 
// //                           justifyContent: expanded ? 'flex-start' : 'center',
// //                           mt: expanded ? 1 : 0
// //                         }}>
// //                           <Tooltip title="GitHub">
// //                             <IconButton 
// //                               size="small" 
// //                               component="a"
// //                               href={member.github}
// //                               target="_blank"
// //                               rel="noopener"
// //                               sx={{ 
// //                                 color: 'rgba(255,255,255,0.7)',
// //                                 '&:hover': { color: '#fff' }
// //                               }}
// //                             >
// //                               <GitHubIcon fontSize="small" />
// //                             </IconButton>
// //                           </Tooltip>
                          
// //                           <Tooltip title="LinkedIn">
// //                             <IconButton 
// //                               size="small" 
// //                               component="a"
// //                               href={member.linkedin}
// //                               target="_blank"
// //                               rel="noopener"
// //                               sx={{ 
// //                                 color: 'rgba(255,255,255,0.7)',
// //                                 '&:hover': { color: '#0077b5' }
// //                               }}
// //                             >
// //                               <LinkedInIcon fontSize="small" />
// //                             </IconButton>
// //                           </Tooltip>
                          
// //                           <Tooltip title="Email">
// //                             <IconButton 
// //                               size="small" 
// //                               component="a"
// //                               href={`mailto:${member.email}`}
// //                               sx={{ 
// //                                 color: 'rgba(255,255,255,0.7)',
// //                                 '&:hover': { color: '#ea4335' }
// //                               }}
// //                             >
// //                               <EmailIcon fontSize="small" />
// //                             </IconButton>
// //                           </Tooltip>
                          
// //                           <Tooltip title="Twitter">
// //                             <IconButton 
// //                               size="small" 
// //                               component="a"
// //                               href={member.twitter}
// //                               target="_blank"
// //                               rel="noopener"
// //                               sx={{ 
// //                                 color: 'rgba(255,255,255,0.7)',
// //                                 '&:hover': { color: '#1da1f2' }
// //                               }}
// //                             >
// //                               <TwitterIcon fontSize="small" />
// //                             </IconButton>
// //                           </Tooltip>
// //                         </Box>
// //                       </Box>
// //                     </Paper>
// //                   </Zoom>
// //                 </Grid>
// //               ))}
// //             </Grid>
            
// //             <Box sx={{ textAlign: 'center', mt: 2 }}>
// //               <Button 
// //                 size="small"
// //                 color="primary"
// //                 onClick={handleExpandClick}
// //                 startIcon={<ExpandLessIcon sx={{ 
// //                   transform: expanded ? 'rotate(180deg)' : 'none',
// //                   transition: 'transform 0.3s'
// //                 }} />}
// //                 sx={{ 
// //                   textTransform: 'none',
// //                   color: 'rgba(255,255,255,0.7)',
// //                   '&:hover': { color: '#fff' }
// //                 }}
// //               >
// //                 {expanded ? 'Show Less' : 'Show More'}
// //               </Button>
// //             </Box>
// //           </Grid>
          
// //           {/* Info Section */}
// //           <Grid item xs={12} md={5}>
// //             <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
// //               <Box sx={{ mb: 4 }}>
// //                 <Typography variant="h5" component="div" sx={{ 
// //                   fontWeight: 700,
// //                   background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
// //                   backgroundClip: 'text',
// //                   textFillColor: 'transparent',
// //                   WebkitBackgroundClip: 'text',
// //                   WebkitTextFillColor: 'transparent',
// //                   mb: 1,
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: 1,
// //                 }}>
// //                   <CodeIcon /> Resume Skill Extractor
// //                 </Typography>
// //                 <Typography variant="body2" color="rgba(255,255,255,0.7)" sx={{ maxWidth: 400 }}>
// //                   An advanced tool powered by AI to extract and analyze skills from your resume, helping you stand out in the job market.
// //                 </Typography>
                
// //                 <Box sx={{ mt: 3 }}>
// //                   <Button 
// //                     variant="outlined" 
// //                     startIcon={<MailOutlineIcon />}
// //                     sx={{ 
// //                       color: '#fff', 
// //                       borderColor: 'rgba(255,255,255,0.3)',
// //                       mr: 2,
// //                       '&:hover': {
// //                         borderColor: '#fff',
// //                         backgroundColor: 'rgba(255,255,255,0.05)'
// //                       }
// //                     }}
// //                   >
// //                     Subscribe
// //                   </Button>
// //                   <Button 
// //                     variant="contained" 
// //                     sx={{ 
// //                       bgcolor: '#3b82f6',
// //                       '&:hover': { bgcolor: '#2563eb' }
// //                     }}
// //                   >
// //                     Get Started
// //                   </Button>
// //                 </Box>
// //               </Box>
              
// //               <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 3 }} />
              
// //               <Grid container spacing={2} sx={{ mb: 'auto' }}>
// //                 <Grid item xs={12} sm={6}>
// //                   <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#fff' }}>
// //                     Resources
// //                   </Typography>
// //                   {footerLinks.map((link) => (
// //                     <Link 
// //                       key={link.title}
// //                       href={link.href}
// //                       color="inherit" 
// //                       underline="hover"
// //                       sx={{ 
// //                         display: 'block', 
// //                         mb: 1, 
// //                         color: 'rgba(255,255,255,0.7)',
// //                         '&:hover': { color: '#3b82f6' }
// //                       }}
// //                     >
// //                       {link.title}
// //                     </Link>
// //                   ))}
// //                 </Grid>
// //                 <Grid item xs={12} sm={6}>
// //                   <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#fff' }}>
// //                     Contact
// //                   </Typography>
// //                   <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
// //                     support@resumeskillextractor.com
// //                   </Typography>
// //                   <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
// //                     +1 (555) 123-4567
// //                   </Typography>
// //                 </Grid>
// //               </Grid>
// //             </Box>
// //           </Grid>
// //         </Grid>
        
// //         <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mt: 4, mb: 3 }} />
        
// //         <Box sx={{ 
// //           display: 'flex', 
// //           flexDirection: { xs: 'column', sm: 'row' }, 
// //           justifyContent: 'space-between',
// //           alignItems: { xs: 'center', sm: 'flex-end' },
// //           gap: 2
// //         }}>
// //           <Typography variant="body2" sx={{ color: #1e40af' }}>
// //             &copy; {currentYear} Resume Skill Extractor. All rights reserved.
// //           </Typography>
          
// //           <Typography variant="body2" sx={{ 
// //             display: 'flex', 
// //             alignItems: 'center', 
// //             color: 'rgba(255,255,255,0.6)',
// //             gap: 0.5
// //           }}>
// //             Made with <FavoriteIcon sx={{ color: '#f43f5e', fontSize: 16 }} /> in India
// //           </Typography>
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // }

// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Link, 
//   Divider, 
//   Avatar, 
//   Paper,
//   Container,
//   Grid,
//   IconButton,
//   Tooltip,
//   Collapse,
//   Button,
//   Zoom,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import CodeIcon from '@mui/icons-material/Code';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

// const team = [
//   { 
//     name: 'Shashwat Singh', 
//     github: 'https://github.com/alicesmith',
//     linkedin: 'https://linkedin.com/in/shashwatsingh',
//     email: 'shashwat@example.com',
//     role: 'Lead Developer',
//     twitter: 'https://twitter.com/shashwatsingh'
//   },
//   { 
//     name: 'Shashwat Raj Singh', 
//     github: 'https://github.com/bobjohnson',
//     linkedin: 'https://linkedin.com/in/shashwatrajsingh',
//     email: 'shashwatraj@example.com',
//     role: 'UX Designer',
//     twitter: 'https://twitter.com/shashwatrajsingh'
//   },
//   { 
//     name: 'Bh. Shashwat Singh Chauhan', 
//     github: 'https://github.com/carollee',
//     linkedin: 'https://linkedin.com/in/shashwatsinghchauhan',
//     email: 'bhshashwat@example.com',
//     role: 'AI Engineer',
//     twitter: 'https://twitter.com/shashwatsinghchauhan'
//   },
// ];

// const footerLinks = [
//   { title: 'Privacy Policy', href: '/privacy' },
//   { title: 'Terms of Service', href: '/terms' },
//   { title: 'Contact Us', href: '/contact' },
//   { title: 'About', href: '/about' },
// ];

// export default function Footer({ darkMode = false }) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.down('md'));
//   const [expanded, setExpanded] = useState(false);
//   const [hoveredMember, setHoveredMember] = useState(null);
  
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
  
//   const currentYear = new Date().getFullYear();
  
//   const bgGradient = darkMode 
//     ? 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)' 
//     : 'linear-gradient(to bottom, #1e293b 0%, #0f172a 100%)';
    
//   const footerCardBg = darkMode 
//     ? 'rgba(30, 41, 59, 0.5)' 
//     : 'rgba(15, 23, 42, 0.5)';
    
//   return (
//     <Box component="footer" sx={{
//       position: 'relative',
//       bgcolor: 'transparent',
//       color: '#1e40af', // Changed from #fff to #1e40af
//       pt: 6,
//       pb: 4,
//       mt: 8,
//       overflow: 'hidden',
//       '&:before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: bgGradient,
//         zIndex: -2,
//       },
//     }}>
//       {/* Decorative elements */}
//       <Box sx={{
//         position: 'absolute',
//         top: -100,
//         left: -100,
//         width: 300,
//         height: 300,
//         borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0) 70%)',
//         zIndex: -1,
//       }} />
      
//       <Box sx={{
//         position: 'absolute',
//         bottom: -80,
//         right: -80,
//         width: 200,
//         height: 200,
//         borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0) 70%)',
//         zIndex: -1,
//       }} />
      
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* Team Section */}
//           <Grid item xs={12} md={7}>
//             <Box sx={{ mb: 3 }}>
//               <Typography variant="h5" sx={{ 
//                 mb: 1,
//                 fontWeight: 700,
//                 letterSpacing: '0.5px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 1,
//                 color: '#1e40af', // Changed to #1e40af
//               }}>
//                 <LightbulbOutlinedIcon sx={{ color: '#3b82f6' }} /> 
//                 Meet Our Team
//               </Typography>
//               <Typography variant="body2" sx={{ color: '#1e40af', maxWidth: 500, opacity: 0.8 }}> {/* Changed from rgba(255,255,255,0.7) */}
//                 Our talented team of developers and designers working to bring you the best resume analysis tools.
//               </Typography>
//             </Box>
            
//             <Grid container spacing={2}>
//               {team.map((member, idx) => (
//                 <Grid item xs={12} sm={expanded ? 12 : 6} md={expanded ? 12 : 4} key={member.name}>
//                   <Zoom in={true} style={{ transitionDelay: `${idx * 100}ms` }}>
//                     <Paper 
//                       elevation={hoveredMember === member.name ? 8 : 2}
//                       sx={{ 
//                         p: expanded ? 2 : 1.5, 
//                         borderRadius: '12px',
//                         background: footerCardBg,
//                         backdropFilter: 'blur(8px)',
//                         transition: 'all 0.3s ease',
//                         border: '1px solid rgba(30, 64, 175, 0.1)', // Changed to #1e40af with opacity
//                         height: '100%',
//                         display: 'flex',
//                         flexDirection: expanded ? 'row' : 'column',
//                         alignItems: expanded ? 'flex-start' : 'center',
//                         '&:hover': {
//                           transform: 'translateY(-4px)',
//                           boxShadow: theme.shadows[8],
//                           borderColor: 'rgba(30, 64, 175, 0.3)', // Changed to #1e40af with opacity
//                         }
//                       }}
//                       onMouseEnter={() => setHoveredMember(member.name)}
//                       onMouseLeave={() => setHoveredMember(null)}
//                     >
//                       <Avatar 
//                         sx={{ 
//                           width: expanded ? 60 : 48, 
//                           height: expanded ? 60 : 48, 
//                           bgcolor: '#3b82f6',
//                           fontSize: expanded ? '1.2rem' : '1rem',
//                           fontWeight: 'bold',
//                           mb: expanded ? 0 : 1.5,
//                           mr: expanded ? 2 : 0,
//                           boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
//                           border: '2px solid rgba(30, 64, 175, 0.1)', // Changed to #1e40af with opacity
//                         }}
//                       >
//                         {member.name.split(' ').map(n => n[0]).join('')}
//                       </Avatar>
                      
//                       <Box sx={{ 
//                         textAlign: expanded ? 'left' : 'center',
//                         flexGrow: 1,
//                       }}>
//                         <Typography 
//                           variant="subtitle1" 
//                           sx={{ 
//                             fontWeight: 600,
//                             color: '#1e40af', // Changed from #fff
//                             mb: 0.5
//                           }}
//                         >
//                           {member.name}
//                         </Typography>
                        
//                         <Typography 
//                           variant="caption" 
//                           sx={{ 
//                             color: '#1e40af', // Changed from rgba(255,255,255,0.7)
//                             display: 'block',
//                             mb: 1,
//                             opacity: 0.8
//                           }}
//                         >
//                           {member.role}
//                         </Typography>
                        
//                         <Box sx={{ 
//                           display: 'flex', 
//                           justifyContent: expanded ? 'flex-start' : 'center',
//                           mt: expanded ? 1 : 0
//                         }}>
//                           <Tooltip title="GitHub">
//                             <IconButton 
//                               size="small" 
//                               component="a"
//                               href={member.github}
//                               target="_blank"
//                               rel="noopener"
//                               sx={{ 
//                                 color: '#1e40af', // Changed from rgba(255,255,255,0.7)
//                                 opacity: 0.7,
//                                 '&:hover': { color: '#1e40af', opacity: 1 }
//                               }}
//                             >
//                               <GitHubIcon fontSize="small" />
//                             </IconButton>
//                           </Tooltip>
                          
//                           <Tooltip title="LinkedIn">
//                             <IconButton 
//                               size="small" 
//                               component="a"
//                               href={member.linkedin}
//                               target="_blank"
//                               rel="noopener"
//                               sx={{ 
//                                 color: '#1e40af', // Changed from rgba(255,255,255,0.7)
//                                 opacity: 0.7,
//                                 '&:hover': { color: '#1e40af', opacity: 1 }
//                               }}
//                             >
//                               <LinkedInIcon fontSize="small" />
//                             </IconButton>
//                           </Tooltip>
                          
//                           <Tooltip title="Email">
//                             <IconButton 
//                               size="small" 
//                               component="a"
//                               href={`mailto:${member.email}`}
//                               sx={{ 
//                                 color: '#1e40af', // Changed from rgba(255,255,255,0.7)
//                                 opacity: 0.7,
//                                 '&:hover': { color: '#1e40af', opacity: 1 }
//                               }}
//                             >
//                               <EmailIcon fontSize="small" />
//                             </IconButton>
//                           </Tooltip>
                          
//                           <Tooltip title="Twitter">
//                             <IconButton 
//                               size="small" 
//                               component="a"
//                               href={member.twitter}
//                               target="_blank"
//                               rel="noopener"
//                               sx={{ 
//                                 color: '#1e40af', // Changed from rgba(255,255,255,0.7)
//                                 opacity: 0.7,
//                                 '&:hover': { color: '#1e40af', opacity: 1 }
//                               }}
//                             >
//                               <TwitterIcon fontSize="small" />
//                             </IconButton>
//                           </Tooltip>
//                         </Box>
//                       </Box>
//                     </Paper>
//                   </Zoom>
//                 </Grid>
//               ))}
//             </Grid>
            
//             <Box sx={{ textAlign: 'center', mt: 2 }}>
//               <Button 
//                 size="small"
//                 color="primary"
//                 onClick={handleExpandClick}
//                 startIcon={<ExpandLessIcon sx={{ 
//                   transform: expanded ? 'rotate(180deg)' : 'none',
//                   transition: 'transform 0.3s',
//                   color: '#1e40af' // Added color
//                 }} />}
//                 sx={{ 
//                   textTransform: 'none',
//                   color: '#1e40af', // Changed from rgba(255,255,255,0.7)
//                   opacity: 0.8,
//                   '&:hover': { color: '#1e40af', opacity: 1 }
//                 }}
//               >
//                 {expanded ? 'Show Less' : 'Show More'}
//               </Button>
//             </Box>
//           </Grid>
          
//           {/* Info Section */}
//           <Grid item xs={12} md={5}>
//             <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="h5" component="div" sx={{ 
//                   fontWeight: 700,
//                   background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
//                   backgroundClip: 'text',
//                   textFillColor: 'transparent',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   mb: 1,
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 1,
//                 }}>
//                   <CodeIcon /> Resume Skill Extractor
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: '#1e40af', maxWidth: 400, opacity: 0.8 }}> {/* Changed from rgba(255,255,255,0.7) */}
//                   An advanced tool powered by AI to extract and analyze skills from your resume, helping you stand out in the job market.
//                 </Typography>
                
//                 <Box sx={{ mt: 3 }}>
//                   <Button 
//                     variant="outlined" 
//                     startIcon={<MailOutlineIcon />}
//                     sx={{ 
//                       color: '#1e40af', // Changed from #fff
//                       borderColor: 'rgba(30, 64, 175, 0.3)', // Changed to #1e40af with opacity
//                       mr: 2,
//                       '&:hover': {
//                         borderColor: '#1e40af',
//                         backgroundColor: 'rgba(30, 64, 175, 0.05)'
//                       }
//                     }}
//                   >
//                     Subscribe
//                   </Button>
//                   <Button 
//                     variant="contained" 
//                     sx={{ 
//                       bgcolor: '#3b82f6',
//                       '&:hover': { bgcolor: '#2563eb' }
//                     }}
//                   >
//                     Get Started
//                   </Button>
//                 </Box>
//               </Box>
              
//               <Divider sx={{ bgcolor: 'rgba(30, 64, 175, 0.1)', my: 3 }} /> {/* Changed to #1e40af with opacity */}
              
//               <Grid container spacing={2} sx={{ mb: 'auto' }}>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#1e40af' }}> {/* Changed from #fff */}
//                     Resources
//                   </Typography>
//                   {footerLinks.map((link) => (
//                     <Link 
//                       key={link.title}
//                       href={link.href}
//                       color="inherit" 
//                       underline="hover"
//                       sx={{ 
//                         display: 'block', 
//                         mb: 1, 
//                         color: '#1e40af', // Changed from rgba(255,255,255,0.7)
//                         opacity: 0.8,
//                         '&:hover': { 
//                           color: '#1e40af',
//                           opacity: 1
//                         }
//                       }}
//                     >
//                       {link.title}
//                     </Link>
//                   ))}
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#1e40af' }}> {/* Changed from #fff */}
//                     Contact
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: '#1e40af', mb: 1, opacity: 0.8 }}> {/* Changed from rgba(255,255,255,0.7) */}
//                     support@resumeskillextractor.com
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: '#1e40af', opacity: 0.8 }}> {/* Changed from rgba(255,255,255,0.7) */}
//                     +1 (555) 123-4567
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Grid>
//         </Grid>
        
//         <Divider sx={{ bgcolor: 'rgba(30, 64, 175, 0.1)', mt: 4, mb: 3 }} /> {/* Changed to #1e40af with opacity */}
        
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: { xs: 'column', sm: 'row' }, 
//           justifyContent: 'space-between',
//           alignItems: { xs: 'center', sm: 'flex-end' },
//           gap: 2
//         }}>
//           <Typography variant="body2" sx={{ color: '#1e40af' }}>
//             &copy; {currentYear} Resume Skill Extractor. All rights reserved.
//           </Typography>
          
//           <Typography variant="body2" sx={{ 
//             display: 'flex', 
//             alignItems: 'center', 
//             color: '#1e40af',
//             opacity: 0.8,
//             gap: 0.5
//           }}>
//             Made with <FavoriteIcon sx={{ color: '#f43f5e', fontSize: 16 }} /> in India
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Link, 
  Divider, 
  Avatar, 
  Paper,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Collapse,
  Button,
  Zoom,
  useMediaQuery,
  useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import CodeIcon from '@mui/icons-material/Code';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

const team = [
  { 
    name: 'Shashwat Singh', 
    github: 'https://github.com/alicesmith',
    linkedin: 'https://linkedin.com/in/shashwatsingh',
    email: 'shashwat@example.com',
    role: 'Lead Developer',
    twitter: 'https://twitter.com/shashwatsingh'
  },
  { 
    name: 'Shashwat Raj Singh', 
    github: 'https://github.com/bobjohnson',
    linkedin: 'https://linkedin.com/in/shashwatrajsingh',
    email: 'shashwatraj@example.com',
    role: 'UX Designer',
    twitter: 'https://twitter.com/shashwatrajsingh'
  },
  { 
    name: 'Bh. Shashwat Singh Chauhan', 
    github: 'https://github.com/carollee',
    linkedin: 'https://linkedin.com/in/shashwatsinghchauhan',
    email: 'bhshashwat@example.com',
    role: 'AI Engineer',
    twitter: 'https://twitter.com/shashwatsinghchauhan'
  },
];

const footerLinks = [
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'About', href: '/about' },
];

export default function Footer({ darkMode = false }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const currentYear = new Date().getFullYear();
    
  const footerCardBg = 'rgba(245, 245, 245, 0.9)'; // Light grey background for cards
    
  return (
    <Box component="footer" sx={{
      position: 'relative',
      bgcolor: '#f0eded', // Light grey background
      color: '#1e40af', // Deep blue text
      pt: 6,
      pb: 4,
      mt: 8,
      overflow: 'hidden',
    }}>
      {/* Decorative elements - updated to work with grey background */}
      <Box sx={{
        position: 'absolute',
        top: -100,
        left: -100,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30, 64, 175, 0.1) 0%, rgba(30, 64, 175, 0) 70%)',
        zIndex: 0,
      }} />
      
      <Box sx={{
        position: 'absolute',
        bottom: -80,
        right: -80,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30, 64, 175, 0.05) 0%, rgba(30, 64, 175, 0) 70%)',
        zIndex: 0,
      }} />
      
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Team Section */}
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" sx={{ 
                mb: 1,
                fontWeight: 700,
                letterSpacing: '0.5px',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: '#1e40af',
              }}>
                <LightbulbOutlinedIcon sx={{ color: '#3b82f6' }} /> 
                Meet Our Team
              </Typography>
              <Typography variant="body2" sx={{ color: '#1e40af', maxWidth: 500, opacity: 0.8 }}>
                Our talented team of developers and designers working to bring you the best resume analysis tools.
              </Typography>
            </Box>
            
            <Grid container spacing={2}>
              {team.map((member, idx) => (
                <Grid item xs={12} sm={expanded ? 12 : 6} md={expanded ? 12 : 4} key={member.name}>
                  <Zoom in={true} style={{ transitionDelay: `${idx * 100}ms` }}>
                    <Paper 
                      elevation={hoveredMember === member.name ? 8 : 2}
                      sx={{ 
                        p: expanded ? 2 : 1.5, 
                        borderRadius: '12px',
                        background: footerCardBg,
                        backdropFilter: 'blur(8px)',
                        transition: 'all 0.3s ease',
                        border: '1px solid rgba(30, 64, 175, 0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: expanded ? 'row' : 'column',
                        alignItems: expanded ? 'flex-start' : 'center',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: theme.shadows[8],
                          borderColor: 'rgba(30, 64, 175, 0.3)',
                        }
                      }}
                      onMouseEnter={() => setHoveredMember(member.name)}
                      onMouseLeave={() => setHoveredMember(null)}
                    >
                      <Avatar 
                        sx={{ 
                          width: expanded ? 60 : 48, 
                          height: expanded ? 60 : 48, 
                          bgcolor: '#3b82f6',
                          fontSize: expanded ? '1.2rem' : '1rem',
                          fontWeight: 'bold',
                          mb: expanded ? 0 : 1.5,
                          mr: expanded ? 2 : 0,
                          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                          border: '2px solid rgba(30, 64, 175, 0.1)',
                        }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      
                      <Box sx={{ 
                        textAlign: expanded ? 'left' : 'center',
                        flexGrow: 1,
                      }}>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ 
                            fontWeight: 600,
                            color: '#1e40af',
                            mb: 0.5
                          }}
                        >
                          {member.name}
                        </Typography>
                        
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: '#1e40af',
                            display: 'block',
                            mb: 1,
                            opacity: 0.8
                          }}
                        >
                          {member.role}
                        </Typography>
                        
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: expanded ? 'flex-start' : 'center',
                          mt: expanded ? 1 : 0
                        }}>
                          <Tooltip title="GitHub">
                            <IconButton 
                              size="small" 
                              component="a"
                              href={member.github}
                              target="_blank"
                              rel="noopener"
                              sx={{ 
                                color: '#1e40af',
                                opacity: 0.7,
                                '&:hover': { color: '#1e40af', opacity: 1 }
                              }}
                            >
                              <GitHubIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          
                          <Tooltip title="LinkedIn">
                            <IconButton 
                              size="small" 
                              component="a"
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener"
                              sx={{ 
                                color: '#1e40af',
                                opacity: 0.7,
                                '&:hover': { color: '#1e40af', opacity: 1 }
                              }}
                            >
                              <LinkedInIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          
                          <Tooltip title="Email">
                            <IconButton 
                              size="small" 
                              component="a"
                              href={`mailto:${member.email}`}
                              sx={{ 
                                color: '#1e40af',
                                opacity: 0.7,
                                '&:hover': { color: '#1e40af', opacity: 1 }
                              }}
                            >
                              <EmailIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          
                          <Tooltip title="Twitter">
                            <IconButton 
                              size="small" 
                              component="a"
                              href={member.twitter}
                              target="_blank"
                              rel="noopener"
                              sx={{ 
                                color: '#1e40af',
                                opacity: 0.7,
                                '&:hover': { color: '#1e40af', opacity: 1 }
                              }}
                            >
                              <TwitterIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                    </Paper>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Button 
                size="small"
                color="primary"
                onClick={handleExpandClick}
                startIcon={<ExpandLessIcon sx={{ 
                  transform: expanded ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.3s',
                  color: '#1e40af'
                }} />}
                sx={{ 
                  textTransform: 'none',
                  color: '#1e40af',
                  opacity: 0.8,
                  '&:hover': { color: '#1e40af', opacity: 1 }
                }}
              >
                {expanded ? 'Show Less' : 'Show More'}
              </Button>
            </Box>
          </Grid>
          
          {/* Info Section */}
          <Grid item xs={12} md={5}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" component="div" sx={{ 
                  fontWeight: 700,
                  background: 'linear-gradient(to right, #3b82f6, #60a5fa)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}>
                  <CodeIcon /> Resume Skill Extractor
                </Typography>
                <Typography variant="body2" sx={{ color: '#1e40af', maxWidth: 400, opacity: 0.8 }}>
                  An advanced tool powered by AI to extract and analyze skills from your resume, helping you stand out in the job market.
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <Button 
                    variant="outlined" 
                    startIcon={<MailOutlineIcon />}
                    sx={{ 
                      color: '#1e40af',
                      borderColor: 'rgba(30, 64, 175, 0.3)',
                      mr: 2,
                      '&:hover': {
                        borderColor: '#1e40af',
                        backgroundColor: 'rgba(90, 98, 124, 0.05)'
                      }
                    }}
                  >
                    Subscribe
                  </Button>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      bgcolor: '#3b82f6',
                      '&:hover': { bgcolor: '#2563eb' }
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
              
              <Divider sx={{ bgcolor: 'rgba(30, 64, 175, 0.1)', my: 3 }} />
              
              <Grid container spacing={2} sx={{ mb: 'auto' }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#1e40af' }}>
                    Resources
                  </Typography>
                  {footerLinks.map((link) => (
                    <Link 
                      key={link.title}
                      href={link.href}
                      color="inherit" 
                      underline="hover"
                      sx={{ 
                        display: 'block', 
                        mb: 1, 
                        color: '#1e40af',
                        opacity: 0.8,
                        '&:hover': { 
                          color: '#1e40af',
                          opacity: 1
                        }
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#1e40af' }}>
                    Contact
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#1e40af', mb: 1, opacity: 0.8 }}>
                    support@resumeskillextractor.com
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#1e40af', opacity: 0.8 }}>
                    +1 (555) 123-4567
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ bgcolor: 'rgba(30, 64, 175, 0.1)', mt: 4, mb: 3 }} />
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between',
          alignItems: { xs: 'center', sm: 'flex-end' },
          gap: 2
        }}>
          <Typography variant="body2" sx={{ color: '#1e40af' }}>
            &copy; {currentYear} Resume Skill Extractor. All rights reserved.
          </Typography>
          
          <Typography variant="body2" sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: '#1e40af',
            opacity: 0.8,
            gap: 0.5
          }}>
            Made with <FavoriteIcon sx={{ color: '#f43f5e', fontSize: 16 }} /> in India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}