function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      subTitle: "Shop now",
    },
  ];
  return (
    <div className="App">
      <div className="categories-container">
        {categories.map((cateogory, index) => (
          <div key={index} className="category-container">
            <div className="category-body-container">
              <h2>{cateogory.title}</h2>
              <p>{cateogory.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
