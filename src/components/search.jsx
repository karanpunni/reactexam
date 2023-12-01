export default function Search({ file, setSearch,setsearched }) {
    function handlechange(e) {
        
      if (!e.target.value||(e.target.value).length<=1) {
        // console.log("hello");
        setSearch(file);
      } else {
        const temp = [];
        if (e.target.value.length > 1) {
            // console.log(file)
          file.forEach((element) => {
            const foodname=(element.name).toLowerCase()
            const fooddis = (element.description).toLowerCase()
            const value=(e.target.value).toLowerCase()
            if (foodname.includes(value)) {
              // const t= (element.name).replace(e.target.value,"<mark>"+e.target.value+"<mark>")
              // element.name=t
             
              temp.push(element)
             
              
            }
          });
        }
        setSearch(temp);
        setsearched(e.target.value)
      }
    }
  
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>Search</label>
          <input onChange={handlechange}></input>
        </form>
      </>
    );
  }
  