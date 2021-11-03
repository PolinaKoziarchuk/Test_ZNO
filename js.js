
let arr = [1,5,3,6,8,4,3];
let questions =["У рівнобедреному трикутнику ABC з основою AC кут B=40. Визначте градусну міру кута A.",""];
let answers = [["50","60","70","80"]]
let right_answers=[2]

question.innerHTML=questions[0]
lb1.innerHTML =answers[0][0]
lb2.innerHTML =answers[0][1]
lb3.innerHTML =answers[0][2]
lb4.innerHTML =answers[0][3]

btn.addEventListener("click",check);
function check(){
    n = document.getElementsByName("question");
    k=0;
    n.forEach(element => {
        if (element.checked){
            if (k == right_answers[0]){
                console.log("yes");
                document.getElementById("btn").style.backgroundColor ="#00ff6e";
            }
            else{
                console.log("no");
                document.getElementById("btn").style.backgroundColor ="#e34234";
            }
        }
        
    k++;
    } );
}
arr.forEach(element => {
    console.log(element);
});