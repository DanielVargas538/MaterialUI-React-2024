import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddStudents = (props) => {
    const initialFormState = {id: null, first_name: '', last_name: '', age: '', career: ''};
    const [student, setStudent] = useState(initialFormState);

    const handleInputChange = event => {
        console.log(event.target);
        const {name, value} = event.target;
        setStudent({...student, [name]: value})
    };
    return (
        <form onSubmit={e => { 
                console.log("hice")
                e.preventDefault(); 
                if (!student.first_name || !student.last_name || !student.age || !student.career) return; 
                props.addStudent(student)
                setStudent(initialFormState)
        }}>
        <FormControl>
            <TextField type="text" name="first_name" label="Nombre" variant="outlined" value={student.first_name} onChange={handleInputChange}/>
            <br/>
            <TextField type="text" name="last_name" label="Apellido" variant="filled" color="success"  value={student.last_name} onChange={handleInputChange}/>
            <br/>
            <TextField type="number" name="age" value={student.age} label="Edad" color="secondary" variant="outlined" onChange={handleInputChange}/>
            <br/>
            <TextField type="text" name="career" label="Carrera" variant="standard"  color="warning" value={student.career} onChange={handleInputChange}/>
            <br/>
            <Button variant="contained" type="submit">Agregar nuevo usuario</Button>
        </FormControl>
        </form>
    )
};

export default AddStudents
