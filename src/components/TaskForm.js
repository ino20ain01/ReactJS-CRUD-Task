import React, {Component} from 'react';

class TaskForm extends Component {

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Thêm công việc
                        <span role="button" className="fa fa-times-circle pull-right"></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Name:</label>
                            <input type="text" className="form-control" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Trạng thái:</label>
                            <select name="status" id="" className="form-control">
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <div className="form-group pull-right">
                            <button type="submit" className="btn btn-success"><i className="fa fa-plus-circle"></i> Lưu</button>&nbsp;
                            <button type="reset" className="btn btn-danger"><i className="fa fa-remove"></i> Hủy</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
