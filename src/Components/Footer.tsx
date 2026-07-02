import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Footer(){


const year = new Date().getFullYear();



return(


<footer className="
bg-gray-950
text-white
mt-20
overflow-hidden
">





<motion.div


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


duration:0.7

}}



className="
max-w-7xl
mx-auto
px-6
py-14
"

>




<div className="
grid
md:grid-cols-3
gap-12
">







{/* BRAND */}




<motion.div


whileHover={{


y:-5

}}



transition={{


duration:.3

}}



>



<div className="
flex
items-center
gap-3
">





<img


src="/MAX.jpg"


alt="Maxwell"


className="
w-14
h-14
rounded-full
object-cover
border-2
border-blue-500
"


/>




<div>


<h2 className="
text-2xl
font-bold
">


Maxwell


<span className="text-blue-500">

 Mujukane

</span>


</h2>



<p className="
text-sm
text-gray-400
">


Software Engineer


</p>


</div>



</div>





<p className="
text-gray-400
mt-5
leading-relaxed
">


Building modern web applications,
digital solutions and technology projects
using React, Tailwind CSS and modern tools.


</p>




</motion.div>













{/* LINKS */}



<div>


<h3 className="
text-xl
font-semibold
mb-5
">


Quick Links


</h3>





<div className="
flex
flex-col
gap-4
text-gray-400
">



{

[

{
name:"Home",
path:"/"
},

{
name:"About",
path:"/about"
},

{
name:"Projects",
path:"/projects"
},

{
name:"Skills",
path:"/skills"
},

{
name:"Contact",
path:"/contact"
}


].map((item)=>(




<motion.div


key={item.path}


whileHover={{

x:8

}}



>



<Link


to={item.path}


className="
hover:text-blue-500
transition
"


>


{item.name}


</Link>



</motion.div>




))


}





</div>


</div>













{/* CONTACT */}





<div>



<h3 className="
text-xl
font-semibold
mb-5
">


Connect


</h3>






<div className="
space-y-3
text-gray-400
">



<p>

📍 Nairobi, Kenya

</p>



<p>

📧 maxwellmujeni@gmail.com

</p>



<p>

📞 0112 197 169

</p>



</div>







<div className="
flex
gap-4
mt-6
">





<motion.a


whileHover={{

scale:1.08

}}



href="
https://wa.me/254112197169
"


target="_blank"


className="
bg-green-600
px-5
py-2
rounded-xl
hover:bg-green-700
transition
"


>


WhatsApp


</motion.a>







<motion.a


whileHover={{

scale:1.08

}}



href="
mailto:maxwellmujeni@gmail.com
"



className="
bg-blue-600
px-5
py-2
rounded-xl
hover:bg-blue-700
transition
"


>


Email


</motion.a>





</div>






</div>





</div>









{/* FOOTER BOTTOM */}





<div className="
border-t
border-gray-800
mt-12
pt-6
flex
flex-col
md:flex-row
justify-between
items-center
gap-4
">





<p className="
text-gray-500
text-sm
text-center
">


© {year} Maxwell Portfolio.
Built with React + Tailwind CSS.


</p>







<a


href="#home"


className="
bg-blue-600
px-5
py-2
rounded-full
hover:bg-blue-700
transition
text-sm
"


>


↑ Back To Top


</a>





</div>







</motion.div>



</footer>


)

}