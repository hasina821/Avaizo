import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/users/auth";
import { clearMessage } from "../../redux/users/message";
//import ReCAPTCHA from "react-google-recaptcha";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });
  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        props.history.push("/about");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    history.push("/about");
  }

  return (
    <div className="col-md-12 login-form">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >

          <Form>
          
            <div className="form-group">
              
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" className="form-control" />
              <ErrorMessage
                name="username"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" className="form-control" />
              <ErrorMessage
                name="password"
                component="div"
                className="alert alert-danger"
              />
            </div>
            <GoogleReCaptchaProvider
              reCaptchaKey="6LcTA-wfAAAAABNiIryCtn6wHI6shJ7G09Ve08mv"
              language="en"
              scriptProps={{
                async: false, // optional, default to false,
                defer: false, // optional, default to false
                appendTo: 'head', // optional, default to "head", can be "head" or "body",
                nonce: undefined // optional, default undefined
              }}
            >
            
          </GoogleReCaptchaProvider>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            
          </Form>
        </Formik>
      </div>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};
export default Login;
//sitekey="6Ldw9-sfAAAAAH-ivOczLDNvAuNVvnVrfV67I1Wx"  6LcTA-wfAAAAABNiIryCtn6wHI6shJ7G09Ve08mv