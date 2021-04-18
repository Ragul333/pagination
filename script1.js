var container = document.querySelector('.container');

var api = `https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json`;

async function dataProduce(api){
    try{
    let userUrl = await fetch(api);
    let userProcess = await userUrl.json();

    return userProcess;
    }catch(error){
            console.log(error);
    }
}



function display(data){


var pages = Math.ceil(data.length/rows)

return     data = Totalaction;  
    

}


function tableDisplay(){
    
   
  
    
    dataProduce(api).then((data)=>{
        //let van = JSON.stringify(data);
 
        
    hello(data,1);       
    pagination (data.length/10) 
    });  
        
    }
   
function hello(data,page){
    var rows = 10;
    var start = (page - 1)*rows;
    var end = (start + rows);

    for(i=start; i<end; i++){
        let row = document.createElement('div');
        row.setAttribute('class','row');         
    

  //      data.slice(start,end);
         
         

         row.innerHTML =     
        `<table class='table'>
        <tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].email}</td>
        </tr>
        </table>`;

//html += htmlSegment;
    
        container.append(row);
        document.body.append(container);
          
}
}

function pagination (pages){

    var wrapper = document.getElementById('paginate');
    wrapper.innerHTML='';

    for(let currentPages=1; currentPages<= pages; currentPages++){
        wrapper.innerHTML += `<button value='${currentPages}' class='page btn btn-sm btn-info ml-2 mt-5'>${currentPages}</button>`;

        $('.page').on('click',function(){
           

             let c1 = document.getElementsByTagName('button');
             //let c3 = document.getElementById(currentPages)
            let c2 = c1.innerHTML;
           
            alert(c2); 
        })
        
    }


}

tableDisplay();
/* 
var currentPages=1;
    ;

    var record;

    var repeat='';

    function pagination (pages){

        var wrapper = document.getElementById('paginate');
        wrapper.innerHTML='';
    
        for( currentPages=1; currentPages<= pages; currentPages++){
            wrapper.innerHTML += `<button value='${currentPages}' class='page btn btn-sm btn-info ml-2 mt-5'>${currentPages}</button>`;

            $('.page').on('click',function(){
               
    
                 let c1 = document.getElementsByTagName('button');
                 //let c3 = document.getElementById(currentPages)
                 let c2 = c1.value;
               alert(c2); 
            })
            
        }


}
     
      


    var rows = 10;
    var page = (currentPage * rows);
    
    var totalNumPage = Math.ceil(g / rows);
    
    var start = (currentPage - 1)*rows;
    var end = (start + rows);

    var Totalaction = data.slice(start,end);





 pagination(totalNumPage);




    

 Totalaction.forEach(element => {
    var html = element;
    
     record = `<ul class="list-group list-group-horizontal-xl">
    <li class="list-group-item">${html.id}</li>
    <li class="list-group-item" style='width:300px;'>${html.name}</li>
    <li class="list-group-item" style='width:400px;'>${html.email}</li>
  </ul>`;


  

    repeat += record;
 
    console.log(html);
});
  
   
    container.style.padding = '0px 250px';
    container.innerHTML = repeat;

    var paginated = document.getElementById('paginate');
    paginated.style.padding = '0px 600px';








 */












/* 

var request = new XMLHttpRequest()

// document.querySelector('.container').innerHTML = Open a new connection, using the GET request on the URL endpoint
request.open('GET',  `https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json`, true)





request.onload = function () {
    var data = JSON.parse(this.response)
      
    
// g , noOfPages = 10, Totalpages = g / noOfPages, create a list from 1 to totalpages
    
    var h = JSON.stringify(data);
    
    var g =  JSON.stringify(data.length);

    var currentPage=2;

    var currentPages=1;
    var container = document.querySelector('.container');

    var record;

    var repeat='';

    function pagination (pages){

        var wrapper = document.getElementById('paginate');
        wrapper.innerHTML='';
    
        for( currentPages=1; currentPages<= pages; currentPages++){
            wrapper.innerHTML += `<button value='${currentPages}' class='page btn btn-sm btn-info ml-2 mt-5'>${currentPages}</button>`;

            $('.page').on('click',function(){
               
    
                 let c1 = document.getElementsByTagName('button');
                 //let c3 = document.getElementById(currentPages)
                 let c2 = c1.value;
               alert(c2); 
            })
            
        }


}
     
      


    var rows = 10;
    var page = (currentPage * rows);
    
    var totalNumPage = Math.ceil(g / rows);
    
    var start = (currentPage - 1)*rows;
    var end = (start + rows);

    var Totalaction = data.slice(start,end);





 pagination(totalNumPage);




    

   Totalaction.forEach(element => {
        var html = element;
        
         record = `<ul class="list-group list-group-horizontal-xl">
        <li class="list-group-item">${html.id}</li>
        <li class="list-group-item" style='width:300px;'>${html.name}</li>
        <li class="list-group-item" style='width:400px;'>${html.email}</li>
      </ul>`;


      

        repeat += record;
     
        console.log(html);
    });
  
   
    container.style.padding = '0px 250px';
    container.innerHTML = repeat;

    var paginated = document.getElementById('paginate');
    paginated.style.padding = '0px 600px';
}

// Send request
request.send();
 */
