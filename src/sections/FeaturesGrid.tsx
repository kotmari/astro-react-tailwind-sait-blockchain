import { useRef } from "react"
import { CutCornerButton } from "../components/CutCornerButton"
import { TextButton } from "../components/TextButton"
import { motion, useScroll, useTransform } from "framer-motion"

const listItems = [
   "Experience unparalleled security and scalability",
   "fully benefit from scalable network effects",
   "Unlock the potential of decentralized networks"
]


export const FeaturesGrid = () => {
   const torusKnotRef = useRef(null);
   const firstHemisphereRef = useRef(null);

   const { scrollYProgress: torusKnotscrollYProgress } = useScroll({
      target: torusKnotRef,
      offset: ["start end", "end start"],
   })

   const torusKnotTranslateY = useTransform(torusKnotscrollYProgress, [0, 1], [100, -100]);

   const torusKnotRotate= useTransform(torusKnotscrollYProgress, [0, 1], [30, -30]);

   const { scrollYProgress: firstHemispherescrollYProgress } = useScroll({
      target: firstHemisphereRef,
      offset: ["start end", "end start"],
   })

   const firstHemisphereTranslateY = useTransform(firstHemispherescrollYProgress, [0, 1], [50, -50]);

   const firstHemisphereRotate= useTransform(firstHemispherescrollYProgress, [0, 1], [-20, -50]);



   const coneRef = useRef(null);


   const { scrollYProgress: conescrollYProgress } = useScroll({
      target: coneRef,
      offset: ["start end", "end start"],
   })

   const coneTranslateY = useTransform(conescrollYProgress, [0, 1], [100, -100]);

   const coneRotate= useTransform(conescrollYProgress, [0, 1], [12, 45]);


   const lastHemisphereRef = useRef(null);
   const { scrollYProgress: lastHemispherescrollYProgress } = useScroll({
      target: lastHemisphereRef,
      offset: ["start end", "end start"],
   })

   const lastHemisphereTranslateY = useTransform(lastHemispherescrollYProgress, [0, 1], [50, -50]);

   const lastHemisphereRotate= useTransform(lastHemispherescrollYProgress, [0, 1], [10, -10]);





   return (
      <section className="py-24 overflow-x-clip">
         <div className="container">
            <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="col-span-2">
                  <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">Empowering the future of blockchain.</h2>
                  <p className="text-xl lg:text-2xl text-zinc-400 mt-8">Blockforde provides robust and secure infrastructure to support the next generation of decentralized applications.</p>
                  <ul className="flex flex-col gap-8 mt-12">
                     {listItems.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                           <div className="inline-flex justify-center items-center flex-shrink-0 size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                              <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                           </div>
                           <span className="text-xl font-bold">{item}</span>
                        </li>
                     ))}
                  </ul>
                  <div className="flex gap-8 mt-12">
                     <CutCornerButton>Get Started</CutCornerButton>
                     <TextButton>Learn More</TextButton>
                  </div>
               </div>
               <div className="hidden md:block">
               <div className="relative inline-flex z-0">
                  <motion.img src="/assets/images/torus-knot.png" alt="Torus Knot 3D" className="size-96 max-w-none"
                  ref={torusKnotRef}
                  style={{
                     translateY: torusKnotTranslateY,
                     rotate: torusKnotRotate
                  }}
                  />
                  <motion.img src="/assets/images/hemisphere.png" alt="Hemisphere 3D" className=" absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  ref={firstHemisphereRef}
                  style={{
                     translateY: firstHemisphereTranslateY,
                     rotate: firstHemisphereRotate
                  }}
                   />
                </div>
               </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="relative hidden md:block">
                  <div className="absolute right-0 z-0">
                  <motion.img src="/assets/images/cone.png" alt="Cone 3D" className="size-96 max-w-none rotate-12"
                  ref={coneRef}
                  style={{
                     translateY: coneTranslateY,
                     rotate: coneRotate
                  }} />
                  <motion.img src="/assets/images/hemisphere.png" alt="Hemisphere 3D" className="absolute  top-3/4 -z-10"
                  ref={lastHemisphereRef}
                  style={{
                     translateY: lastHemisphereTranslateY,
                     rotate: lastHemisphereRotate
                  }} />
                </div>
                  </div>

                <div className="col-span-2">
                  <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">Blockforge leads the way.</h2>
                  <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                  <p>Blockforge is dedicated to supporting the evolution of Web3 applications by delivering the necessary infrastructure and security for Web3</p>
                  <p>Blockforge champions Web3 for everyone. As a decentralized blockchain scalinh platform, Blockforge enables developers to create scalable, user-frendly dApps with low transaction costs, all while ensuring robust security.</p>
                  </div>
                  <div className="flex gap-8 mt-12">
                     <CutCornerButton>Get Started</CutCornerButton>
                     <TextButton>Learn More</TextButton>
                  </div>
               </div>
                </div>
              
            </div>
         </div>
      </section>
   )
}