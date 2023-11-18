import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { RiShutDownLine } from 'react-icons/ri'
import { useNavigate } from "react-router-dom";

export function Header(){
    const { signOut } = useAuth()
    const navigate = useNavigate()

    function handleSignOut(){
        navigate('/')
        signOut()
    }

    return(
        <Container>
            <Profile to="/profile">
                <img 
                    src="https://github.com/DiogoGDF.png"
                    alt="Foto do usuário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Diogo Garbinato</strong>
                </div>
            </Profile>
            <Logout onClick={handleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}