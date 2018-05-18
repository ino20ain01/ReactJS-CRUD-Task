import React, {Component} from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {

    render() {

        var { tasks } = this.props,
            elmTask = [];
        if (tasks) {
            elmTask = tasks.map((task, index) => {
                return <TaskItem key={ task.id + '-' + index} task={ task } index={ index } />
            });
        }
        return (
            <div className="row mt-2">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-responsive table-hover">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" name="filterName" />
                            </td>
                            <td>
                                <select name="filterStatus" id="" className="form-control">
                                    <option value={-1}>Tất cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        { elmTask }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;
