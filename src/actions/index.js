// Action Creator function and action Object 
import  {ADD_STUD} from '../constant/constant';

export const addStudent = (name,rollnumber,address) =>{
      const action = {
            type:ADD_STUD,
            name:name,
            rollnumber:rollnumber,
            address:address
      }
      console.log("action student" , action);
      return action; 
}