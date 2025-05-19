import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';

export default function InstructionsDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>How to Use</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemIcon><UploadFileIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Upload your resume as a PDF using drag-and-drop or the file picker." />
          </ListItem>
          <ListItem>
            <ListItemIcon><SearchIcon color="primary" /></ListItemIcon>
            <ListItemText primary="Wait for the system to process and extract your skills." />
          </ListItem>
          <ListItem>
            <ListItemIcon><DownloadIcon color="primary" /></ListItemIcon>
            <ListItemText primary="View your categorized skills and download them as CSV or JSON." />
          </ListItem>
        </List>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          You can upload another resume at any time to extract new results.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
} 