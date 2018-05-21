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
            tasks: [],
            isDisplayForm: false,
            taskEditing: null
        }
        this.onGenerateData = this.onGenerateData.bind(this);
        this.onCloseForm = this.onCloseForm.bind(this);
        this.onShowForm = this.onShowForm.bind(this);
    }

    componentWillMount() {
        if (typeof(Storage) !== "undefined") {
            var tasks = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : [];
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

    onToogleForm = () => {
        if (this.state.isDisplayForm && this.state.taskEditing) {
            this.setState({
                isDisplayForm: true,
                taskEditing: null
            });
        } else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing: null
            });
        }
    }

    onShowForm()  {
        this.setState({
            isDisplayForm: true
        });
    }

    onCloseForm()  {
        this.setState({
            isDisplayForm: false
        });
    }

    onSubmit = (params) => {
        if (params.name) {
            var { tasks } = this.state;
            if (params.id) {
                var index = this.findIndex(params.id);
                tasks[index] = params;
            } else {
                params.id = Math.random() + '-' + Math.random();
                tasks.push(params);
            }
            this.setState({
                tasks: tasks,
                // taskEditing: null
            });
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }
    }

    onUpdateStatus = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }
    }

    onDelete = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1)
            this.setState({
                tasks: tasks
            });
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        }
        this.onCloseForm();
    }

    onUpdate = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing
        });
        this.onShowForm();
    }

    findIndex = (id) => {
        var { tasks } = this.state,
            result = -1;
        tasks.forEach(function (task, index) {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {

        var { tasks, isDisplayForm,taskEditing } = this.state;
        var elmTaskForm = isDisplayForm ? <TaskForm
                                            onCloseForm={ this.onCloseForm }
                                            onSubmit={ this.onSubmit }
                                            task={ taskEditing }
                                            /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>QUẢN LÝ CÔNG VIỆC</h1>
                </div>
                <div className="row">
                    <div className={ elmTaskForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
                        {/* FORM */}
                        { elmTaskForm }
                    </div>
                    <div className={ elmTaskForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button
                            className="btn btn-primary"
                            onClick={ this.onToogleForm }
                        >
                            <i className="fa fa-plus"></i> Thêm công việc
                        </button>&nbsp;
                        {/*<button*/}
                            {/*className="btn btn-warning"*/}
                            {/*onClick={ this.onGenerateData }>*/}
                            {/*<i className="fa fa-hand-spock-o"></i> Generate Data*/}
                        {/*</button>*/}

                        {/* SEARCH - SORT */}
                        <Filter />
                        {/* TASK LIST */}
                        <TaskList
                            tasks={ tasks }
                            onDelete={ this.onDelete }
                            onUpdate={ this.onUpdate }
                            onUpdateStatus={ this.onUpdateStatus }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
