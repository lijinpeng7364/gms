import React, { Component } from 'react';

class NoMatch extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center m-t-lg">
                            <h1>
                                Illegal address
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NoMatch