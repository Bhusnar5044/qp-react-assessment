/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/context/AuthProvider';
import { BoardProvider } from '@/context/BoardContext';
import { NavbarProvider } from '@/context/NavbarContext';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const mockAxios = new MockAdapter(axios);

const WithAuthProviderProvider: FC<PropsWithChildren> = (props) => (
  <ThemeProvider>
    <AuthProvider>
      <>{props.children}</>
    </AuthProvider>
  </ThemeProvider>
);

const WithRouter: FC<PropsWithChildren> = (props) => (
  <MemoryRouter>
    <WithAuthProviderProvider>{props.children}</WithAuthProviderProvider>
  </MemoryRouter>
);

const TodoBoardProvider: FC<PropsWithChildren> = ({ children }) => (
  <WithRouter>
    <WithAuthProviderProvider>
      <BoardProvider>
        <NavbarProvider>{children}</NavbarProvider>
      </BoardProvider>
    </WithAuthProviderProvider>
  </WithRouter>
);

const customRender = (ui: ReactElement<any>, options?: RenderOptions): RenderResult => render(ui, { wrapper: WithAuthProviderProvider, ...options });

export const renderWithRouter = (ui: ReactElement<any>, options?: RenderOptions): RenderResult => render(ui, { wrapper: WithRouter, ...options });

export const renderWithBoardProvider = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: TodoBoardProvider, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
