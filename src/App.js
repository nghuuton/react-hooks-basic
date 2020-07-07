import React, { useState, useEffect } from "react";
import queryString from "query-string";
import "./App.scss";
import TodoList from "./components/TodoList";
import ColorBox from "./components/ColorBox";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFilterForm from "./components/PostFilterForm";
import Clock from "./components/Clock";
import MagicBox from "./components/MagicBox";

function App() {
  const [Text, setText] = useState("");
  function handleChange({ currentTarget: input }) {
    setText(input.value);
  }
  // function handleSubmit({ keyCode }) {
  //   if (keyCode === 13) {
  // TODO something here.
  //   }
  // }
  const [postList, setpostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
    // TODO Add Filter, Seach: ....
  });
  const [showClock, setShowClock] = useState(true);
  useEffect(() => {
    async function fetchData() {
      // TODO: Call API here and setSate.
      try {
        const paramsString = queryString.stringify(filters);
        // ! paramsString queryString -> _limit=10&_page=1
        const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestURL);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setpostList(data);
        setPagination(pagination);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [filters]);
  function handlePageChange(newPage) {
    setFilters({ ...filters, _page: newPage });
  }
  function handleSubmit(newFillter) {
    setFilters({ ...filters, page: 1, title_like: newFillter.searchTerm });
  }
  return (
    <div className="App">
      <h1>Welcome React Hooks Basic</h1>
      {/* <input
        type="text"
        value={Text}
        onChange={handleChange}
        onKeyUp={handleSubmit}
        style={{ display: "none" }}
      />
      <ColorBox />
      <TodoList /> */}
      {/* <PostFilterForm onSubmit={handleSubmit} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <MagicBox />
    </div>
  );
}

export default App;
