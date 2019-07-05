/*

*/


function start(e) {
    var name=[
        {
            char:'簡',
            big5:'C2B2',
            cns:'1-767C',
            unicode:'7C21'

        },
        {
            char:'上',
            big5:'A457',
            cns:'1-4438',
            unicode:'4E0A'
        },
        {
            char:'博',
            big5:'B3D5',
            cns:'1-5E3B',
            unicode:'535A'
        }
    ];

    var ele=document.getElementById("div1");

    for (var i=0;i<3;i++) {

        ele.innerHTML+=name[i].char;
        ele.innerHTML+=' big5= ';
        ele.innerHTML+=name[i].big5;
        ele.innerHTML+=' cns= ';
        ele.innerHTML+=name[i].cns;
        ele.innerHTML+=' unicode= ';
        ele.innerHTML+=name[i].unicode;
        ele.innerHTML+='<br>';
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
