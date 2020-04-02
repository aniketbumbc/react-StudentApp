import { ADD_STUD, DEL_STUD } from '../constant/constant';
import { bake_cookie, read_cookie } from 'sfcookies';


const studentAdd = (action) => {
      debugger;
      return {
            name: action.name,
            rollnumber: action.rollnumber,
            address: action.address,
            gender: action.gender,
            id: Math.floor(Math.random() * 11)
      }
}

const deleteStud = (state = [], id) => {
      const students = state.filter(rem => rem.id !== id);
      return students;
}
const studentsReducer = (state = [], action) => {
      let students = null;
      state =  read_cookie('students');
      switch (action.type) {
            case ADD_STUD:
                  students = [...state, studentAdd(action)];
                  bake_cookie('students',students);
                  return students;
            case DEL_STUD:
                  students = deleteStud(state, action.id);
                  bake_cookie('students',students);
                  return students;
            default:
                  return state;
      }
}

export default studentsReducer;