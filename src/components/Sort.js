import React, {Component} from 'react';

class Sort extends Component {

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp xếp <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <a role="button">
                                <i className="fa fa-sort-alpha-asc"></i> Tên A-Z
                            </a>
                        </li>
                        <li>
                            <a role="button">
                                <i className="fa fa-sort-alpha-desc"></i> Tên Z-A
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                            <a role="button">
                                Trạng thái kích hoạt
                            </a>
                        </li>
                        <li>
                            <a role="button">
                                Trạng thái ẩn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
