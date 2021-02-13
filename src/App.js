import './App.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Checkbox, InputAdornment } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

function App() {
  return (
    <Container maxWidth="sm">
    <div className="formgroup">
      <TextField
        className="Textfield"
        id="outlined-basic" 
        label="Outlined" 
        variant="filled"
        InputProps={{
         startAdornment:(
           <InputAdornment position="start">
             <FormatListBulletedIcon />
           </InputAdornment>
         )
        }
        }
      />
      
        <Button className="Button" variant="contained" color="primary" startIcon={<AddCircleOutlineIcon/>}>Add</Button>
        </div>
      <div className="todo">
        <div>Todo List</div>
        <div><Checkbox></Checkbox>Test<Button  variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}></Button></div>
        <div><Checkbox></Checkbox>Write<Button variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}></Button></div>
        <div><Checkbox></Checkbox>Finalize<Button variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}></Button></div>
        <div><Checkbox></Checkbox>Book<Button variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}></Button></div>
        </div>   
    </Container>
    
  )
}

export default App;
