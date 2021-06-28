const info = {
    chungbutton : document.getElementById('chungbutton'),
    chung : document.getElementById('chung'),
    chunginfo : document.getElementById('chunginfo'),
    chungtext : document.getElementById('chungtext'),
    seobutton : document.getElementById('seobutton'),
    seo : document.getElementById('seo'),
    seoinfo : document.getElementById('seoinfo'),
    dongbutton : document.getElementById('dongbutton'),
    dong : document.getElementById('dong'),
    donginfo : document.getElementById('donginfo'),
}

var corebutton1=1;
var corebutton2=1;
var corebutton3=1;

function seocore(){
    if (corebutton1==0){
        info.seo.style.display = 'none';
        corebutton1=1;
    }
    else{
        info.seo.style.display = 'flex '
        corebutton1=0;
    }
}
function chungcore(){
    if (corebutton2==0){
        info.chung.style.display = 'none';
        corebutton2=1;
    }
    else{
        info.chung.style.display = 'flex '
        corebutton2=0;
    }
}
function dongcore(){
    if (corebutton3==0){
        info.dong.style.display = 'none';
        corebutton3=1;
    }
    else{
        info.dong.style.display = 'flex '
        corebutton3=0;
    }
}

var button1=0;
var button2=0;
var button3=0;
function chungprint() {
    if (button1==0){
        info.chunginfo.insertAdjacentHTML('beforeend' ,`<p id="chungtext" class="texts">살어리 살어리랏다 쳥산(靑山)애 살어리랏다<br>
        멀위랑 다래랑 먹고 쳥산(靑山)애 살어리랏다<br>
        얄리얄리 얄랑셩 얄라리 얄라<br>
        .<br>
        우러라 우러라 새여 자고 니러 우러라 새여<br>
        널라와 시름 한 나도 자고 니러 우니로라<br>
        얄리얄리 얄라셩 얄라리 얄라<br>
        .<br>
        가던 새 가던 새 본다 믈 아래 가던 새 본다<br>
        잉무든 장글란 가지고 믈 아래 가던 새 본다<br>
        얄리얄리 얄라셩 얄라리 얄라<br>
        .<br>
        이링공 뎌링공 ᄒᆞ야 나즈란 디내와손뎌<br>
        오리도 가리도 업슨 바므란 ᄯᅩ 엇디 호리라<br>
        얄리얄리 얄라셩 얄라리 얄라<br>
        .<br>
        어듸라 더디던 돌코 누리라 마치던 돌코<br>
        믜리도 괴리도 업시 마자셔 우니노라<br>
        얄리얄리 얄라셩 얄라리 얄라<br>
        .<br>
        살어리 살어리랏다 바ᄅᆞ래 살어리랏다<br>
        ᄂᆞᄆᆞ자기 구조개랑 먹고 바ᄅᆞ래 살어리랏다<br>
        얄리얄리 얄라셩 얄라리 얄라<br>
        .<br>
        가다가 가다가 드로라 에졍지 가다가 드로라<br>
        사ᄉᆞ미 지ᇝ대예 올아셔 ᄒᆡ금(奚琴)을 혀거를 드로라
        얄리얄리 얄라셩 얄라리 얄라<br>
        .<br>
        가다니 ᄇᆡ브른 도긔 설진 강수를 비조라<br>
        조롱곳 누로기 ᄆᆡ와 잡ᄉᆞ와니 내 엇디 ᄒᆞ리잇고<br>
        얄리얄리 얄라셩 얄라리 얄라<br></p>`)
        console.log("asdf")
        button1++;
    }
    else{
        var del = document.getElementById("chungtext");
        del.parentNode.removeChild(del);
        console.log("wdafsd")
        button1--;
    }
}
function seoprint() {
    if (button2==0){
        info.seoinfo.insertAdjacentHTML('beforeend' ,`<p id="seotext" class="texts">西京(서경)이 아즐가 西京이 셔울히 마르는<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        닷곤 ᄃᆡ 아즐가 닷곤 ᄃᆡ 쇼셩경 고ᄋᆈ마른<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        여ᄒᆡ므론 아즐가 여ᄒᆡ므론 질삼 뵈 ᄇᆞ리시고<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        괴시란ᄃᆡ 아즐가 괴시란ᄃᆡ 우러곰 좃니노ᅌᅵ다<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        .<br>
        구스리 아즐가 구스리 바회예 디신ᄃᆞᆯ<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        긴히ᄯᆞᆫ 아즐가 긴힛ᄯᆞᆫ 그치리ᅌᅵㅅ가 나ᄂᆞᆫ<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        즈믄 ᄒᆡ를 아즐가 즈믄 ᄒᆡ를 외오곰 녀신ᄃᆞᆯ<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        信(신)잇ᄃᆞᆫ 아즐가 信잇ᄃᆞᆫ 그츠리ᅌᅵㅅ가 나ᄂᆞᆫ<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        .<br>
        大同江(대동강) 아즐가 大同江 너븐디 몰라셔<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        ᄇᆡ 내여 아즐가 ᄇᆡ 내여 노ᄒᆞᆫ다 샤공아<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        네 가시 아즐가 네 가시 럼난디 몰라셔<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        녈 ᄇᆡ예 아즐가 녈 ᄇᆡ예 연즌다 샤공아<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        大同江 아즐가 大同江 거넌편 고즐여<br>
        위 두어렁셩 두어렁셩 다링디리<br>
        ᄇᆡ 타들면 아즐가 ᄇᆡ 타들면 것고리이다 나ᄂᆞᆫ<br>
        위 두어렁셩 두어렁셩 다링디리<br></p>`)
        console.log("asdf")
        button2++;
    }
    else{
        var del = document.getElementById("seotext");
        del.parentNode.removeChild(del);
        console.log("wdafsd")
        button2--;
    }
}

function dongprint() {
    if (button3==0){
        info.donginfo.insertAdjacentHTML('beforeend' ,`<p id="dongtext" class="texts">德으란 곰ᄇᆡ예 받ᄌᆞᆸ고<br>
        福으란 림ᄇᆡ예 받ᄌᆞᆸ고<br>
        德이여 福이라 호ᄂᆞᆯ<br>
        나ᅀᆞ라 오소ᅌᅵ다<br>
        아으 動動다리<br>
        .<br>
        正月ㅅ 나릿 므른<br>
        아으 어져 녹져 ᄒᆞ논ᄃᆡ<br>
        누릿 가온ᄃᆡ 나곤<br>
        몸하 ᄒᆞ올로 녈셔<br>
        아으 動動다리<br>
        .<br>
        二月ㅅ 보로매<br>
        아으 노피 현<br>
        燈ㅅ블 다호라<br>
        萬人 비취실 즈ᅀᅵ샷다<br>
        아으 動動다리<br>
        .<br>
        三月 나며 開ᄒᆞᆫ<br>
        아으 滿春 ᄃᆞᆯ욋고지여<br>
        ᄂᆞᄆᆡ 브롤 즈ᅀᅳᆯ<br>
        디녀 나샷다<br>
        아으 動動다리<br>
        .<br>
        四月 아니 니저<br>
        아으 오실셔 곳고리새여<br>
        므슴다 錄事니ᄆᆞᆫ<br>
        녯 나ᄅᆞᆯ 닛고신뎌<br>
        아으 動動다리<br>
        .<br>
        五月 五日애<br>
        아으 수릿날 아ᄎᆞᆷ 藥은<br>
        즈믄 ᄒᆡᆯ 長存ᄒᆞ샬<br>
        藥이라 받ᄌᆞᆸ노ᅌᅵ다<br>
        아으 動動다리<br>
        .<br>
        六月ㅅ 보로매<br>
        아으 별해 ᄇᆞ룐 빗 다호라<br>
        도라 보실 니믈<br>
        젹곰 좃니노이다<br>
        아으 動動다리<br>
        .<br>
        七月ㅅ 보로매<br>
        아으 百種 排ᄒᆞ야 두고<br>
        니믈 ᄒᆞᆫᄃᆡ 녀가져<br>
        顧을 비ᅀᆞᆸ노ᅌᅵ다<br>
        아으 動動다리<br>
        .<br>
        八月ㅅ 보로ᄆᆞᆫ<br>
        아으 嘉俳나리마ᄅᆞᆫ<br>
        니믈 뫼셔 녀곤<br>
        오ᄂᆞᆯ낤 嘉俳샷다<br>
        아으 動動다리<br>
        .<br>
        九月 九日애<br>
        아으 藥이라 먹논 黃花<br>
        고지 안해 드니<br>
        새셔 가만ᄒᆞ얘라<br>
        아으 動動다리<br>
        .<br>
        十月애<br>
        아으 져미연 ᄇᆞᄅᆞᆺ 다호라<br>
        것거 ᄇᆞ리신 後에<br>
        디니실 ᄒᆞᆫ 부니 업스샷다<br>
        아으 動動다리<br>
        .<br>
        十一月ㅅ 보ᇰ다ᇰ 자리예<br>
        아으 汗杉 두퍼 누워<br>
        슬ᄒᆞᆯᄉᆞ라온뎌<br>
        고우닐 스싀옴 녈셔<br>
        아으 動動다리<br>
        .<br>
        十二月ㅅ 분디남ᄀᆞ로 갓곤<br>
        아으 나ᅀᆞᆯ 盤ᄋᆡᆺ 져다호라<br>
        니믜 알ᄑᆡ 드러 얼이노니<br>
        소니 가재다 므ᄅᆞᅀᆞᆸ노ᅌᅵ다<br>
        아으 動動다리<br></p>`)
        console.log("asdf")
        button3++;
    }
    else{
        var del = document.getElementById("dongtext");
        del.parentNode.removeChild(del);
        console.log("wdafsd")
        button3--;
    }
}
