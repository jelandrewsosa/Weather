const Wind = ({wind}) => {
  return (
    <>
      <span className="parameter-label">Wind</span>
      <span className="parameter-value">{wind} km/h</span>
    </>
  );
}

export default Wind;