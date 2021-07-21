function fetchData() {
   
    fetch("./ZonAnn.Ts+dSST.csv")
        .then((response) => {
            console.log(response);
            return response.text();
        })
        .then((data) => {
            console.log(Papa.parse(data, { header: true }).data);
        });
}
    
    
fetchData();