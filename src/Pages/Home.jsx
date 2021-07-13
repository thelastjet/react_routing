import logo from '../images/logo.png';

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <p id="homeParagraph">
                Studio Ghibli Inc. was founded in 1985 by animators and directors Miyazaki 
                Hayao and Takahata Isao and producer Suzuki Toshio.
                It is a Japanese animation film studio headquartered in Koganei, Tokyo. 
                The studio is best known for its animated feature films, and has also produced
                several short films, television commercials,
                and one television film.
            </p>
            <p id="homeParagraph">Click on the links to see the films made by Studio Ghibli, the people behind the
             work, vehicles in the movies, and locations of the movies.
            </p>
            
            <img src={logo} alt="logo" />
        </div>      
    )
}

export default Home;