import { useState } from 'react';
import '../../List.css';
import Client from './Client';
import * as BsIcons from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const clients = Array.from({ length: 20 }, (_, index) => ({
  name: `Client ${index + 1}`,
}));

function Clients() {
  const [query, setQuery] = useState('');
  const [query1, setQuery1] = useState('');

  const navigate = useNavigate();
  const onAddClientClick = () => {
    const path = "/admin/client/addclient";
    navigate(path);
  };
  return (
    <>
      <div className="list-info">
        <div>Clients</div>
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
          <button type="submit" onClick={() => setQuery1(query)}>
            <BsIcons.BsSearch size={30} />
          </button>
        </div>

        <div className="list-listgroup">
          {clients
            .filter((client) => {
              return query1.toLowerCase() === ''
                ? client
                : client.name.toLowerCase().includes(query1);
            })
            .map((client, index) => (
              <Client key={index} name={client.name} />
            ))}
        </div>

        <div className="nav-button">
          <Button colour="primary" onClick={onAddClientClick}>
            Add Client
          </Button>
        </div>
      </div>
    </>
  );
}

export default Clients;
