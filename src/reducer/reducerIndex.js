import {ADD_STUD} from '../constant/constant';


const studentAdd = (action) => {
      return{
            name:action.name,
            rollnumber:action.rollnumber,
            address:action.address,
            id: Math.floor(Math.random() * 11)
      }
}


const studentsReducer = (state = [],action) =>{
      let students = null;
      switch(action.type){
            case ADD_STUD:
            students = [...state,studentAdd(action)];
            console.log("Student State ", students);
            return students;
            default:
            return state;
      }
}

export default studentsReducer;