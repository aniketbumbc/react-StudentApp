import {ADD_STUD,DEL_STUD} from '../constant/constant';


const studentAdd = (action) => {
      debugger;
      return{
            name:action.name,
            rollnumber:action.rollnumber,
            address:action.address,
            gender:action.gender,
            id: Math.floor(Math.random() * 11)
      }
}

const deleteStud = (state =[],id)=>{
     const students = state.filter(rem =>rem.id !== id); 
     console.log("delete studet ", students);
      return students;
}
const studentsReducer = (state = [],action) =>{
      let students = null;
      switch(action.type){
            case ADD_STUD:
            students = [...state,studentAdd(action)];
            console.log("Student State ", students);
            return students;
            case DEL_STUD:
            students = deleteStud(state,action.id);
            return students;
            default:
            return state;
      }
}

export default studentsReducer;