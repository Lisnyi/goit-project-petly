import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";
// import NoticesCategoryItem from "components/NoticesCategoryItem/NoticesCategoryItem";
// import AddNoticeButton from "components/AddNoticeButton/AddNoticeButton";
import { Container, Section } from 'shared/components';
import { Heading } from '@chakra-ui/react'

const Notices = () => {
  return (
    <Container>
      <Section>
        <Heading
          as={'h1'}
          fontSize={{base:'24px', md:'48px'}}
          fontWeight={'bold'}
          lineHeight={'short'}
          textAlign={'center'}
          mb={7}>
            Find your favorite pet
        </Heading>
        <NoticesSearch/>
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
        {/* <AddNoticeButton />  */}
      </Section>
    </Container>
  );
};

export default Notices;
