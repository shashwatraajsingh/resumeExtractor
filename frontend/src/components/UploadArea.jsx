// import React from 'react';
// import { useDropzone } from 'react-dropzone';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

// export default function UploadArea({ onFileUpload, loading }) {
//   const onDrop = React.useCallback((acceptedFiles) => {
//     if (acceptedFiles && acceptedFiles.length > 0) {
//       onFileUpload(acceptedFiles[0]);
//     }
//   }, [onFileUpload]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: { 'application/pdf': ['.pdf'] },
//     multiple: false,
//   });

//   return (
//     <Paper elevation={3} sx={{
//       p: 4, mt: 4, mb: 2, textAlign: 'center',
//       border: '2px dashed #1e3a8a',
//       bgcolor: '#f8fafc',
//       transition: 'border-color 0.2s',
//       borderColor: isDragActive ? '#2563eb' : '#1e3a8a',
//       minHeight: 220,
//       display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
//     }} {...getRootProps()}>
//       <input {...getInputProps()} />
//       {loading ? (
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           <CircularProgress color="primary" sx={{ mb: 2 }} />
//           <Typography variant="body1">Processing your resume...</Typography>
//         </Box>
//       ) : (
//         <>
//           <CloudUploadIcon sx={{ fontSize: 48, color: '#2563eb', mb: 1 }} />
//           <Typography variant="h6" sx={{ mb: 1 }}>
//             Drag & drop your PDF resume here
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//             or click to select a file
//           </Typography>
//           <Button variant="contained" color="primary" component="span" sx={{ mt: 1 }}>
//             Choose PDF File
//           </Button>
//         </>
//       )}
//     </Paper>
//   );
// } 

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { 
  Paper, 
  Typography, 
  Button, 
  CircularProgress, 
  Box,
  Fade,
  LinearProgress,
  Chip,
  Tooltip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UploadArea({ onFileUpload, loading, darkMode = false }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [fileError, setFileError] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Simulate progress when loading
  React.useEffect(() => {
    if (loading && selectedFile) {
      const timer = setInterval(() => {
        setUploadProgress((oldProgress) => {
          const newProgress = Math.min(oldProgress + Math.random() * 10, 95);
          return newProgress;
        });
      }, 500);
      
      return () => {
        clearInterval(timer);
        // Reset progress when loading is complete
        if (!loading) {
          setTimeout(() => setUploadProgress(100), 300);
          setTimeout(() => setUploadProgress(0), 1000);
        }
      };
    }
  }, [loading, selectedFile]);

  // Handle file drop
  const onDrop = React.useCallback((acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      setFileError('Please upload a valid PDF file.');
      setSelectedFile(null);
      return;
    }
    
    setFileError(null);
    
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      onFileUpload(file);
      setUploadProgress(0);
    }
  }, [onFileUpload]);

  // Clear selected file
  const handleClearFile = (e) => {
    e.stopPropagation();
    setSelectedFile(null);
    setFileError(null);
    setUploadProgress(0);
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
    disabled: loading,
  });

  const getBorderColor = () => {
    if (isDragReject || fileError) return theme.palette.error.main;
    if (isDragActive) return theme.palette.primary.main;
    if (selectedFile) return theme.palette.success.main;
    return darkMode ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)';
  };

  return (
    <Paper 
      elevation={selectedFile || isDragActive ? 6 : 2} 
      sx={{
        p: { xs: 3, md: 4 }, 
        mt: 4, 
        mb: 2,
        textAlign: 'center',
        border: '2px dashed',
        borderColor: getBorderColor(),
        bgcolor: darkMode 
          ? 'rgba(15, 23, 42, 0.7)' 
          : 'rgba(248, 250, 252, 0.7)',
        transition: 'all 0.3s ease',
        borderRadius: '16px',
        backdropFilter: 'blur(8px)',
        minHeight: { xs: 180, sm: 220 },
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          boxShadow: selectedFile ? 6 : 4,
          transform: isDragActive ? 'scale(1.02)' : 'scale(1)',
        },
      }} 
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      
      {/* Background pattern */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `radial-gradient(circle, ${theme.palette.primary.main} 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      
      {/* Progress bar for uploads */}
      {(loading || uploadProgress > 0) && (
        <LinearProgress 
          variant="determinate" 
          value={uploadProgress} 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            height: 4,
            borderTopRightRadius: '16px',
            borderTopLeftRadius: '16px',
          }} 
        />
      )}
      
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {loading ? (
          <Fade in={loading}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              py: 2,
            }}>
              <CircularProgress 
                color="primary" 
                size={50}
                thickness={4}
                sx={{ 
                  mb: 3,
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15))'
                }} 
              />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 500, 
                  mb: 1,
                  color: darkMode ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)'
                }}
              >
                Processing your resume...
              </Typography>
              <Typography 
                variant="body2" 
                color={darkMode ? 'rgba(255, 255, 255, 0.6)' : 'text.secondary'}
              >
                Extracting skills and qualifications
              </Typography>
            </Box>
          </Fade>
        ) : fileError ? (
          <Box>
            <ErrorOutlineIcon sx={{ 
              fontSize: 48, 
              color: 'error.main', 
              mb: 2,
              filter: 'drop-shadow(0px 2px 5px rgba(211, 47, 47, 0.3))'
            }} />
            <Typography variant="h6" color="error" sx={{ mb: 1 }}>
              Upload Error
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {fileError}
            </Typography>
            <Button 
              variant="outlined" 
              color="primary" 
              component="span"
              startIcon={<FileUploadOutlinedIcon />}
              sx={{ 
                mt: 1,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                textTransform: 'none',
                px: 3
              }}
            >
              Try Again
            </Button>
          </Box>
        ) : selectedFile ? (
          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}>
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2
            }}>
              <InsertDriveFileOutlinedIcon sx={{ 
                fontSize: 32, 
                color: 'primary.main',
                mr: 1
              }} />
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 500,
                  color: darkMode ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)'
                }}
              >
                <CheckCircleOutlineIcon 
                  sx={{ 
                    fontSize: 16, 
                    color: 'success.main', 
                    verticalAlign: 'middle',
                    mr: 0.5
                  }} 
                />
                File Selected
              </Typography>
            </Box>
            
            <Chip
              label={selectedFile.name}
              variant="outlined"
              color="primary"
              sx={{ 
                maxWidth: '90%', 
                overflow: 'hidden',
                mb: 2,
                px: 1,
                height: 32
              }}
              deleteIcon={
                <Tooltip title="Remove file">
                  <DeleteOutlineIcon />
                </Tooltip>
              }
              onDelete={handleClearFile}
            />
            
            <Typography 
              variant="caption" 
              color={darkMode ? 'rgba(255, 255, 255, 0.6)' : 'text.secondary'} 
              sx={{ mb: 1 }}
            >
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </Typography>
            
            <Button 
              variant="outlined" 
              color="primary" 
              startIcon={<CloudUploadIcon />}
              sx={{ 
                mt: 1,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                textTransform: 'none'
              }}
            >
              Upload Different File
            </Button>
          </Box>
        ) : (
          <>
            <Box
              sx={{
                mb: 3,
                height: 80,
                width: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: darkMode 
                  ? 'rgba(59, 130, 246, 0.1)' 
                  : 'rgba(59, 130, 246, 0.05)',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                transform: isDragActive ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <CloudUploadIcon 
                sx={{ 
                  fontSize: 40, 
                  color: isDragActive ? 'primary.main' : darkMode ? '#3b82f6' : '#2563eb',
                  filter: 'drop-shadow(0px 2px 5px rgba(59, 130, 246, 0.3))',
                }} 
              />
            </Box>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 1, 
                fontWeight: 600,
                color: darkMode ? 'rgba(255, 255, 255, 0.87)' : 'rgba(0, 0, 0, 0.87)'
              }}
            >
              {isDragActive 
                ? "Drop your resume here" 
                : "Upload your resume"}
            </Typography>
            <Typography 
              variant="body2" 
              color={darkMode ? 'rgba(255, 255, 255, 0.6)' : 'text.secondary'} 
              sx={{ mb: 2, maxWidth: "80%" }}
            >
              Drag & drop your PDF resume, or click to browse your files
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              component="span" 
              disableElevation
              startIcon={<FileUploadOutlinedIcon />}
              sx={{ 
                mt: 1,
                px: 3,
                py: 1,
                borderRadius: '8px',
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(90deg, #1e40af 0%, #3b82f6 100%)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              Choose PDF File
            </Button>
            <Typography 
              variant="caption" 
              color={darkMode ? 'rgba(255, 255, 255, 0.5)' : 'text.secondary'} 
              sx={{ mt: 2 }}
            >
              Supported format: PDF (Max 10MB)
            </Typography>
          </>
        )}
      </Box>
    </Paper>
  );
}