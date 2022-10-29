function addChar(a){
	if(document.frm1.screen.value==0)
		document.frm1.screen.value=a;
	else
		document.frm1.screen.value+=a;
}
function evaluer(){
	document.frm1.screen.value=eval(document.frm1.screen.value);
}
function init(){
	document.frm1.screen.value=0;
}
function racine(){
	document.frm1.screen.value=Math.sqrt(document.frm1.screen.value);
}
function exp(){

	document.frm1.screen.value=Math.exp(document.frm1.screen.value);
}
function ln(){
	document.frm1.screen.value=Math.log(document.frm1.screen.value);
}
function fact(){
	var x=1;
	for(i=1;i<=document.frm1.screen.value;i++)
	{
		x*=i;
	}
	document.frm1.screen.value=x;
}
function power(){
	document.frm1.screen.value=Math.pow(document.frm1.screen.value,2);
}
function nega(){
	document.frm1.screen.value=eval(document.frm1.screen.value*-1);
}
function cos() {
document.frm1.screen.value = Math.cos(document.frm1.screen.value);
}
function sin() {
document.frm1.screen.value = Math.sin(document.frm1.screen.value);
}
function tan() {
document.frm1.screen.value = Math.tan(document.frm1.screen.value);
}
function deleteChar() {
document.frm1.screen.value = document.frm1.screen.value.substring(0, document.frm1.screen.value.length - 1)
}
var val = 0.0;
function percent() {
val = document.frm1.screen.value;
document.frm1.screen.value = document.frm1.screen.value + "%";
}
function checkNum(str) {
for (var i = 0; i < str.length; i++) 
{
	var ch = str.charAt(i);
	if (ch < "0" || ch > "9") 
	{
		if (ch == "/" && ch == "*" && ch == "+" && ch == "-" && ch == "."&& ch == "(" && ch== ")" && ch == "%") 
		{
			alert("invalid input");
			return false;
		}
	}
}
return true;
}