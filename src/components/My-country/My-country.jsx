import { useQuery } from '@tanstack/react-query';

// import { useState } from 'react';
import fetchCountry from 'service/my-fetch';
import { GridItem, Grid } from 'components';
import { Image } from 'components';
import { Loader } from 'components';
import AddCountry from './AddCountry';
import Ukraine from '../../images/Ukraine.jpg';

export default function MyCountry() {
  const { data, error, isLoading } = useQuery(['myCountry'], fetchCountry);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>elements no found</p>}
      {data && (
        <div>
          <Grid>
            {data.map(country => (
              <GridItem key={country.id}>
                <h3>{country.title}</h3>
                <p>{country.population}</p>

                <Image
                  src={country.image}
                  width={294}
                  height={200}
                  alt="foto cantry"
                />
                <p>{country.image}</p>
              </GridItem>
            ))}
          </Grid>
          <AddCountry />
        </div>
      )}
    </>
  );

  // console.log(getCountries());
  // fetchCountry().then(({ data }) => console.log(data));
  // const { isLoading, data, error, status } = useQuery(
  //   'country list',
  //   getCountries,
  // );
  // const response = await fetch('http://localhost:300/contries')

  // if (!response.ok) {
  //   throw new Error('Что-то пошло не так')
  // }
  //  return await response.json()
  // // if (error === 'Missing queryFn') {
  // //   console.log('ОШИБКА');
  // // }
  // console.log(data);
  // console.log(isLoading);
  // console.log(error);
  // console.log(status);
  //   return (

  // }

  // function Example() {
  //   const { isLoading, error, data } = useQuery('results', () => {
  //     axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
  //   });

  //   if (isLoading) return 'Loading...';

  //   if (error) return 'An error has occurred: ' + error;

  //   return (
  //     <div>
  //       <h1>{data.results}</h1>
  //       {/* <p>{data.description}</p>
  //       <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
  //       <strong>🍴 {data.forks_count}</strong> */}
  //     </div>
  //   );
  // }
  // const queryClient = useQueryClient();
  // function Todos() {
  //   // const [contries, setContries] = useState([]);

  //     // {
  //     // onSuccess: data => setContries(data),
  //     // }
  //   );
}
