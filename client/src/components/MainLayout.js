import { Link, NavLink } from 'react-router-dom';

const navigation = [
  {
    name: 'Form',
    href: '/',
  },
  {
    name: 'Users',
    href: '/users',
  },
  {
    name: 'Data Raport',
    href: '/data-raport',
  },
];

export const MainLayout = ({ children }) => (
  <div className="flex h-full w-full truncate">
    <div className="first-col">
      <nav className="flex h-full min-h-screen w-[200px] flex-col bg-primary-bg">
        <div className="mx-auto flex w-fit flex-col gap-y-10">
          {navigation.map(({ name, href, icon }) => (
            <NavLink key={name} to={href}>
              {name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
    <div className="second-col w-full">
      <div className="p-10">{children}</div>
    </div>
  </div>
);
