*, *:before, *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    /* background: linear-gradient(to right, #ea1d6f 0%, #eb466b 100%); */
    background-color: #A4EAFF;
    font-size: 12px;
  }
  
  body, button, input {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    letter-spacing: 1.4px;
  }
  
  .background {
    display: flex;
    min-height: 100vh;
  }
  
  .container {
    flex: 0 1 700px;
    margin: auto;
    padding: 10px;
  }
  
  .screen {
    position: relative;
    background: white;
    border-radius: 15px;
  }
  
  .screen:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
    z-index: -1;
  }
  
  .screen-header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background: #ed1c6f;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  
  .screen-header-left {
    margin-right: auto;
  }
  
  .screen-header-button {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border-radius: 8px;
    background: white;
  }
  
  .screen-header-button.close {
    background: blue;
  }
  
  .screen-header-button.maximize {
    background: #e8e925;
  }
  
  .screen-header-button.minimize {
    background: #74c54f;
  }
  
  .screen-header-right {
    display: flex;
  }
  
  .screen-header-ellipsis {
    width: 3px;
    height: 3px;
    margin-left: 2px;
    border-radius: 8px;
    background: white;
  }
  
  .screen-body {
    display: flex;
  }
  
  .screen-body-item {
    flex: 1;
    padding: 50px;
  }
  
  .screen-body-item.left {
    display: flex;
    flex-direction: column;
  }
  
  .app-title {
    display: flex;
    flex-direction: column;
    position: relative;
    color: #ea1d6f;
    font-size: 26px;
  }
  
  .app-title:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 25px;
    height: 4px;
    background: #ea1d6f;
  }
  
  .app-contact {
    margin-top: auto;
    font-size: 8px;
    color: #ed1c6f;
  }
  
  .app-form-group {
    margin-bottom: 15px;
  }
  
  .app-form-group.message {
    margin-top: 40px;
  }
  
  .app-form-group.buttons {
    margin-bottom: 0;
    text-align: right;
  }
  
  .app-form-control {
    width: 100%;
    padding: 10px 0;
    background: none;
    border: none;
    border-bottom: 1px solid #ed1c6f    ;
    color: #ddd;
    font-size: 14px;
    text-transform: uppercase;
    outline: none;
    transition: border-color .2s;
  }
  
  .app-form-control::placeholder {
    color: #ed1c6f;
  }
  
  .app-form-control:focus {
    border-bottom-color: #ed1c6f;
  }
  
  .app-form-button {
    background: none;
    border: none;
    color: #ea1d6f;
    font-size: 14px;
    cursor: pointer;
    outline: none;
  }
  
  .app-form-button:hover {
    color: #b9134f;
  }
  
  .credits {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: #ffa4bd;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    font-weight: normal;
  }
  
  .credits-link {
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
  
  .dribbble {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  
  @media screen and (max-width: 520px) {
    .screen-body {
      flex-direction: column;
    }
  
const eye = document.getElementById('eye1')

const anchor = document.getElementById("anchor")
const rekt = anchor.getBoundingClientRect();

const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height /2;

document.addEventListener('mousemove', (e)=>{

    const mouseX = e.clientX;
    const mouseY = e.clientY;

   

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    // console.log(angleDeg);

    
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;


})

function angle(cx,cy,ex,ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx) // Range
    const deg = rad * 180 / Math.PI;
    return deg;

}