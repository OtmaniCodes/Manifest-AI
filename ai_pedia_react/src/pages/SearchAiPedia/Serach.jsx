import { useParams } from 'react-router-dom';
import './Serach.css'
const Serach = () => {
    const {name}=useParams()
    console.log(name)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`your-api-endpoint?search=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.log('Error fetching search results:', error);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
  
        {searchResults.map((result) => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    );
  };
 
export default Serach;