import { FunctionComponent } from "react";
import Post from "./Post";
import fetcher from "lib/fetcher";
import useSWR from "swr";
import { DevToArticles } from "../lib/types";

export default function Posts() {
  const { data } = useSWR<DevToArticles>('/api/devto', fetcher);
  console.log(data)

  return (
    <section className='flex flex-col items-center'>
      <h2 className='font-extrabold text-3xl self-start pb-5'>Featured Posts</h2>
      <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1'>
        <Post title="How to open your files with vs code from the context menu on Windows" link="https://dev.to/matheusgomes062/how-to-open-your-files-with-vs-code-from-the-context-menu-on-windows-5fi9" views={32184}/>
        <Post title="How to increase your rendering performance by 70% in Vue.js" link="https://dev.to/matheusgomes062/how-to-increase-your-rendering-performance-by-70-in-vue-js-4dia" views={15269}/>
        <Post title="How to make a form handling with vuex" link="https://dev.to/matheusgomes062/how-to-make-a-form-handling-with-vuex-6g0" views={9888}/>
        <Post title="Programming Paradigm" link="https://dev.to/matheusgomes062/programming-paradigm-2anb" views={8473}/>
      </div>
    </section>
  );
}