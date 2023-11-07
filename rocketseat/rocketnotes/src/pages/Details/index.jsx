import { Container } from "./styles.js"
import { Button } from "../../components/Button/index.jsx"

export function Details(){

  return (
    <Container>
      <h1>Hello, World!</h1>
      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
    
  )
}