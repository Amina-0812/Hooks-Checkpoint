import hulk from './hulk.jpg';
import spider from './spider.jpg';
import iron from './iron.jpg';
import doc from './Doc.jpg';
import groot from './groot.jpg';
import avengers from './avengers.jpg';

//in this cons movies, we are going to store all the infos about our movies
const Movies = [{
    id: 1,
    name : "The Incredible Hulk",
    genre : "Action/Adventure",
    description: "A scientist transforms into a powerful green monster after being exposed to gamma radiation.",
    rating: "3/5",
    image: hulk,
},
{
    id : 2,
    name: "Spider-man",
    genre: "Superhero/Action",
    description : "A high school student gains spider-like abilities and becomes a superhero to protect his city from villains.",
    rating: "5/5",
    image : spider,
},
{
    id: 3,
    name: "Iron man",
    genre :"Superhero/Sci-Fi",
    description:"A billionaire industrialist creates a high-tech suit of armor to fight against threats to humanity.",
    rating: "4/5",
    image:iron,
},
{
    id : 4,
    name: "Doctor Strange",
    genre :"Fantasy/Adventure",
    description:"A skilled surgeon discovers the mystical arts and becomes a powerful sorcerer to defend the world against dark forces.",
    rating: "2/5",
    image:doc,
},
{
    id: 5,
    name: "I am Groot",
    genre :"Sci-Fi/Adventure",
    description:"A sentient tree-like creature with a limited vocabulary but a big heart, who joins a group of intergalactic misfits on a mission to save the universe.",
    rating: "1/5",
    image:groot,
},
{
    id : 6,
    name :"The Avengers",
    genre :"Superhero/Action",
    description: "Earth's mightiest heroes come together to fight against a common enemy and save the world from destruction.",
    rating: "4/5",
    image : avengers,
}];

export default Movies;
