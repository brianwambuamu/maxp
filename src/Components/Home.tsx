import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";


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
min-h-screen
flex
items-center
px-6
pt-28
"
>


<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-14
items-center
">


{/* TEXT */}

<motion.div

variants={reveal}

initial="hidden"

animate="visible"

className="space-y-7"

>


<p className="
text-blue-600
font-semibold
text-lg
">

Welcome to my portfolio

</p>



<h1 className="
text-4xl
md:text-6xl
font-bold
text-gray-800
dark:text-white
leading-tight
">


Hi, I'm

<span className="text-blue-600">

 Maxwell

</span>


</h1>




<p className="
text-lg
text-gray-600
dark:text-gray-300
">


Software Engineer | React Developer |
Photographer at RYSA |
Team Lead at RYSA Media


</p>




<p className="
text-gray-600
dark:text-gray-400
leading-relaxed
">


I build modern web applications,
create digital solutions and use technology
to support community development.


</p>





{/* BUTTONS */}


<div className="flex flex-wrap gap-4">


<motion.a

whileHover={{
scale:1.08
}}

href="#projects"

className="
bg-blue-600
text-white
px-7
py-3
rounded-xl
shadow-lg
hover:bg-blue-700
"

>

View Projects

</motion.a>





<motion.a

whileHover={{
scale:1.08
}}

href="#contact"

className="
border
border-blue-600
text-blue-600
dark:text-blue-400
px-7
py-3
rounded-xl
hover:bg-blue-600
hover:text-white
"

>

Contact Me

</motion.a>






{/* CV DOWNLOAD */}

<motion.a

whileHover={{
scale:1.08
}}

href="/max-cv.pdf"

download

className="
bg-gray-900
text-white
px-7
py-3
rounded-xl
shadow-lg
hover:bg-black
"

>

Download CV

</motion.a>



</div>



</motion.div>







{/* IMAGE */}


<motion.div

initial={{
opacity:0,
scale:0.7
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="flex justify-center"

>


<div className="relative">



<div className="
absolute
inset-0
bg-blue-500
blur-3xl
opacity-40
rounded-full
">


</div>



<motion.div

animate={{
y:[0,-20,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
relative
p-4
bg-white
dark:bg-gray-800
rounded-full
shadow-2xl
"

>


<img

src="/MAX.jpg"

alt="Maxwell Profile"

className="
w-72
h-72
md:w-96
md:h-96
rounded-full
object-cover
border-4
border-white
dark:border-gray-700
hover:scale-105
transition
duration-500
"

/>


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