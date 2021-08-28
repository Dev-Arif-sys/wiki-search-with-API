
console.log("clicked")
document.getElementById("search-btn").onclick= async(e)=>{
  let searchValue=document.getElementById("input-field").value;
//   console.log(searchValue)
    e.preventDefault()
    let url=`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchValue}`
    let res=await fetch(url);
    let data= await res.json();
    displayData(data)
}

function displayData(data){
    console.log(data.query.search)
    let resultContainer=document.getElementById("search-result")
    let searchArray=data.query.search;
    searchArray.forEach(value=>{
        let div=document.createElement("div");
        div.classList.add("mb-5")
        div.innerHTML=`
        <a target="_blank" class="title-link" href="https://en.wikipedia.org/?curid=${value.pageid}"><h3>${value.title}</h3></a>
        <p>https://en.wikipedia.org/?curid=${value.pageid}<p>
        <p>${value.snippet}</p>
        `

        resultContainer.appendChild(div);
    })

}
   


// https://en.wikipedia.org/?curid=42663426