import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';

const AppRouter: React.FC = () => {
    const { auth } = useContext(Context);
    const [ user ] = useAuthState(auth);

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path="*" element={<Navigate to={ROUTE.CHAT} replace />} />
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                <Route path="*" element={<Navigate to={ROUTE.LOGIN} replace />} />
            </Routes>
        )
}

export default AppRouter;
