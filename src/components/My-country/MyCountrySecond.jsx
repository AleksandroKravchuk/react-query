// import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { GridItem, Grid } from 'components';
import { Image } from 'components';
import { getCountries } from 'service/country-service';


export default function MyCountrySecond() {
  const { data, error, isLoading } = useQuery(['todos'], getCountries);
  console.log(data);
  return (
    <>
      {isLoading && <span>Loading...</span>}
      {error && <p>elements no found</p>}
      {data && (
        <Grid>
          {data.map(country => (
            <GridItem key={country.id}>
              <h3>{country.title}</h3>
              <p>{country.population}</p>

              <Image
                src={country.flag}
                width={294}
                height={200}
                alt="foto cantry"
              />
              <p>{country.image}</p>
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
}
