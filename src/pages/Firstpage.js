import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from 'reactstrap';
import { Container, Grid, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import TextField from '../components/TextField/TextField';
import DatePicker from '../components/DatePicker';
import { TextareaAutosize } from '@mui/base';
import axios from "axios"; 

    const INITIAL_VALUES = {
        info: {
            id: 1,
            date: "2000-10-10", 
            test: "Test string",
        },

    }

    const Firstpage = () => {
        return (
                    <Container maxWidth="md">
        <div className='container' style={{
            display: 'flex', justifyContent:
                'center', alignItems: 'center', marginTop: '50px'
        }}>
            <Formik initialValues={{ ...INITIAL_VALUES }} onSubmit={values => {
                console.log(values) 
            }}>
                {props => (
                    <Form>
                        
                        <Grid container spacing={3} width={'70vw'}>
                        <h3>Date</h3>
                        <Grid item xs={12}>
                                <DatePicker
                                        fullWidth
                                        name="info.date"
                                        label="Date"
                                    />
                                </Grid>

                                 

                        <h3>Date string</h3>
                        <Grid item xs={12}>
                                    <TextField
                                        name="info.test"
                                        label="Test String"
                                    />
                                </Grid>
                        
                        <h3>ID string</h3>
                        <Grid item xs={12}>
                                    <TextField
                                        name="info.id"
                                        label="id"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button color='primary' type="submit">Save</Button>
                                </Grid>
                            </Grid>
                        
                    </Form>
                )}
            </Formik>
        </div>
    </Container>
        )}
    

// function Firstpage() {

//     const [data, setData] = useState(""); 

//     const INITIAL_VALUES = {
//         info: {

//             id: "1",
//             date: "2021-10-10",
//             datestring: "2020-01-01",

//         }

//     }


//   return (
      
//     <div>

//         <Container maxWidth="md">
//         <div className='container' style={{
//             display: 'flex', justifyContent:
//                 'center', alignItems: 'center', marginTop: '50px'
//         }}>
//             <Formik initialValues={{ ...INITIAL_VALUES }} onSubmit={values => {
//                 console.log(values) 
//             }}>
//                 {props => (
//                     <Form>
                        
//                         <Grid container spacing={3} width={'70vw'}>
//                         <h3>Date date</h3>
//                         <Grid item xs={12}>
//                                 <DatePicker
//                                         fullWidth
//                                         name="info.date"
//                                         label="Date"
//                                     />
//                                 </Grid>

                                 

//                         <h3>Date string</h3>
//                         <Grid item xs={12}>
//                                     <TextField
//                                         name="info.datestring"
//                                         label="Date String"
//                                     />
//                                 </Grid>
                        
//                         <h3>ID string</h3>
//                         <Grid item xs={12}>
//                                     <TextField
//                                         name="info.id"
//                                         label="ID"
//                                     />
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <Button color='primary' type="submit">Save</Button>
//                                 </Grid>
//                             </Grid>
                        
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     </Container>

//     </div>
//   )
// }

export default Firstpage;