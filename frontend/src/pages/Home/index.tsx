import { useCallback, useState } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";

const genderBooks = ["Ação", "Aventura", "Biografia", "Comédia", "Drama", "Ficção"];

export function Home() {
  const [selectedGender, setSelectedGender] = useState<string[]>([]);

  const handleSelect = useCallback(
    (gender: string) => {
      if (selectedGender.includes(gender)) {
        setSelectedGender(selectedGender.filter((item) => item !== gender));
      } else {
        setSelectedGender([...selectedGender, gender]);
      }
    },
    [selectedGender]
  );

  return (
    <section className='mb-6'>
      <Header />
      <Container>
        <Title title='O que você quer ler hoje?' className='my-5' />

        <div className='gap-8 grid md:grid-cols-8 grid-cols-4'>
          {genderBooks.map((gender) => (
            <Button
              description={gender}
              variant={selectedGender.includes(gender) ? "dark" : "light"}
              onClick={() => handleSelect(gender)}
            />
          ))}
        </div>
        <div className='py-7'>
          <p className='text-evergreen font-semibold text-2xl'>Sobre o que você gostaria de receber uma recomendação?</p>
          <Input placeholder='Eu gostaria de ler...' />
        </div>

        <Title title='Livros recomendados' className='my-5' />
        <Card id={2} />
      </Container>
    </section>
  );
}
