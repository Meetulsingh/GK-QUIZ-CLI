var readlineSync = require('readline-sync');
var chalk = require('chalk')
var score = 0;
function play(question,answer,explanation){
  var giveinput = readlineSync.question(question);
  if(giveinput==answer){
    console.log(chalk.green('CORRECT :) '));
    score = score + 1;
    console.log('your score is '+score);
    console.log('------------------------------------');
  }
  else{
    console.log(chalk.red('WRONG :('));
    console.log('your score is '+score);
    console.log(explanation);
    console .log('------------------------------------')
  }
}

var questions=[
  {
    question: `1. What does the Taliban refer to themselves as ?  
        a.Islamic Emirate of Afghanistan 
        b.Emirate of Afghanistan 
        c.Students of Afghanistan 
        d.None of the above 
        -->  \n`,
    answer: "a",
    explanation: "The Taliban refers to itself as the Islamic Emirate of Afghanistan (IEA)."
  },{
    question: `2. Who was the founder of Taliban?                                                                                           a.Mohammed Omar 
               b.Abdul Ghani Baradar 
               c.Akhtar Mansour 
               d.Both a and b
                -->  \n`,
    answer: "d",
    explanation: "Taliban was founded by Mohammed Omar (1994–2013) and co founder- Abdul Ghani Baradar"
  },{
    question: `3.In which year did the Taliban gain power over Afghanistan?                                                        a.1994  
               b.1996   
               c.2001    
               d. 2016
               -->  \n`,
    answer: "b",
    explanation: "Taliban gained power over Afghanistan in 1996 and remained in power till 2001. "
  },{
    question: `4. What was the capital of Afghanistan when the Taliban were in power?                                              a.Kabul
               b.Kandhar  
               c.Bamiyan  
               d.Herat 
               --> \n`,
    answer: "b",
    explanation: "The Taliban when ruled transferred the Afghan capital to Kandahar. "
  },{
    question: `5. Which of the following is the ideology followed by the Taliban?                                                  a.Deobandi Islamism  
               b.Pashtunwali  
               c.Both a and b   
               d.None of the above 
               -->  \n`,
    answer: "c",
    explanation: "The Taliban's ideology has been described as combining a form of sharia Islamic law based on Deobandi fundamentalism and militant Islamism combined with Pashtun social and cultural norms known as Pashtunwali. "
  },{
    question: `6. In which year did the Soviet Union occupy Afghanistan?                                                           a.1970  
               b.1974 
               c.1979 
               d.1989 
               -->  \n`,
    answer: "c",
    explanation: "The Soviet Union captured and occupied Afghanistan in the year 1979. "
  },{
    question: `7. Who is the current leader of the Taliban?                                                                        a.Ashraf Ghani
               b.Haibatullah Akhundzada 
               c.Mohammed Omar 
               d.Ayman al-Zawahiri
               -->  \n`,
    answer: "b",
    explanation: "Haibatullah Akhundzada is the current chief of the Taliban. He is a low profile religious man."
  },{
    question:`8.The majority of Afghanistan is covered by what kind of terrain?                                                   a.Mountains  
              b.Forest 
              c.Desert 
              d.Swamp 
              -->  \n`,
    answer: "a"
  },{
    question: `9.Which Afghan river shares its name with the country's capital city?                                               a.Hemland 
               b.Hari 
               c.Morghab 
               d.Kabul  
               -->  \n`,
    answer: "d"
  }
]

var giveName = readlineSync.question('What is your name? ');
console.log('Welcome '+giveName+ ' in the GK quiz of Afghanistan and Taliban');
console.log('You just have to write the option like this a , b and c only')
var input = readlineSync.question('Lets begin with the quiz by pressing "s" ');
console.log('------------------------------')
if(input=="s"){

  for(var i=0;i<9;i++){
    var currentquest = questions[i];
    play(currentquest.question,currentquest.answer,currentquest.explanation) 
  }
  console.log(chalk.yellow(giveName+ ' your score is :'+score+'/9'));
  console.log('Ping me i will update your score in Leaderboard');
  console.log('LEADERBOARD');
  console.log('--------------------')
  console.log('1.Ram-->6/9 ');
  console.log('2.Shyama-->5/9 ');
  console.log('3.Roshni-->4/9');
  console.log('--------------------')
}
