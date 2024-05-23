import { Loader1 } from '@/components/common/Loader/Loader1';
import { urls } from '@/constant/urls';
import { useAuth } from '@/context/AuthProvider';
import { cn } from '@/styles/utils';
import { fetch } from '@/utils';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    else setPass(value);
  }, []);
  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      // used mock API fixed email pass
      const config = {
        url: urls.login,
        data: {
          email: username,
          password: pass,
        },
        method: 'POST',
      };

      setIsLoading(true);

      const { response, error } = await fetch(config, '', true);

      if (response) return login?.({ tokens: response.data });
      if (error) {
        console.log(error.data.message);
        setError('Please enter valid email and password');
      }

      setIsLoading(false);
    },
    [login, pass, username]
  );

  useEffect(() => {
    if (username && pass) setIsDisabled(false);
  }, [pass, username]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="h-18 mr-2" src="/assets/logo.svg" alt="logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
            <p className="text-rose-600">{error}</p>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="username"
                  id="email"
                  value={username}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-login-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="pass"
                  id="password"
                  placeholder="••••••••"
                  onChange={onChange}
                  value={pass}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-login-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-login-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-login-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-login-600 hover:underline dark:text-login-500">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                disabled={isDisabled || isLoading}
                className={cn(
                  'w-full text-white bg-login-600 hover:bg-login-700 focus:ring-4 focus:outline-none focus:ring-login-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-login-600 dark:hover:bg-login-700 dark:focus:ring-login-800 disable:bg-primary-100',
                  isDisabled || isLoading ? 'cursor-not-allowed text-gray-300' : ''
                )}
              >
                {isLoading ? <Loader1 /> : 'Sign in'}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <a href="#" className="font-medium text-login-600 hover:underline dark:text-login-500">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
