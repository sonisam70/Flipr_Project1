function getData()
{
    url = "https://api.rootnet.in/covid19-in/notifications"
    
    fetch(url).then((response)=>
    {
        return response.json();
    }).then((data)=>
    {
        console.log(data.data.notifications);
        // var sss = document.getElementById('sss');
        // sss.innerHTML = data.data.contacts.primary.email;

        if(data.data.notifications.length > 0)
        {
            var temp = "";

            data.data.notifications.forEach(u => {
                temp += "<tr>";
                
                temp += "<td>"+u.title+"</td>";
                temp += "<td>"+u.link+"</td></tr>";
            })

            document.getElementById("notificationdata").innerHTML = temp;
            
        }

        //document.getElementById("footer1").innerHTML = data.data.contacts.primary.email;

        // var tbl = js.CreateTable(data.data.contacts.regional,['state name','number']);
        // document.getElementById("data").innerHTML = tbl;
    })
}

getData();