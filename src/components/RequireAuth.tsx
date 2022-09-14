import {useNavigate} from "react-router-dom";

interface Props {
    children: JSX.Element
}

export const RequireAuth = ({children}: Props): JSX.Element => {
    const navigate = useNavigate();

    if(true) {
        navigate('/');
    }

    return children;
}