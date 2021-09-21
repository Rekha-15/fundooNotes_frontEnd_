import  Axios from 'axios'
//require('dotenv').config()
Axios.defaults.baseURL = "http://localhost:5000"
 

const token = localStorage.getItem('token');
const header = {
    headers:{
    'token': token
  }};

class UserNoteServices {

     



    getAllNotes =  (allNoteDetails) => {
        return Axios.get('/AllNotes', allNoteDetails,header )
    }

}

export default  UserNoteServices ;