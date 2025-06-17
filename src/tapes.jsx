export const tapes = [
    {
        id:0,
        title:"CV Builder",
        type:"img",
        img:"src/assets/1.png",
        link:"https://cv-builder-7is4-ek1g4zwc9-spasalors-projects.vercel.app/"
    },
    {
        id:1,
        title:"E-commerce",
        type:"img",
        img:"/src/assets/2.png",
        link:"https://e-commerce-project-pied-one.vercel.app/"
    },
    {
        id:2,
        title:"WorldWide Recipes",
        type:"img",
        img:"/src/assets/3.png",
        link:"https://ww-recipes.onrender.com/"
    },
    {
        id:3,
        title:"Movieboxd",
        type:"img",
        img:"/src/assets/4.png",
        link:"https://movieboxd-m4nu.onrender.com/"
    },
    {
        id:4,
        title:"UppFiles",
        type:"img",
        img:"/src/assets/5.png",
        link:"https://uppfiles.onrender.com/"
    },
    {
        id:5,
        title:"MyBlog",
        type:"img",
        img:"/src/assets/6.png",
        link:"https://my-blog-rt9u.onrender.com/"
    },
    {
        id:6,
        title:"PokeFind",
        type:"img",
        img:"/src/assets/7.png",
        link:"https://pokefind-6w7o.onrender.com/"
    },
    {
        id:7,
        title:"About Me",
        type:"component",
        content: ()=>{
            return (
                <div id="about">
                    <p>I'm a Full-Stack Developer from Italy. <br/>I Love minimalistic design and all things weirdly nostalgic.<br/> Also pizza and football.<br/>On the top shelf you can see some of my projects. </p>
                </div>
            )
        }
    },
    {
        id:8,
        title:"Contacts",
        type:"component",
        content: ()=>{
            return(
                <div id="contacts">
                    <p>We can get in touch by <br/>Mail: spadaros.lorenzo@gmail.com <br/> Github: /spasaLor <br/> LinkedIn: in/lorenzo-spadaro-0a5955337/ <br/> Try clicking the screen</p>
                </div>
            )
        },
        link: "https://www.linkedin.com/in/lorenzo-spadaro-0a5955337/"
    },
    {
        id:9,
        title:"This website",
        type:"component",
        content: ()=>{
            return(
                <div id="this">
                    <p>Coded in Visual Studio Code by yours truly. Built with React.js and CSS, deployed with Vercel. <br/>
                    Taking inspiration from when growing up i used to watch VHR Tapes of my favourite cartoons.</p>
                </div>
            )
        },
    }
];
