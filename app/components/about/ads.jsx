import React from "react";

const PostAdSection = () => {
  return (
    <section
      className="relative w-full h-[45vh] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('/assets/image/bannerbg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 drop-shadow-md hover:text-sky-500">
          Ready to Post Your Ads?
        </h2>
        <p className="text-base sm:text-lg mb-5 max-w-5xl text-white/90">
          Take the next step to grow your business. Post your ads for free and connect with potential customers today!
        </p>
        <a
          href="#"
          className="bg-blue-700 hover:bg-blue-700 text-white font-sm py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          Free Post Ads
        </a>
      </div>
    </section>
  );
};

export default PostAdSection;
