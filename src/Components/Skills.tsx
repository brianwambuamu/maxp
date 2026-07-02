import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";


export default function Skills() {


const technicalSkills = [

{
name:"React JS",
level:"Advanced",
icon:"⚛️"
},

{
name:"JavaScript",
level:"Advanced",
icon:"🟨"
},

{
name:"TypeScript",
level:"Intermediate",
icon:"🔷"
},

{
name:"Tailwind CSS",
level:"Advanced",
icon:"🎨"
},

{
name:"HTML & CSS",
level:"Advanced",
icon:"🌐"
},

{
name:"PHP",
level:"Intermediate",
icon:"🐘"
},

{
name:"MySQL Database",
level:"Intermediate",
icon:"🗄️"
},

{
name:"Git & GitHub",
level:"Intermediate",
icon:"🐙"
}

];





const otherSkills=[

"Software Development",
"UI/UX Design",
"Responsive Web Design",
"Problem Solving",
"Backend Development",
"API Integration",
"Photography",
"Media Production",
"Team Leadership",
"Community Technology Training"

];





const experience=[

{
title:"Software Engineer",
description:
"Developing modern web applications using React, Tailwind CSS, JavaScript and backend technologies."
},


{
title:"Photographer - RYSA",
description:
"Capturing community activities, sports events and creating visual stories through photography."
},


{
title:"Team Lead - RYSA Media",
description:
"Leading media activities, coordinating content creation and guiding creative projects."
},


{
title:"Community Tech Builder",
description:
"Supporting coding mentorship, computer literacy and technology programs within the community."
}

];





const reveal={

hidden:{
opacity:0,
y:60
},


show:{

opacity:1,

y:0,

transition:{
duration:0.7
}

}

};






return (


<div className="dark">


<div className="
bg-gray-50
dark:bg-gray-900
min-h-screen
overflow-hidden
transition
">


<Header />







{/* HERO BACKGROUND SECTION */}



<section

className="
relative
pt-36
pb-28
px-6
bg-cover
bg-center
"

style={{

backgroundImage:
"url('/MAX.jpg')"

}}

>


{/* DARK OVERLAY */}

<div className="
absolute
inset-0
bg-black/75
">
</div>





<motion.div


variants={reveal}

initial="hidden"

animate="show"


className="
relative
max-w-4xl
mx-auto
text-center
"

>



<h1 className="
text-5xl
md:text-6xl
font-bold
text-white
">


My 


<span className="
text-blue-400
">

Skills

</span>


</h1>





<p className="
mt-6
text-lg
text-gray-200
max-w-2xl
mx-auto
leading-relaxed
">


Technologies, creative skills and experience that help me
build digital solutions, modern applications and community projects.


</p>





<motion.div

animate={{

y:[0,-10,0]

}}

transition={{

duration:3,

repeat:Infinity

}}


className="
mt-10
inline-block
bg-white/10
backdrop-blur-md
px-8
py-4
rounded-2xl
border
border-white/20
"


>


<p className="
text-white
font-semibold
">

React Developer • Software Engineer • Photographer • Tech Builder

</p>


</motion.div>



</motion.div>



</section>













{/* TECHNICAL SKILLS */}



<section className="
px-6
py-20
">


<div className="
max-w-6xl
mx-auto
">



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
mb-10
"

>


Technical Skills


</motion.h2>







<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-6
">


{


technicalSkills.map((skill,index)=>(



<motion.div


key={skill.name}


initial={{

opacity:0,

scale:0.8

}}



whileInView={{

opacity:1,

scale:1

}}



transition={{

delay:index*0.1

}}



viewport={{

once:true

}}



whileHover={{

y:-10,

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



<div className="text-4xl">

{skill.icon}

</div>




<h3 className="
mt-4
text-xl
font-bold
dark:text-white
">


{skill.name}


</h3>



<p className="
mt-2
text-blue-600
font-semibold
">


{skill.level}


</p>



</motion.div>



))


}



</div>


</div>


</section>













{/* PROFESSIONAL SKILLS */}




<section className="
bg-white
dark:bg-gray-950
py-20
px-6
">


<div className="
max-w-5xl
mx-auto
">



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


Professional Skills


</motion.h2>








<div className="
flex
flex-wrap
gap-4
">



{


otherSkills.map((skill,index)=>(


<motion.span


key={skill}



initial={{

opacity:0,

y:30

}}



whileInView={{

opacity:1,

y:0

}}



transition={{

delay:index*0.05

}}



viewport={{

once:true

}}



whileHover={{

scale:1.1

}}



className="
bg-blue-100
text-blue-700
px-5
py-3
rounded-full
font-medium
cursor-pointer
hover:bg-blue-600
hover:text-white
transition
"


>


{skill}



</motion.span>



))


}



</div>


</div>


</section>













{/* EXPERIENCE */}




<section className="
py-20
px-6
">


<div className="
max-w-5xl
mx-auto
">



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
mb-10
"

>


Experience & Roles


</motion.h2>







<div className="
space-y-6
border-l-4
border-blue-600
pl-6
">



{


experience.map((item,index)=>(


<motion.div



key={item.title}



initial={{

opacity:0,

x:-50

}}



whileInView={{

opacity:1,

x:0

}}



transition={{

delay:index*0.15

}}



viewport={{
once:true
}}



whileHover={{

scale:1.03

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
text-xl
font-bold
text-blue-600
">


{item.title}


</h3>




<p className="
mt-3
text-gray-600
dark:text-gray-300
">


{item.description}


</p>



</motion.div>



))


}



</div>


</div>


</section>








<Footer />



</div>


</div>


);


}