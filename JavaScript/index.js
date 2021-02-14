function getData()
{
    url = "https://api.rootnet.in/covid19-in/contacts"
    
    fetch(url).then((response)=>
    {
        return response.json();
    }).then((data)=>
    {
        console.log(data.data.contacts.primary.email);
        // var sss = document.getElementById('sss');
        // sss.innerHTML = data.data.contacts.primary.email;

        if(data.data.contacts.regional.length > 0)
        {
            var temp = "";

            data.data.contacts.regional.forEach(u => {
                temp += "<tr>";
                temp += "<td>"+u.loc+"</td>";
                temp += "<td>"+u.number+"</td></tr>";
            })

            document.getElementById("data").innerHTML = temp;
            
        }

        document.getElementById("footer1").innerHTML = data.data.contacts.primary.email;

        // var tbl = js.CreateTable(data.data.contacts.regional,['state name','number']);
        // document.getElementById("data").innerHTML = tbl;
    })
}

getData();