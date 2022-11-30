const FeelsLike = ({feel}) => {
  return (
    <>
        <span className="parameter-label">Feels like</span>
        <span className="parameter-value">
          {feel}°C
        </span>
    </>
  );
}

export default FeelsLike;