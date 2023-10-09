
function addNewWe(){
   
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");   
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    
    weOb.insertBefore(newNode, weAddButtonOb)
    }
    
    function addNewAq(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");   
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newNode, aqAddButtonOb)
    }
    
    function addNewec(){
        let newNode = document.createElement("textarea");
        newNode.classList.add("form-control");
        newNode.classList.add("ecField");
        newNode.classList.add("mt-2");
        newNode.setAttribute("placeholder","Enter here");   
        let ecOb = document.getElementById("ec");
        let ecAddButtonOb = document.getElementById("ecAddButton");
        
        ecOb.insertBefore(newNode, ecAddButtonOb)
        }
    
    //generating cv
    
    function generateCV(){
    let nameField = document.getElementById("nameField").value;
    document.getElementById("nameT").innerHTML = nameField;
    let nameT = document.getElementById("nameT");
    nameT.innerHTML = nameField;
    
    document.getElementById("nameT2").innerHTML = nameField;
    
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    //Address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    
    //links
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("gtT").innerHTML = document.getElementById("gtField").value;
    document.getElementById("lkT").innerHTML = document.getElementById("lkField").value;
    
    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    
    // work exprience
    let wes = document.getElementsByClassName("weField");
    console.log("Number of elements with class 'weField':", wes.length);
    let str = '';
    for (let e of wes) {
        console.log("Value of element:", e.value);
        str = str + `<li> ${e.value} </li>`;
    }
    console.log("Resulting HTML string:", str);
    
    document.getElementById("weT").innerHTML = str;
    
    // Academic Qualification
    
    let aqs = document.getElementsByClassName("aqField");
    let str1 = '';
    for (let f of aqs) {
        console.log("Value of element:", f.value);
        str1 = str1 + `<li> ${f.value} </li>`;
    }
    console.log("Resulting HTML string:", str1);
    
    document.getElementById("aqT").innerHTML = str1;
    
    // extra curricular activbities
    
    let ecs = document.getElementsByClassName("ecField");
    let str2 = '';
    for (let g of ecs) {
        console.log("Value of element:", g.value);
        str2 = str2 + `<li> ${g.value} </li>`;
    }
    console.log("Resulting HTML string:", str2);
    
    document.getElementById("ecT").innerHTML = str2;
    
    //setting image
    let file = document.getElementById("imgField").files[0]
     console.log(file);     
    
     let reader = new FileReader()
     reader.readAsDataURL(file);
     console.log(reader.result);
    
     //set the image to template
     reader.onloadend = function (){
        document.getElementById('imgT').src = reader.result;
     }
    
     document.getElementById('ab').style.backgroundColor="black";
     document.getElementById('body').style.backgroundColor="white";
     document.getElementById('body').style.color="white";




    //hide form
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';
    document.getElementById('cv-template2').style.display = 'none';

    } 

    function newtemp()
    {
        let nameFields = document.getElementById("nameField").value;
        document.getElementById("nameTs").innerHTML = nameFields;
        let nameTs = document.getElementById("nameTs");
        nameTs.innerHTML = nameFields;
        nameTs.style.fontSize='20px';
        
        document.getElementById("nameT2s").innerHTML = nameFields;
        
        //contact
        document.getElementById("contactTs").innerHTML = document.getElementById("contactField").value;
        //Address
        document.getElementById("addressTs").innerHTML = document.getElementById("addressField").value;
        
        //links
        document.getElementById("fbTs").innerHTML = document.getElementById("fbField").value;
        document.getElementById("gtTs").innerHTML = document.getElementById("gtField").value;
        document.getElementById("lkTs").innerHTML = document.getElementById("lkField").value;
        
        //objective
        document.getElementById("objectiveTs").innerHTML = document.getElementById("objectiveField").value;
        
        // work exprience
        let wess = document.getElementsByClassName("weField");
        console.log("Number of elements with class 'weField':", wess.length);
        let strs = '';
        for (let e of wess) {
            console.log("Value of element:", e.value);
            strs = strs + `<li> ${e.value} </li>`;
        }
        console.log("Resulting HTML string:", strs);
        
        document.getElementById("weTs").innerHTML = strs;
        
        // Academic Qualification
        
        let aqss = document.getElementsByClassName("aqField");
        let str1s = '';
        for (let f of aqss) {
           
            console.log("Value of element:", f.value);
            str1s = str1s + `<li> ${f.value} </li>`;
        }
        console.log("Resulting HTML string:", str1s);
        
        document.getElementById("aqTs").innerHTML = str1s;
        
        // extra curricular activbities
        
        let ecss = document.getElementsByClassName("ecField");
        let str2s = '';
        for (let g of ecss) {
            console.log("Value of element:", g.value);
            str2s = str2s + `<li> ${g.value} </li>`;
        }
        console.log("Resulting HTML string:", str2s);
        
        document.getElementById("ecTs").innerHTML = str2s;
        
        //setting image
        let files = document.getElementById("imgField").files[0]
         console.log(files);     
        
         let readers = new FileReader()
         readers.readAsDataURL(files);
         console.log(readers.result);
        
         //set the image to template
         readers.onloadend = function (){
            document.getElementById('imgTs').src = readers.result;
         }

         document.getElementById('ab').style.backgroundColor="#f6058a";
         document.getElementById('body').style.backgroundColor="#ec90c2";
         document.getElementById('ab').style.width='100vw';

         
        
        //hide form
        document.getElementById('cv-form').style.display = 'none';
        document.getElementById('cv-template').style.display = 'none';
        document.getElementById('cv-template2').style.display = 'block';



    }

    function backToForm()
    {         document.getElementById('body').style.backgroundColor="#ec90c2";

        document.getElementById('cv-form').style.display = 'block';
        document.getElementById('cv-template').style.display = 'none';
        document.getElementById('cv-template2').style.display = 'none';
    }
    
    //print cv
    function printCV(){
        document.getElementById('btnt2').style.display = 'none';
        document.getElementById('backbtn').style.display = 'none';
        document.getElementById('bfbtn').style.display = 'none';
        document.getElementById('generate').style.display = 'none';
        window.print();  
        document.getElementById('btnt2').style.display = 'inline';
        document.getElementById('backbtn').style.display = 'inline';
        document.getElementById('bfbtn').style.display = 'inline';
        document.getElementById('generate').style.display = 'initial';

    }