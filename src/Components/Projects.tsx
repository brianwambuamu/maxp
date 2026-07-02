import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";


export default function Projects(){


const projects=[


{
title:"RYSA Community Website",
image:"/rysa.jpg",
description:
"A community platform showcasing sports, education programs, photography, coding initiatives and community development projects.",
technologies:[
"React",
"Tailwind CSS",
"JavaScript"
],
link:"#"
},



{
title:"Local History & Culture Exploration Platform",
image:"/culture.jpg",
description:
"A digital platform designed to preserve and explore local history, culture and community stories.",
technologies:[
"React",
"PHP",
"MySQL"
],
link:"#"
},



{
title:"Political Opinion Poll System",
image:"/poll.jpg",
description:
"A web-based opinion polling system with authentication and backend functionality.",
technologies:[
"HTML",
"CSS",
"PHP",
"MySQL"
],
link:"#"
},



{
title:"Personal Portfolio Website",
image:"/portfolio.jpg",
description:
"A modern developer portfolio website showcasing my skills, projects and professional journey.",
technologies:[
"React",
"Tailwind CSS",
"TypeScript"
],
link:"#"
}


];







const gallery=[


{
image:"/photo1.jpg",
title:"RYSA Sports Event"
},

{
image:"/photo2.jpg",
title:"Community Activity"
},

{
image:"/photo3.jpg",
title:"Photography Work"
},

{
image:"/photo4.jpg",
title:"Youth Empowerment Program"
},

{
image:"/photo5.jpg",
title:"Media Production"
},

{
image:"/photo6.jpg",
title:"Community Storytelling"
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
duration:.8
}

}


};






return(


<div className="dark">


<div className="
min-h-screen
bg-gray-50
dark:bg-gray-900
transition
overflow-hidden
">


<Header />








{/* HERO BACKGROUND */}


<section

className="
relative
h-[65vh]
flex
items-center
justify-center
text-center
bg-cover
bg-center
"

style={{

backgroundImage:"url('/MAX.jpg')"

}}

>


<div className="
absolute
inset-0
bg-black/60
">


</div>




<motion.div

variants={reveal}

initial="hidden"

animate="show"

className="
relative
z-10
px-6
"


>


<h1 className="
text-5xl
md:text-6xl
font-bold
text-white
">


My


<span className="text-blue-400">

 Projects

</span>


</h1>




<p className="
mt-5
max-w-2xl
mx-auto
text-gray-200
text-lg
">


Software solutions, community platforms and creative projects
developed through technology and media.


</p>



</motion.div>



</section>













{/* PROJECTS */}



<section className="px-6 py-20">


<div className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{

projects.map((project,index)=>(


<motion.div


key={project.title}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
delay:index*0.15
}}


whileHover={{
y:-12
}}


className="
bg-white
dark:bg-gray-800
rounded-3xl
overflow-hidden
shadow-xl
"


>



<div className="overflow-hidden">


<motion.img

src={project.image}

alt={project.title}


whileHover={{

scale:1.15

}}


transition={{

duration:.5

}}


className="
w-full
h-52
object-cover
"

/>


</div>







<div className="p-6">


<h2 className="
text-xl
font-bold
dark:text-white
">


{project.title}


</h2>





<p className="
mt-3
text-gray-600
dark:text-gray-300
">


{project.description}


</p>







<div className="
flex
flex-wrap
gap-2
mt-5
">


{

project.technologies.map(tech=>(


<span

key={tech}

className="
bg-blue-100
text-blue-700
px-3
py-1
rounded-full
text-sm
"

>


{tech}


</span>


))


}



</div>








<motion.a

href={project.link}


whileHover={{
scale:1.05
}}


className="
inline-block
mt-6
bg-blue-600
text-white
px-6
py-3
rounded-xl
hover:bg-blue-700
transition
"


>


View Project


</motion.a>





</div>





</motion.div>



))


}


</div>



</section>














{/* GALLERY */}



<section className="
bg-white
dark:bg-gray-950
py-20
px-6
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
text-4xl
font-bold
dark:text-white
mb-6
"

>


Photography Gallery


</motion.h2>





<p className="
text-gray-600
dark:text-gray-300
mb-10
">


Moments captured through my photography work
with RYSA Media and community activities.


</p>







<div className="
grid
sm:grid-cols-2
md:grid-cols-3
gap-6
">


{

gallery.map((item,index)=>(



<motion.div


key={item.title}


initial={{
opacity:0,
scale:.8
}}


whileInView={{
opacity:1,
scale:1
}}


viewport={{
once:true
}}


transition={{
delay:index*.1
}}



whileHover={{
scale:1.05
}}


className="
rounded-3xl
overflow-hidden
shadow-xl
bg-gray-100
dark:bg-gray-800
"


>



<img

src={item.image}

alt={item.title}

className="
w-full
h-64
object-cover
"


/>




<div className="p-4">


<h3 className="
font-semibold
dark:text-white
">


{item.title}


</h3>


</div>




</motion.div>


))


}



</div>



</div>


</section>







<Footer />


</div>


</div>


)

}