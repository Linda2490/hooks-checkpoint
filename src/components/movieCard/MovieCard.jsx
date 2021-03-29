import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './MovieCard.css'
function MovieCard({movies}) {
    return (
        <div className='movieCard'>
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={movies.posterUrl} className="MovieImg" />
             <Card.Body>
             <Card.Title>{movies.title}</Card.Title>
             <Card.Text>
              {movies.description}
             </Card.Text>
             <h2> {"⭐".repeat(movies.rate)} </h2>
             </Card.Body>
             <Card.Footer>
             <Button variant="primary" >Download</Button>
             </Card.Footer>
             </Card>
        </div>
    )
}

export default MovieCard
