import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, removeCredentials } from '../feature/auth';
import { useNavigate } from 'react-router';

const PageNotFound = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  const handleReturnHome = () => {
    console.log(user);
    if (user !== null) {
      console.log('inside if');
      navigate('/dashboard');
      window.location.reload();
    } else {
      navigate('/', { replace: true });
    }
  };

  return (
    <section className="section">
      <div className="container mt-5">
        <div className="page-error">
          <div className="page-inner">
            <h1>404</h1>
            <div className="page-description">
              The page you were looking for could not be found.
            </div>
            <div className="page-search">
              <form>
                <div className="form-group floating-addon floating-addon-not-append">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary btn-lg">Search</button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="mt-3">
                <a href="#" onClick={() => handleReturnHome()}>
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
