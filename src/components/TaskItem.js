import React, {Component} from 'react';

class TaskItem extends Component {

    render() {

        var { task, index } = this.props;

        return (
            <tr>
                <td>{ ++index }</td>
                <td>
                    { task.name }
                </td>
                <td className="text-center">
                    <label
                        className={ task.status ? 'label label-success' : 'label label-danger' }>
                        { task.status ? 'Kích hoạt' : 'Ẩn' }
                    </label>
                </td>
                <td>
                    <button type="button" className="btn btn-primary btn-sm">
                        <i className="fa fa-edit"></i> Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger btn-sm">
                        <i className="fa fa-remove"></i> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
