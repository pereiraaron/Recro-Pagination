import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  fetchData,
  updateNumberOfDetails,
  updatePage,
} from "./actions/pageActions";
import Card from "./components/Card";

function App() {
  const dispatch = useDispatch();
  const scroll = useSelector((state) => state.scroll);
  const { page, numberOfDetails, pagedata } = scroll;

  useEffect(() => {
    if (numberOfDetails < 100) {
      dispatch(fetchData(numberOfDetails));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  window.onscroll = () => {
    if (
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight &&
      numberOfDetails < 100
    ) {
      dispatch(updateNumberOfDetails());
      dispatch(updatePage());
    }
  };

  return (
    <div className="App">
      <div className="container">
        {pagedata.length > 0 &&
          pagedata.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
}

export default App;
