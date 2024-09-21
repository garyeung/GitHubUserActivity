import dislayActivity from "./displayActivity";
import Event from "./Event";

async function fetchActivities(username: string):Promise<Event[]> {
   const response = await fetch(`https://api.github.com/users/${username}/events`);  
   if(!response.ok){
      if(response.status === 404){
         throw new Error("User not found. Please check the username");
      }
      else{
         throw new Error(`Error fetching data ${response.status}`);
      }
   }

   return response.json();
}

function dislayActivites(eventList: Event[]){
   if(!eventList.length){
      console.log("No recent activity found");
      return ;
   }
   for(const event of eventList){
      dislayActivity(event.type, event.repo.name, event.payload);
   }
}

function fitName(username: string){

   const pattern = /^(?!-)[A-Za-z0-9-]+(?!-)$/;
   
   return pattern.test(username);
}

async function main() {

//   const username = await new Promise<string>((resolve) => { 
//   process.stdout.write("github-activity ");
//   process.stdin.once('data', (data) =>{
//     resolve(data.toString().trim());
//     process.stdin.pause();
//   })
//});
const username = process.argv[2];
   if(!username){
      console.error("Please provide a Github username.");
      process.exit(1);
   }

   fetchActivities(username).then((activities) =>{
      dislayActivites(activities);
   }).catch((err) => {
      console.error(err.message);
      process.exit(1);
   });

   
   
}
main();