// Action Creator function and action Object 
import  {ADD_STUD, DEL_STUD} from '../constant/constant';

export const addStudent = (name,rollnumber,address,gender) =>{
      const action = {
            type:ADD_STUD,
            name:name,
            rollnumber:rollnumber,
            address:address,
            gender:gender
      }
      return action; 
}

export const deleteStudent =(id)=>{
      const action ={
            type: DEL_STUD,
            id:id
      }

      return action;

}