import './App.css'
import React, { useState } from 'react';
import BasicSelect from './BasicSelect';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


const batch = ["OTHER","Y8","Y9","Y10","Y11","Y12","Y13","Y14","Y15","Y16","Y17","Y18","Y19","Y20","Y21","Y22","Y23"]
const gender = ["Any","Female","Male"]
const hall = ["ACES","CPWD","DAY","GH","HALL1","HALL2","HALL3","HALL4","HALL5","HALL6","HALL7","HALL8","HALL9","HALLX","HALLXI","HALL12","HALL13","HALL14","NRA","Not Available","RA","SBRA","TYPE1","TYPE1B","TYPE5","UNKN"]
const program = ["BS","BS-MBA","BS-MA","BS-MT","BT-M.Des","BT-MBA","BT-MS","BTech","DIIT","Exchng Prog.","MBA","MDes","MS-Research","MSC(2 yr)","MSc(int)","MSc-PhD(Dual)","MT(Dual)","MTech","MTech-PhD","PGPEX-VLM","PhD","Prep.","SURGE","eMasters"]
const dept = ["Areospace Engineering","Biological Science and Bioengineering","Chemical Engineering","Chemistry","Civil Engineering","Cognitive Science","Computer Science and Engineering","Dean Of Academic Affairs","Dean Of Research & Development","Dean Of Resource & Alumni","Design","Earth Science","Economics","Electrical Engineering","Environmental Engineering and Management","Humanities and Social Sciences","Industrial and Management Engineering","Laser Technology","Materials Science Programme","Materials Science and Engineering","Mathematics","Mathematics and Scientific Computing","Mathematics and Statistics","Mechanical Engineering","Nuclear Engineering and Technology Programme","Photonics Science and Engineering","Physics","Space Science and Astronomy","Statistics","Statistics and Data Science","Sustainable Energy Engineering"]
const bloodGroup = ["A+","A-","AB+","AB-","B+","B-","Not","Not Available","O+","O-"]
const wing = ["A","B","C","D"]



function App() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  document.body.style.backgroundColor = darkMode ? 'black' : 'rgb(239, 239, 239)';
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
<div className={`container ${darkMode ? 'dark-mode' : ''}`}>
<div style={{
  float: "right",
  height: "150px",
  width: "70px",
  zIndex: 2,
  display: "flex",
  flexDirection: "column", 
  justifyContent: 'space-between', 
  flexWrap:"wrap",
  alignItems: "center",
  marginRight:"20px",
  marginTop:"10px",
}}>
  <Button style={{ width: "25px", height: "58px", borderRadius: "50%" ,backgroundColor:"#e0e0e0"}} variant="contained" onClick={toggleDarkMode}>
    {darkMode ? <img src='images/sun.svg'></img> : <img src='images/moon.svg'></img>}
  </Button>
  <Button style={{ width: "25px", height: "58px", borderRadius: "50%" ,backgroundColor:"#e0e0e0"}} variant="contained" onClick={handleClickOpen}>
    <img src='images/question.svg'></img>
  </Button>
</div  >

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "75%",
        margin: "auto",
        marginTop: "10px",
        backgroundColor: darkMode ? "#1e1e1e" : "white",
        height: "400px",
        borderRadius:"6px",
        boxShadow:darkMode?"0px 5px 7px 2.5px #565656" : "0px 5px 7px 2.5px rgb(180,180,180)",
        justifyContent:"space-between",
        flexWrap:"wrap",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          width: "90%",
          margin: "auto",
          height: "400px",
          flexWrap:"wrap",
        }}>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <BasicSelect x="Batch" y={darkMode} drop={batch}></BasicSelect>
            <BasicSelect x="Gender" y={darkMode} drop={gender}></BasicSelect>
            <BasicSelect x="Hall" y={darkMode} drop={hall}></BasicSelect>
          </div>

          <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <BasicSelect x="Programme" y={darkMode} drop={program}></BasicSelect>
            <BasicSelect x="Department" y={darkMode} drop={dept}></BasicSelect>
            <BasicSelect x="Blood Group" y={darkMode} drop={bloodGroup}></BasicSelect>
          </div>

          <div style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            flexWrap:"wrap",

          }}>
            <BasicSelect x="Wing" y={darkMode} drop={wing}></BasicSelect>
            <TextField
              style={{
                width: "190px",
                margin: "24px",
              }}
              label="Hometown"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: darkMode?'#c2c2c2':"#c4c4c4", 
                },
              }}
              inputProps={{
                style: {
                  color: darkMode?'white':"#c2c2c2", 
                },
              }}
            />
          </div>
          <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <TextField
              style={{
                width: "100%",
              }}
              label="Enter Name,usename or roll number"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: darkMode?'#c2c2c2':"#c2c2c2", 
                },
              }}
              inputProps={{
                style: {
                  color: darkMode?'white':"#c2c2c2",
                },
              }}
              
            />
          </div>
        </div>
      </div>

      <div style={{
        display:"flex",
        backgroundColor:darkMode?"#1e1e1e":"white",
        margin:"auto",
        marginTop:"30px",
        color:darkMode?"white":"black",
        width:"110px",
        height:"36px",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"5px",
      }}>0 results found</div>


    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle style={{ backgroundColor: '#1e1e1e', color: 'white' }}></DialogTitle>
        <DialogContent style={{ backgroundColor: '#1e1e1e', color: 'white', height: '300px', display: 'flex', }}>
          <div>  
            <h2>Setting a custom DP</h2>
             <p>You can customise the image shown here by placing a custom image in your iitk webhome folder called dp.jpg/dp.png such that going to http://home.iitk.ac.in/~yourusername/dp opens up that particular picture.</p>
             <h2> How do I update the data shown here?</h2>         
             <p>The data here is scraped from the Office Automation Portal. The data there can be updated via the Login Based Services - Student Profile - PI form . If you have had a branch change, please go to the ID Cell and update your ID Card to update your branch.</p>
              <p>The changes if any will be reflected in about a week.</p>
              <h2>I can't see students' pictures/I can't access student data.</h2>
              <p>Access to student data is restricted to those currently on campus or connecting via VPN. Please visit the website once via either method so that the data can be stored locally. After this, you will be able to access student data from anywhere (as long as you don't wipe your cache or local files.)</p>
         </div>
        </DialogContent>
        <DialogActions style={{backgroundColor:"#1e1e1e"}}>
          <Button onClick={handleClose} style={{color:"white"}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      </div>

    </>
  )
}

export default App;
