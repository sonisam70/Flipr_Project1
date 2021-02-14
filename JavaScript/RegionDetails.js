function getData()
{
    url = "https://api.rootnet.in/covid19-in/stats/history"
    
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

            data.data.forEach(u => 
            {
                u.regional.forEach(function(obj) { console.log(obj.loc); });
            })

            


            document.getElementById("StateCovidcasesdata").innerHTML = temp;
            
        }

        //document.getElementById("footer1").innerHTML = data.data.contacts.primary.email;

        // var tbl = js.CreateTable(data.data.contacts.regional,['state name','number']);
        // document.getElementById("data").innerHTML = tbl;
    })
}

getData();