const Humidity = ({humidity}) => {
  return (
    <>
      <span className="parameter-label">Humidity</span>
      <span className="parameter-value">{humidity}</span>
    </>
  );
}

export default Humidity;