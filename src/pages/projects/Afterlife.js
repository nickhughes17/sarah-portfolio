import React from 'react';
import { Link } from 'react-router-dom';

const Afterlife = () => {
  return (
    <div>
      <div className="">afterlife</div>
      <Link className='link' to={`/`}>
        <div className="project-title">Back</div>
      </Link>
    </div>
  )
}

export default Afterlife