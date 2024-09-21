export enum EventType {
    CreateEvent = "CreateEvent",
    DeleteEvent = "DeleteEvent",
    ForkEvent = "ForkEvent",
    IssuesEvent = "IssuesEvent",
    PushEvent = "PushEvent",
    WatchEvent = "WatchEvent"
}

interface Actor {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}

interface Repo {
    id: number;
    name: string; // e.g., "octocat/hello-world"
    url: string;
}

interface Org {
    id: number;
    login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
}

interface Payload {
    // This is a placeholder to illustrate that the payload will vary by event type.
    [key: string]: any; // Use a more specific type based on the event type
}

interface Event {
    id: number;
    type: EventType; // Event type in PascalCase
    actor: Actor;
    repo: Repo;
    payload: Payload; // Unique to the event type
    public: boolean;
    created_at: string; // ISO 8601 format
    org?: Org; // Optional, only if applicable
}

export default Event;