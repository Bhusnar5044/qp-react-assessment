/* eslint-disable @typescript-eslint/no-explicit-any */
import { urls } from '@/constant/urls';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { fetch } from '@/utils';
import { FC, PropsWithChildren, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IAuthContext } from './types';

const initialValue = { tokens: {}, profileInfo: {} };

const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', initialValue);
  const [profileInfo, setProfileInfo] = useState({});
  const navigate = useNavigate();
  const { redirectTo } = useParams();

  const fetchProfileDetails = useCallback(async () => {
    const { response, error } = await fetch({ url: urls.profile });
    if (response) {
      setProfileInfo(response.data);
    }
    if (error) {
      console.log(error);
    }
  }, []);

  const login = useCallback(
    async (data: any) => {
      console.log({ data, redirectTo });
      setUser(data);
      fetchProfileDetails();
      navigate(redirectTo ?? '/', { replace: true });
    },
    [fetchProfileDetails, navigate, redirectTo, setUser]
  );

  const logout = useCallback(() => {
    setUser(null);
    navigate('/', { replace: true });
  }, [navigate, setUser]);

  const value = useMemo(
    () => ({
      ...user,
      profileInfo,
      login,
      logout,
      fetchProfileDetails,
    }),
    [fetchProfileDetails, login, logout, profileInfo, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
