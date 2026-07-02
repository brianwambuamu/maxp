import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export default function Header() {


  const [open, setOpen] = useState(false);

  const location = useLocation();


  const closeMenu = () => {
    setOpen(false);
  };



  const navLinks = [

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

  ];




  return (


    <motion.header


      initial={{
        y:-100
      }}


      animate={{
        y:0
      }}


      transition={{
        duration:0.6
      }}



      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-white/80
      dark:bg-gray-900/80
      border-b
      border-gray-200
      dark:border-gray-800
      shadow-lg
      "

    >




      <div className="
      max-w-7xl
      mx-auto
      px-6
      py-4
      flex
      justify-between
      items-center
      ">





        {/* LOGO SECTION */}



        <motion.div


          whileHover={{
            scale:1.05
          }}


        >


          <Link

            to="/"

            onClick={closeMenu}

            className="
            flex
            items-center
            gap-3
            "


          >




            {/* PROFILE IMAGE LOGO */}


            <motion.img


              whileHover={{
                rotate:5
              }}


              src="/MAX.jpg"


              alt="Maxwell"


              className="
              w-12
              h-12
              rounded-full
              object-cover
              border-2
              border-blue-600
              shadow-md
              "


            />





            {/* BRAND NAME */}



            <div>


              <h1

                className="
                text-xl
                md:text-2xl
                font-bold
                bg-linear-to-r
                from-blue-600
                to-cyan-500
                bg-clip-text
                text-transparent
                "

              >

                Maxwell


              </h1>




              <p

                className="
                text-xs
                text-gray-500
                dark:text-gray-400
                "

              >

                Portfolio


              </p>



            </div>



          </Link>



        </motion.div>








        {/* DESKTOP MENU */}



        <nav className="
        hidden
        md:flex
        items-center
        gap-8
        ">



          {

            navLinks.map((link)=>(



              <Link


                key={link.path}


                to={link.path}


                className="
                relative
                font-medium
                "


              >




                <span

                  className={

                    `
                    transition

                    ${
                      location.pathname === link.path

                      ?

                      "text-blue-600"

                      :

                      "text-gray-700 dark:text-gray-200"

                    }

                    hover:text-blue-600

                    `

                  }


                >

                  {link.name}


                </span>







                {


                  location.pathname === link.path && (



                    <motion.div


                      layoutId="active"


                      className="
                      absolute
                      left-0
                      -bottom-2
                      w-full
                      h-0.5
                      bg-blue-600
                      rounded-full
                      "


                    />



                  )



                }





              </Link>



            ))



          }



        </nav>









        {/* MOBILE BUTTON */}



        <motion.button


          whileTap={{
            scale:0.9
          }}


          onClick={()=>setOpen(!open)}


          className="
          md:hidden
          text-3xl
          text-gray-800
          dark:text-white
          "


        >


          {

            open

            ?

            "✕"

            :

            "☰"

          }



        </motion.button>





      </div>









      {/* MOBILE MENU */}



      <AnimatePresence>



        {


          open && (



            <motion.div


              initial={{

                opacity:0,

                height:0

              }}



              animate={{

                opacity:1,

                height:"auto"

              }}



              exit={{

                opacity:0,

                height:0

              }}



              transition={{

                duration:0.3

              }}



              className="
              md:hidden
              bg-white
              dark:bg-gray-900
              border-t
              dark:border-gray-800
              "



            >



              <div className="
              flex
              flex-col
              px-6
              py-6
              gap-5
              ">



                {


                  navLinks.map((link)=>(



                    <Link


                      key={link.path}


                      to={link.path}


                      onClick={closeMenu}


                      className={

                        `

                        text-lg

                        transition


                        ${
                          location.pathname === link.path

                          ?

                          "text-blue-600 font-semibold"

                          :

                          "text-gray-700 dark:text-gray-200"

                        }


                        hover:text-blue-600


                        `

                      }



                    >


                      {link.name}


                    </Link>



                  ))



                }





              </div>



            </motion.div>



          )



        }



      </AnimatePresence>





    </motion.header>


  );

}