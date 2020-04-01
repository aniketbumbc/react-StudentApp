import React, { Component } from 'react';
import { connect } from 'react-redux'; 
class DisplayStudent extends Component {
      renderStudent() {
            const { student } = this.props;
            return (
                  <table className="table">
                        <thead>
                              <tr>
                                    <th scope="col">#ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Address</th>
                              </tr>
                        </thead>
                        {
                              student.map(stud => {
                                    return (

                                          <tbody key={stud.id}>
                                                <tr key={stud.id}>
                                                      <th scope="row">{stud.id}</th>
                                                      <td>{stud.name}</td>
                                                      <td>{stud.rollnumber}</td>
                                                      <td>@{stud.address}</td>
                                                </tr>
                                          </tbody>

                                    )
                              })
                        }

                  </table>
            )
      }
      render() {
            let arrayLength = this.props.student.length;
            return (
                  <div className="title">
                        Students Infortmation      
      { arrayLength > 0 && this.renderStudent() }
      { arrayLength == 0 &&  <h1 className="text-center"> No data found </h1>}  
                  </div>

            )
      }
}
function mapStateToProps(state) {
      return {
            student: state
      }
}


export default connect(mapStateToProps)(DisplayStudent);