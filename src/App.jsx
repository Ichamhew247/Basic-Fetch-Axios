import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  // Create an instance
  const controller = new AbortController();
  const signal = controller.signal;
  // function beginFetching() {
  //   console.log("Now fetching")
  //   const urlToFetch = "https://jsonplaceholder.typicode.com/users";
  //   fetch(urlToFetch, {
  //     method: "get",
  //     signal:signal
  //   })
  //   .then((res) => res.json())
  //    .then((data) => setData(data))
  //    .catch((err) => {
  //     console.error("Error:", err)
  //   })
  // }
  // function abortFetching() {
  //   console.log("Now aborting")
  //   controller.abort();
  // }

  //axios fetch
  function axiosFetch() {
    console.log("fetching");
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: signal,
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error", err));
  }
  function axiosAbort() {
    console.log("Abort");
    controller.abort();
  }

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // .then(data => setData(data))
    // axios.get("https://jsonplaceholder.typicode.com/todos")
    // .then(res => setData(res.data))
  }, []);
  console.log(data);

  return (
    <div className="App">
      <button onClick={axiosFetch}>Begin</button>
      <button onClick={axiosAbort}>Abort</button>
      {/* <button onClick={beginFetching}>Begin</button>
<button onClick={abortFetching}>Abort</button> */}
    </div>
  );
}

export default App;
