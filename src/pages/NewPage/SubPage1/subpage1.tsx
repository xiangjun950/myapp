// import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import './subpage1.less';
// import { useReducer } from 'react';
// import { Divider, theme } from 'antd';
// import Panel from 'antd/es/splitter/Panel';
// import Title from 'antd/es/skeleton/Title';

// interface State{
//     count : number,
// };

// type CounterAction =
//     | {type:"reset"}
//     | {type:"setCount";value:State["count"]}

// const initialState: State = {count:0};

// function stateReducer(state:State,action:CounterAction):State{
//         switch(action.type){
//             case "reset":
//                 return initialState;
//             case "setCount":
//                 return {...state,count:action.value}
//             default :
//                 throw new Error("Unknow action");
//         }
// }

// const SubPage1: React.FC = () => {
//     const [state , dispatch] = useReducer(stateReducer,initialState);

//     const addFive = ()=> dispatch({type:"setCount",value:state.count+5});
//     const reset = ()=> dispatch({type:"reset"});

//     return (
//         <div className='div'>
//            <h1>欢迎来到我的计数器</h1>
//            <p>计数：{state.count}</p>
//            <button onClick={addFive} >加5</button>
//            <button onClick={reset} >重置</button>

//         </div>
//     );
// }

// type Theme = "light" | "dark" | "system";
// const ThemeCon = createContext('system');

// function MyContext(){
//     const theme = useContext(ThemeCon);
//     return (
//         <div>
//             <p>当前主题：{theme}</p>
//         </div>
//     );
// }

// const SubPage1: React.FC = () => {
//     // const [theme , setTheme] = useState('dark');
//         const the = 'light';
//     return (
//         <ThemeCon.Provider value={the}>
//             <MyContext  />
//         </ThemeCon.Provider>
//     );
// }

// const SubPage1: React.FC = () => {
//     const [firstname , setFirstname] = useState('');
//     const [lastname , setLastname] = useState('');

//     const fullname = firstname+''+lastname;

//     function handleFirstnamechange(e:any){
//         setFirstname(e.target.value);
//     }

//     function handleLastnamechange(e:any){
//             setLastname(e.target.value);
//     }

//     return (
//         <div>
//             <h2>让我们帮你登记</h2>
//             <label>
//                 名：<input type="text" value={firstname} onChange={handleFirstnamechange} />
//             </label>

//             <br />
//             <label>
//                 姓：<input type="text" value={lastname}  onChange={handleLastnamechange}/>
//             </label>

//             <p>你的票据将签发给:{fullname}</p>
//         </div>
//     );
// }

// const SubPage1:React.FC =()=>{
//     const [active , setActive] = useState(1);
//     return(
//         <>
//         <h2>Almaty, Kazakhstan</h2>
//             <Pan title="关于" isActive={active===0} onShow={()=>setActive(0)}>
//                 阿拉木图人口约200万，是哈萨克斯坦最大的城市。在1929年至1997年之间，它是该国首都。
//             </Pan>

//             <Pan title="词源" isActive={active===1} onShow={()=>setActive(1)}>
//                这个名字源于哈萨克语 <span lang="kk-KZ">алма</span>，是“苹果”的意思，通常被翻译成“满是苹果”。事实上，阿拉木图周围的地区被认为是苹果的祖籍，<i lang="la">Malus sieversii</i> 被认为是目前本土苹果的祖先。
//             </Pan>
//         </>
//     );
// }
// type Panprop = {
//     title: string,
//     children: React.ReactNode,
//     isActive: boolean,
//     onShow:()=>void,
// }
// function Pan( {title,children,isActive,onShow}:Panprop ){
//     return(
//         <section>
//              <h3>{title}</h3>
//                 { isActive?(
//                     <button onClick = {onShow}>显示</button>
//                  ):(
//                     <p>{children}</p>
//                 )}
//         </section>
//     );
// }

// const SubPage1:React.FC = ()=>{
//     const [answer , setAnswer] = useState('');
//     const [error , setError] = useState(null);
//     const [status ,setStatus] = useState('typing');

//     if(status === 'success'){
//         return <h1>That's right!</h1>
//     }
//     async function hnadleSubmit(e: { preventDefault: () => void; }){
//         e.preventDefault();
//         setStatus('submitting');
//         try{
//             await submitForm(answer);
//             setStatus('success');
//         }catch(err){
//             setStatus('typing');
//             setError(err);
//         }
//     }

//     function handleTextareaChange(e: { target: { value: React.SetStateAction<string>; }; }){
//         setAnswer(e.target.value);
//     }

//     return (
//         <>
//             <h2>City quiz</h2>
//             <p>
//                 In which city is there a billboard that turns air into drinkable water?
//             </p>

//             <form onSubmit={hnadleSubmit}>
//                 <textarea
//                     value={answer}
//                     onChange={handleTextareaChange}
//                     disabled={status==='submitting'}
//                 >
//                 </textarea>
//                 <br />
//                 <button
//                     disabled={answer.length ===0 || status==='submitting'}
//                 >
//                     submit
//                 </button>
//                 {
//                     error!==null && <p>{error.message}</p>
//                 }
//             </form>
//         </>
//     );
// }

// function submitForm(answer: string){
//     return new Promise<void>((resolve , reject)=>{
//         setTimeout(()=>{
//             let Errors = answer.toLowerCase() !== 'lima';
//             if(Errors){
//                 reject(new Error('Good guess but a wrong answer. Try again!'));
//             }else{
//                 resolve();
//             }
//         },1000);
//     });
// }

// const SubPage1:React.FC = ()=>{
//     const [position ,setPosition] = useState({x:0,y:0});

//     return(
//         <div
//             onPointerMove={e=>{
//                 setPosition({
//                     x: e.clientX,
//                     y: e.clientY
//                 });
//             }}
//             style={{
//                 position:'relative',   // 相对定位
//                 width:'100vw',
//                 height:'100vh',
//                 background:'black',
//                 border:'5px solide blue',
//             }}
//         >
//             <div
//                 style={{
//                     position:'absolute', // 绝对
//                     backgroundColor:'red',
//                     borderRadius: '50%',    // ⚪
//                     transform: `translate(${position.x}px, ${position.y}px)`,
//                     width: 20,
//                     height: 20,
//                 }}
//             />
//         </div>
//     );
// }

type tp = {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
};

function Panel1({ title, children, isActive, onShow }: tp) {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button type="button" onClick={onShow}>
          显示
        </button>
      )}
    </section>
  );
}

const SubPage1: React.FC = () => {
  const [activeindex, setActiveIndex] = useState(0); // 0表示激活第一个面板，1表示激活第二个面板
  return (
    <>
      <h2>哈萨克斯坦，阿拉木图</h2>
      <Panel1
        title="关于"
        isActive={activeindex === 0}
        onShow={() => {
          setActiveIndex(0);
        }}
      >
        阿拉木图人口约200万，是哈萨克斯坦最大的城市。它在 1929 年到 1997
        年间都是首都。
      </Panel1>
      <br />
      <Panel1
        title="词源"
        isActive={activeindex === 1}
        onShow={() => {
          setActiveIndex(1);
        }}
      >
        这个名字来自于
        алма,哈萨克语中“苹果”的意思，经常被翻译成“苹果之乡”。事实上，阿拉木图的周边地区被认为是苹果的发源地，
        <span lang="kk-KZ">Malus sieversii</span> 被认为是现今苹果的祖先。
      </Panel1>
    </>
  );
};
export default SubPage1;
