import { Role } from 'constants/roles';
import * as routes from 'constants/routes';
import { Route, Routes } from 'react-router-dom';
import { CreateAccount, Home, Login, NotFound, StudentDashboard, TeacherDashboard, StudentMentorships } from 'sections';
import { Profile } from 'sections/Profile';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

/**
 * Top level application router
 *
 * @returns {Component}
 */
export const Router = () => {
  return (
    <Routes>
      <PublicRoute path={routes.HOME} element={<Home />} />
      <PublicRoute path={routes.CREATE_ACCOUNT} element={<CreateAccount />} />
      <PublicRoute path={routes.LOGIN} element={<Login />} />
      <PrivateRoute path={routes.STUDENT_DASHBOARD} element={<StudentDashboard />} requiredRoles={[Role.STUDENT]} />
      <PrivateRoute path={routes.TEACHER_DASHBOARD} element={<TeacherDashboard />} requiredRoles={[Role.TEACHER]} />
      <PrivateRoute path={routes.USER_PROFILE} element={<Profile />} requiredRoles={[Role.STUDENT]} />
      <PrivateRoute
        path={routes.STUDENT_MENTORSHIP_REQUESTS}
        element={<StudentMentorships />}
        requiredRoles={[Role.STUDENT]}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
