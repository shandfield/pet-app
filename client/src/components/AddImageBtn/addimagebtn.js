import React from "react";
import styled from "styled-components";

const AddStyle = styled.article`
text-align: center;
button {
  background-color: #316b84;
  color: #d2d6ce;
  margin: 20px auto;
  border-radius: 10px;
  font-family: 'Coming Soon', cursive;
  font-size: 18px;
  display: inline-block;
}
`



function AddImageBtn(props) {
    return (
      <AddStyle>
      <button className="image-btn" {...props} tabIndex="2">
        Add Image of Your Pet
      </button>
      </AddStyle>
    );
  }

  export default AddImageBtn;