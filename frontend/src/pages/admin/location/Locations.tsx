import { useState } from 'react';
import '../../List.css';
import Location from './Location';
import * as BsIcons from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import Button from '../../../components/Button';

const locations = Array.from({ length: 20 }, (_, index) => ({
  name: `Location ${index + 1}`,
}));

function Locations() {
  const [query, setQuery] = useState('');
  const [query1, setQuery1] = useState('');

  const navigate = useNavigate();
  const onAddLocationClick = () => {
    const path = "/admin/locations/addlocation";
    navigate(path);
  };
  return (
    <>
      <div className="list-info">
        <div>Locations</div>
      </div>
      <div className="list-listcontainer">
        <div className="list-search">
          <input
            className="list-search-input"
            type="search"
            id="search"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <BsIcons.BsSearch size={30} onClick={() => setQuery1(query)} />
          </button>
        </div>

        <div className="list-listgroup">
          {locations.filter((location) => {
              return query1.toLowerCase() === ''
                ? location
                : location.name.toLowerCase().includes(query1);
            }).map((location, index) => (
            <Location key={index} name={location.name} />
          ))}
        </div>

        <div className="nav-button">
          <Button colour="primary" onClick={onAddLocationClick}>
            Add Location
          </Button>
        </div>
      </div>
    </>
  );
}

export default Locations;
