import React, {Component} from 'react';

class Search extends Component {

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button>
                    </span>
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                </div>
            </div>
        );
    }
}

export default Search;
