import { useHistory } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const history = useHistory();

  const checkCreds = (event) => {
    event.preventDefault();
    if (event.target[0].value.toLowerCase() === "lucius fox") {
      setLoggedIn(true);
      history.goBack();
    }
  };

  return (
    <main className="container">
      <div>
        <h1 className="text-center">Login to Continue</h1>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={checkCreds}>
              <label htmlFor="passcode">Passcode:</label>
              <input
                id="passcode"
                type="text"
                className="form-control"
                placeholder="Secret Passcode..."
              />
              <button
                type="submit"
                className="btn btn-primary my-3 d-block mx-auto"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
