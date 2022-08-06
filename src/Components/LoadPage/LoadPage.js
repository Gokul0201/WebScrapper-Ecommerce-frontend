import { faArrowRightToBracket, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './LoadPage.css'

const LoadPage = () => {
    return (
        <div className="container-fluid loadpageConFluid">
            <div className="container">
                <h1>Welcome to WEB SCRAPER</h1>
                <h1>Making web data <br/>extraction easy <br/>and accessible <br/>for everyone</h1>
            </div>
            <div className="loadpageBtns">
                <Link to="/login" className='btn btn-info mt-4'>Login <FontAwesomeIcon icon={faArrowRightToBracket} /></Link>
                <p className='ms-2 me-2'>or</p>
                <Link to="/register" className='btn btn-warning mt-4'>Register <FontAwesomeIcon icon={faArrowUpFromBracket} /></Link>
            </div>
        </div>
    )
}

export default LoadPage