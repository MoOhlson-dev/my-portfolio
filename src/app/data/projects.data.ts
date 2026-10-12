import { Project } from "../models/projects.model";
export const RAW_PROJECT_STACK: Omit<Project, 'id'>[] = [
    
    {
        title: "Escape the Castle!",  
        image: "escape_the_city_screenshot.webp", 
        category: 'game',
        description: "A game project that was made during one of my final years at university, a fun project where we used DirectX11 and C++. We used a pixel art style and made a fun metroidvania-style little game from scratch." },
     
    {
        title: "My portfolio",
        image: "portfolio_pic.webp",
        category: 'website',
        description: "This website is where you are at! Using Angular and Tailwind, I have hosted this portfolio on GitHub, and it is now available online. I took a lot of time to understand various features of Angular and the steps necessary. I'm proud; despite its apparent simplicity, I covered a lot of ground."},
  ]; 