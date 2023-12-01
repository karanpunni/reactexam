import Highlighter from "react-highlight-words";
export default function Details({ file ,search}) {
  console.log(file);

  return (
    <div id="list">
      <h1>Food list</h1>
      {file.map((a) => {
        return (
          <div key={a.id}>
            {search!=""?<Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[search]}
              autoEscape={true}
              textToHighlight={a.name}
            />:""}
            {/* <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={[search]}
              autoEscape={true}
              textToHighlight={a.name}
            /> */}
            <h2>{a.name}</h2>
            <p>{a.description}</p>
          </div>
        );
      })}
    </div>
  );
}
