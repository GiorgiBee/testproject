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
  function onchange(id,checked){
    if(checked){
      document.getElementById(`todo_text_${id}`).style.textDecoration = "line-through";
    }
    else{
      document.getElementById(`todo_text_${id}`).style.textDecoration = "none";
    }   
  }
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
        <div className="todo_item"><div><Checkbox onChange={(e) => onchange(1,e.target.checked)}></Checkbox><p id="todo_text_1">Text</p></div><Button  variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}></Button></div>
        <div className="todo_item"><div><Checkbox onChange={(e) => onchange(2,e.target.checked)}></Checkbox><p id="todo_text_2">Write</p></div><Button variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}></Button></div>
        <div className="todo_item"><div><Checkbox onChange={(e) => onchange(3,e.target.checked)}></Checkbox><p id="todo_text_3">Finalize</p></div><Button variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}></Button></div>
        <div className="todo_item"><div><Checkbox onChange={(e) => onchange(4,e.target.checked)}></Checkbox><p id="todo_text_4">Work</p></div><Button variant="outlined" startIcon={<DeleteOutlineOutlinedIcon />}></Button></div>
        </div>   
    </Container>
    
  )
}

export default App;
