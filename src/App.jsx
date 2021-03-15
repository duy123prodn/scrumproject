import React, { Component } from 'react';
import Register from './compoments/Register';
import { Route, Switch, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './compoments/navbar';
import AdminCheckAccount from './compoments/adminCheckAccount';
import AdminCreateAccount from './compoments/adminCreateAccount'
import AccountList from './compoments/accountList'
import AccountDetail from './compoments/accountDetail'
import Login from './compoments/login'
import logout from './compoments/logout'
import jwtDecode from 'jwt-decode'
import NotFound from './compoments/notFound'
import HomePage from './compoments/homePage'
import SubmitForm from './compoments/submitForm'
import MySubmit from './compoments/mySubmit';
import SubmitListFaculty from './compoments/submitListFaculty';
import SubmitListAllFaculty from './compoments/submitListAllFaculty';
import SubmitListFGues from './compoments/submitListFGues';
import Notification from './compoments/notification';
import SubmitDetail from './compoments/submitDetail'
import ManageDeadline from './compoments/manageDeadline';
<<<<<<< HEAD
import BarChart from './compoments/barchart';
=======
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03

class App extends Component {
    state = {
        email: '',
        role: '',
        id: '',
        faculty: '',
<<<<<<< HEAD
        dateStart: '',
        dateEnd: ''
=======
        dateStart:'',
        dateEnd:''
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
    }

    componentDidMount() {
        try {
            const jwt = localStorage.getItem("token");
            const user = jwtDecode(jwt).user;
            console.log(jwtDecode(jwt))
            this.setState({ email: user.email });
            this.setState({ role: user.role });
            this.setState({ id: user._id })
            this.setState({ faculty: user.faculty })
            this.setState({ dateStart: user.dateStart })
            this.setState({ dateEnd: user.dateEnd })
        } catch (error) {
            console.log("token empty");
        }
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <NavBar email={this.state.email} role={this.state.role} dateStart={this.state.dateStart} dateEnd={this.state.dateEnd} />
=======
                <NavBar email={this.state.email} role={this.state.role} dateStart={this.state.dateStart} dateEnd={this.state.dateEnd}/>
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                <div className="container">
                    <Switch>
                        <Route path="/signup" component={Register} />
                        <Route path="/" exact component={HomePage} />
                        <Route path="/logout" component={logout} />
                        <Route path='/login' component={Login} />
                        <Route path='/NotFound' component={NotFound} />
                        {(this.state.role === "Admin") && (
                            <React.Fragment>
                                <Route path="/AdminCheck" component={AdminCheckAccount} />
                                <Route path="/AddminCreateAccount" component={AdminCreateAccount} />
                                <Route path="/AccountList" exact component={AccountList} />
                                <Route path="/DeadLine" component={ManageDeadline} />
                                <Route path="/AccountList/:id" component={AccountDetail} />
                            </React.Fragment>
                        )}
                        {(this.state.role === "Student") && (
                            <React.Fragment>
                                <Route path='/submitForm'>
<<<<<<< HEAD
                                    <SubmitForm email={this.state.email} dateEnd={this.state.dateEnd} dateStart={this.state.dateStart} />
=======
                                    <SubmitForm email={this.state.email} dateEnd={this.state.dateEnd} dateStart ={this.state.dateStart}/>
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                                </Route>
                                <Route path='/mySubmit'>
                                    <MySubmit id={this.state.id} />
                                </Route>
<<<<<<< HEAD
                                <Route path="/submitlistfaculty/:email/:id" component={SubmitDetail} />
=======
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                            </React.Fragment>
                        )}
                        {(this.state.role === "Coordinator") && (
                            <React.Fragment>
                                <Route path='/notification' exact>
                                    <Notification faculty={this.state.faculty} />
                                </Route>
                                <Route path='/submitlistfaculty' exact>
                                    <SubmitListFaculty faculty={this.state.faculty} />
                                </Route>
                                <Route path="/submitlistfaculty/:email/:id" component={SubmitDetail} />
                            </React.Fragment>
                        )}
<<<<<<< HEAD

=======
                        
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                        {(this.state.role === "Marketing Manager") && (
                            <React.Fragment>
                                <Route path='/submitlistfaculty' exact>
                                    <SubmitListAllFaculty faculty={this.state.faculty} />
                                </Route>
<<<<<<< HEAD
                                <Route path="/reportChart" component={BarChart} />
=======
                                <Route path="/submitlistfaculty/:email/:id" component={SubmitDetail} />
>>>>>>> a3253b7cce813639fa1ac5dce53c8565b9ca1f03
                            </React.Fragment>
                        )}
                        {(this.state.role === "Guest") && (
                            <React.Fragment>
                                <Route path='/submitlistfaculty' exact>
                                    <SubmitListFGues faculty={this.state.faculty} />
                                </Route>
                                <Route path="/submitlistfaculty/:email/:id" component={SubmitDetail} />
                            </React.Fragment>
                        )}
                        <Redirect to='/NotFound' />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;

