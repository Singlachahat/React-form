import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form=()=>{
    const [formData, setFormData]= useState({
        firstName:'',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
    }
    );

const [errors, setErrors] = useState({});
const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

const countries = ['USA', 'India', 'Canada'];
  const cities = {
    USA: ['New York', 'Los Angeles'],
    India: ['Mumbai', 'Delhi'],
    Canada: ['Toronto', 'Vancouver']
};

const validate =()=>{
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.username) tempErrors.username = 'Username is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.password) tempErrors.password = 'Password is required';
    if (!formData.phoneNo) tempErrors.phoneNo = 'Phone Number is required';
    if (!formData.country) tempErrors.country = 'Country is required';
    if (!formData.city) tempErrors.city = 'City is required';
    if (!formData.panNo) tempErrors.panNo = 'PAN No is required';
    if (!formData.aadharNo) tempErrors.aadharNo = 'Aadhar No is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
}

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success', { state: formData });
    }
  };

 
    return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-4 py-2 text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Phone No.</label>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.phoneNo && <span className="text-red-500 text-sm">{errors.phoneNo}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
            {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              disabled={!formData.country}
            >
              <option value="">Select City</option>
              {formData.country && cities[formData.country].map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">PAN No.</label>
            <input
              type="text"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.panNo && <span className="text-red-500 text-sm">{errors.panNo}</span>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Aadhar No.</label>
            <input
              type="text"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.aadharNo && <span className="text-red-500 text-sm">{errors.aadharNo}</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;

