import "./category-item.scss";
function App() {
  const categories = [
    {
      id: 1,
      title: "hats",
      subTitle: "shop now",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      subTitle: "shop now",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      subTitle: "shop now",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      subTitle: "shop now",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      subTitle: "shop now",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <div className="App">
      <div className="categories-container">
        {categories.map(({ title, subTitle, id, imageUrl }) => (
          <div key={id} className="category-container">
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>{subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
