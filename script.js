function showPage(pageId){

document.getElementById('redeem-page').style.display="none"
document.getElementById('detail-page').style.display="none"

document.getElementById(pageId).style.display="block"

window.scrollTo(0,0)

}

function startRedeem(){

const phone=document.getElementById('phone').value

if(phone.length<10){

alert("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง")

return

}

document.getElementById('loading-screen').style.display="flex"

}

function goToApp(){

window.location.href="https://www.truemoney.com/"

}
