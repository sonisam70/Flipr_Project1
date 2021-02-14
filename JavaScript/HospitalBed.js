function getData()
{
    url = "https://api.rootnet.in/covid19-in/hospitals/beds"
    
    fetch(url).then((response)=>
    {
        return response.json();
    }).then((data)=>
    {
        console.log(data.data.regional);
        // var sss = document.getElementById('sss');
        // sss.innerHTML = data.data.contacts.primary.email;

        if(data.data.regional.length > 0)
        {
            var temp = "";

            data.data.regional.forEach(u => {
                temp += "<tr>";
                temp += "<td>"+u.state+"</td>";
                temp += "<td>"+u.ruralHospitals+"</td>";
                temp += "<td>"+u.ruralBeds+"</td>";
                temp += "<td>"+u.urbanHospitals+"</td>";
                temp += "<td>"+u.urbanBeds+"</td>";
                temp += "<td>"+u.totalHospitals+"</td>";
                temp += "<td>"+u.totalBeds+"</td></tr>";
            })

            document.getElementById("HospitalBed").innerHTML = temp;
            
        }

        //document.getElementById("footer1").innerHTML = data.data.contacts.primary.email;

        // var tbl = js.CreateTable(data.data.contacts.regional,['state name','number']);
        // document.getElementById("data").innerHTML = tbl;
    })
}

getData();