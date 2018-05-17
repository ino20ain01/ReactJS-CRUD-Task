import React, {Component} from 'react';

class TaskItem extends Component {

    render() {
        return (
            <tr>
                <td>1</td>
                <td>
                    Học React JS
                </td>
                <td className="text-center">
                    <label className="label label-success">Kích hoạt</label>
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
