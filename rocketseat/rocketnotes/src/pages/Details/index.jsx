import { Container } from "./styles.js"
import { Button } from "../../components/Button/index.jsx"
import { Header } from "../../components/Header/index.jsx"

export function Details(){

  return (
    <Container>
      <Header />
      <h1>Hello, World!</h1>
      <Button title="Login" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </Container>
    
  )
}