import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { ROUTE } from '../utils/consts';

const AppRouter: React.FC = () => {
    const user: boolean = false;

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
