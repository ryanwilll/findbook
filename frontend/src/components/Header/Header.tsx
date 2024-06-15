import backgroundImage from "../../assets/img/background-header.png";
import { Button } from "../Button";
import { Container } from "../Container";
import { HeaderTitle } from "./HeaderTitle";

export function Header() {
  return (
    <header
      className='bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
      <Container>
        <HeaderTitle />
        <div className='mt-28'>
          <p className='md:text-7xl text-3xl font-bold text-evergreen'>
            Encontre livros
            <br />
            que seja a sua cara!
          </p>
          <p className='text-gray-500 my-5 text-xl max-w-screen-sm'>
            Descubra novos mundos e viva grandes aventuras: explore nosso acervo e encontre seu próximo livro favorito!
          </p>
          <Button description='Pesquisar livros' />
        </div>
      </Container>
    </header>
  );
}
