function getData()
{
    url = "https://api.rootnet.in/covid19-in/stats/testing/history"
    
    fetch(url).then((response)=>
    {
        return response.json();
    }).then((data)=>
    {
        console.log(data.data);
        // var sss = document.getElementById('sss');
        // sss.innerHTML = data.data.contacts.primary.email;

        if(data.data.length > 0)
        {
            var temp = "";

            data.data.forEach(u => {
                temp += "<tr>";
                temp += "<td>"+u.day+"</td>";
                temp += "<td>"+u.totalSamplesTested+"</td>";
                temp += "<td>"+u.totalIndividualsTested+"</td>";
                temp += "<td>"+u.totalPositiveCases+"</td>";
                temp += "<td>"+u.source+"</td></tr>";
            })

            document.getElementById("Covidcasesdata").innerHTML = temp;
            
        }

        //document.getElementById("footer1").innerHTML = data.data.contacts.primary.email;

        // var tbl = js.CreateTable(data.data.contacts.regional,['state name','number']);
        // document.getElementById("data").innerHTML = tbl;
    })
}

getData();