
const Day = () => {
  const currentDate = new Date();

  function MyComponent() {
    const currentDate = new Date();
  }

  return(
  <div>
    <p className="today">{currentDate.toLocaleDateString()}</p>
  </div>
  )
};

export default Day;