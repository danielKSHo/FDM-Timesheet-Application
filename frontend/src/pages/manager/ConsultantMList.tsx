import '../List.css';
import ConsultantListItem from './ConsultantListItem';
import * as BsIcons from 'react-icons/bs';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { User, logout } from '../../app-state/userSlice';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { RootState } from '../../app-state/store';
import { BASE_URL } from '../../app-state/api-components/api-url';
import { Role } from '../../app-state/api-components/roleEnum';

function ConsultantMList() {
  const [query, setQuery] = useState('');
  const [query1, setQuery1] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [consultants, setConsultants] = useState<User[]>([]);
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
      setConsultants(await result.json());
    } catch (error) {
      alert(error);
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <>
      <div className="list-info">
        <div>Consultants</div>
        <Button onClick={logoutHandler}>Logout</Button>
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
          {consultants
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

export default ConsultantMList;
