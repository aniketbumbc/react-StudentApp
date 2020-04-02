import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import  { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {addStudent} from '../actions/index';

class Registranation extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  name: '',
                  rollnumber: '',
                  address: '',
                  gender:''
            }
            this.addStudent = this.addStudent.bind(this);
      }


      addStudent(event) {
            event.preventDefault();
            this.state.name = this.refs.name.value;
            this.state.rollnumber = this.refs.number.value;
            this.state.address = this.refs.add.value;
            this.state.gender = event.target.gender.value;
            event.target.reset();
           this.props.addStudent(this.state.name, this.state.rollnumber, this.state.address,this.state.gender);
      }


      render() {
            return (

                  <div className="App">
                        <div className="title">
                              Student Registration Form
                        </div>
                        <div className="">
                              <div className="form-group">
                                    <Form onSubmit={this.addStudent}>
                                          <h2><span className="badge badge-secondary">Name</span></h2>
                                          <input className="form-control" placeholder="Name" ref="name" /> <br />

                                          <h2><span className="badge badge-secondary">Number</span></h2>
                                          <input className="form-control" placeholder="Number" ref="number" /> <br />

                                          <h2><span className="badge badge-secondary">Address</span></h2>
                                          <input className="form-control" placeholder="Add" ref="add" /> <br />
                                      
                                     
                                   <input className="form-check-input" type="radio" name="gender" value="Male"/>
                                     <label className="form-check-label" htmlFor="exampleRadios1"> Male  </label> <br/>
                                    


                                    <input className="form-check-input" type="radio" name="gender"  value="Female"/>
                                     <label className="form-check-label" htmlFor="exampleRadios2"> Female </label> <br/>       
                                                           
                                          
                        
                                          <Button type="submit" variant="primary" className="mr-2">Add  Student </Button>

                                    </Form>
                              </div>
                        </div>
                  </div>






            )
      }
}

function mapDispatchToProps(dispatch){
return bindActionCreators({addStudent},dispatch)
}

export default connect(null,mapDispatchToProps)(Registranation);