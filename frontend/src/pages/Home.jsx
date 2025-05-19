import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UploadArea from '../components/UploadArea';
import ResultsDisplay from '../components/ResultsDisplay.jsx';
import AboutDialog from '../components/AboutDialog';
import InstructionsDialog from '../components/InstructionsDialog';
import axios from 'axios';
import Typography from '@mui/material/Typography';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skillCounts, setSkillCounts] = useState(null);
  const [error, setError] = useState('');

  const handleFileUpload = async (file) => {
    setLoading(true);
    setSkills([]);
    setSkillCounts(null);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('/api/extract-skills', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.data && response.data.skills) {
        setSkills(response.data.skills);
        // Optional: calculate skill frequency if backend returns duplicates
        const counts = {};
        response.data.skills.forEach(skill => {
          counts[skill] = (counts[skill] || 0) + 1;
        });
        setSkillCounts(counts);
      } else {
        setSkills([]);
        setSkillCounts(null);
      }
    } catch (err) {
      setError('Failed to extract skills. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseError = () => setError('');

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f1f5f9', display: 'flex', flexDirection: 'column' }}>
      <Navbar onAbout={() => setAboutOpen(true)} onInstructions={() => setInstructionsOpen(true)} />
      <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#1e3a8a' }}>
            Extract Skills from Your Resume
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Upload your PDF resume to instantly extract and visualize your professional skills.
          </Typography>
        </Box>
        <UploadArea onFileUpload={handleFileUpload} loading={loading} />
        {!loading && skills && (
          <ResultsDisplay skills={skills} skillCounts={skillCounts} />
        )}
      </Container>
      <Footer />
      <AboutDialog open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <InstructionsDialog open={instructionsOpen} onClose={() => setInstructionsOpen(false)} />
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
} 