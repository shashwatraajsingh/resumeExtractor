import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AboutDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>About Resume Skill Extractor</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>
          Resume Skill Extractor is a tool that helps you quickly extract and visualize professional skills from your resume PDF. It uses keyword matching to identify skills and presents them in a categorized, downloadable format.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Built for job seekers, recruiters, and anyone who wants to analyze or optimize their resume skills.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
} 