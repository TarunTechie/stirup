import Top from "../components/top";
import { ScrollRestoration } from "react-router-dom";
import Bottom from "../components/bottom";
export default function Aboutus(){

    return(
        <>
        <Top/>
        <div className="grid">
            <img src="/images/aboutus.png" className="w-screen h-full" />
            <h1 className='text-center text-8xl font-nat text-maron mb-24'>About Us</h1>
            <p className="  text-maron text-center text-2xl ">
            <h1 className=" font-heading font-bold text-left ml-4 my-4 text-4xl  ">Welcome to Stir Up</h1>
<p className=" font-mono text-left ml-10 mb-5">
At Stir Up, we're passionate about making cooking and meal planning easier, more enjoyable, and accessible to everyone. Whether you're a seasoned chef or a novice in the kitchen, we're here to inspire you with delicious recipes and helpful tools to enhance your culinary journey.

Our mission is simple: to empower individuals and families to create delicious meals at home, regardless of their skill level or dietary preferences. We believe that cooking should be a fun and rewarding experience, and our goal is to provide the resources and support you need to make every meal a success.
</p>
<h1 className=" font-heading  font-bold text-left ml-4 my-4 text-4xl ">What We Offer :</h1>

<p className=" font-mono text-left ml-10 mb-5">Recipe Generator: Our innovative recipe generator allows you to discover new and exciting dishes based on your dietary preferences, ingredients on hand, or cuisine preferences. Say goodbye to recipe ruts and hello to culinary adventure!
</p>
<p className=" font-mono text-left ml-10 mb-5">
Meal Planning Tools: Struggling with meal planning? We've got you covered. Our meal planning tools make it easy to plan your weekly meals, create shopping lists, and stay organized in the kitchen.
</p>
<p className=" font-mono text-left ml-10 mb-5">
Expert Tips and Advice: From cooking techniques to ingredient substitutions, our team of culinary experts is here to share their knowledge and help you become a more confident and skilled home cook.
</p>
<h1 className=" font-heading  font-bold text-left ml-4 my-4 text-4xl ">Why Choose Us</h1>
<p className=" font-mono text-left ml-10 mb-5">
Quality Recipes: All of our recipes are carefully curated and tested to ensure they're delicious, easy to follow, and guaranteed to impress your friends and family.
</p>
<p className=" font-mono text-left ml-10 mb-5">
User-Friendly Interface: We've designed our website to be intuitive and user-friendly, so you can spend less time navigating and more time cooking.
</p>
<p className=" font-mono text-left ml-10 mb-5">
Community Support: Join our vibrant community of food lovers, where you can share your own recipes, ask questions, and connect with others who share your passion for cooking.
</p>
<h1 className=" font-heading font-bold text-left ml-4 my-4 text-4xl ">
Get Started Today</h1>
<p className=" font-mono text-left ml-10 mb-5">
Ready to elevate your cooking game? Join us on Stir Up and discover a world of culinary inspiration at your fingertips. Whether you're looking for quick weeknight dinners, gourmet recipes for special occasions, or healthy meal ideas, we've got everything you need to make cooking at home a breeze.
</p>
<h1 className=" font-heading font-bold text-center text-4xl my-8 ">
Thank you for choosing Stir Up. Happy cooking</h1>



            </p>
        </div>
        <Bottom/>
        </>
    )
}