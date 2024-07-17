// let day;
// switch (new Date().getDay()){
//       case 0:
//             day = 'sunday';
//             break;


//       case 1:
//             day = 'monday';
//             break;
          
//       case 2:
//             day = 'tuesday';
//             break;
      
      
//       case 3:
//             day = 'wednesday';
//             break;
            
      
//       case 4:
//             day = 'thrusday';
//             break;
            
                  
//       case 5:
//             day = 'friday';
//             break;
                  
      
//       case 6:
//             day = 'saturday';
//             break;
// }
// console.log('today is :', day);


// ----------------------------------------------
//  write a program that uses a switch case to assign a grade ('a','b','c','d','f') based on a
//  score and log the grade to the console in js

function assignGrade(score){
      let grade;

      switch(true){
            case score>=90:
                  grade='a';
                  break;
            
            case score>=75:
                  grade='b';
                  break;
            
            case score>=60:
                  grade='c';
                  break;

            case score>=45:
                  grade='d';
                  break;

            default:
                  grade = 'f';
      }

      return grade;
}
const stuScore = 89;
const stuGrade = assignGrade(stuScore);
console.log(`student score : ${stuScore}, Grade: ${stuGrade}`);