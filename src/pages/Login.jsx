import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login Successful! Redirecting to home...');
      navigate('/');
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <div className="space-y-1">
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <div className="text-right">
              <button type="button" className="text-xs text-blue-600 hover:underline font-medium">
                Forgot password?
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">Remember for 30 days</label>
          </div>

          <Button 
            type="submit" 
            className="w-full py-3" 
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button className="text-blue-600 font-bold hover:underline">Sign up for free</button>
          </p>
        </div>
      </div>

      {/* Demo Credentials Note */}
      <div className="mt-6 bg-blue-50 border border-blue-100 p-4 rounded-lg text-xs text-blue-700">
        <p><strong>Demo Note:</strong> For this assignment, you can enter any email/password to simulate the login flow.</p>
      </div>
    </div>
  );
};

export default Login;