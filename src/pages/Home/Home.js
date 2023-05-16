import { useEffect, useState } from "react";
import useFetch from "../../UseFetch/useFetch";
import CardBook from "../../component/card/CardBook";
import PaginationComponent from "../../component/pagination/PaginationRanges";
import { useDispatch } from "react-redux";
import { headerAdmin } from "../../component/checkHeader/headerSlice";

const Home = () => {
  const {
    error,
    isPending,
    data: Book,
  } = useFetch("http://localhost:3002/products");
  const [page, setPage] = useState(1);
  const pageSize = 9; // تعداد المان‌هایی که در هر صفحه نمایش داده می‌شود
  const pageCount = Math.ceil((Book && Book.length) / pageSize); // تعداد کل صفحات برای Pagination
  const isAdminHeder = useDispatch();
  const user = ()=>{
    isAdminHeder(headerAdmin(false));
  }
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    user();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div>درحال بارگذاری ...</div>}
      {Book && (
        <div>
          <h1>کتاب فروشی بوش WWW.BooSh.com</h1>
          <CardBook books={Book.slice((page - 1) * pageSize, page * pageSize)} />
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

export default Home;
