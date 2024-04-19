import { useEffect, useState } from 'react';
import '../../List.css';
import ConsultantListItem from './ConsultantListItem';
import * as BsIcons from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app-state/store';
import { BASE_URL } from '../../../app-state/api-components/api-url';
import { Role } from '../../../app-state/api-components/roleEnum';
import { User } from '../../../app-state/userSlice';

function ConsultantAList() {
  const [query, setQuery] = useState('');
  const [query1, setQuery1] = useState('');
  const [employees, setEmployees] = useState<User[]>([]);
  const userInfo = useSelector((state: RootState) => state.user);
  useEffect(() => {
    getAllConsultants();
  }, []);

  const getAllConsultants = async () => {
    try {
      const headers = { Authorisation: `Bearer ${userInfo.token}` };
      const result = await fetch(
        `${BASE_URL}/api/employees/role/${Role.CONSULTANT}`,
        { headers }
      );
      setEmployees(await result.json());
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="list-info">
        <div>Consultants</div>
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
          {employees
            .filter((x) => {
              return query1.toLowerCase() === ''
                ? x
                : (x.firstName + ' ' + x.lastName)
                    .toLowerCase()
                    .includes(query1);
            })
            .map((x, i) => (
              <ConsultantListItem
                key={i}
                name={x.firstName + ' ' + x.lastName}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default ConsultantAList;
