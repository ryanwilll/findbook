import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title";

export function BookDetails() {
  const { id } = useParams();

  return (
    <Container>
      <HeaderTitle />
      <div className='grid md:grid-cols-2 mt-16 gap-4 grid-cols-1'>
        <div>
          <h2 className='text-5xl font-bold text-evergreen'>Nome do livro</h2>
          <p className='text-xl text-gray-500 font-light py-4'>Autor</p>
          <p className='text-gray-500 mt-6'>
            Texto: Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem asperiores libero, quos aliquid
            deleniti accusamus ut fugiat non quas? Repellendus magnam, mollitia cumque ea provident odit minus blanditiis
            saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem asperiores libero, quos aliquid
            deleniti accusamus ut fugiat non quas? Repellendus magnam, mollitia cumque ea provident odit minus blanditiis
            saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem asperiores libero, quos aliquid
            deleniti accusamus ut fugiat non quas? Repellendus magnam, mollitia cumque ea provident odit minus blanditiis
            saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem asperiores libero, quos aliquid
            deleniti accusamus ut fugiat non quas? Repellendus magnam, mollitia cumque ea provident odit minus blanditiis
            saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem asperiores libero, quos aliquid
            deleniti accusamus ut fugiat non quas? Repellendus magnam, mollitia cumque ea provident odit minus blanditiis
            saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorem asperiores libero, quos aliquid
            deleniti accusamus ut fugiat non quas? Repellendus magnam, mollitia cumque ea provident odit minus blanditiis saepe.
          </p>
        </div>
        <div>
          <img
            src='https://altabooks.com.br/wp-content/uploads/2021/07/Codigo_Limpo-scaled.jpg'
            alt=''
            className='w-full rounded-md'
          />
        </div>
      </div>
      <Title title='Recomendações com base nesse livro' className='mt-16 mb-8' />
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
        <Card id={4} />
        <Card id={5} />
      </div>
    </Container>
  );
}
