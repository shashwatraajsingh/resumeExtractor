import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from 'file-saver';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function downloadCSV(skills) {
  const csv = skills.join(',');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  saveAs(blob, 'extracted_skills.csv');
}

function downloadJSON(skills) {
  const blob = new Blob([JSON.stringify(skills, null, 2)], { type: 'application/json' });
  saveAs(blob, 'extracted_skills.json');
}

export default function ResultsDisplay({ skills, skillCounts }) {
  if (!skills || skills.length === 0) {
    return (
      <Paper elevation={2} sx={{ p: 4, mt: 2, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          No skills found in the uploaded resume.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 2, mb: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Extracted Skills
      </Typography>
      <Stack direction="row" flexWrap="wrap" spacing={1} sx={{ mb: 3 }}>
        {skills.map((skill) => (
          <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />
        ))}
      </Stack>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <Button variant="contained" color="primary" startIcon={<DownloadIcon />} onClick={() => downloadCSV(skills)}>
          Download CSV
        </Button>
        <Button variant="outlined" color="primary" startIcon={<DownloadIcon />} onClick={() => downloadJSON(skills)}>
          Download JSON
        </Button>
      </Box>
      {skillCounts && Object.keys(skillCounts).length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
            Skill Frequency
          </Typography>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={Object.entries(skillCounts).map(([name, count]) => ({ name, count }))}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-30} textAnchor="end" height={60} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      )}
    </Paper>
  );
}