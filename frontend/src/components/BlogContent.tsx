import React from "react";
import Avatar from "./Avatar";

const BlogContent = () => {
  const content =
    "India is a land of various cultures and a rich heritage. It is the seventh-largest country by area and the second-most populous country globally. The peacock is India’s national bird, and the Bengal tiger is the country’s national animal. The national song is named Vande Matram (written by Bankimchandra Chatterji). The Indian national song was first performed at the Indian National Congress in 1896. ‘Jana Gana Mana,’ India’s national anthem, is sung in 52 seconds. The national flag of India is named Tiranga, which is made up of three colours: saffron, white, and green, with the Ashoka Chakra in navy blue in the centre.";

  return (
    <div>
      <div className="p-2 max-w-3xl">
        <div className="flex ">
          <Avatar name="Giridhar" />
          <div className="flex flex-col justify-center pl-2  text-slate-400">
            &#9679;
          </div>
          <div className="flex flex-col justify-center pl-2 font-thin text-lg">
            23-Dec-2023
          </div>
        </div>
        <div className="mt-2">
          <div className="font-extrabold text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam
            numquam iste accusantiumx
          </div>
          <div>{content.substring(0, 200) + "..."}</div>
          <div>
            {content.length > 100
              ? Math.floor(content.length / 300) + " minutes read"
              : "1 minute read"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
