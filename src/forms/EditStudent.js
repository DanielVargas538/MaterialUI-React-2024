import React, {useState, useEffect} from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditStudentForm = props => {

    const [student, setStudent] = useState(props.currentStudent);
    
    useEffect(() => {
        setStudent(props.currentStudent);
    }, [props]);
    
    const handleInputChange = event => {
        const {name, value} = event.target;
        setStudent({...student, [name]: value});
    }

    return (
        <form onSubmit={event => {event.preventDefault(); props.updateStudent(student.id, student); }}>
        <FormControl>
           <TextField type="text" name="first_name" label="Nombre" variant="outlined" value={student.first_name} onChange={handleInputChange}/>
            <br/>
            <TextField type="text" name="last_name" label="Apellido" variant="filled" color="success"  value={student.last_name} onChange={handleInputChange}/>
            <br/>
            <TextField type="number" name="age" value={student.age} label="Edad" color="secondary" variant="outlined" onChange={handleInputChange}/>
            <br/>
            <TextField type="text" name="career" label="Carrera" variant="standard"  color="warning" value={student.career} onChange={handleInputChange}/>
            <br/>
            <Button variant="contained" color="success" type="submit">Actualizar Estudiante</Button>
            <br/>
            <Button variant="outlined" color="error" onClick={() => props.setEditing(false)} >Cancelar</Button>
            </FormControl>
        </form>
    )
}

export default EditStudentForm
