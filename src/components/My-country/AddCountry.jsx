import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-toastify';

import { AddButton, Blok } from './AddCountry.styled';
import MyCountry from './My-country';

// axios.defaults.baseURL = 'http://localhost:3000';

export default function AddCountry() {
  const notify = () => toast('Wow so easy!');
  const mutation = useMutation(newCountry =>
    axios.post('http://localhost:3000/contries', newCountry),
  );

  return (
    <Blok>
      {mutation.isLoading ? (
        <p>Добавление задачи...</p>
      ) : (
        <>
          {mutation.isError ? (
            <p>Возникла ошибка: {mutation.error.message}</p>
          ) : null}

          {mutation.isSuccess ? <p>Задача добавлена!</p> : null}
          <AddButton
            onClick={() =>
              mutation.mutate({ id: new Date(), title: 'Hello World' })
            }
          >
            Додати країну
          </AddButton>
        </>
      )}
    </Blok>
  );
}
