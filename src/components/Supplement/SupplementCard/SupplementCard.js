import React from "react";
import { FaShareSquare, FaPen, FaTimes } from "react-icons/fa";

const SupplementCard = ({ supplement }) => {
  console.log(supplement);
  return (
    <div className="card-wrapper">
      <button>
        <FaShareSquare
          id="btn-icon"
          className="btn-share"
          title="Share idea with community"
        />
      </button>
      {/* <div className="text-items">
          <div className="title">
        </div> */}

      {supplement &&
        supplement.map((a) => {
          return (
            <div className="main-card">
          
                <div className="supplement">
                  <div className="title-supplement" key={a.id}>Supplement:</div>
                  {a.supplementName}
                </div>
                <div className="benefit">
                  <div className="title-benefit" key={a.id}>Benefit:</div>
                  {a.benefit}
                </div>
                <div className="description">
                  <div className="title-description" key={a.id}>Description:</div>
                  {a.description}
                </div>
                <div className="date">
                  <div className="title-date" key={a.id}>Date:</div>
                  {a.dateStamp}
                </div>
       
            </div>
          );
        })}
      {/* </div> */}
      <button>
        <FaPen id="btn-icon" className="edit" title="Edit" />
      </button>
      <button>
        <FaTimes id="btn-icon" className="delete" title="Delete" />
      </button>
    </div>
  );
};

export default SupplementCard;
