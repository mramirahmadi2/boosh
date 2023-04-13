import { useParams } from "react-router-dom";
import useFetch from "../../UseFetch/useFetch";
import { useEffect, useState } from "react";
import CardBook from "../../component/card/CardBook";
import PaginationComponent from "../../component/pagination/PaginationRanges";

const Products = () => {
  const { group } = useParams();
  const [name, setName] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {
    data: books,
    error,
    isPending,
  } = useFetch("http://localhost:3002/products");
  const [page, setPage] = useState(1);
  const pageSize = 6; // تعداد المان‌هایی که در هر صفحه نمایش داده می‌شود
  const pageCount = Math.ceil((filteredProducts && filteredProducts.length) / pageSize); // تعداد کل صفحات برای Pagination
 
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    if (group === "Novel") {
      setName("داستانی");
      if (books) {
        const filteredBooks = books.filter((book) => book.group === "Novel");
        setFilteredProducts(filteredBooks);
      }
    } else if (group === "Education") {
      setName("آموزشی");
      if (books) {
        const filteredBooks = books.filter(
          (book) => book.group === "Educational"
        );
        setFilteredProducts(filteredBooks);
      }
    } else if (group === "Entertain") {
      setName("سرگرمی");
      if (books) {
        const filteredBooks = books.filter(
          (book) => book.group === "Entertainment"
        );
        setFilteredProducts(filteredBooks);
      }
    } else if (group === "Academic") {
      setName("آکادمیک");
      if (books) {
        const filteredBooks = books.filter(
          (book) => book.group === "AcademicBook"
        );
        setFilteredProducts(filteredBooks);
      }
    }
  }, [group, books]);
  useEffect(()=>{
    setPage(1)
  },[group, books])
  
  return (
    <>
      <h1>کتاب {name}</h1>
      {isPending && <div>در حال بارگذاری...</div>}
      {error && <div>{error}</div>}
      {filteredProducts && (
        <div>
          {" "}
          <CardBook books={filteredProducts.slice((page - 1) * pageSize, page * pageSize)} />
          <PaginationComponent
            count={pageCount}
            page={page}
            onChange={handleChangePage}
          />
        </div>
      )}
    </>
  );
};

export default Products;
