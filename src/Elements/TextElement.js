import React from 'react'

const textElementStyle = {
    position: 'relative',
    width: 'max-content',
    // height: '50px', 
    border: '1px solid #000',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
  };
  
  const buttonContainerBaseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height:"30px",
    // width:"30px",
  };
  
  const topLeftButtonContainer = {
    ...buttonContainerBaseStyle,
    position: 'absolute',
    top: -25,
    left: -25,
  };
  
  const topRightButtonContainer = {
    ...buttonContainerBaseStyle,
    position: 'absolute',
    top: -25,
    right: -25,
  };
  
  const bottomLeftButtonContainer = {
    ...buttonContainerBaseStyle,
    position: 'absolute',
    bottom: -25,
    left: -25,
  };
  
  const bottomRightButtonContainer = {
    ...buttonContainerBaseStyle,
    position: 'absolute',
    bottom: -25,
    right: -25,
  };
  
  const buttonStyle = {
    height:"30px",
    width:"30px",
    border: '1px solid #000',
    borderRadius:"50%",
    overflow:"hidden"
  };

const TextElement = () => {
  return (
    <div style={textElementStyle}>
      TextElement
      <div style={topLeftButtonContainer}>
        <button style={buttonStyle}><i className="material-icons">delete</i></button>
      </div>
      <div style={topRightButtonContainer}>
        <button style={buttonStyle}><i className="material-icons">rotate</i></button>
      </div>
      <div style={bottomLeftButtonContainer}>
        <button style={buttonStyle}><i className="material-icons">layers</i></button>
      </div>
      <div style={bottomRightButtonContainer}>
        <button style={buttonStyle}><i className="material-icons">aspect_ratio</i></button>
      </div>
    </div>
  )
}

export default TextElement