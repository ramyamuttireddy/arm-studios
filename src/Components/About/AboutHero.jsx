  function AboutHero () {
     return (
        <>
           <div className="flex flex-col justify-center
                           ">
               <div className="flex flex-col gap-5 p-[80px_20px]
                                md:p-[140px_30px]
                                lg:pl-12 lg:p-[200px_0px_160px_0px] 
                                xl:gap-24                                 
                                2xl:p-[250px_120px_180px]">
                   <div className="text-[26px] font-medium uppercase leading-tight flex flex-col justify-center items-center
                                    md:text-5xl lg:text-7xl xl:text-[82px] 2xl:text-[96px]">
                       <div>Arm Studio—</div>
                       <div className="md:pr-20 xl:pr-2p 2xl:pr-1p">
                           <div>Award Winning</div>
                           <div>Creative Design Studio</div>
                       </div>                       
                   </div>
                   <div className="text-[26px] font-medium uppercase leading-tight italic flex flex-col justify-center items-center
                                   md:text-5xl lg:text-7xl xl:text-[82px] 2xl:text-[96px]">
                       <div>Arm Studio—</div>
                       <div className="md:pr-20 xl:pr-2p 2xl:1p">
                            <div>Award Winning</div>
                            <div>Creative Design Studio</div>
                        </div>                      
                   </div>
                   <div className="pt-10 flex justify-end md:pt-24">
                      <div className="border-b w-[70%] text-white"></div>
                   </div>
               </div>
           </div>
        </>
     )
 }

 export default AboutHero