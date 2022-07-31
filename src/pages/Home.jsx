import { Container, CountryList, Heading, Loader, Section } from 'components';
import MyCountry from 'components/My-country/My-country';
export const Home = () => {
  return (
    <Section>
      <Container>
        <MyCountry />
      </Container>
    </Section>
  );
};
