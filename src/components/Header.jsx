import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="space-x-3">
            <Link to="/"><button className="btn mt-4 bg-[#fbe5a2]">Home</button></Link>
            <Link to="/addCoffee"><button className='btn mt-4 bg-[#fbe5a2]'>Add Coffees</button></Link>
            <Link to="/login"><button className='btn mt-4 bg-[#fbe5a2]'> Login</button></Link>
            <Link to="/signUp"><button className='btn mt-4 bg-[#fbe5a2]'> Sign Up</button></Link>
            <Link to="/users"><button className='btn mt-4 bg-[#fbe5a2]'>Users</button></Link>
        </div>
    );
};

export default Header;