function verif ()
{
    a=document.getElementById("t1").value;
    for (i=0;i<a.length;i++)
        {
            if(a.length==0|| a.charAt(0)>'Z'||a.charAt(0)<'A'|| a.charAt(0)>'z'||a.charAt(0)<'a')
            alert("verifier votre nom")
            return false
        }
}