import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const StudentTable = (props) => {
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell >Apellido</StyledTableCell>
              <StyledTableCell >Edad</StyledTableCell>
              <StyledTableCell >Carrera</StyledTableCell>
              <StyledTableCell ></StyledTableCell>
              <StyledTableCell ></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.students.length > 0 ? (
                props.students.map(student => (
              <StyledTableRow key={student.id}>
                <StyledTableCell>{student.first_name}</StyledTableCell>
                <StyledTableCell>{student.last_name}</StyledTableCell>
                <StyledTableCell >{student.age}</StyledTableCell>
                <StyledTableCell >{student.career}</StyledTableCell>
                <StyledTableCell ><Button color="success" onClick={() => {props.editRow(student) }}>Editar</Button></StyledTableCell>
                <StyledTableCell ><Button color="error" onClick={() => props.deleteStudent(student.id)}>Eliminar</Button></StyledTableCell>
              </StyledTableRow>
            ))
        ):(
            <StyledTableRow>
                <StyledTableCell>No hay Estudiantes</StyledTableCell>
            </StyledTableRow>
        )}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default StudentTable