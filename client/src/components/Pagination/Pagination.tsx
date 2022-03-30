import { PageNumber, PageNumberList } from "./Pagination.styles";

const Pagination = (props: {
  noOfPosts: number;
  paginate: (number: number) => void;
  prevPage: () => void;
  nextPage: () => void;
  postsPerPage: number;
}) => {
  const { noOfPosts, paginate, prevPage, nextPage, postsPerPage } = props;
  let items: number[] = [];
  for (let i = 0; i < Math.ceil(noOfPosts / postsPerPage); i++) {
    items.push(i + 1);
  }
  return (
    <>
      <PageNumberList>
        <PageNumber onClick={prevPage}>{"<"}</PageNumber>
        {items.map((item, index) => (
          <PageNumber key={`pg${index}`} onClick={() => paginate(item)}>
            {item}
          </PageNumber>
        ))}
        <PageNumber onClick={nextPage}>{">"}</PageNumber>
      </PageNumberList>
    </>
  );
};

export default Pagination;
