import React from "react"
import { motion } from "framer-motion"

const Resources = () => {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
    <div className="bg-dark-blue">
      <div className="lg:flex flex-col items-center justify-items-center">
        <h1 className="text-purple text-4xl uppercase font-thin pb-6 text-center"> TSA resources </h1>
      <div className="bg-dark-gray p-8 text-center leading-loose text-base uppercase font-thin rounded-3xl lg:w-2/4">
        <a href="https://drive.google.com/file/d/1dAEX0rMaIrrscxNkcjJvanpAK6pxPMvW/view?usp=sharing" target="_blank" className="hover:text-med-blue duration-200">Plan of Work Log</a> <br/>
        <a href="https://drive.google.com/file/d/19yxuQtreGnn2Ym0xhkdOzpmQCwvRx2t4/view?usp=sharing" target="_blank" className="hover:text-med-blue duration-200">Student Copyright Checklist</a> <br/>
        <a href="https://drive.google.com/drive/folders/1vO4cD14A19ukYKR08SR92QVHhlHI78hh?usp=sharing" target="_blank" className="hover:text-med-blue duration-200">Photo/film/video consent and release</a>
      </div>
        <h1  className="text-purple text-4xl uppercase font-thin pb-6 text-center mt-20"> Resources Used </h1>
    </div>
      <div className="lg:flex uppercase">
        <div className="text-center lg:w-2/4 pb-20 lg:pb-0">
          <h3 className="text-purple text-2xl uppercase ">Design</h3>
          <p className="text-white-gray uppercase mb-6 italic">All graphics and videos are original and designed soley by the team.</p>
          <div className="pb-6 leading-loose">
            <h4 className="text-ice-blue uppercase text-xl">Assets</h4>
            <div className="font-thin">
              <a href="https://fonts.google.com/specimen/Roboto?query=ROBOTO#standard-styles" target="_blank" className="hover:text-med-blue duration-200">Font Used (Graphics)</a> <br/>
              <a href="https://fonts.google.com/specimen/Lato" target="_blank" className="hover:text-med-blue duration-200">Font Used (Website)</a>
              </div>
          </div>
          <div className="mb-6 leading-loose">
            <h4 className="text-ice-blue uppercase text-xl">Design Inspiration</h4>
            <div className="font-thin">
              <a href="https://xd.adobe.com/ideas/principles/web-design/best-modern-fonts-for-websites/" target="_blank" className="hover:text-med-blue duration-200">Font Choice</a> <br/>
              <a href="https://wallpapersafari.com/w/ECM1ib" target="_blank" className="hover:text-med-blue duration-200">Color Scheme</a> <br/>
              <a href="https://www.shutterstock.com/blog/vaporwave-aesthetic-retro-design" className="hover:text-med-blue duration-200">General Vaporwave Reference</a> <br/>
              <a href="https://www.deviantart.com/rayed-the-pleb/art/V-A-P-O-R-W-A-V-E-Aesthetic-Mountains-690337699" className="hover:text-med-blue duration-200">Doceode Main Banner</a> <br/>
              <a href="https://www.amazon.com/Future-Retro-Spectrum-Eighties-Fsgodonelco/dp/B08Z3W1QV7" className="hover:text-med-blue duration-200">Rust Main Banner</a> <br/>
              <a href="https://www.khanacademy.org/" target="_blank" className="hover:text-med-blue duration-200">Photographed Graphic</a>
            </div>
          </div>
          <div className="mb-6 leading-loose">
            <h4 className="text-ice-blue uppercase text-xl">Fake Legal Generator</h4>
            <div className="font-thin">
              <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" className="hover:text-med-blue duration-200" >Terms of Service</a> <br/>
          <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" className="hover:text-med-blue duration-200">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="text-center lg:w-2/4">
          <h3 className="text-purple text-2xl uppercase">Programming</h3>
          <p className="text-white-gray uppercase italic mb-6">All programming was done solely by the team.</p>
          <div className="mb-6 leading-loose font-thin">
            <a className="hover:text-med-blue duration-200" target="_blank" href="https://1drv.ms/u/s!Avvk44dc-F1UgW4rhkn9W5ETbzr7?e=mxrH4O">Source Code</a>
          </div>
          <div className="mb-6 leading-loose">
            <h4 className="text-ice-blue uppercase text-xl">Documentation</h4>
            <div className="font-thin">
              <a href="https://tailwindcss.com/" target="_blank" className="hover:text-med-blue duration-200">Tailwind CSS</a> <br/>
          <a href="https://reactjs.org/" target="_blank" className="hover:text-med-blue duration-200">React JS</a>
              <br/> <a href="https://www.framer.com/docs/" target="_blank" className="hover:text-med-blue duration-200">Framer</a>
              <br/> <a href="https://auth0.com/docs" target="_blank" className="hover:text-med-blue duration-200">Auth0</a>
            </div>
          </div>
          <div className="mb-6 leading-loose">
            <h4 className="text-ice-blue uppercase text-xl">General</h4>
            <div className="font-thin">
              <p className="italic font-normal" >Class Notes/Prior Knowlege</p> <br/>
              <a href="https://coryrylan.com/blog/css-gap-space-with-flexbox" target="_blank" className="hover:text-med-blue duration-200">Flexbox Gap Spacing</a> <br/>
              <a href="https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp" target="_blank" className="hover:text-med-blue duration-200">Scroll</a> <br/>
            <a href="https://www.w3schools.com/css/tryit.asp?filename=trycss_form_button" target="_blank" className="hover:text-med-blue duration-200">Button Styling</a>
              <br/> <a href="https://www.youtube.com/watch?v=YxLMAk2H3ns" target="_blank" className="hover:text-med-blue duration-200">Page Animations</a> 
            </div>
          </div>
           <div className="mb-6 leading-loose">
            <h4 className="text-ice-blue uppercase text-xl">Main page</h4>
            <div className="font-thin">
              <a href="https://www.w3schools.com/bootstrap/bootstrap_carousel.asp" target="_blank" className="hover:text-med-blue duration-200">Bootstrap Carousel</a> <br/>
          <a href="https://www.w3schools.com/howto/howto_js_slideshow.asp" target="_blank" className="hover:text-med-blue duration-200">Slideshow</a>
            </div>
          </div>
          <div className="mb-6 leading-loose">
            <h4 className="text-ice-blue uppercase text-xl">Courses</h4>
            <div className="font-thin">
              <a href="https://www.w3schools.com/html/html_youtube.asp" target="_blank" className="hover:text-med-blue duration-200">Embeded Youtube Video</a> <br/>
          <a href="https://www.w3schools.com/howto/howto_css_modals.asp" target="_blank" className="hover:text-med-blue duration-200">Modal Window</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resources