function getData()
{
    url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
    
    fetch(url).then((response)=>
    {
        return response.json();
    }).then((data)=>
    {
        console.log(data.data.medicalColleges);
        // var sss = document.getElementById('sss');
        // sss.innerHTML = data.data.contacts.primary.email;

        if(data.data.medicalColleges.length > 0)
        {
            var temp = "";

            data.data.medicalColleges.forEach(u => {
                temp += "<tr>";
                temp += "<td>"+u.state+"</td>";
                temp += "<td>"+u.name+"</td>";
                temp += "<td>"+u.city+"</td>";
                temp += "<td>"+u.ownership+"</td>";
                temp += "<td>"+u.admissionCapacity+"</td>";
                temp += "<td>"+u.hospitalBeds+"</td></tr>";
            })

            document.getElementById("MedicalCollegeBeds").innerHTML = temp;
            
        }

        //document.getElementById("footer1").innerHTML = data.data.contacts.primary.email;

        // var tbl = js.CreateTable(data.data.contacts.regional,['state name','number']);
        // document.getElementById("data").innerHTML = tbl;
    })
}

getData();