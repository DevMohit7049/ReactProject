import React from "react";

const Home = () => {

     return (
          <>
               <section className="bg-gradient-to-b from-[#F9FAFB] to-[#D2D6DB] min-h-screen w-full flex items-center justify-center p-4">
                    <div className="card-box border border-transparent
                     bg-white w-full sm:[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-auto rounded-xs flex flex-col items-center
                    p-6 gap-6">
                         <div className="row-one flex items-center gap-6 w-full">
                              <img src="/one.png" alt="" className="w-[18%]" />
                              <div className="sub-headings">
                                   <h2 className="text-lg sm:text-xl font-semibold">Sarah Dole</h2>
                                   <span className="text-[#525252]">@Sarahdole</span>
                              </div>
                         </div>
                         <div className="row-two flex items-center w-full">
                              <p className="text-[#525252]">I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!</p>
                         </div>

                    </div>
               </section>
          </>
     )
}
export default Home;