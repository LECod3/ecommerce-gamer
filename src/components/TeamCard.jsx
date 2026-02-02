const TeamCard = ({ name, img, text }) => {
  return (
    <div className="team-card">
      <div className="hexagon">
        <img src={img} alt={name} />
      </div>
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );
};

export default TeamCard;