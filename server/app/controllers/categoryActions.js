// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Declare the actions
  
  /* Here you code */


  const browse = (req, res) => {
    if (req.query.q != null) {
      const filteredCategory = categories.filter((category) =>
        category.name.includes(req.query.q)
      );
  
      res.json(filteredCategory);
    } else {
      res.json(categories);
    }
  };
  
  
  const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
  
    const category = categories.find((p) => p.id === parsedId);
  
    if (category != null) {
      res.json(category);
    } else {
      res.sendStatus(404);
    }
  };
  
  // Export them to import them somewhere else
  
  module.exports = { browse, read };