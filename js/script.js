
let spinner=document.getElementById("spinner")
document.getElementById("search-btn").onclick= async(e)=>{
    spinner.style.display="block"
  let searchValue=document.getElementById("input-field");
//   console.log(searchValue)
    e.preventDefault()
    let url=`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchValue.value}`
    searchValue.value="";
    let res=await fetch(url);
    if(res){
        spinner.style.display="none"
    }
    let data= await res.json();
    displayData(data)
}

function displayData(data){
    console.log(data.query.search)
    let resultContainer=document.getElementById("search-result")
    resultContainer.textContent="";
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