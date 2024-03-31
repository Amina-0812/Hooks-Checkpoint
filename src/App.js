import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import Movies from './Movies';

function App() {
  //l'initialisation for the movie's states and filtered ones
  const [movies, setMovies] = useState(Movies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showForm, setShowForm] = useState(false); //it's hidden at first (false) until the user clicks on it to show the form for adding a new movie
  const [formData, setFormData] = useState({
    id: movies.length + 1, //adding 1 to the movie id according to the length of the movies that already exist
    //these are objects with empty strings so the user can add his movie's infos
    name: '',
    description: '',
    rating: '',
    imageURL: '',
    genre: ''
  });

  //this function manage the changes putted in the movie form added
  const handleInputChange = (e) => {
    const { name, value } = e.target; //to get the name and value of the field that triggered the change
  //to update the form data state with the new input value
    setFormData({ ...formData, [name]: value });
  };


  //function to add a new movie to the collection.
  const addMovie = () => {
  //it checks if any of the form fields (name, description...) is empty, and if it's the case, it displays an alert message asking the user to fill out all fields before adding the movie
    if (!formData.name || !formData.description || !formData.rating || !formData.imageURL || !formData.genre) {  //the || (logic OR) operator checks if any of the form fields is empty
      //the ! operator is used to negate the value, so if any field is empty, the condition evaluates to true
      alert('Please make sure to fill out all fields before adding the movie.');
      return;
    }


    //creating a new movie object
    const newMovie = {
      id: movies.length + 1,
      ...formData //the spread operator (...) is used to copy all the properties from the formData object into the newMovie object
    };


    //adding the new movie to both the list of movies and the filtered list
    setMovies([...movies, newMovie]); //this one help us create a new array that contains all the movies from the original movies array, followed by the newMovie object at the end
    setFilteredMovies([...movies, newMovie]); //this line adds the new movie to the list of movies that have been filtered

    //the following code means that when the user finishes adding his new movie, this code hides the form they used and clears out all the spaces where they typed in the movie details, aka starting fresh for the next movie the user wanna add
    setShowForm(false);
    setFormData({
      name: '',
      description: '',
      rating: '',
      imageURL: '',
      genre: ''
    });
  };


  //this one helps to filter movies based on title or rating 
  const handleFilterChange = (filterType, value) => {
    //used to filter by titles
    if (filterType === 'title') {
      const filtered = movies.filter(movie => movie.name.includes(value)); //filter the movies array to include only movies whose names match the search terms
      setFilteredMovies(filtered); //show only the movies that match the search
     //use to filter by ratings
    } else if (filterType === 'rating') {
      const filtered = movies.filter(movie => movie.rating === value); //filter the movies based on their rating so it shows only the ones with the selected rating
      setFilteredMovies(filtered); //show only the movies that match the filter critere
    }
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f3f4f6', padding: '20px' }}>
      <h1 style={{ color: '#008080' }}>Explore Our Movie Collection</h1>
      {/*this component allows users to search for movies by title and filter them by rating */}
      <Filter onFilterChange={handleFilterChange} />
      {/*conditional rendering: If 'showForm' is true, show the form to add a new movie */}
      {showForm ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px auto', maxWidth: '400px' }}>
          {/*inputs to add the new movie wanted*/}
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} /><br />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} /><br />
          <input type="text" name="rating" placeholder="Rating" value={formData.rating} onChange={handleInputChange} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} /><br />
          <input type="text" name="imageURL" placeholder="Image URL" value={formData.imageURL} onChange={handleInputChange} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} /><br />
          <input type="text" name="genre" placeholder="Genre" value={formData.genre} onChange={handleInputChange} style={{ marginBottom: '10px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} /><br />
          <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={addMovie}>Add Your Movie</button>
        </div>
      ) : (
        //button to show the form for adding a new movie
        <button style={{ backgroundColor: '#008080', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => setShowForm(true)}>Add Movie</button>
      )}

      {/*display the list of movies */}
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
