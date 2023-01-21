import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Random Anime Quotes</h1>
      <h2>Start editing to seee some magic happen!</h2>
      <button onClick="quotes"> Get your quote </button>
      <p id="quoteSpace"></p>
    </div>
  );
}

function quotes() {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => console.log(quote))
    .then(document.write(quote.quote));
}
