import { microblog5 as microblog } from "../../declarations/microblog5";
import  React, {useState, useEffect} from "react";
import { render } from "react-dom";

const Microblog = () => {
  const [name, setName] = useState('');
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [follows, setFollows] = useState([]);
  const [messages, setMessages] = useState([]);
  const [follow, setFollow] = useState("");
  
  async function saveName(){
    await microblog.set_name(name)
  }
  async function savePost(){
    await microblog.post(post)
  }
  
  useEffect(async ()=>{
      const _messages = await microblog.timeline(1)
      setMessages(_messages)

      const _follows = await microblog.follows()
      setFollows(_follows)

      const _posts = await microblog.posts(1)
      setPosts(_posts)
  },[])
  useEffect(async() =>{
    const _messages = await microblog.timeline(1)
    if(!follow){
      return;
    }
    const filteredMessages = _messages.filter((msg)=>{
      if(msg.authorId?.toString()===follow){
        return msg;
      }
    })
    setMessages(filteredMessages)
  },[follow])
  
  function onClick(principal){
    setFollow(principal)
  }

  return (
    <div style={{ "fontSize": "30px" }}>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={saveName}>update Name</button>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="post"
          value={post}
          onChange={(ev) => setPost(ev.target.value)}
        ></input>
        <button onClick={savePost}>New Post</button>
      </div>
      <div>
        my posts:
        <ul>
          {posts.map((p, i)=>{
            const key = i;
            const ns = Number(p.time)
            const time = new Date(ns/1000000).toString()
            return (<li key={key}>{p.text} &nbsp;{time} </li>)
          })}
        </ul>
      </div>
      <div>
        Follows:
        <ul>
          {follows.map((f, i)=>{
            const principal = f.toString()
            const key = principal + i
            return (<li key={key} onClick={()=>onClick(principal)}>{principal}</li>)
          })}
        </ul>
      </div>
      <div>
        messages:
        <ul>
          {messages.map((m, i)=>{
            const key = `${m.authorId.toString()}_${i}`
            const ns = Number(m.time)
            const time = new Date(ns/1000000).toString()
            return (<li key={key}>{m.text}: &nbsp; {m.author}: &nbsp; { time} </li>)
          })}
        </ul>
      </div>
    </div>
  );
};


render(<Microblog />, document.getElementById("app"));