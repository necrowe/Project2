//Background Picture & Applications Variables
let bkrnd;
let phoneApp;
let emailApp;
let safariApp;
let instagramApp;
let venmoApp;
let spotifyApp;
let snapchatApp;
let twitterApp;
let tiktokApp;
let soundcloudApp;
let youtubeApp;

//Insta Pictures
let instaPic1;
let instaPic2;
let instaPic3;
let instaPic4;
let instaPic5;
let instaPic6;
let instaPic7;
let instaPic8;
let instaPic9;
let instaPic10;
let instaPic11;
let instaPic12;
let instaPic13;
let instaPic14;
let instaPic15;
let instaPic16;
let instaPic17;
let instaPic18;
let instaPic19;
let instaPic20;
let instaPic21;
let instaPic22;
let instaPic23;
let instaPic24;

//Spotify Screenshots
let spotifyPic1;
let spotifyPic2;
let spotifyPic3;
let spotifyPic4;
let spotifyPic5;
let spotifyPic6;
let spotifyPic7;
let spotifyPic8;
let spotifyPic9;
let spotifyPic10;
let spotifyPic11;
let spotifyPic12;
let spotifyPic13;
let spotifyPic14;
let spotifyPic15;
let spotifyPic16;
let spotifyPic17;
let spotifyPic18;
let spotifyPic19;
let spotifyPic20;
let spotifyPic21;
let spotifyPic22;
let spotifyPic23;
let spotifyPic24;

//Twitter Screenshots
let twitterPic1;
let twitterPic2;
let twitterPic3;
let twitterPic4;
let twitterPic5;
let twitterPic6;
let twitterPic7;
let twitterPic8;
let twitterPic9;
let twitterPic10;
let twitterPic11;
let twitterPic12;
let twitterPic13;

//Text Variables
let time='8:34'
let lte='LTE'
let venmo='Venmo'
let instagram='Instagram'
let spotify='Spotify'
let snapchat='Snapchat'
let twitter='Twitter'
let tiktok='TikTok'
let soundcloud='SoundCloud'
let youtube='YouTube'

//SafariInstagramandHomeButtons
var buttonHome;
var buttonInstagram;
var buttonSpotify;
var buttonTwitter;

//BinaryVariables
var binary=['0','1']
var randNumbers;

//Random Feed Photos Variables
let instaFeed=[];
let numInsta= 24

//Random Spotify Photos
let spotifyLibrary=[];
let numSpotify=24

//Random Twitter Photos
let twitterFeed=[];
let numTwitter=13





function setup() { 
  createCanvas(635, 690);
  

  //LoadApplications
  bkrnd=loadImage('assets/background.jpg');
  phoneApp=loadImage('assets/phone.png');
  emailApp=loadImage('assets/email.png');
  safariApp=loadImage('assets/safari.png');
  instagramApp=loadImage('assets/instagram.png');
  venmoApp=loadImage('assets/venmo.png');
  spotifyApp=loadImage('assets/spotify.png');
  snapchatApp=loadImage('assets/snapchat.png');
  twitterApp=loadImage('assets/twitter.png');
  tiktokApp=loadImage('assets/tiktok.png');
  soundcloudApp=loadImage('assets/soundcloud.png');
  youtubeApp=loadImage('assets/youtube.png');
  
  //LoadInstaPics
  instaPic1=loadImage('assets/instapic1.jpeg');
  instaPic2=loadImage('assets/instapic2.jpeg');
  instaPic3=loadImage('assets/instapic3.jpeg');
  instaPic4=loadImage('assets/instapic4.jpeg');
  instaPic5=loadImage('assets/instapic5.jpeg');
  instaPic6=loadImage('assets/instapic6.jpeg');
  instaPic7=loadImage('assets/instapic7.jpeg');
  instaPic8=loadImage('assets/instapic8.jpeg');
  instaPic9=loadImage('assets/instapic9.jpeg');
  instaPic10=loadImage('assets/instapic10.jpeg');
  instaPic11=loadImage('assets/instapic11.jpeg');
  instaPic12=loadImage('assets/instapic12.jpeg');
  instaPic13=loadImage('assets/instapic13.jpeg');
  instaPic14=loadImage('assets/instapic14.jpeg');
  instaPic15=loadImage('assets/instapic15.jpeg');
  instaPic16=loadImage('assets/instapic16.jpeg');
  instaPic17=loadImage('assets/instapic17.jpeg');
  instaPic18=loadImage('assets/instapic18.jpeg');
  instaPic19=loadImage('assets/instapic19.jpeg');
  instaPic20=loadImage('assets/instapic20.jpeg');
  instaPic21=loadImage('assets/instapic21.jpeg');
  instaPic22=loadImage('assets/instapic22.jpeg');
  instaPic23=loadImage('assets/instapic23.jpeg');
  instaPic24=loadImage('assets/instapic24.jpeg');
  instaFeed=[instaPic1, instaPic2, instaPic3, instaPic4, instaPic5, instaPic6, instaPic7, instaPic8, instaPic9, instaPic10, instaPic11, instaPic12, instaPic13, instaPic14, instaPic15, instaPic16, instaPic17, instaPic18, instaPic19, instaPic20, instaPic21, instaPic22, instaPic23, instaPic24]
  
  //LoadSpotifyPics
  spotifyPic1=loadImage('assets/spotify1.jpeg');
  spotifyPic2=loadImage('assets/spotify2.jpeg');
  spotifyPic3=loadImage('assets/spotify3.jpeg');
  spotifyPic4=loadImage('assets/spotify4.jpeg');
  spotifyPic5=loadImage('assets/spotify5.jpeg');
  spotifyPic6=loadImage('assets/spotify6.jpeg');
  spotifyPic7=loadImage('assets/spotify7.jpeg');
  spotifyPic8=loadImage('assets/spotify8.jpeg');
  spotifyPic9=loadImage('assets/spotify9.jpeg');
  spotifyPic10=loadImage('assets/spotify10.jpeg');
  spotifyPic11=loadImage('assets/spotify11.jpeg');
  spotifyPic12=loadImage('assets/spotify12.jpeg');
  spotifyPic13=loadImage('assets/spotify13.jpeg');
  spotifyPic14=loadImage('assets/spotify14.jpeg');
  spotifyPic15=loadImage('assets/spotify15.jpeg');
  spotifyPic16=loadImage('assets/spotify16.jpeg');
  spotifyPic17=loadImage('assets/spotify17.jpeg');
  spotifyPic18=loadImage('assets/spotify18.jpeg');
  spotifyPic19=loadImage('assets/spotify19.jpeg');
  spotifyPic20=loadImage('assets/spotify20.jpeg');
  spotifyPic21=loadImage('assets/spotify21.jpeg');
  spotifyPic22=loadImage('assets/spotify22.jpeg');
  spotifyPic23=loadImage('assets/spotify23.jpeg');
  spotifyPic24=loadImage('assets/spotify24.jpeg');
  spotifyLibrary=[spotifyPic1, spotifyPic2, spotifyPic3, spotifyPic4, spotifyPic5, spotifyPic6, spotifyPic7, spotifyPic8, spotifyPic9, spotifyPic10, spotifyPic11, spotifyPic12, spotifyPic13, spotifyPic14, spotifyPic15, spotifyPic16, spotifyPic17, spotifyPic18, spotifyPic19, spotifyPic20, spotifyPic21, spotifyPic22, spotifyPic23, spotifyPic24]
  
  //LoadSpotifyPics
  twitterPic1=loadImage('assets/twitter1.jpeg');
  twitterPic2=loadImage('assets/twitter2.jpeg');
  twitterPic3=loadImage('assets/twitter3.jpeg');
  twitterPic4=loadImage('assets/twitter4.jpeg');
  twitterPic5=loadImage('assets/twitter5.jpeg');
  twitterPic6=loadImage('assets/twitter6.jpeg');
  twitterPic7=loadImage('assets/twitter7.jpeg');
  twitterPic8=loadImage('assets/twitter8.jpeg');
  twitterPic9=loadImage('assets/twitter9.jpeg');
  twitterPic10=loadImage('assets/twitter10.jpeg');
  twitterPic11=loadImage('assets/twitter11.jpeg');
  twitterPic12=loadImage('assets/twitter12.jpeg');
  twitterPic13=loadImage('assets/twitter13.jpeg');
  twitterFeed=[twitterPic1, twitterPic2, twitterPic3, twitterPic4, twitterPic5, twitterPic6, twitterPic7, twitterPic8, twitterPic9, twitterPic10, twitterPic11, twitterPic12, twitterPic13]
  
  
  
  //CreateButtons&Whattheysay
  buttonInstagram=createButton("");
  buttonInstagram.position(267,209);
  buttonInstagram.size(30,28);
  let col = color(144, 148, 153, 0);
  buttonInstagram.style("background-color", col);
  

  buttonHome=createButton("");
  buttonHome.position(213,378);
  buttonHome.style("background-color",col);
  buttonHome.size(20,20);
  
  buttonSpotify=createButton("");
  buttonSpotify.position(310,210);
  buttonSpotify.size(30,28);
  buttonSpotify.style("background-color",col);
  
  buttonTwitter=createButton("");
  buttonTwitter.position(220,260);
  buttonTwitter.size(30,28);
  buttonTwitter.style("background-color",col);
  
  
} 






function draw() {
      if (mouseIsPressed) {
      noLoop();} 
      else {
      loop();
      }
      
      randNumbers=binary[round(random(0,1))];
      background(0);
      for(var x = 20;  x<width; x+=20){
      for(var y = 20;  y<width+75; y+=20){
      fill(random(255));
      textSize(12);
      text(randNumbers,x,y)
      }
      }
  
  

      //Background Picture
      originalBackground();
  
      //Applications & Text
      applications();

      
      //Phone Outline
      phone();
  
      //Bottom Rectangle
      bottomRectangle();
  
      //Home Button Graphic
      homebuttonGraphic();
  
  
      //Button Commands
      buttonInstagram.mousePressed(instaPhotos);
  
      buttonHome.mousePressed(HomeScreen);
  
      buttonSpotify.mousePressed(spotifyFeed);
  
      buttonTwitter.mousePressed(twitterScreenshots);
  

}

function instaPhotos(){
      
      //Binary Background
      nums();
      
  
      let randoImg=random(instaFeed);
      image(randoImg,195,167,225, 337);
  
      //Phone Outline
      phone();
  
      }

function HomeScreen(){
      //Binary Background
      nums();
  
      //Background Picture
      originalBackground();
  
      //Phone Outline
      phone();
  
      //Applications & Text
      applications();
  
      //Bottom Rectangle
      bottomRectangle();
  
      //Home Button Graphic
      homebuttonGraphic();
  
      
  
}

function nums(){
  randNumbers=binary[round(random(0,1))];
      background(0);
      for(var x = 20;  x<width; x+=20){
      for(var y = 20;  y<width+75; y+=20){
      fill(random(255));
      textSize(12);
      text(randNumbers,x,y)
      }
      }
}

function phone(){
  //toprectangle
      stroke(0);
      fill(78, 80, 87);
      beginShape();
      vertex(200,160);
      vertex(415,160);
      vertex(415,170);
      vertex(200,170);
      vertex(200,160);
      endShape();
  
      //topleftcurve
      stroke(0);
      fill(78, 80, 87);
      beginShape();
      vertex(200,160);
      vertex(194,162);
      vertex(190,168);
      vertex(190,187);
      vertex(200,183);
      vertex(201,175);
      vertex(201,176);
      vertex(202,175);
      vertex(203,174);
      vertex(204,173);
      vertex(205,172);
      vertex(206,171);
      vertex(207,170);
      endShape();
    
    
      
      //toprightcurve
      noStroke();
      fill(78, 80, 87);
      beginShape();
      vertex(406,160);
      vertex(416,160);
      vertex(421,162);
      vertex(425,168);
      vertex(425,187);
      vertex(415,177);
      vertex(414,176);
      vertex(413,175);
      vertex(412,174);
      vertex(411,173);
      vertex(410,172);
      vertex(409,171);
      vertex(408,170);
      endShape();
  
  
      //leftrectangle    
      noStroke();
      fill(78, 80, 87);
      beginShape();
      vertex(200.5,177);
      vertex(200.5,495);
      vertex(189.5,495);
      vertex(189.5,177);
      endShape();
  
      //rightrectangle
      noStroke();
      fill(78, 80, 87);
      beginShape();
      vertex(414,174);
      vertex(425,174);
      vertex(425,495);
      vertex(414,495);
      endShape();
  
      //bottomrightcurve
      noStroke();
      fill(78, 80, 87);
      beginShape();
      vertex(425,495);
      vertex(422,504);
      vertex(414,508);
      vertex(401,508);
      vertex(401,495);
      vertex(408,495);
      vertex(409,494);
      vertex(410,493);
      vertex(411,492);
      vertex(412,491);
      vertex(413,490);
      vertex(414,489);
      vertex(415,488);
      vertex(416,487);
      endShape();
  
      //bottomleftcurve
      noStroke();
      fill(78, 80, 87);
      beginShape();
      vertex(190,495);
      vertex(193,504);
      vertex(201,508);
      vertex(214,508);
      vertex(214,497);      
      vertex(213,497);
      vertex(209,496);
      vertex(208,495);
      vertex(217,494);
      vertex(206,493);
      vertex(205,492);
      vertex(204,491);
      vertex(203,490);
      vertex(202,489);
      vertex(201,488);
      vertex(200,487);
      endShape();
  
    
  
      //bottonrectangle
      noStroke();
      fill(78, 80, 87);
      beginShape();
      vertex(210,495);
      vertex(405,495);
      vertex(405,508);
      vertex(207,508);
      vertex(207,495);
      endShape();
  
      //topcamera
      stroke(0);
      fill(78, 80, 87);
      beginShape();
      vertex(236,170);
      vertex(238,172);
      vertex(238,174);
      vertex(239,176);
      vertex(240,178);
      vertex(241,180);
      vertex(242,182);
      vertex(243,183);
      vertex(244,184);
      vertex(245,185);
      vertex(366,185);
      vertex(367,184);
      vertex(368,183);
      vertex(369,182);
      vertex(370,180);
      vertex(371,178);
      vertex(372,176);
      vertex(373,174);
      vertex(373,172);
      vertex(375,170);
  
      endShape();
      
      //cameraandrectangle
      noStroke();
      fill(95, 109, 150);
      circle(335,178,3);
      beginShape();
      vertex(291,177);
      vertex(319,177);
      vertex(319,179);
      vertex(291,179);
      vertex(291,177);
      endShape();
      
  
      //END IPHONE TABLET]
  
  
      //Time & LTE
      fill(255,255,255);  
      textSize(10);
      text(time,210,183);
      textSize(8);
      text(lte,390,183);
      
      beginShape();
      vertex(380,183);
      vertex(382,183);
      vertex(382,180);
      vertex(380,180);
      vertex(380,183);
      endShape();
  
      beginShape();
      vertex(385,183);
      vertex(387,183);
      vertex(387,178);
      vertex(385,178);
      vertex(385,183);
      endShape();
      //End Time & LTE
  
      
}

function originalBackground(){
  image(bkrnd,195,167,225, 337);
}

function bottomRectangle(){
      fill(255,255,255,170);
      beginShape();
      vertex(221,456);
      vertex(392,456);
      vertex(394,457);
      vertex(395,458);
      vertex(395,481);
      vertex(394,482);
      vertex(393,483);
      vertex(219,482);
      vertex(220,483);
      vertex(221,484);
      vertex(221,458);
      vertex(222,457);
      vertex(223,456);
      endShape();
      image(phoneApp,250,456,28,26);
      image(emailApp,295,456,28,26);
      image(safariApp,340,456,28,26);
  
}

function homebuttonGraphic(){
    fill(144, 148, 153, 300);
    circle(222,386,35);
    fill(191, 195, 201,300)
    circle(222,386,25);
    fill(211, 214, 219, 300);
    circle(222,386,20);
    fill(230, 233, 237, 300);
    circle(222,386,15);
}

function applications(){
    image(instagramApp,267,209,32,30);
    fill(250);
    textSize(7);
    text(instagram,267,247);
    image(venmoApp, 220,210,29,27);
    text(venmo,222,247);
    image(spotifyApp,288,204,75,40);
    text(spotify,314,247);
    image(snapchatApp, 353,207,36,34);
    text(snapchat,355,247);
    image(twitterApp, 220, 260,29,27);
    text(twitter,222,300);
    image(tiktokApp,267,260,29,27);
    text(tiktok,271,300);
    image(soundcloudApp,310,260,32,30);
    text(soundcloud,310,300);
    image(youtubeApp,357,263,32,26);
    text(youtube,360,300);
  
}


function spotifyFeed(){
  
  //Binary Background
      nums();
      
  
      let randomSong=random(spotifyLibrary);
      image(randomSong,195,167,225, 337);
  
      //Phone Outline
      phone();
  
}

function twitterScreenshots(){
  //Binary Background
      nums();
      
  
      let randomTweet=random(twitterFeed);
      image(randomTweet,195,167,225, 337);
  
      //Phone Outline
      phone();
  
}