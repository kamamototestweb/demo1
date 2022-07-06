document.getElementById("text_1").style.display = "none";
document.getElementById("text_2").style.display = "none";
document.getElementById("Btn").style.display = "none";
document.getElementById("wrapper").style.display = "none";
document.getElementById("thankBtn").style.display = "none";//感謝ボタン
document.getElementById("scaredBtn").style.display = "none";//怖いボタン
document.getElementById("loveBtn").style.display = "none";//恋愛ボタン
document.getElementById("sadBtn").style.display = "none";//悲しいボタン
document.getElementById("friendshipBtn").style.display = "none";//友情ボタン
document.getElementById("hopeBtn").style.display = "none";//希望ボタン
document.getElementById("farewellBtn").style.display = "none";//別れボタン
document.getElementById("happyBtn").style.display = "none";//幸せボタン
document.getElementById("springBtn").style.display = "none";//春ボタン
document.getElementById("springBtn_Fjs").style.display = "none";
document.getElementById("autumnBtn").style.display = "none";//秋ボタン
document.getElementById("autumnBtn_Fjs").style.display = "none";
document.getElementById("summerBtn").style.display = "none";//夏ボタン
document.getElementById("winterBtn").style.display = "none";//冬ボタン
document.getElementById("hanaName").style.display = "none";
document.getElementById("floweday").style.display = "none";
document.getElementById("sunWin_Fjs").style.display = "none";
document.getElementById("hanaimgDiv").style.display = "none";
document.getElementById("flowering").style.display = "none";
document.getElementById("floweday").style.display = "none";
document.getElementById("end").style.display = "none";
let x = 0;//感情ボタンの識別
$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:2000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});
//占い開始関数
function uranauBtn_js(){
    document.getElementById("uranauBtn").style.display = "none";//占いボタン
    document.querySelector("h1").style.display = "none";//セレクターで要素(最初の1つ)を取得
    $('.wrapper').fadeOut(1000);//１秒で消す
    $('#text_1').fadeIn(3000);
	let Btn = document.getElementById("Btn");
	Btn.style.display = "block";
	Btn.style.display = "flex";
    document.getElementById("text_1").style.display = "block"
    document.getElementById("thankBtn").style.display = "block";//感謝ボタン
    document.getElementById("scaredBtn").style.display = "block";//怖いボタン
    document.getElementById("loveBtn").style.display = "block";//恋愛ボタン
    document.getElementById("sadBtn").style.display = "block";//悲しいボタン
    document.getElementById("friendshipBtn").style.display = "block";//友情ボタン
    document.getElementById("hopeBtn").style.display = "block";//希望ボタン
    document.getElementById("farewellBtn").style.display = "block";//別れボタン
    document.getElementById("happyBtn").style.display = "block";//幸せボタン
    
}
//感情ボタンクリック時非表示関数
function emotionsBtn(a,b){
    $('#thankBtn').fadeOut(2000);
    $('#text_1').fadeOut(2000);
    $('#scaredBtn').fadeOut(2000);
    $('#loveBtn').fadeOut(2000);
    $('#sadBtn').fadeOut(2000);
    $('#friendshipBtn').fadeOut(2000);
    $('#hopeBtn').fadeOut(2000);
    $('#farewellBtn').fadeOut(2000);
    $('#happyBtn').fadeOut(2000);
    let fn = function() {

		let app = document.getElementById("sunWin_Fjs");
		let app2 = document.getElementById("winterBtn");
		let element = document.createElement("button");
		app.insertBefore(element,app2);//夏と冬のボタンの間にbutton要素を追加
		element.id = a;
		let btn2 = document.getElementById(a);
		btn2.style.display = "none";
		btn2.textContent = b
		$('#'+a).fadeIn(8000);
		
		$('#text_2').fadeIn(10000);
		$('#springBtn').fadeIn(6000);
		$('#summerBtn').fadeIn(6000);
		$('#winterBtn').fadeIn(6000);
		$('#autumnBtn').fadeIn(6000);
      };
      let tm = 500;
      setTimeout(fn,tm);
      //document.getElementById("springBtn").style.display = "block";//春ボタン
	  let springBtn_Fjs = document.getElementById("springBtn_Fjs");
	  springBtn_Fjs.style.display = "block";
	  springBtn_Fjs.style.display = "flex";

      //document.getElementById("summerBtn").style.display = "block";//夏ボタン
	  //document.getElementById("winterBtn").style.display = "block";//冬ボタン
	  let sunWin_Fjs = document.getElementById("sunWin_Fjs");
	  sunWin_Fjs.style.display = "block";
	  sunWin_Fjs.style.display = "flex";
    
      //document.getElementById("autumnBtn").style.display = "block";//秋ボタン
	  let autumnBtn_Fjs = document.getElementById("autumnBtn_Fjs");
	  autumnBtn_Fjs.style.display = "block";
	  autumnBtn_Fjs.style.display = "flex";
    
} 
function thank_js(){
    emotionsBtn("thankBtn2","感謝");
	x = 1;
}
function scared_js(){
    emotionsBtn("scaredBtn2","怖い");
	x = 2;
}
function love_js(){
    emotionsBtn("loveBtn2","恋愛");
	x = 3;
}
function sad_js(){
    emotionsBtn("sadBtn2","悲しい");
	x = 4;
}
function friendship_js(){
    emotionsBtn("friendshipBtn2","友情");
	x = 5;
}
function hope_js(){
    emotionsBtn("hopeBtn2","希望");
	x = 6;
}
function farewell_js(){
    emotionsBtn("farewellBtn2","別れ");
	x = 7;
}
function happy_js(){
    emotionsBtn("happyBtn2","幸せ");
	x = 8;
}

let seasonimg = "seasonimg/default.png"


//動く画像を切れかえるために関数にした
function seasonIMG(){
particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":10,//この数値を変更すると桜の数が増減できる
			"density":{
				"enable":true,
				"value_area":1121.6780303333778
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",//形状は画像を指定
			"stroke":{
				"width":0,
			},
			"image":{
				"src":seasonimg,//【重要】画像を指定！
				"width":120,
				"height":120
			}
		},
		"opacity":{
			"value":0.06409588744762158,
			"random":true,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":8.011985930952697,
			"random":true,//サイズをランダムに
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom-right",//右下に向かって落ちる
			"random":false,//動きはランダムにしない
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
			"attract":{
				"enable":false,
				"rotateX":281.9177489524316,
				"rotateY":127.670995809726
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":false
});
}
function seasonBtnLost(){
	document.getElementById("text_2").style.display = "none";
	document.getElementById("Btn").style.display = "none";
    document.getElementById("springBtn").style.display = "none";//春ボタン
    document.getElementById("springBtn_Fjs").style.display = "none";
    document.getElementById("autumnBtn").style.display = "none";//秋ボタン
    document.getElementById("autumnBtn_Fjs").style.display = "none";
    document.getElementById("summerBtn").style.display = "none";//夏ボタン
    document.getElementById("winterBtn").style.display = "none";//冬ボタン
    document.getElementById("sunWin_Fjs").style.display = "none";
}
function hanaDisplay(a,b,c,d){
	document.getElementById("end").style.display = "block";
	let hanaName = document.getElementById("hanaName")
	document.getElementById("hanaimgDiv").style.display = "block";
	let flowering = document.getElementById("flowering")
    let floweday = document.getElementById("floweday")
	let hanaimg = document.getElementById("hanaimg")

	hanaName.style.display = "block"
	hanaName.textContent = a

	flowering.style.display = "block"
	flowering.textContent = b

	floweday.style.display = "block"
	floweday.textContent = c

	hanaimg.src = d

	}


function spring_js(){
	seasonimg = "seasonimg/spring.png";
	seasonIMG()
	if(x==1){
		seasonBtnLost()
		hanaDisplay("赤いポピー「感謝」","開花時期：　 4月～6月","花持ち日数：　3日程度","lostimg/haru_1.png");	
    }else if(x==2){
		seasonBtnLost()
		hanaDisplay("アンズ「疑い」","開花時期：　 3月～4月","花持ち日数：　3日程度","lostimg/haru_2.png");
	}else if(x==3){
		seasonBtnLost()
		hanaDisplay("アザレア「恋の喜び」","開花時期：　 4月～5月","花持ち日数：　5~7日程度","lostimg/haru_3.png");
	}else if(x==4){
		seasonBtnLost()
		hanaDisplay("勿忘草「私を忘れないで」","開花時期：　 3月～5月","花持ち日数：　2~5日程度","lostimg/haru_4.png");
	}else if(x==5){
		seasonBtnLost()
		hanaDisplay("ジンチョウゲ「永遠」","開花時期：　 2月～4月","花持ち日数：　10~20日程度","lostimg/haru_5.png");
	}else if(x==6){
		seasonBtnLost()
		hanaDisplay("デイジー「希望」","開花時期：　 2月～5月","花持ち日数：　10~20日程度","lostimg/haru_6.png");
	}else if(x==7){
		seasonBtnLost()
		hanaDisplay("ハナニラ「悲しい別れ」","開花時期：　 3月～5月","花持ち日数：　 なし","lostimg/haru_7.png");
	}else if(x==8){
		seasonBtnLost()
		hanaDisplay("ピンクのチューリップ「幸福」","開花時期：　 3月～5月","花持ち日数：　5~7日程度","lostimg/haru_8.png");
	}

}

function summer_js(){
	seasonimg = "seasonimg/summer.png";
	seasonIMG()
	if(x==1){
		seasonBtnLost();
		hanaDisplay("カンパニュラ「感謝」","開花時期：　 5月～6月","花持ち日数：　5~7日程度","lostimg/natu_1.png");	
    }else if(x==2){
		seasonBtnLost();
		hanaDisplay("ゴボウ「私にさわらないで」","開花時期：　 6月～7月","花持ち日数：　 なし","lostimg/natu_2.png");
	}else if(x==3){
		seasonBtnLost();
		hanaDisplay("ナデシコ「純愛」","開花時期：　 6月～9月","花持ち日数：　5~7日程度","lostimg/natu_3.png");
	}else if(x==4){
		seasonBtnLost();
		hanaDisplay("アサガオ「はかない恋」","開花時期：　 7月～9月","花持ち日数：　1~3ヶ月程度","lostimg/natu_4.png");
	}else if(x==5){
		seasonBtnLost();
		hanaDisplay("ヒルガオ「友達のよしみ」","開花時期：　 6月～8月","花持ち日数：　一つの花は1日","lostimg/natu_5.png");
	}else if(x==6){
		seasonBtnLost();
		hanaDisplay("カルミア「大きな希望」","開花時期：　 5月～6月","花持ち日数：　 なし","lostimg/natu_6.png");
	}else if(x==7){
		seasonBtnLost();
		hanaDisplay("アツモリソウ「君を忘れない」","開花時期： 5月～6月","花持ち日数： なし","lostimg/natu_7.png");
	}else if(x==8){
		seasonBtnLost();
		hanaDisplay("クチナシ「とても幸せです」","開花時期：　 6月～7月","花持ち日数：　2~4日程度","lostimg/natu_8.png");

	}
}
function autumn_js(){
	seasonimg = "seasonimg/autumn.png";
	seasonIMG()
	if(x==1){
		seasonBtnLost();
		hanaDisplay("白いダリア「豊かな愛情」","開花時期：　 6月~11月","花持ち日数：　3~5日程度","lostimg/aki_1.png");
    }else if(x==2){
        seasonBtnLost();
		hanaDisplay("サフラン「過度をつつしめ」","開花時期：　 10月~11月","花持ち日数：　5~7日程度","lostimg/aki_2.png");
	}else if(x==3){
        seasonBtnLost();
		hanaDisplay("ギンモクセイ「初恋」","開花時期：　 9月~10月","花持ち日数：　10日程度","lostimg/aki_3.png");

	}else if(x==4){
        seasonBtnLost();
		hanaDisplay("ヒガンバナ「悲しき思い出」","開花時期：　 9月~11月","花持ち日数：　3~4日程度","lostimg/aki_4.png");
	}else if(x==5){
        seasonBtnLost();
		hanaDisplay("ススキ「心が通じる」","開花時期：　 8月~10月","花持ち日数：　7~14日程度","lostimg/aki_5.png");
	}else if(x==6){
        seasonBtnLost();
		hanaDisplay("キク「元気」","開花時期：　 9月~11月","花持ち日数：　7~14日程度","lostimg/aki_6.png");
	}else if(x==7){
        seasonBtnLost();
		hanaDisplay("シオン「君を忘れない」","開花時期：　 9月~10月","花持ち日数：　5~7日程度","lostimg/aki_7.png");
	}else if(x==8){
        seasonBtnLost();
		hanaDisplay("コスモス「愛や人生がもたらす喜び」","開花時期：　 6月~11月","花持ち日数：　5~10日程度","lostimg/aki_8.png");
	}

}

function winter_js(){
	seasonimg = "seasonimg/winter.png";
	seasonIMG()
	if(x==1){
		seasonBtnLost();
		hanaDisplay("モレア「感受性」","開花時期：　11月~4月","花持ち日数：　なし","lostimg/huyu_1.png");
	}else if(x==2){
        seasonBtnLost();
		hanaDisplay("赤いシクラメン「嫉妬」","開花時期：　 10月~4月","花持ち日数：　5~7日程度","lostimg/huyu_2.png");
	}else if(x==3){
        seasonBtnLost();
		hanaDisplay("シンビジウム「華やかな恋」","開花時期：　 12月~5月","花持ち日数：　14~30日程度","lostimg/huyu_3.png");
	}else if(x==4){
        seasonBtnLost();
		hanaDisplay("フクジュソウ「悲しき思い出」","開花時期：　 2月~3月","花持ち日数：　10~14日程度","lostimg/huyu_4.png");
	}else if(x==5){
        seasonBtnLost();
		hanaDisplay("紫のプリムラ「信頼」","開花時期：　 12月~5月","花持ち日数：　5~10日程度","lostimg/huyu_5.png");
	}else if(x==6){
        seasonBtnLost();
		hanaDisplay("ポインセチア「幸運を祈る」","開花時期：　 11月~2月","花持ち日数：　5~7日程度","lostimg/huyu_6.png");
	}else if(x==7){
        seasonBtnLost();
		hanaDisplay("ハボタン「祝福」","開花時期：　 11月~3月","花持ち日数：　なし","lostimg/huyu_7.png");
	}else if(x==8){
        seasonBtnLost();
		hanaDisplay("カネノナルキ「幸運を招く」","開花時期：　 11月~2月","花持ち日数：　なし","lostimg/huyu_8.png");
	

}
}