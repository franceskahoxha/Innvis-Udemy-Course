import "./category-item.scss";
function App() {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
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
