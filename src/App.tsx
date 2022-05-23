import React from 'react';
import { Box } from './components/Box';
import CustomButton from './components/clear_button/CustomButton';
import Fab from '@mui/material/Fab';
import Delete from "@mui/icons-material/Delete";

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#fafafa',
};

const boxStyles: React.CSSProperties = {
  width: '100px',
  height: '100px',
  backgroundColor: '#f00',
};

export const App = () => {
  return (
    <div style={containerStyles}>
      <Box style={boxStyles}></Box>

      <CustomButton 
      radius="8px"
      height="auto"
      width="8vw"
      button_content="Clear"
      onClick={ () => console.log("Clear screen button clicked")}
      />
      <Fab 
      aria-label="edit"
      color="primary"
      />
    </div>
  );
};
