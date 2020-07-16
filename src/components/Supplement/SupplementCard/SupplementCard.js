import React from 'react'
import { FaShareSquare, FaPen, FaTimes } from "react-icons/fa";


const SupplementCard = () => {
    return(
        <div className="card-wrapper">
        <button>
          <FaShareSquare
            id="btn-icon"
            className="btn-share"
            title="Share idea with community"
          />
        </button>
        <div className="main-card">
          <div className="text-items">
            <div className="title">
              <div className="title-supplement">Supplement:</div>
              <div className="title-benefit">Benefit:</div>
              <div className="title-description">Description:</div>
              <div className="title-date">Date:</div>
            </div>

            <div className="input">
              <div className="supplement">Tart Cherry</div>
              <div className="benefit">Sleep</div>
              <div className="description">Will help you sleep at night</div>
              <div className="date">7-15-20</div>
            </div>
          </div>
        </div>
        <button>
          <FaPen id="btn-icon" className="edit" title="Edit" />
        </button>
        <button>
          <FaTimes id="btn-icon" className="delete" title="Delete" />
        </button>
      </div>

    )
}

export default SupplementCard