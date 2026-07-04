import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";


export default function Home() {


const skills = [
"React JS",
"Tailwind CSS",
"JavaScript",
"HTML",
"CSS",
"PHP",
"MySQL",
"Git"
];


const stats = [

{
number:"01",
title:"Software Engineer",
text:"Building modern digital solutions"
},

{
number:"02",
title:"Photographer",
text:"RYSA Media storytelling"
},

{
number:"03",
title:"Community Builder",
text:"Technology for social impact"
}

];



const reveal = {

hidden:{
opacity:0,
y:60
},

visible:{
opacity:1,
y:0,
transition:{
duration:0.8
}
}

};



return (

<div className="dark">


<div className="
bg-gray-50
dark:bg-gray-900
min-h-screen
scroll-smooth
transition
overflow-hidden
">


<Header />



{/* HERO */}

<section
id="home"
className="
relative
min-h-screen
flex
items-center
overflow-hidden
px-6
md:px-10
pt-32
pb-20
"
>


{/* Decorative grid pattern */}

<div
className="
absolute
inset-0
pointer-events-none
opacity-[0.06]
dark:opacity-[0.14]
"
style={{
backgroundImage:
"linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
backgroundSize: "56px 56px",
maskImage:
"radial-gradient(ellipse 75% 60% at 50% 0%, black 40%, transparent 100%)",
WebkitMaskImage:
"radial-gradient(ellipse 75% 60% at 50% 0%, black 40%, transparent 100%)",
}}
/>


{/* Ambient background glow */}

<div className="
absolute
-top-40
-left-40
w-[32rem]
h-[32rem]
bg-indigo-500/30
rounded-full
blur-[130px]
pointer-events-none
" />

<div className="
absolute
top-1/3
-right-40
w-[28rem]
h-[28rem]
bg-purple-500/25
rounded-full
blur-[130px]
pointer-events-none
" />

<div className="
absolute
bottom-0
left-1/3
w-[24rem]
h-[24rem]
bg-emerald-400/10
rounded-full
blur-[130px]
pointer-events-none
" />


<div className="
relative
max-w-7xl
mx-auto
w-full
grid
md:grid-cols-[1.15fr_0.85fr]
gap-16
md:gap-10
items-center
">


{/* TEXT */}

<motion.div

variants={reveal}

initial="hidden"

animate="visible"

className="space-y-8 md:pr-6"

>


{/* EYEBROW */}

<div className="
inline-flex
items-center
gap-2
rounded-full
border
border-indigo-500/30
bg-indigo-500/10
backdrop-blur-sm
px-4
py-1.5
">

<Sparkles className="w-4 h-4 text-indigo-400" aria-hidden="true" />

<span className="
text-sm
font-medium
tracking-wide
text-indigo-600
dark:text-indigo-300
">

Welcome to my portfolio

</span>

</div>



<h1 className="
text-5xl
sm:text-6xl
md:text-7xl
font-extrabold
tracking-tight
leading-[1.05]
text-slate-900
dark:text-white
">

Hi, I'm{" "}

<span className="
bg-linear-to-r
from-indigo-600
via-purple-600
to-emerald-400
bg-clip-text
text-transparent
">

Maxwell

</span>

</h1>



<p className="
text-lg
md:text-xl
font-medium
text-slate-600
dark:text-zinc-400
">

Software Engineer · React Developer · Photographer at RYSA · Team Lead at RYSA Media

</p>



<p className="
max-w-xl
text-base
md:text-lg
leading-relaxed
text-slate-600
dark:text-zinc-400
">

I build modern web applications, craft digital solutions, and use
technology to support community development — one project at a time.

</p>



{/* BUTTONS */}

<div className="flex flex-wrap items-center gap-4 pt-2">


<a

href="#projects"

className="
group
inline-flex
items-center
gap-2
rounded-xl
bg-linear-to-r
from-indigo-600
to-purple-600
px-7
py-3.5
font-semibold
text-white
shadow-lg
shadow-indigo-600/30
transition-all
duration-300
ease-in-out
hover:scale-105
hover:shadow-xl
hover:shadow-purple-600/40
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-indigo-500
focus-visible:ring-offset-2
focus-visible:ring-offset-gray-900
"

>

View Projects

<ArrowRight
className="
w-4
h-4
transition-transform
duration-300
ease-in-out
group-hover:translate-x-1
"
aria-hidden="true"
/>

</a>



<a

href="#contact"

className="
group
inline-flex
items-center
gap-2
rounded-xl
border-2
border-indigo-500/60
px-7
py-3.5
font-semibold
text-indigo-600
dark:text-indigo-300
transition-all
duration-300
ease-in-out
hover:scale-105
hover:bg-indigo-600
hover:text-white
hover:border-indigo-600
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-indigo-500
focus-visible:ring-offset-2
focus-visible:ring-offset-gray-900
"

>

Contact Me

</a>



<a

href="/max-CV.pdf"

download

className="
group
inline-flex
items-center
gap-2
px-2
py-3.5
font-semibold
text-slate-600
dark:text-zinc-300
transition-all
duration-300
ease-in-out
hover:text-indigo-500
dark:hover:text-indigo-400
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-indigo-500
rounded-md
"

>

<Download
className="
w-4
h-4
transition-transform
duration-300
ease-in-out
group-hover:-translate-y-0.5
"
aria-hidden="true"
/>

Download CV

</a>


</div>


</motion.div>




{/* IMAGE */}

<motion.div

initial={{

opacity:0,

scale:0.85

}}

animate={{

opacity:1,

scale:1

}}

transition={{

duration:0.9,

delay:0.2

}}

className="relative flex justify-center md:justify-end"

>


<div className="relative">


<div className="
absolute
inset-0
bg-linear-to-br
from-indigo-500
to-purple-500
blur-3xl
opacity-40
rounded-full
" />


<motion.div

animate={{

y:[0,-16,0]

}}

transition={{

duration:5,

repeat:Infinity,

ease:"easeInOut"

}}

className="relative"

>


<div className="
relative
p-2
rounded-[2.25rem]
bg-linear-to-br
from-indigo-500
via-purple-500
to-emerald-400
">

<img

src="/MAX.jpg"

alt="Maxwell Profile"

className="
w-64
h-64
sm:w-80
sm:h-80
md:w-[22rem]
md:h-[22rem]
rounded-[2rem]
object-cover
shadow-2xl
transition-transform
duration-500
ease-in-out
hover:scale-[1.03]
"

/>

</div>



{/* Glassmorphism floating card */}

<div className="
absolute
-bottom-6
-left-6
sm:-left-10
flex
items-center
gap-3
rounded-2xl
border
border-white/20
bg-white/10
px-5
py-4
shadow-xl
backdrop-blur-xl
transition-all
duration-300
ease-in-out
hover:-translate-y-1
max-w-[13rem]
sm:max-w-[15rem]
">

<span className="relative flex h-3 w-3 shrink-0">

<span className="
absolute
inline-flex
h-full
w-full
animate-ping
rounded-full
bg-emerald-400
opacity-75
" />

<span className="
relative
inline-flex
h-3
w-3
rounded-full
bg-emerald-500
" />

</span>

<div>

<p className="text-sm font-semibold text-white">

Available for work

</p>

<p className="text-xs text-zinc-300">

Open to freelance & internships

</p>

</div>

</div>


</motion.div>


</div>


</motion.div>


</div>


</section>



{/* ABOUT */}



<motion.section

variants={reveal}

initial="hidden"

whileInView="visible"

viewport={{
once:true
}}

className="px-6 py-20"

>


<div className="
max-w-5xl
mx-auto
bg-white
dark:bg-gray-800
p-8
rounded-3xl
shadow-xl
">


<h2 className="
text-3xl
font-bold
dark:text-white
mb-5
">

About Me

</h2>



<p className="
text-gray-600
dark:text-gray-300
leading-relaxed
">


I am a Software Engineering student at Zetech University
passionate about frontend development, backend systems,
artificial intelligence and building technology solutions.
I also support RYSA through photography, coding and
community projects.


</p>


</div>


</motion.section>









{/* SKILLS */}


<section className="
bg-white
dark:bg-gray-950
py-20
px-6
">


<div className="max-w-5xl mx-auto">


<motion.h2

variants={reveal}

initial="hidden"

whileInView="visible"

viewport={{
once:true
}}

className="
text-3xl
font-bold
dark:text-white
mb-8
"

>

Technical Skills

</motion.h2>




<div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
">


{

skills.map((skill,index)=>(


<motion.div

key={skill}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index * 0.1
}}


viewport={{
once:true
}}


whileHover={{
scale:1.05,
y:-10
}}


className="
bg-gray-100
dark:bg-gray-800
dark:text-white
p-5
rounded-xl
text-center
font-semibold
shadow
"

>

{skill}

</motion.div>


))


}


</div>


</div>


</section>










{/* STATS */}



<section className="py-20 px-6">


<div className="
max-w-5xl
mx-auto
grid
md:grid-cols-3
gap-6
">


{


stats.map((item,index)=>(


<motion.div


key={item.title}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index * .2
}}


viewport={{
once:true
}}


whileHover={{
scale:1.05
}}


className="
bg-white
dark:bg-gray-800
p-6
rounded-2xl
shadow-lg
"


>


<h3 className="
text-blue-600
text-3xl
font-bold
">

{item.number}

</h3>


<h4 className="
text-xl
font-semibold
dark:text-white
">

{item.title}

</h4>


<p className="
text-gray-500
mt-2
">

{item.text}

</p>



</motion.div>


))


}



</div>


</section>





<Footer />


</div>


</div>

);

}