import { useEffect, useState } from 'react';
import '../../List.css';
import ManagerListItem from './ManagerListItem';
import * as BsIcons from 'react-icons/bs';
import { User } from '../../../app-state/userSlice';
import { BASE_URL } from '../../../app-state/api-components/api-url';
import { Role } from '../../../app-state/api-components/roleEnum';
import { RootState } from '../../../app-state/store';
import { useSelector } from 'react-redux';

function ManagerList() {
  const [query, setQuery] = useState('');
  const [query1, setQuery1] = useState('');
  const [managers, setManagers] = useState<User[]>([]);
  const userToken = useSelector((state: RootState) => state.user.token);
  useEffect(() => {
    getAllManagers();
  }, []);

  const getAllManagers = async () => {
    try {
      const headers = { Authorisation: `Bearer ${userToken}` };
      const result = await fetch(
        `${BASE_URL}/api/employees/role/${Role.MANAGER}`,
        { headers }
      );
      setManagers(await result.json());
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="list-info">
        <div>Line Managers</div>
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
            <BsIcons.BsSearch size={30} onClick={() => setQuery1(query)}/>
          </button>
        </div>

        <div className="list-listgroup">
          {managers
            .filter((x) => {
              return query1.toLowerCase() === ''
                ? x
                : (x.firstName + ' ' + x.lastName)
                    .toLowerCase()
                    .includes(query1);
            })
            .map((x, i) => (
              <ManagerListItem key={i} name={x.firstName + ' ' + x.lastName} />
            ))}
        </div>
      </div>
    </>
  );
}

export default ManagerList;
