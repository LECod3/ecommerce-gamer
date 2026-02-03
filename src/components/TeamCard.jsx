const TeamCard = ({ name, img, text }) => {
  return (
    <div className="team-card">
      <div className="hex-outer">
        <div
          className="hex-image"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>

      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );
};

export default TeamCard;
