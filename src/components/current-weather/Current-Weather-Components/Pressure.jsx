const Pressure = ({pressure}) => {
  return (
    <>
      <span className="parameter-label">Pressure</span>
      <span className="parameter-value">{pressure} hPa</span>
    </>
  );
}

export default Pressure;