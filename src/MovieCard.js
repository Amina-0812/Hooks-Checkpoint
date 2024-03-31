import React from 'react';
import { Card } from 'react-bootstrap';

// the informations from the movie object
const MovieCard = ({ movie }) => {
  const { name, description, rating, image, genre } = movie;

  return (
    <div style={{
      width: '300px',
      margin: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    }}>
    
      <Card.Img // showing the movie's picture on the card
        variant="top"
        src={image}
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <Card.Body style={{ padding: '20px' }}>
        <Card.Title style={{ marginBottom: '10px', color: '#343a40', textAlign: 'center' }}>{name}</Card.Title>
        <Card.Text style={{ color: '#6c757d' }}>
          Description: {description}
        </Card.Text>
        <Card.Text style={{ color: '#6c757d' }}>
          Genre: {genre}
        </Card.Text>
        <Card.Text style={{ color: '#007bff' }}>
          Rating: {rating}
        </Card.Text>
      </Card.Body>
    </div>
  );
};

export default MovieCard;
