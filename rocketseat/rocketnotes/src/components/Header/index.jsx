import { Container } from "./styles";
import { Profile } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/DiogoGDF.png"
                    alt="Foto do usuário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Diogo Garbinato</strong>
                </div>
            </Profile>
        </Container>
    )
}