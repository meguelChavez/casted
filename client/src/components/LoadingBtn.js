import React from 'react'


const LoadingBtn = (props) => {
    return (
        <button className="btn btn-success ml-3" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>)
}

export default LoadingBtn;
