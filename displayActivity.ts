import { EventType } from "./Event"

function dislayActivity(type: EventType, repo:string, payload?:{[key:string]:any} ,){

    switch(type){
        
        case EventType.DeleteEvent:
            const isbranch = payload!.ref_type === "branch"
            console.log(`Deleted ${isbranch?"a branch": "a tag"} from ${repo}`);
            break;

        case EventType.CreateEvent:
            switch(payload!.ref_type){
                case 'branch': 
                    console.log(`Created a branch for ${repo}`)
                    break;
                case "tag":
                    console.log(`Created a tag for ${repo}`)
                    break;
                default:
                    console.log(`Created ${repo}`)
                }
             break;

        case EventType.ForkEvent:
            console.log(`Forked from ${repo}`);
            break;

        case EventType.PushEvent:
            console.log(`Pushed ${payload!.size > 1? payload!.size+ " commits": "a commit"} to ${repo}`);
            break;

        case EventType.WatchEvent:
            console.log(`started ${repo}`);
            break;
        
        case EventType.IssuesEvent:
            console.log(`${payload!.action.charAt(0).toUpperCase()+payload!.action.slice(1)} an issue in ${repo}`);
            break;
        
        default:
            console.log(`Have a(n) ${type} in ${repo}`);
            
    }
}

export default dislayActivity;