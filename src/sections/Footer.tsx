const socialIcon = [
   {
      icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="size-5 fill-zinc-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" /></svg>
   },
   {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1227" fill="currentColor" viewBox="0 0 1200 1227"
      className="size-5 fill-zinc-500"><path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
   },
   {
      icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="size-5 fill-zinc-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" /></svg>
   },
]



export const Footer = () => {
   return (
      <footer className="py-24 bg-zinc-950">
         <div className="container">
            <div className="flex justify-between items-center">
               <div>
                  <img src="/assets/images/logo.svg" alt="Blockforge logo" />
               </div>
               <nav className="hidden md:flex text-zinc-500 font-heading font-black gap-12">
                  <a href="#">Home</a>
                  <a href="">Blog</a>
                  <a href="">Careers</a>
                  <a href="">Contact</a>
               </nav>
            </div>
            <div className="mt-12 md:mt-48 md:flex justify-between items-center">
               <p className="text-zinc-400">&copy; 2024 Blockforge. All rights reserved.</p>
               <div className="mt-4 md:mt-0 flex gap-6">
                  {socialIcon.map((icon, iconIndex)=>(
                  <div className="inline-flex size-10 bg-zinc-800 rounded-full items-center justify-center">
                     { icon.icon }
                  </div>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   )
}