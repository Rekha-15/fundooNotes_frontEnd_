import  Axios from 'axios'
//require('dotenv').config()
Axios.defaults.baseURL = "http://localhost:5000"
 

const token = localStorage.getItem('token');
const header = {
    headers:{
    'token': token
  }};

class UserNoteServices {

    static addNote =  (data) => {
       return Axios.post('/createNotes', data ,header )
   }

   static updateNotes =  (data) => {
    // console.log("ndsnds",noteDetails.title);
    // console.log("ndsnds",noteDetails.description);
    // const noteData = {
    //    title : noteDetails.title,
    //    description: noteDetails.description,
    // }
    console.log("jkjjk",data);
   return Axios.put(`/updateNote/${data.notesId}`, data ,header )
}

     static deleteForever =  (data) => {
    // console.log("ndsnds",noteDetails.title);
    // console.log("ndsnds",noteDetails.description);
    // const noteData = {
    //    title : "hsjhdksh",
    //    description: "jjshjah",
    // }
   // console.log("hddksdf",data.notesId[0]);
   return Axios.delete(`/deleteNote/${data.notesId}`,header )
}

static getNotes =  () => {
        return Axios.get('/AllNotes',header )
    }

    static forgotPassword =  (data) => {
        return Axios.post('/forgotPassword',data )
    }

    static resetPassword =  (data, token ) => {
        return Axios.post('/resetPassword', data, token )
    }

}

export default  UserNoteServices ;