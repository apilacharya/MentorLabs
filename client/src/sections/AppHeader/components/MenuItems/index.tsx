import { Avatar, Button, Menu } from 'antd';
import { Role } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import { AiOutlineLogout, AiOutlineUser } from 'react-icons/ai';
import { ImBell } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import { logOut } from 'store/auth/auth.actions';
import { displaySuccessNotification } from 'utils/notifications';
import * as routes from 'constants/routes';

const { Item, SubMenu } = Menu;

export const MenuItems = () => {
  const { user, status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onLogOut = () => {
    dispatch(logOut());
    displaySuccessNotification("You've successfully logged out!");
  };

  if (status === 'pending' || status === 'idle') return <p>Loading nav.</p>;

  const userIsStudent = user.role === Role.STUDENT;

  const publicLinks = (
    <div className="app-header__menu--public">
      <div key="/login" className="app-header__menu-item--public">
        <NavLink to={routes.LOGIN} style={{ color: '#000000cf' }}>
          Sign In
        </NavLink>
      </div>
      <div key="/create-account" className="app-header__menu-item--public">
        <NavLink to={routes.CREATE_ACCOUNT} className="app-header__create-account" style={{ color: '#fff' }}>
          Create Account
        </NavLink>
      </div>
    </div>
  );

  const privateLinks = (
    <Menu mode="horizontal" selectable={false} className="app-header__menu--private">
      {userIsStudent ? (
        <Item key="/mentorships">
          <NavLink to={routes.STUDENT_MENTORSHIP_REQUESTS}>
            <Button type="default">
              <ImBell /> &nbsp; Mentorships
            </Button>
          </NavLink>
        </Item>
      ) : null}
      <SubMenu
        title={<Avatar size="large" src={user?.avatar} className="app-header__menu--avatar" />}
        className="app-header__sub-menu--private"
        key="submenu"
      >
        <Item key="/user">
          <NavLink to={`/users/${user.id}`}>
            <AiOutlineUser></AiOutlineUser> Profile
          </NavLink>
        </Item>
        <Item key={routes.LOGOUT} onClick={onLogOut}>
          <AiOutlineLogout></AiOutlineLogout> Log out
        </Item>
      </SubMenu>
    </Menu>
  );

  return user.id && user.avatar ? privateLinks : publicLinks;
};
