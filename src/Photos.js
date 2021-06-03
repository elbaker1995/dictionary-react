import React from "react";
import "./Photo.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            return (
              <div className="col-4 p-2" key={index}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    alt="sunset"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
