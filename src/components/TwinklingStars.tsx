const TwinklingStars = () => {
    const numberOfStars = 50;

    const renderStars = () => {
      const stars = [];
  
      for (let i = 0; i < numberOfStars; i++) {
        stars.push(<div key={i} className="star" style={randomStarPosition()} />);
      }
  
      return stars;
    };

    const randomStarPosition = () => {
      const left = Math.random() * 100 + '%'; {/* stars will take up full width */}
      const top = Math.random() * 35 + '%';   {/* stars will take up 35% height */}
      const animationDelay = Math.random() * 5 + 's';
  
      return { left, top, animationDelay };
    };
  
    return (
      <div className="twinkling-stars">
        {renderStars()}
      </div>
    );
}

export default TwinklingStars