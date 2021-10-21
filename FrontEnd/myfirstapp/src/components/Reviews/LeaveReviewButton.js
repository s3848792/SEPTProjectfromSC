import React from 'react'
import {Link} from "react-router-dom";

const LeaveReviewButton=(bookID) => {
    const newLink = "/leaveReview/" + bookID
    return (
        <React.Fragment>
            <Link to={newLink}
                  className="btn btn-lg btn-info">
                Leave a Review
            </Link>
        </React.Fragment>
    )
};
export default LeaveReviewButton;