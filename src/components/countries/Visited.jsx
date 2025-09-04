const Visited = ({ country }) => {
  const { name } = country;
  return (
    <div>
      <p>{name.common}</p>
    </div>
  );
};

export default Visited;
