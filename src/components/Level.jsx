/* eslint-disable react/prop-types */
import "./Level.css";

function Level({ name, img }) {
  return (
    <div className="level">
      <div className="level__p">
        <p>{name}</p>
      </div>
      <img src={img} alt="Image" />
    </div>
  );
}

export default Level;
