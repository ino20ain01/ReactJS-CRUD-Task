import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskForm from "./components/TaskForm";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";

class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>QUẢN LÝ CÔNG VIỆC</h1>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/* FORM */}
                        <TaskForm />
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button className="btn btn-primary">
                            <i className="fa fa-plus"></i> Thêm công việc
                        </button>

                        {/* SEARCH - SORT */}
                        <Filter />
                        {/* TASK LIST */}
                        <TaskList />
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
