import { Link } from "react-router-dom";
import { FaGraduationCap, FaUser, FaSignOutAlt, FaHome, FaBuilding, FaBook } from 'react-icons/fa';

const Navbar = () => {
  return (
     <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaGraduationCap className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">EduConsult</span>
            </Link>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-primary-600"
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <Link
                to="/colleges"
                className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-primary-600"
              >
                <FaBuilding className="mr-2" />
                Colleges
              </Link>
              <Link
                to="/courses"
                className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-primary-600"
              >
                <FaBook className="mr-2" />
                Courses
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to={isAdmin ? '/admin/dashboard' : '/student/dashboard'}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600"
                >
                  <FaUser />
                  <span className="hidden md:block">{user?.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-700 hover:text-red-600"
                >
                  <FaSignOutAlt />
                  <span className="hidden md:block">Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
