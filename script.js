
let inputText = document.querySelector("input");

let saveHandler = document.querySelector(".btn-gen");

saveHandler.addEventListener("click", createAcc);

let accName = '';
let accPass = '';

function accTable ( accName, accPass ) {

    /*const tableHead = `
        <table>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
    `;

    const tableFoot = `
            </tbody>
        </table>
    `;*/

    const count = accs.length;
    let tableContent = '';

    for ( let i = 0; i < count; i+=2  ) {

        let currAcc = accs[i];
        let currPass = accs[i+1];

        tableContent += `
            
                <tr class='tr-acc'>
                    <td>${currAcc}</td>
                    <td>${currPass}</td>
                </tr>
               
        `
    }

    return tableContent;
}



let accs = [];
//const accSet = new Set();
function saveAcc(){
    accs.push(accName,accPass);
    //const accs = {'Name':accName,'Pass':accPass};
    //accSet.add(accs);
    //var Parent = document.getElementById('.tbl-acc');
    //while(Parent.hasChildNodes())
    //{
    //    Parent.removeChild(Parent.firstChild);
    //}
    document.querySelector('.tbl-acc')
            .insertAdjacentHTML(
                'afterbegin',
                accTable( accName, accPass )
            )
}

function createAcc(){

    accName = inputText.value;
    if(accs.includes(accName)){
        window.alert("Account already registered")
    }else{
        accPass = randomP();
        saveAcc();
    }
    

}

//let rand = Math.random().toString(36).substr(2,16);

function randomP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
    for (let i = 1; i <= 16; i++) {
        var char = Math.floor(Math.random()* str.length + 1);
        pass += str.charAt(char)
    }     
    return pass;
}



console.log(accs);