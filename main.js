// contact us 
var fname=document.getElementById('in'),
lname=document.getElementById('in1'),
email=document.getElementById('in2'),
msg=document.getElementById('in3');
fname.onfocus=function(){
    fname.placeholder=''
}
fname.onblur=function(){
    fname.placeholder='first name'
}
lname.onfocus=function(){
    lname.placeholder=''
}
lname.onblur=function(){
    lname.placeholder='last name'
}
email.onfocus=function(){
    email.placeholder=''
}
email.onblur=function(){
    email.placeholder='e-mail'
}
msg.onfocus=function(){
    msg.placeholder=''
}
msg.onblur=function(){
    msg.placeholder='message'
}
$(document).ready(function(){
    //icons
    $(".icons i").hover(function(){
        $(this).animate({
            fontSize :'40px'
        },500,function(){
            $(this).animate({
                fontSize :'30px'
        },500)
    })
    })
    //far button 
    $(".far .uk-button-default").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})