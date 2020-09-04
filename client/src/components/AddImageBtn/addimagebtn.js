import React from "react";




function AddImageBtn(props) {
    return (
      <button className="image-btn" {...props} role="button" tabIndex="2">
        Add Image of Your Pet!
      </button>
    );
  }

  export default AddImageBtn;