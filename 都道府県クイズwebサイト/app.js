//画像の配列
let  kendata_d = [];
let kenimgdata = [];
//答え合わせのための配列
let kenanswer = [];
//正解、不正解の色分け
let answerDat = [];
//
let kenimgAllData = [ 
    "images/ken_01.png",//北海道

    "images/ken_02.png",//東北
    "images/ken_03.png",
    "images/ken_04.png",
    "images/ken_05.png",
    "images/ken_06.png",
    "images/ken_07.png",

    "images/ken_08.png",//関東
    "images/ken_09.png",
    "images/ken_10.png",
    "images/ken_11.png",
    "images/ken_12.png",
    "images/ken_13.png",
    "images/ken_14.png",

    "images/ken_15.png",//中部
    "images/ken_16.png",
    "images/ken_17.png",
    "images/ken_18.png",
    "images/ken_19.png",
    "images/ken_20.png",
    "images/ken_21.png",
    "images/ken_22.png",
    "images/ken_23.png",

    "images/ken_24.png",//近畿
    "images/ken_25.png",
    "images/ken_26.png",
    "images/ken_27.png",
    "images/ken_28.png",
    "images/ken_29.png",
    "images/ken_30.png",

    "images/ken_31.png",//中国
    "images/ken_32.png",
    "images/ken_33.png",
    "images/ken_34.png",
    "images/ken_35.png",

    "images/ken_36.png",//四国
    "images/ken_37.png",
    "images/ken_38.png",
    "images/ken_39.png",

    "images/ken_40.png",//九州
    "images/ken_41.png",
    "images/ken_42.png",
    "images/ken_43.png",
    "images/ken_44.png",
    "images/ken_45.png",
    "images/ken_46.png",
    "images/ken_47.png",//沖縄
];
 //不正解の県名配列
const kenname01 = ["岩手県","宮城県","秋田県","山形県","福島県"];
 //東北地方
const kenname02 = ["岩手県","宮城県","秋田県","山形県","福島県"];
const kenname03 = ["青森県","宮城県","秋田県","山形県","福島県"];
const kenname04 = ["青森県","岩手県","秋田県","山形県","福島県"];
const kenname05 = ["岩手県","宮城県","青森県","山形県","福島県"];
const kenname06 = ["岩手県","宮城県","秋田県","青森県","福島県"];
const kenname07 = ["岩手県","宮城県","秋田県","山形県","青森県"];
//関東地方
const kenname08 = ["栃木県","群馬県","埼玉県","千葉県","東京府","神奈川県"];
const kenname09 = ["茨城県","群馬県","埼玉県","千葉県","東京府","神奈川県"];
const kenname10 = ["栃木県","茨城県","埼玉県","千葉県","東京府","神奈川県"];
const kenname11 = ["栃木県","群馬県","茨城県","千葉県","東京府","神奈川県"];
const kenname12 = ["栃木県","群馬県","埼玉県","茨城県","東京府","神奈川県"];
const kenname13 = ["栃木県","群馬県","埼玉県","千葉県","茨城県","神奈川県"];
const kenname14 = ["栃木県","群馬県","埼玉県","千葉県","東京府","茨城県"];
//中部地方
const kenname15 = ["富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県"];
const kenname16 = ["新潟県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県"];
const kenname17 = ["富山県","新潟県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県"];
const kenname18 = ["富山県","石川県","新潟県","山梨県","長野県","岐阜県","静岡県","愛知県"];
const kenname19 = ["富山県","石川県","福井県","新潟県","長野県","岐阜県","静岡県","愛知県"];
const kenname20 = ["富山県","石川県","福井県","山梨県","新潟県","岐阜県","静岡県","愛知県"];
const kenname21 = ["富山県","石川県","福井県","山梨県","長野県","新潟県","静岡県","愛知県"];
const kenname22 = ["富山県","石川県","福井県","山梨県","長野県","岐阜県","新潟県","愛知県"];
const kenname23 = ["富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","新潟県"];
//近畿地方
const kenname24 = ["滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県"];
const kenname25 = ["三重県","京都府","大阪府","兵庫県","奈良県","和歌山県"];
const kenname26 = ["三重県","滋賀県","大阪府","兵庫県","奈良県","和歌山県"];
const kenname27 = ["三重県","滋賀県","京都府","兵庫県","奈良県","和歌山県"];
const kenname28 = ["三重県","滋賀県","京都府","大阪府","奈良県","和歌山県"];
const kenname29 = ["三重県","滋賀県","京都府","大阪府","兵庫県","和歌山県"];
const kenname30 = ["三重県","滋賀県","京都府","大阪府","兵庫県","奈良県"];
//中国地方
const kenname31 = ["島根県","岡山県","広島県","山口県"];
const kenname32 = ["鳥取県","岡山県","広島県","山口県"];
const kenname33 = ["島根県","鳥取県","広島県","山口県"];
const kenname34 = ["島根県","岡山県","鳥取県","山口県"];
const kenname35 = ["島根県","岡山県","広島県","鳥取県"];
//四国地方
const kenname36 = ["香川県","愛媛県","高知県"];
const kenname37 = ["徳島県","愛媛県","高知県"];
const kenname38 = ["香川県","徳島県","高知県"];
const kenname39 = ["香川県","愛媛県","徳島県"];
//九州地方
const kenname40 = ["佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
const kenname41 = ["福岡県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
const kenname42 = ["佐賀県","福岡県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];
const kenname43 = ["佐賀県","長崎県","福岡県","大分県","宮崎県","鹿児島県","沖縄県"];
const kenname44 = ["佐賀県","長崎県","熊本県","福岡県","宮崎県","鹿児島県","沖縄県"];
const kenname45 = ["佐賀県","長崎県","熊本県","大分県","福岡県","鹿児島県","沖縄県"];
const kenname46 = ["佐賀県","長崎県","熊本県","大分県","宮崎県","福岡県","沖縄県"];
const kenname47 = ["佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","福岡県"];
//ランダムでボタンに県名を表示させるための配列
const btndata = ["btnanswerC1","btnanswerC2","btnanswerC3"];
//ランダムと正解判定のための変数
let $$randbtn = "";
//ランダムに取得した画像の場所
let $$randimg = "";
document.getElementById("strbtntext").style.display = "none";//開始ボタン非表示
document.getElementById("btnanswer").style.visibility = "hidden";//初めは解答ボタン非表示
document.getElementById("btncorrect").style.visibility = "hidden";//初めは正解ボタン非表示
document.getElementById("btnlncorrect").style.visibility = "hidden";//初めは不正解ボタン非表示
document.getElementById("checkAnswer_align").style.display = "none";//答え合わせ移行ボタン非表示
document.getElementById("probleNum_js").textContent = kenimgdata.length + "問中";//問題の数を表示
document.getElementById("answerBox").style.display = "none";//答え合わせを非表示
document.getElementById("correctAns").style.display = "none";//最後の正解した問題数非表示
document.getElementById("home").style.display = "none";//ホームボタン非表示
document.getElementById("endHome").style.display = "none";//最後のホームボタン非表示
let $$kesu = document.getElementsByClassName("correctNum0");//問題数非表示
$$kesu[0].style.display = "none";
let $kesu = document.getElementsByClassName("tihouSelection");//地方選択ボタンを非表示
for(let i = 0; i < $kesu.length; i++) {
    $kesu[i].style.display = "none";
    }
    document.getElementById("return_css").style.display = "none";//戻るボタン非表示

//正解数を数える変数
let x = 0;
//答えた問題を数える変数
let xx = 0; 
//答えた問題の条件分岐
let z = 0;
//ホーム画面
function home(){
    btnnull()
    document.getElementById("strbtntext").style.display = "none";
    document.getElementById("tihou_jsc").style.display = "block";//地方３択問題を表示
    document.getElementById("japan_jsc").style.display = "block";//日本３択問題を表示
    document.getElementById("correctAns").style.display = "none";
    document.getElementById("btncorrect").style.visibility = "hidden";//正解ボタン非表示
    document.getElementById("btnlncorrect").style.visibility = "hidden"
    document.getElementById("endHome").style.display = "none";
    document.getElementById("btnanswer").style.visibility = "hidden";
    document.getElementById("answerBox").style.display = "none";
    document.getElementById("home").style.display = "none";
    let $$kesu = document.getElementsByClassName("correctNum0");//問題数非表示
    document.body.style.backgroundImage ="url(home.png)";//背景画像変更
    $$kesu[0].style.display = "none";
    kendata_d = [];
    kenimgdata = [];
    kenanswer = [];
    answerDat = [];
    let imgLost = document.getElementById("kenimg");
    //県の画像のimg要素を削除
    imgLost.removeChild(imgLost.firstElementChild);
    let app = document.getElementById("answerBox");
    let a = 0;
    //答え合わせのtableタグを全て削除
    while(a<xx){
    app.removeChild(app.firstElementChild);
    a++
    }
   
    x = 0;
    document.getElementById("correctNum_js").textContent = x;//正解した問題を０に戻す
    xx = 0; 
    z = 0;
    yy= 1;
    


}
//地方選択画面表示
function tihou(){
    document.getElementById("tihou_jsc").style.display = "none";//地方３択問題を非表示
    document.getElementById("japan_jsc").style.display = "none";//日本３択問題を非表示
    let $kesu = document.getElementsByClassName("tihouSelection");
    for(let i = 0; i < $kesu.length; i++) {
        $kesu[i].style.display = "block";
        }
        document.getElementById("return_css").style.display = "block";
        document.body.style.backgroundImage ="url(home2.png)";//背景画像変更
}
//地方選択画面からホーム画面に戻るボタン
function returnBtn(){
    for(let i = 0; i < $kesu.length; i++) {
        $kesu[i].style.display = "none";
        }
        document.getElementById("tihou_jsc").style.display = "block";
        document.getElementById("japan_jsc").style.display = "block";
        document.getElementById("return_css").style.display = "none";
        document.body.style.backgroundImage ="url(home.png)";//背景画像変更
}
//ホーム画面終わり
//地方問題選択時の処理
function tihouLost(){
let $kesu = document.getElementsByClassName("tihouSelection");
  for(let i = 0; i < $kesu.length; i++) {
      $kesu[i].style.display = "none";
      }
      document.getElementById("strbtntext").style.display = "block";//開始ボタン表示
      document.getElementById("return_css").style.display = "none";//戻るボタン非表示
      document.getElementById("probleNum_js").textContent = kenimgdata.length + "問中";//問題の数を表示
      document.getElementById("home").style.display = "block";
        }
//北海道
function hokkaidou(){
    kendata_d = [];
    kenimgdata = kenimgAllData.slice(0,1);
    z=0;
    tihouLost();
}
 //東方問題
function touhoku(){
      kendata_d = [];
      kenimgdata = kenimgAllData.slice(1,7);
      z = 5;
      tihouLost();
  }
//関東問題
function kanntou(){
    kendata_d = [];
    kenimgdata = kenimgAllData.slice(7,14);
    z = 6;
    tihouLost();
}
//中部問題
function tyuubu(){
    kendata_d = [];
    kenimgdata = kenimgAllData.slice(14,23);
    z = 8;
    tihouLost();
}
//近畿問題
function kinki(){
    kendata_d = [];
    kenimgdata = kenimgAllData.slice(23,30);
    z = 6;
    tihouLost();
}
//中国問題
function tyuugoku(){
    kendata_d = [];
    kenimgdata = kenimgAllData.slice(30,35);
    z = 4;
    tihouLost();
}
//四国問題
function sikoku(){
    kendata_d = [];
    kenimgdata = kenimgAllData.slice(35,39);
    z = 3;
    tihouLost();
}
//九州地方
function kyuusyuu(){
    kendata_d = [];
    kenimgdata = kenimgAllData.slice(39,47);
    z = 7;
    tihouLost();
}
//日本問題
function japanProblem(){
    kendata_d = [];
    kenimgdata = kenimgAllData;
  
    z = 46
    document.getElementById("tihou_jsc").style.display = "none";//地方３択問題を非表示
    document.getElementById("japan_jsc").style.display = "none";//日本３択問題を非表示
    tihouLost();
}

//!問題を作り出してる処理開始！//

//解答ボタンテキスト表示関数
function  btnnn(ken,kenl){
//３つのボタンに答えの県のの名前をランダム表示
  let $randb = Math.floor(Math.random()*btndata.length);
  $$randbtn = btndata[$randb];
 let $btnanswer = document.getElementById($$randbtn);
 $btnanswer.textContent = ken;
 //残りの二つのボタンに県名をランダムに表示
 if($$randbtn=="btnanswerC1"){    //ボタン１だった場合
     let $randken1 = "";
     let $randken2 = "";
     //ランダムで県名が被った場合はもう一度ルーブで処理
     while($randken1==$randken2){
     let $btnanswerC2 = document.getElementById("btnanswerC2");
     let $randk = Math.floor(Math.random()*kenl.length);
     $randken1 = kenl[$randk];
     $btnanswerC2.textContent = $randken1;

     let $btnanswerC3 = document.getElementById("btnanswerC3");
      $randk = Math.floor(Math.random()*kenl.length);
     $randken2 = kenl[$randk];
     $btnanswerC3.textContent = $randken2;
     }
 }else if($$randbtn=="btnanswerC2"){
     let $randken1 = "";
     let $randken2 = "";
     while($randken1==$randken2){
     let $btnanswerC1 = document.getElementById("btnanswerC1");
     let $randk = Math.floor(Math.random()*kenl.length);
      $randken1 = kenl[$randk];
     $btnanswerC1.textContent = $randken1;

     let $btnanswerC3 = document.getElementById("btnanswerC3");
      $randk = Math.floor(Math.random()*kenl.length);
      $randken2 = kenl[$randk];
     $btnanswerC3.textContent = $randken2;
     }
 }else if($$randbtn=="btnanswerC3"){
     let $randken1 = "";
     let $randken2 = "";
     while($randken1==$randken2){
     let $btnanswerC1 = document.getElementById("btnanswerC1")
     let $randk = Math.floor(Math.random()*kenl.length);
     $randken1 = kenl[$randk];
     $btnanswerC1.textContent = $randken1;

     let $btnanswerC2 = document.getElementById("btnanswerC2");
      $randk = Math.floor(Math.random()*kenl.length);
      $randken2 = kenl[$randk];
     $btnanswerC2.textContent = $randken2;
     }
 }
}
//開始ボタンクリック時県画像を表示
let $target = document.createElement("img");
//画像表示切り替えとボタンに正解を表示する関数
function strbtn(){
    document.getElementById("kenimg").style.display = "block";
    document.getElementById("btnanswer").style.display = "block";
    $$kesu[0].style.display = "block";//問題数表示
    $$kesu[0].style.display = "flex";//flexboxに切り替え
    document.getElementById("btnlncorrect").style.display = "block";
    document.getElementById("btncorrect").style.display = "block";
    document.getElementById("btnlncorrect").style.visibility = "hidden";
    document.getElementById("btncorrect").style.visibility = "hidden";

    //ランダムに画像データを参照
    let $rand = Math.floor(Math.random()*kenimgdata.length);
    $$randimg = kenimgdata[$rand];
    $target.src = $$randimg;//画像の場所を指定
    $target.width = "400";
    let $kenimg = document.getElementById("kenimg");
    $kenimg.appendChild($target);//img要素を追加

    document.getElementById("strbtntext").style.display = "none";//開始ボタンの非表示処理
    document.getElementById("btnanswer").style.visibility = "visible";//解答ボタンを表示(displayだとdivが消える？)
    
    //問題に出た要素をkenimg配列から削除していく処理
    if($$randimg=="images/ken_01.png"){
        btnnn("北海道",kenname01);//引数２つをbtnnn関数に渡す
     kendata_d = kenimgdata.filter(item => (item.match(/01/))==null);//02以外の要素を抽出
     kenimgdata = kendata_d;                                   //抽出した要素を新しく代入
     kenanswer[0] ="北海道";
     kenanswer[1] ="images/ken_01.png";
       }else if($$randimg=="images/ken_02.png"){
        btnnn("青森県",kenname02);
        kendata_d = kenimgdata.filter(item => (item.match(/02/))==null);
        kenimgdata = kendata_d;                                         
        kenanswer[0] ="青森県";
        kenanswer[1] ="images/ken_02.png";
       }else if($$randimg=="images/ken_03.png"){
        btnnn("岩手県",kenname03);
        kendata_d = kenimgdata.filter(item => (item.match(/03/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="岩手県";
        kenanswer[1] ="images/ken_03.png";
       }else if($$randimg=="images/ken_04.png"){
        btnnn("宮城県",kenname04);
        kendata_d = kenimgdata.filter(item => (item.match(/04/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="宮城県";
        kenanswer[1] ="images/ken_04.png";
       }else if($$randimg=="images/ken_05.png"){
        btnnn("秋田県",kenname05);
        kendata_d = kenimgdata.filter(item => (item.match(/05/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="秋田県";
        kenanswer[1] ="images/ken_05.png";
       }else if($$randimg=="images/ken_06.png"){
        btnnn("山形県",kenname06);
        kendata_d = kenimgdata.filter(item => (item.match(/06/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="山形県";
        kenanswer[1] ="images/ken_06.png";
       }else if($$randimg=="images/ken_07.png"){
        btnnn("福島県",kenname07);
        kendata_d = kenimgdata.filter(item => (item.match(/07/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="福島県";
        kenanswer[1] ="images/ken_07.png";
       }else if($$randimg=="images/ken_08.png"){
        btnnn("茨城県",kenname08);
        kendata_d = kenimgdata.filter(item => (item.match(/08/))==null);
        kenimgdata = kendata_d;  
        kenanswer[0] ="茨城県";
        kenanswer[1] ="images/ken_08.png";
       }else if($$randimg=="images/ken_09.png"){
        btnnn("栃木県",kenname09);
        kendata_d = kenimgdata.filter(item => (item.match(/09/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="栃木県";
        kenanswer[1] ="images/ken_09.png";
       }else if($$randimg=="images/ken_10.png"){
        btnnn("群馬県",kenname10);
        kendata_d = kenimgdata.filter(item => (item.match(/10/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="群馬県";
        kenanswer[1] ="images/ken_10.png";
       }else if($$randimg=="images/ken_11.png"){
        btnnn("埼玉県",kenname11);
        kendata_d = kenimgdata.filter(item => (item.match(/11/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="埼玉県";
        kenanswer[1] ="images/ken_11.png";
       }else if($$randimg=="images/ken_12.png"){
        btnnn("千葉県",kenname12);
        kendata_d = kenimgdata.filter(item => (item.match(/12/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="千葉県";
        kenanswer[1] ="images/ken_12.png";
       }else if($$randimg=="images/ken_13.png"){
        btnnn("東京都",kenname13);
        kendata_d = kenimgdata.filter(item => (item.match(/13/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="東京都";
        kenanswer[1] ="images/ken_13.png";
       }else if($$randimg=="images/ken_14.png"){
        btnnn("神奈川県",kenname14);
        kendata_d = kenimgdata.filter(item => (item.match(/14/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="神奈川県";
        kenanswer[1] ="images/ken_14.png";
       }else if($$randimg=="images/ken_15.png"){
        btnnn("新潟県",kenname15);
        kendata_d = kenimgdata.filter(item => (item.match(/15/))==null);
        kenimgdata = kendata_d;   
        kenanswer[0] ="新潟県";
        kenanswer[1] ="images/ken_15.png";                                       
       }else if($$randimg=="images/ken_16.png"){
        btnnn("富山県",kenname16);
        kendata_d = kenimgdata.filter(item => (item.match(/16/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="富山県";
        kenanswer[1] ="images/ken_16.png";       
       }else if($$randimg=="images/ken_17.png"){
        btnnn("石川県",kenname17);
        kendata_d = kenimgdata.filter(item => (item.match(/17/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="石川県";
        kenanswer[1] ="images/ken_17.png";       
       }else if($$randimg=="images/ken_18.png"){
        btnnn("福井県",kenname18);
        kendata_d = kenimgdata.filter(item => (item.match(/18/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="福井県";
        kenanswer[1] ="images/ken_18.png";       
       }else if($$randimg=="images/ken_19.png"){
        btnnn("山梨県",kenname19);
        kendata_d = kenimgdata.filter(item => (item.match(/19/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="山梨県";
        kenanswer[1] ="images/ken_19.png";       
       }else if($$randimg=="images/ken_20.png"){
        btnnn("長野県",kenname20);
        kendata_d = kenimgdata.filter(item => (item.match(/20/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="長野県";
        kenanswer[1] ="images/ken_20.png";       
       }else if($$randimg=="images/ken_21.png"){
        btnnn("岐阜県",kenname21);
        kendata_d = kenimgdata.filter(item => (item.match(/21/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="岐阜県";
        kenanswer[1] ="images/ken_21.png";       
       }else if($$randimg=="images/ken_22.png"){
        btnnn("静岡県",kenname22);
        kendata_d = kenimgdata.filter(item => (item.match(/22/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="静岡県";
        kenanswer[1] ="images/ken_22.png";       
       }else if($$randimg=="images/ken_23.png"){
        btnnn("愛知県",kenname23);
        kendata_d = kenimgdata.filter(item => (item.match(/23/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="愛知県";
        kenanswer[1] ="images/ken_23.png";       
       }else if($$randimg=="images/ken_24.png"){
        btnnn("三重県",kenname24);
        kendata_d = kenimgdata.filter(item => (item.match(/24/))==null);
        kenimgdata = kendata_d;      
        kenanswer[0] ="三重県";
        kenanswer[1] ="images/ken_24.png";                                           
       }else if($$randimg=="images/ken_25.png"){
        btnnn("滋賀県",kenname25);
        kendata_d = kenimgdata.filter(item => (item.match(/25/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="滋賀県";
        kenanswer[1] ="images/ken_25.png";       
       }else if($$randimg=="images/ken_26.png"){
        btnnn("京都府",kenname26);
        kendata_d = kenimgdata.filter(item => (item.match(/26/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="京都府";
        kenanswer[1] ="images/ken_26.png";       
       }else if($$randimg=="images/ken_27.png"){
        btnnn("大阪府",kenname27);
        kendata_d = kenimgdata.filter(item => (item.match(/27/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="大阪府";
        kenanswer[1] ="images/ken_27.png";       
       }else if($$randimg=="images/ken_28.png"){
        btnnn("兵庫県",kenname28);
        kendata_d = kenimgdata.filter(item => (item.match(/28/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="兵庫県";
        kenanswer[1] ="images/ken_28.png";       
       }else if($$randimg=="images/ken_29.png"){
        btnnn("奈良県",kenname29);
        kendata_d = kenimgdata.filter(item => (item.match(/29/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="奈良県";
        kenanswer[1] ="images/ken_29.png";       
       }else if($$randimg=="images/ken_30.png"){
        btnnn("和歌山県",kenname30);
        kendata_d = kenimgdata.filter(item => (item.match(/30/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="和歌山県";
        kenanswer[1] ="images/ken_30.png";       
       }else if($$randimg=="images/ken_31.png"){
        btnnn("鳥取県",kenname31);
        kendata_d = kenimgdata.filter(item => (item.match(/31/))==null);
        kenimgdata = kendata_d;     
        kenanswer[0] ="鳥取県";
        kenanswer[1] ="images/ken_31.png";                                           
       }else if($$randimg=="images/ken_32.png"){
        btnnn("島根県",kenname32);
        kendata_d = kenimgdata.filter(item => (item.match(/32/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="島根県";
        kenanswer[1] ="images/ken_32.png";       
       }else if($$randimg=="images/ken_33.png"){
        btnnn("岡山県",kenname33);
        kendata_d = kenimgdata.filter(item => (item.match(/33/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="岡山県";
        kenanswer[1] ="images/ken_33.png";       
       }else if($$randimg=="images/ken_34.png"){
        btnnn("広島県",kenname34);
        kendata_d = kenimgdata.filter(item => (item.match(/34/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="広島県";
        kenanswer[1] ="images/ken_34.png";       
       }else if($$randimg=="images/ken_35.png"){
        btnnn("山口県",kenname35);
        kendata_d = kenimgdata.filter(item => (item.match(/35/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="山口県";
        kenanswer[1] ="images/ken_35.png";       
       }else if($$randimg=="images/ken_36.png"){
        btnnn("徳島県",kenname36);
        kendata_d = kenimgdata.filter(item => (item.match(/36/))==null);
        kenimgdata = kendata_d;    
        kenanswer[0] ="徳島県";
        kenanswer[1] ="images/ken_36.png";                                            
       }else if($$randimg=="images/ken_37.png"){
        btnnn("香川県",kenname37);
        kendata_d = kenimgdata.filter(item => (item.match(/37/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="香川県";
        kenanswer[1] ="images/ken_37.png";       
       }else if($$randimg=="images/ken_38.png"){
        btnnn("愛媛県",kenname38);
        kendata_d = kenimgdata.filter(item => (item.match(/38/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="愛知県";
        kenanswer[1] ="images/ken_38.png";       
       }else if($$randimg=="images/ken_39.png"){
        btnnn("高知県",kenname39);
        kendata_d = kenimgdata.filter(item => (item.match(/39/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="高知県";
        kenanswer[1] ="images/ken_39.png";       
       } if($$randimg=="images/ken_40.png"){
        btnnn("福岡県",kenname40);
        kendata_d = kenimgdata.filter(item => (item.match(/40/))==null);
        kenimgdata = kendata_d;     
        kenanswer[0] ="福岡県";
        kenanswer[1] ="images/ken_40.png";                                            
       }else if($$randimg=="images/ken_41.png"){
        btnnn("佐賀県",kenname41);
        kendata_d = kenimgdata.filter(item => (item.match(/41/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="佐賀県";
        kenanswer[1] ="images/ken_41.png";       
       }else if($$randimg=="images/ken_42.png"){
        btnnn("長崎県",kenname42);
        kendata_d = kenimgdata.filter(item => (item.match(/42/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="長崎県";
        kenanswer[1] ="images/ken_42.png";       
       }else if($$randimg=="images/ken_43.png"){
        btnnn("熊本県",kenname43);
        kendata_d = kenimgdata.filter(item => (item.match(/43/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="熊本県";
        kenanswer[1] ="images/ken_43.png";       
       }else if($$randimg=="images/ken_44.png"){
        btnnn("大分県",kenname44);
        kendata_d = kenimgdata.filter(item => (item.match(/44/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="大分県";
        kenanswer[1] ="images/ken_44.png";       
       }else if($$randimg=="images/ken_45.png"){
        btnnn("宮崎県",kenname45);
        kendata_d = kenimgdata.filter(item => (item.match(/45/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="宮崎県";
        kenanswer[1] ="images/ken_45.png";       
       }else if($$randimg=="images/ken_46.png"){
        btnnn("鹿児島県",kenname46);
        kendata_d = kenimgdata.filter(item => (item.match(/46/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="鹿児島県";
        kenanswer[1] ="images/ken_46.png";       
       }else if($$randimg=="images/ken_47.png"){
        btnnn("沖縄県",kenname47);
        kendata_d = kenimgdata.filter(item => (item.match(/47/))==null);
        kenimgdata = kendata_d;
        kenanswer[0] ="沖縄県";
        kenanswer[1] ="images/ken_47.png";       
       }
}
//!問題を作り出してる処理終わり！//

//解答ボタンを押した時の処理
function btn1($onbtn){
    //解答ボタン無効化
    document.getElementById("btnanswerC1").disabled = true;
    document.getElementById("btnanswerC2").disabled = true;
    document.getElementById("btnanswerC3").disabled = true;
   
    //正解時の処理（randbtnは正解の県名が表示されたボタン）
        if($onbtn==$$randbtn){
            document.getElementById("btncorrect").style.visibility = "visible";//正解ボタン表示
            document.getElementById("btncorrect").style.display = "block";
            kenanswer[2] = "正解";
            onAppend();
           
    }else{ //不正解時
        document.getElementById("btnlncorrect").style.visibility = "visible";//不正解ボタン表示
        document.getElementById("btnlncorrect").style.display = "block";
        kenanswer[2] = "不正解";
            onAppend();
    } 
    }
    //解答ボタン無効化解除
function btnnull(){
     document.getElementById("btnanswerC1").disabled = false;
     document.getElementById("btnanswerC2").disabled = false;
     document.getElementById("btnanswerC3").disabled = false;
    
    }

function cor(){
    if(xx<z){
    document.getElementById("btncorrect").style.visibility = "hidden";//正解ボタン非表示
    ++x;
    document.getElementById("correctNum_js").textContent = x;
    ++xx;
    btnnull();
    strbtn();
    
}else {
    //問題終わりに終了ボタンを表示
    document.getElementById("kenimg").style.display = "none";
    document.getElementById("btnanswer").style.display = "none";
    document.getElementById("btncorrect").style.display = "none";
    document.getElementById("checkAnswer_align").style.display = "block";
    ++x;
    document.getElementById("correctNum_js").textContent = x;
    btnnull();
    ++xx;
    document.getElementById("home").style.display = "none";
}

}
function lnc(){
    if(xx<z){
    document.getElementById("btnlncorrect").style.visibility = "hidden";//不正解ボタン非表示
    
    ++xx;
    btnnull();
    strbtn();
    
    }else {
        //問題終わりに終了ボタンを表示
        document.getElementById("kenimg").style.display = "none";
        document.getElementById("btnanswer").style.display = "none";
        document.getElementById("btnlncorrect").style.display = "none";
        document.getElementById("checkAnswer_align").style.display = "block";
        btnnull();
        ++xx;
        document.getElementById("home").style.display = "none";
    }
}


//idを変えるための変数
let y = 0;
//解答した問題番号
let yy = 1;
//答えた問題を追加していく関数
function onAppend(){
   
    let app = document.getElementById("answerBox");//追加する要素(idなどの場所)を選択
    let element = document.createElement("table");//追加するタグなどを決める
    let elementTr =document.createElement("tr");
    let elementTh =document.createElement("th");
    let elementTr2 =document.createElement("tr")
    let img = document.createElement("img");
    let elementTh2 =document.createElement("th");
    let elementTr3 =document.createElement("tr");
    let elementTh3 =document.createElement("th");
    let elementTh4 = document.createElement("th");

    app.appendChild(element);//追加するメゾット
   element.border="1"
//追加したidの中にタグを追加する
    element.id = "Answer_1"+y;
    let app2 = document.getElementById("Answer_1"+y);
    app2.appendChild(elementTr);//element(tableタグ)の中にelemenTr(trタグ)を追加する

    elementTr.id = "aNswer_2"+y;
    let app3 = document.getElementById("aNswer_2"+y);
    app3.appendChild(elementTh);
    elementTh.colSpan="2";
    elementTh.textContent=yy;

    app2.appendChild(elementTr2);
    
    elementTr2.id = "anSwer_3"+y;
    let app7= document.getElementById("anSwer_3"+y);
    app7.appendChild(elementTh4);
    
    elementTh4.id="ansWer_6"+y;
    let app4 = document.getElementById("ansWer_6"+y);
    app4.appendChild(img).height=200;
    img.src = kenanswer[1];
    app7.appendChild(elementTh2);
    elementTh2.textContent=kenanswer[0];
   
    app2.appendChild(elementTr3);
    elementTr3.id ="answEr_5"+y;
    let app6 = document.getElementById("answEr_5"+y);
    app6.appendChild(elementTh3);
    elementTh3.colSpan="2";
    elementTh3.textContent=kenanswer[2];

    //正解、不正解表示のidを集める
    answerDat.splice(y,1,"answEr_5"+y);
    console.log(answerDat);
    y++;
    yy++;

}
//答え合わせを表示させる関数
function checkAnswer(){
    document.getElementById("answerBox").style.display = "block";
    document.getElementById("checkAnswer_align").style.display = "none";
    document.getElementById("correctAns").style.display = "block";
    document.getElementById("endHome").style.display = "block";
    z++//問題数より１少ないので１プラスする
    document.getElementById("correctAns").textContent = z+"問中"+x+"問正解！";
    let ans =document.getElementsByClassName("correctNum0");
    ans[0].style.display = "none";

    //正解、不正解の色分けループ処理
    for (const elem of answerDat) {
        if(document.getElementById(elem).textContent =="正解"){
            document.getElementById(elem).style.backgroundColor='#ff0000';
        }else{
            document.getElementById(elem).style.backgroundColor='#344ceb';
        }
      }
}