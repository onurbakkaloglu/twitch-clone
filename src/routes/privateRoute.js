import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }){
    const user = useSelector(state => state.auth.user);

    if(!user){
        return <Navigate to="/" replace={true} />
    }

    return children;
}