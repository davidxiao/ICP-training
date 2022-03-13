import List "mo:base/List";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Principal "mo:base/Principal";
actor {
    public type Message = {
        text: Text;
        time: Time.Time;
    };

    public type Microblog = actor {
        follow: shared(Principal) -> async ();
        follows: shared query () -> async [Principal];
        post: shared(Text) -> async ();
        posts: shared query (since: Time.Time) -> async [Message];
        timeline: shared (since: Time.Time) ->async [Message];
    };

    var followed: List.List<Principal> = List.nil();

    public shared func follow(id:Principal): async (){
        followed := List.push(id, followed);
    };
    public shared query func follows(): async [Principal]{
        List.toArray(followed)
    };

    var messages: List.List<Message> = List.nil();

    public shared func post(_text:Text): async (){
        var msg = {
            text = _text;
            time = Time.now();
        };
        messages := List.push(msg, messages);
    };
    public shared query func posts(since: Time.Time): async [Message]{
        var msgs:List.List<Message> = List.nil();
        for(msg in Iter.fromList(messages)){
            if(msg.time >= since){
                msgs := List.push(msg, msgs);
            }
        };
        List.toArray(msgs);
    };
    public shared func timeline(since: Time.Time): async [Message]{
        var all : List.List <Message> = List.nil();
        for (id in Iter.fromList(followed)){
            let canister : Microblog = actor(Principal.toText(id));

            let msgs = await canister.posts(since);

            for(msg in Iter.fromArray(msgs)){
                if(msg.time >= since){
                    all := List.push(msg, all);
                }
            };
        };
        List.toArray(all);
    };
};
