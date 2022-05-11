// creat a random generator that spits out the follwoing : the time and date, the action that will take place, the reson why that happened.
const timeArray = ['1:15 PM','1:00AM','12:00PM','11:30AM','6:45AM','9:12AM','3:55PM','5:09PM','7:30AM','2:10PM','10:25PM','11:58PM','4:25PM','6:10AM','12:25PM'];
const dateArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const actionArray =[' stubb your toe','Win a half marathon','adopt a cat','forget your wallet','poop your pants','find a $100 bill on the ground','have the best meal of your life','accidently get your left sock wet on the way to work'];
const reasonArray =['your breath smells','hard work does pay off','killer instincts.. duh','love heals all wounds','you didnt buy the homeless man you saw on the corner of the street a $2 burger, you greedy pig','Murcury is in retrograde'];

//timeArray.forEach((time => {}))
//console.log(timeArray.forEach(timeSelection))
//findRandomTime(timeArray)
const findRandomTime = (arr) => {
     let randomIndex = Math.floor(Math.random() * timeArray.length);
    //console.log(randomIndex)
    let randomTime = timeArray[randomIndex];
    //console.log(randomTime) 
    return randomTime;
};
const idk = findRandomTime(timeArray);

const findRandomDate = arr => {
    let randomIndex = Math.floor(Math.random() * dateArray.length);
    let randomDate = dateArray[randomIndex];
    //console.log(randomDate)
    return randomDate;
};
const wuh = findRandomDate(dateArray);

const findRandomAction = (arr) => {
    let randomIndex = Math.floor(Math.random() * actionArray.length);
    let randomAction = actionArray[randomIndex];
    //console.log(randomAction);
    return randomAction;
}
const wee = findRandomAction(actionArray);
//findRandomAction(actionArray);
//const finalAction = findRandomAction(actionArray);

const findRandomReason = (arr) =>{
    let randomIndex = Math.floor(Math.random() * reasonArray.length);
    let randomReason = reasonArray[randomIndex];
   //console.log(randomReason);
   return randomReason;
}
const poop = findRandomReason(reasonArray);

const msg = `at ${idk} on ${wuh} you will ${wee} because ${poop}`;
console.log(msg)
//console.log(findRandomTime(timeArray), + findRandomDate(dateArray), + findRandomAction(actionArray), + findRandomReason(reasonArray))





