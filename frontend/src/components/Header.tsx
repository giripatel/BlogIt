import { Link } from 'react-router-dom'

interface HeaderType {
  type : string
}
const Header = ({type} : HeaderType) => {
  return (
    <div>
        <div className="px-16">
         <div>
              <div className="text-2xl font-bold text-center pt-3 ">{ type === "signup"? "Login Account" :"Create Account"}</div>
                <div className="text-center mb-3 mt-1 text-gray-700">  
                  {type === "signup" ? "Already have an account?" : "Do not have an account?"}<Link className="underline " to={ type === "signup"? "/signin": "/signup"}> {type === "signup"?  "Signin": "Signup"}</Link>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Header;
