$(function(){
    // gnb onclick
    $('header ul.gnb li').click(function(){
        $('header ul.gnb li').removeClass("on")
        $(this).addClass("on")}
    )

    // 스크롤바 위치에 따른 header 변화
    let prePosition=0
    let header = document.getElementById('header');
    document.addEventListener("scroll",function(){
        let nowPosition = $(window).scrollTop()
        if(nowPosition > 300){
            $('header').addClass("on")
            if(nowPosition > prePosition){
                header.style.transform = "translateY(-100%)";
            }else{
                header.style.transform = "translateY(0)";
            }
        }else{
            $('header').removeClass("on")
            header.style.transform = "translateY(0)";
        }
        prePosition = nowPosition
    })
    // gnb mouseover
    Splitting()

    // 글자색 변화는 효과
    gsap.timeline({
        scrollTrigger:{
            scrub: 3,
            trigger: "#catchphrase .txtbox",
            start: "0% 30%", 
            end: "100% 70%",
            // markers: true
        }
    })
    .fromTo("#catchphrase .txtbox .mask span",{backgroundSize:"0% 100%"},{backgroundSize:"100% 100%"},0)

    // 배열에 기억시켜 반복문을 이용해 해당 섹션을 기준으로 애니메이팅
    gsap.utils.toArray('#contents').forEach((section,i)=>{
        ScrollTrigger.create({
            trigger: section,
            start: "0% 0%",
            pin: true,
            pinSpacing: false,
            scrub:3,
            // markers: true
        })
    })

    ScrollTrigger.create({
        snap:1 / (section.length - 2),
        ease: "power1.inOut", 
    })
})