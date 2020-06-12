import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
const BackTo = ({move, nameback}) => {
  return (
    <div className="row d-flex bd-highlight mb-3">
                <div className="mr-auto p-2 bd-highligh">
                    <Link to={move} className="back-promotion"> 
                        <span className="letter-white"> 
                        <FontAwesomeIcon icon={faAngleDoubleLeft} color="white" size="1x" />
                        {" BACK TO"} </span>  
                        <span className="letter-pink"> {nameback} </span> 
                        <span className="letter-white"> LIST </span>
                    </Link>
                </div>
      </div>
  )
};
export default BackTo