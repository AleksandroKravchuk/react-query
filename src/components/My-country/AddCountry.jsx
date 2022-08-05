import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
// import { toast } from 'react-toastify';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AddButton, Blok } from './AddCountry.styled';
import MyCountry from './My-country';

// axios.defaults.baseURL = 'http://localhost:3000';

export default function AddCountry() {
  const [countries, setCountries]= useState([])
  // const notify = () => toast('Wow so easy!');

  const mutation = useMutation(
    newCountry => axios.post('http://localhost:3000/contries', newCountry),
    // { staleTime: 0.0000000001 },
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

          {mutation.isSuccess ? Notify.success('Country added ') : null}

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

// useMutation(updateTodo, {
//   // При вызове мутации
//   onMutate: async newTodo => {
//     // Отменяем исходящие запросы
//     await queryClient.cancelQueries(['todos', newTodo.id]);

//     // Снимок предыдущего значения
//     const prevTodo = queryClient.getQueryData(['todos', newTodo.id]);

//     // Оптимистическое обновление
//     queryClient.setQueryData(['todos', newTodo.id], newTodo);

//     // Возвращаем контекст с предыдущим и новым значениями
//     return { prevTodo, newTodo };
//   },
//   // При провале мутации, используем контекст
//   onError: (err, newTodo, context) => {
//     queryClient.setQueryData(['todos', context.newTodo.id], context.prevTodo);
//   },
//   // Всегда выполняем повторный запрос
//   onSettled: newTodo => {
//     queryClient.invalidateQueries(['todos', newTodo.id]);
//   },
// });
