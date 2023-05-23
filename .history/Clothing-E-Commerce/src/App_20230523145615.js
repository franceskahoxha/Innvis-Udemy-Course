import "./category-item.scss";
function App() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      subTitle: "Shop now",
    },
    {
      id: 2,
      title: "Jackets",
      subTitle: "Shop now",
    },
    {
      id: 3,
      title: "Sneakers",
      subTitle: "Shop now",
    },
    {
      id: 4,
      title: "Womens",
      subTitle: "Shop now",
    },
    {
      id: 5,
      title: "Mens",
      subTitle: "Shop now",
    },
  ];
  return (
    <div className="App">
      <div className="categories-container">
        {categories.map((cateogory, index) => (
          <div key={index} className="category-container">
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{cateogory.title}</h2>
              <p>{cateogory.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
