const api_url1 = "https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST";
const api_url2 = "https://api.apify.com/v2/key-value-stores/p3nS2Q9TUn6kUOriJ/records/LATEST";
const DEFAULT_VALUE = '--';
const searchInput = document.getElementById("search-input");
let searchValue = document.getElementById("search-input").value;
const cityName = document.querySelector(".city-name");
const Treating = document.querySelector(".treating");
const Recovered = document.querySelector(".recovered");
const Death = document.querySelector(".death");

function click() {
    console.log(searchValue);
    searchInput.addEventListener("change", (event) => {
        fetch(api_url1)
            .then(response => response.json())
            .then(function(data) {
                console.log("Success: ", data);
                console.log(data.detail[1])
                for (let i = 0; i <data.detail.length; i++){
                    
                    if (searchValue == "Hà Nội") {
                        console.log(data.detail[i].name)
                        cityName.innerHTML = data.detail[i].name || DEFAULT_VALUE;
                        Treating.innerHTML = data.detail[i].treating || DEFAULT_VALUE;
                        Recovered.innerHTML = data.detail[i].recovered || DEFAULT_VALUE;
                        Death.innerHTML = data.detail[i].death || DEFAULT_VALUE;
                    }   
                }
                
            })
    })
}
click()