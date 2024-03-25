import React, { useState } from 'react';
import './AdminAddTheme.css'; // Assuming you have a CSS file for this component
import Sidebar from './Sidebar';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material'; // Import Box component for layout

function AdminAddTheme() {
  const [themeName, setThemeName] = useState('');
  const [themeAge, setThemeAge] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [themeList, setThemeList] = useState([]);

  const handleThemeNameChange = (event) => {
    setThemeName(event.target.value);
  };

  const handleThemeAgeChange = (event) => {
    setThemeAge(event.target.value);
  };

  const handleOrganizerNameChange = (event) => {
    setOrganizerName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTheme = { name: themeName, age: themeAge, organizer: organizerName };
    setThemeList([...themeList, newTheme]);
    // Clear form fields after submission
    setThemeName('');
    setThemeAge('');
    setOrganizerName('');
  };

  return (
    <div className="admin-add-theme">
      <Sidebar />
      <h4 className='admin-head'>Add Theme</h4>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="center"> {/* Centering the form */}
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}> {/* Limiting form width */}
              <TextField
                id="theme-name"
                label="Theme Name"
                variant="outlined"
                value={themeName}
                onChange={handleThemeNameChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="theme-age"
                label="Theme Age"
                variant="outlined"
                value={themeAge}
                onChange={handleThemeAgeChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="organizer-name"
                label="Organizer Name"
                variant="outlined"
                value={organizerName}
                onChange={handleOrganizerNameChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <Button type="submit" variant="contained" color="primary">
                Add Theme
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminAddTheme;
