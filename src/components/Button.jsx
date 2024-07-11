import PropTypes from 'prop-types';

function Button({text, Border_radius, Type}) {
  return (
    <div>
      <button type={Type} style={{borderRadius:Border_radius, padding:"10px", height:"64%", marginBottom:"8px",fontSize:"1rem", fontWeight:"bolder", background:"black", color:"white"}}> {text} </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string, 
  Border_radius: PropTypes.number, 
  Type: PropTypes.string
};

export default Button
