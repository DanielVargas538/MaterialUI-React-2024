import React, {useState} from 'react';
import StudentTable from './tables/StudentTable';
import AddStudentForm from './forms/AddStudent';
import EditStudentForm from './forms/EditStudent';
import '@fontsource/roboto/700.css';

const App = () => {
    const studentsData = [
        { id: 1, first_name: 'Maria', last_name: 'Perez', age: 27, career: 'Ingeniería Civil' },
        { id: 2, first_name: 'Gabriel', last_name: 'Rodriguez', age: 25, career: 'Enseñanza de las Matematicas' },
        { id: 3, first_name: 'Pedro', last_name: 'Sanchez', age: 21, career: 'Ciencias de la computacion' },
        { id: 4, first_name: 'Hector', last_name: 'Murillo', age: 28, career: 'Odontologia' },
        { id: 5, first_name: 'Mario', last_name: 'Conejo', age: 19, career: 'Turismo' }
    ];
    const initialFormState = {id: null, first_name: '', last_name: '', age: '', career: ''};
    const [currentStudent, setCurrentStudent] = useState(initialFormState);

    const [students, setStudents] = useState(studentsData);
    const [editing, setEditing] = useState(false);

    const editRow = student => {
        setEditing(true);
        setCurrentStudent({id: student.id, first_name: student.first_name, last_name: student.last_name, age: student.age, career: student.career})
    };

    const addStudent = student => {
        student.id = students.length + 1;
        setStudents([...students, student])
    };

    const deleteStudent = id => {
        setStudents(students.filter(student => student.id !== id))
    };

    const updateStudent = (id, updatedStudent) => {
        setEditing(false)
        setStudents(students.map(student => (student.id === id ? updatedStudent : student)))
    }
    return (
        <div className="containerTemplate">
            <h1 style={{textAlign: 'center'}}>CRUD Estudiantes</h1>
                <div className="flex-largeTemplate">
                    {editing ? (
                        <div>
                            <h3>Editar Estudiante</h3>
                            <EditStudentForm
                                editing={editing}
                                setEditing={setEditing}
                                currentStudent={currentStudent}
                                updateStudent={updateStudent}
                            />
                        </div>
                    ) : (
                        <div>
                            <h3>Agregar Estudiante</h3>
                            <AddStudentForm addStudent={addStudent}/>
                        </div>
                    )}
                </div>
                <div className="flex-largeTemplate">
                    <h3 style={{textAlign: 'center'}}>Ver Estudiantes</h3>
                    <StudentTable students={students} editRow={editRow} deleteStudent={deleteStudent}/>
                </div>
        </div>
    );
}

export default App;
