import React, { useState } from 'react';
import './AdminAddFood.css'; // Assuming you have a CSS file for this component
import Sidebar from './Sidebar';
import { Card, CardContent, TextField, Button, Box } from '@mui/material'; // Import Box component for layout

function AdminAddFood() {
  const [foodName, setFoodName] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };

  const handleFoodDescriptionChange = (event) => {
    setFoodDescription(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your submission logic here
    console.log("Food Name:", foodName);
    console.log("Food Description:", foodDescription);
    console.log("Image URL:", imageUrl);
    // Clear form fields after submission
    setFoodName('');
    setFoodDescription('');
    setImageUrl('');
  };

  return (
    <div className="admin-add-food">
      <Sidebar />
      <h4 className='admin-head'>Add Food</h4>
      <Card>
        <CardContent>
          <Box display="flex" justifyContent="center">
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
              <TextField
                id="food-name"
                label="Food Name"
                variant="outlined"
                value={foodName}
                onChange={handleFoodNameChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="food-description"
                label="Food Description"
                variant="outlined"
                value={foodDescription}
                onChange={handleFoodDescriptionChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <TextField
                id="image-url"
                label="Image URL"
                variant="outlined"
                value={imageUrl}
                onChange={handleImageUrlChange}
                fullWidth
                required
                style={{ marginBottom: '10px' }}
              />
              <Button type="submit" variant="contained" color="primary">
                Add Food
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminAddFood;
