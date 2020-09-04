import React from "react";
import styled from "styled-components";

const AddStyle = styled.article`

button {
  background-color: #316b84;
  color: #d2d6ce;
  margin: 20px;
  border-radius: 10px;
}
`



function AddImageBtn(props) {
    return (
      <AddStyle>
      <button className="image-btn" {...props} tabIndex="2">
        Add Image of Your Pet!
      </button>
      </AddStyle>
    );
  }

  export default AddImageBtn;