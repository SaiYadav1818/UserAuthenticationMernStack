import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div  style={{ backgroundColor: "#e6570aff", minHeight: "100vh" }}>
   <div  className= "d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="bg-dark p-5 rounded shadow text-center" style={{ width: "300px" }}>
         <h3 className="text-white mb-4">Welcome</h3>
      <button onClick={() => navigate('/home/login')} className="btn btn-primary ">Login</button>
      <button onClick={() => navigate('/home/register')} className="btn btn-warning m-3">Register</button>
    </div>
    </div>
    </div>
  );
}

export default Home;
