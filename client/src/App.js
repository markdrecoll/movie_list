import { useState } from 'react'
function App() {
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/saveMovie', {
            method: "post",
            body: JSON.stringify({ title, releaseDate, rating, description }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setReleaseDate("");
            setTitle("");
            setRating("");
            setDescription("");
        }
    }

    const grabMovies = async () => {
      let result = await fetch(
        'http://localhost:5000/retrieveMovies', {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(result);
    }



    return (
        <>
            <h2>Write in movie information. </h2>
            <form action="">
                <input type="text" placeholder="Title" 
                value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Release Date" 
                value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                <input type="number" placeholder="Rating" 
                value={rating} onChange={(e) => setRating(e.target.value)} />
                <input type="text" placeholder="Description" 
                value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit" 
                onClick={handleOnSubmit}>Save Movie to Database</button>
            </form>

            <h2>Retrieve Saved Movies </h2>

            <button type="submit" 
                onClick={grabMovies}>See Saved Movies</button>

        </>
    );
}

export default App;