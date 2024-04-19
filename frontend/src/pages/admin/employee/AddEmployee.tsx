import { Role } from '../../../app-state/api-components/roleEnum';
import { useForm } from 'react-hook-form';
import '../Add.css';
import { BASE_URL } from '../../../app-state/api-components/api-url';
import { Register } from '../../../app-state/userSlice';

export default function AddEmployee() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    registerHandler(data);
    reset(
      {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      { keepErrors: false }
    );
  };

  const registerHandler = async (data: Register) => {
    try {
      const result = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.email,
          password: data.password,
          role: data.role,
        }),
      });
      const token = await result.json();
      if (token) {
        alert('Employee has been successfully created!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-tile">
          <div className="header">Add Employee</div>

          <div className="add-info">
            <div className="inputs">
              <label>Type:</label>
              <select {...register('role', { required: true })}>
                <option value={Role.CONSULTANT}>Consultant</option>
                <option value={Role.MANAGER}>Line Manager</option>
                <option value={Role.ADMIN}>Admin</option>
              </select>
            </div>
            
            <div className="inputs">
              <label>First Name:</label>
              <input type="text" {...register('firstName', { required: true })} />
              {errors.firstName && (
                <p className="error-text">First Name is required</p>
              )}
            </div>
            
            <div className='inputs'>
              <label>Last Name:</label>
              <input type="text" {...register('lastName', { required: true })} />
              {errors.lastName && <p className="error-text">Last Name is required</p>}
            </div>

            <div className="inputs">
              <label>Email:</label>
              <input
                type="email"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {errors.email && (
                <p className="error-text">Email is required and must be valid</p>
              )}
            </div>
              
            <div className='inputs'>
              <label>Password:</label>
              <input type="password" {...register('password', { required: true })} />
              {errors.password && <p className="error-text">Password is required</p>}
            </div>

            <div className="submit-button">
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
