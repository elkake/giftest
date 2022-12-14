import '../style/Gif.css';
import { Link } from 'react-router-dom';

function Gif({ id, title, url }) {
  // const location = useLocation();
  // console.log(location.key);
  return (
    <div className="gif_container">
      <Link to={`/gif/${id}`} className="gif_link">
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  );
}

export default Gif;
