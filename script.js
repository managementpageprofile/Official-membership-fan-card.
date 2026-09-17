const EMAIL="vipjeffteammanagement6789@gmail.com";
document.getElementById("menu").onclick=()=>document.getElementById("nav").classList.toggle("open");
function mail(form,subject){const d=new FormData(form);let body="JEFF TEAM MEMBERSHIP FAN CARD\n\n";for(const [k,v] of d.entries())if(v)body+=k+": "+v+"\n";body+="\nPlease review this request and reply with the applicable information and next steps.";location.href="mailto:"+EMAIL+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body)}
document.getElementById("fanForm").onsubmit=e=>{e.preventDefault();mail(e.target,"Fan Card Application")};
document.getElementById("ticketForm").onsubmit=e=>{e.preventDefault();mail(e.target,"Event Ticket Request")};
document.getElementById("meetForm").onsubmit=e=>{e.preventDefault();mail(e.target,"Meet & Greet Request")};
document.getElementById("contactForm").onsubmit=e=>{e.preventDefault();mail(e.target,"Website Contact Inquiry")};