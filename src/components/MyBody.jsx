import SingleCarousel from "./SingleCarousel";
import SubNavBar from "./SubNavBar";

const MyBody = () => (
  <>
    <SubNavBar />
    <SingleCarousel h2="Get Ready for X-Mas" searchKey="christmas" />
    <SingleCarousel
      h2="Will be removed on January 1st"
      searchKey="harry potter"
      id="warning"
    />
    <SingleCarousel
      h2="Start now the Peter Jackson famous Saga from J.R.R. Tolkien Books"
      searchKey="lord of the rings"
    />
    <SingleCarousel h2="Get into The Matrix now" searchKey="matrix" />
  </>
);

export default MyBody;
