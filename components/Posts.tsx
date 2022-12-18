import { FunctionComponent } from "react";
import Post from "./Post";
import SmartLink from "./SmartLink";

const Posts: FunctionComponent = ({
}) => {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='font-extrabold text-3xl self-start pb-10'>Featured Posts</h2>
      <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1'>
        <Post title="Everything I Know About Style Guides, Design Systems, and Component Libraries"/>
        <Post title="Rust Is The Future of JavaScript Infrastructure"/>
        <Post title="Past, Present, and Future of React State Management"/>
      </div>
      <SmartLink label="View more posts" link="#" icon="seeMore"/>
    </section>
  );
}

export default Posts;