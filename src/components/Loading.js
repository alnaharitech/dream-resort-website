import React from "react";
import LoadingPic from "../images/gif/loading-infinity.gif";
export default function Loading() {
    return (
        <div className="loading">
            <h4>تحميل بيانات الغرف ...</h4>
            <img src={LoadingPic} alt="" />
        </div>
    );
}
