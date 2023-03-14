import React from 'react';
import { Facebook } from 'react-feather';
import { useNavigate } from 'react-router';
import { LoginForm } from '../../feature/auth';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const onsubmit = () => {
    navigate('/dashboard', { replace: true });
    window.location.reload();
  };

  return (
    <div className="container-fluid">
      <div className="text-center" style={{ padding: "5rem 0" }}>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-5 col-xs-5  hero-section">
            <img className="m-auto" src="/assets/icons/Delivery.svg" alt="" />
            <h1 className="hero-title mt-4">
              Lets help you manage your <br /> riders and delivery systems.
            </h1>
            <p className="hero-description mt-4">
              Every logistics company whether it's a multi-national branding{" "}
              <br /> corporation or a regular local deserves the basic standard
              necessities <br /> in achieving a high service delivery
            </p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-8 col-12">
            <div className="card" style={{ maxWidth: '33rem' }}>
              <div className="card-body p-5">
                <h3 className="card-title mt-2 login-card-title">
                  You're Welcome Back!
                </h3>
                <p className="card-text login-card-body">
                  Enter the following information below
                </p>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <section className="section">
    //   <div className="container mt-5">
    //     <div className="row">
    //       <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
    //         <div className="card card-primary">
    //           <div className="card-header">
    //             <h4>Login</h4>
    //           </div>
    //           <div className="card-body align-item-center">
    //             <LoginForm />
    //             <div className="text-center mt-4 mb-3">
    //               <div className="text-job text-muted">Login With Social</div>
    //             </div>
    //             <div className="row sm-gutters">
    //               <div className="col-6">
    //                 <a className="btn btn-block btn-social btn-facebook">
    //                   <Facebook color="clack" /> Facebook
    //                 </a>
    //               </div>
    //               <div className="col-6">
    //                 <a className="btn btn-block btn-social btn-twitter">
    //                   <span className="fab fa-twitter"></span> Twitter
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-5 text-muted text-center">
    //           Don't have an account? <a href="auth-register.html">Create One</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Login;
