import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TaskForm from "./components/TaskForm";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.onGenerateData = this.onGenerateData.bind(this);
    }

    componentWillMount() {
        if (typeof(Storage) !== "undefined") {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    onGenerateData() {
        var tasks = [
            {
                id: Math.random() + '-' + Math.random(),
                name: 'Học React JS',
                status: true
            },
            {
                id: Math.random() + '-' + Math.random(),
                name: 'Học Node JS',
                status: true
            },
            {
                id: Math.random() + '-' + Math.random(),
                name: 'Học GraphQL',
                status: false
            }
        ];
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    render() {

        var { tasks } = this.state;

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
                        </button>&nbsp;
                        <button
                            className="btn btn-warning"
                            onClick={ this.onGenerateData }>
                            <i className="fa fa-hand-spock-o"></i> Generate Data
                        </button>

                        {/* SEARCH - SORT */}
                        <Filter />
                        {/* TASK LIST */}
                        <TaskList tasks={ tasks } />
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
