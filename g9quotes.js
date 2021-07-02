var quotes = [
    "Have a nice sleep.",    
    "Have a sound sleep.",    
    "Good night and sweet dreams!",    
    "Good night, sweet heart!",    
    "Sleep tight, sweetheart.",    
    "Good night on the other side of the phone screen!",    
    "Good night my friends and have good dreams!",    
    "Every day you go to bed. And every day I am here, good night.",    
    "Good night in your warm blanket!",    
    "Thank you for listening to my story. Now I’ll let you go to sleep. Good night.",    
    "My friend went to bed and went to bed. Good night and have peaceful dreams!",    
    "Since you don’t have a good night lover, I will temporarily do that task. Good night my friends!",    
    "Nighty Night",    
    "Sweet dreams!",    
    "Sleep well",    
    "Have a good sleep",    
    "Dream about me!",    
    "Go to bed, you sleepy head!",    
    "Sleep tight!",    
    "Time to ride the rainbow to dreamland!",    
    "Don’t forget to say your prayers!",    
    "Goodnight, the little love of my life!",    
    "Night Night.",    
    "Lights out!",    
    "See ya’ in the mornin’!",    
    "I’ll be right here in the morning.",    
    "I’ll be dreaming of you!",    
    "Dream of Mama!",    
    "Sleep well, my little princess!",    
    "Jesus loves you, and so do I!",    
    "Sleep snug as a bug in a rug!",    
    "Dream of me",    
    "Until tomorrow.",    
    "Always and forever!",    
    "I’ll be dreaming of your face!",    
    "I’m so lucky to have you, Sweetheart!",    
    "I love you to the stars and back!",    
    "I’ll dream of you tonight and see you tomorrow, my love.",    
    "I can’t imagine myself with anyone else!",    
    "If you need me, you know where to find me.",    
    "Goodnight, the love of my life!",    
    "Can’t wait to wake up next to you!",    
    "Time to ride the rainbow to dreamland",    
    "Dream of mama/papa",   
    "Jesus loves you and so do I",    
    "Don’t forget to say your prayers",    
    "Sleep well, my little princess",    
    "Goodnight, the little love of my life",    
    "Boa noite",    
    "晚安 Wanan",    
    "Buenas noches",    
    "Gute Nacht",    
    "Bonne nuit",    
    "Buonanotte",    
    "おやすみなさい",    
    "밤인사로 안녕히 가세요 혹은 잘 자요",    
    "Boa noite",    
    "Buenas noches",    
    "Oyasumi nasai",    
    "Oyasumi",    
    "Ngủ ngoan nha bạn",    
    "Ngẩu ngoan",    
    "Chúc bạn ngủ ngon nhá",    
    "Chim cút đi ngủ đi",    
    "Thảo Anh ngủ ngoan"
]

function startTime() {
    var today = new Date();
    //var options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let curDate = today.toLocaleDateString('en-us', { weekday: 'long', day: 'numeric', month: 'long' });
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m;
    document.getElementById('currentDate').innerHTML =  curDate;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function printQuotes() {
    let ranNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('todayQuote').innerHTML = '"'+ quotes[ranNum] + '"';
}

function dayCounts() {
  var startDay = new Date(2021, 5, 30);
  var today = new Date();
  var countTime =  today.setHours(0,0,0,0) - startDay;
  var countDay = countTime / (1000 * 60 * 60 * 24);  
  console.log(countDay);
  document.getElementById('beenGoodNight').innerHTML = '"Been '+ (countDay + 1) + ' Good nights"';
}

