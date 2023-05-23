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
        {categories.map((cateogory, index) =>(
          return(
             <div className="category-container">
          <div className="category-body-container">
            <h2>HATS</h2>
            <p>Shop now</p>
          </div>
        </div>
          )
        )
          
      }
        
      </div>
    </div>
  );
}

export default App;
