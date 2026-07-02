import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";


export default function About() {


const roles = [

{
title:"Software Engineer",
text:"Developing web applications, solving problems through technology and creating digital solutions."
},

{
title:"Photographer - RYSA",
text:"Capturing events, sports activities and telling community stories through photography."
},

{
title:"Team Lead - RYSA Media",
text:"Leading media projects, coordinating content creation and supporting the media team."
}

];



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




const reveal = {

hidden:{
opacity:0,
y:50
},

show:{
opacity:1,
y:0,
transition:{
duration:.7
}
}

};



return (

<div className="dark">


<div className="
bg-gray-50
dark:bg-gray-900
min-h-screen
transition
overflow-hidden
">


<Header />





{/* HERO */}


<section className="
pt-28
pb-20
px-6
">


<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
">



{/* IMAGE */}


<motion.div

initial={{
opacity:0,
scale:.7
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
y:[0,-15,0]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
relative
p-3
bg-white
dark:bg-gray-800
rounded-full
shadow-2xl
">


<img

src="/MAX.jpg"

alt="Maxwell"

className="
w-80
h-80
md:w-96
md:h-96
object-cover
rounded-full
border-4
dark:border-gray-700
hover:scale-105
transition
duration-500
"

/>


</motion.div>


</div>


</motion.div>







{/* TEXT */}


<motion.div

variants={reveal}

initial="hidden"

animate="show"

className="space-y-6"

>


<h1 className="
text-4xl
md:text-5xl
font-bold
dark:text-white
">


About

<span className="text-blue-600">

 Me

</span>


</h1>




<p className="
text-gray-600
dark:text-gray-300
leading-relaxed
">


I am Maxwell Mujukane, a Software Engineering graduate from
Zetech University passionate about designing and building
modern, responsive and user-friendly web applications using
React, Tailwind CSS, JavaScript, PHP and modern technologies.


</p>



<p className="
text-gray-600
dark:text-gray-300
leading-relaxed
">


I am also a photographer at Runda Youth Sports Association
(RYSA) and Team Lead at RYSA Media where I contribute to
digital storytelling, media production and community projects.


</p>



</motion.div>



</div>


</section>








{/* ROLES */}



<section className="py-16 px-6">


<div className="max-w-5xl mx-auto">



<motion.h2

variants={reveal}

initial="hidden"

whileInView="show"

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

Professional Roles

</motion.h2>




<div className="
grid
md:grid-cols-3
gap-6
">


{

roles.map((role,index)=>(


<motion.div


key={role.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*.2
}}


viewport={{
once:true
}}


whileHover={{
y:-10,
scale:1.03
}}



className="
bg-white
dark:bg-gray-800
p-6
rounded-2xl
shadow-md
"


>


<h3 className="
text-xl
font-semibold
text-blue-600
">

{role.title}

</h3>



<p className="
mt-3
text-gray-600
dark:text-gray-300
">

{role.text}

</p>


</motion.div>


))


}


</div>


</div>


</section>









{/* EDUCATION */}



<motion.section

variants={reveal}

initial="hidden"

whileInView="show"

viewport={{
once:true
}}

className="
bg-white
dark:bg-gray-950
py-16
px-6
"

>


<div className="max-w-5xl mx-auto">


<h2 className="
text-3xl
font-bold
dark:text-white
mb-8
">

Education

</h2>




<div className="
bg-gray-100
dark:bg-gray-800
p-6
rounded-2xl
shadow
">


<h3 className="
text-xl
font-semibold
text-blue-600
">

Zetech University

</h3>


<p className="
text-gray-600
dark:text-gray-300
mt-2
">

Software Engineering Graduate

</p>



<ul className="
mt-4
space-y-2
text-gray-600
dark:text-gray-300
">


<li>• Artificial Intelligence</li>

<li>• Data Structures & Algorithms</li>

<li>• Cloud Computing</li>

<li>• Mobile Programming</li>

<li>• Web Development</li>


</ul>


</div>


</div>


</motion.section>









{/* SKILLS */}



<section className="py-16 px-6">


<div className="max-w-5xl mx-auto">


<motion.h2

variants={reveal}

initial="hidden"

whileInView="show"

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
scale:.8
}}


whileInView={{
opacity:1,
scale:1
}}


transition={{
delay:index*.1
}}


viewport={{
once:true
}}


whileHover={{
scale:1.08
}}



className="
bg-white
dark:bg-gray-800
dark:text-white
p-5
rounded-xl
shadow-md
text-center
font-semibold
"


>


{skill}


</motion.div>


))


}


</div>


</div>


</section>









{/* COMMUNITY */}



<motion.section

variants={reveal}

initial="hidden"

whileInView="show"

viewport={{
once:true
}}

className="
bg-white
dark:bg-gray-950
py-16
px-6
"

>


<div className="max-w-5xl mx-auto">


<h2 className="
text-3xl
font-bold
dark:text-white
mb-6
">

Community Impact

</h2>



<div className="
bg-gray-100
dark:bg-gray-800
p-6
rounded-2xl
shadow
">


<p className="
text-gray-600
dark:text-gray-300
leading-relaxed
">


Through Runda Youth Sports Association (RYSA), I support
photography training, coding mentorship, computer literacy,
sports activities, tree planting and youth empowerment.


</p>


</div>


</div>


</motion.section>







<Footer />


</div>


</div>

);

}