import { useCallback } from "react";
import { Button } from "../Button";
import { Tag } from "../Tag";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
};

export function Card({ id }: Props) {
  const navigate = useNavigate();

  const handleSelectBook = useCallback(() => {
    navigate(`/book-details/${id}`);
  }, [id, navigate]);

  return (
    <div className='grid grid-cols-3 shadow-lg rounded-lg border border-gray-100 max-w-lg w-full p-4 gap-3'>
      <img
        src='https://altabooks.com.br/wp-content/uploads/2021/07/Codigo_Limpo-scaled.jpg'
        alt=''
        className='col-span-1 w-full h-full rounded-lg'
      />
      <div className='col-span-2'>
        <p className='font-bold text-2xl text-evergreen'>Código limpo</p>
        <p className='font-light text-lg text-gray-500 mb-2'>Autor</p>
        <Tag title='Computer Engineer' className='mb-2' />
        <p>
          <strong>Sinopse:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, velit earum fugit tenetur
          consequuntur officiis deserunt quam minus distinctio necessitatibus aspernatur eos sunt ratione harum libero vitae, cum,
          pariatur commodi.
        </p>
        <Button description='Ver mais' variant='light' className='w-1/2' onClick={handleSelectBook} />
      </div>
    </div>
  );
}
