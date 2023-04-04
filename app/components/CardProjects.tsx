"use client";

import { Data } from "../projects/data";

interface Props {
  data: Data;
}

const CardProjects = ({ data }: Props) => {
  return (
    <div className="bg-black relative block overflow-hidden rounded-lg border-[1px] border-gray-800 p-[10px] sm:p-[14px] lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <div className="flex items-center justify-center gap-4">
          <a href={data.html_url} target="_blank" className="text-slate-400 hover:text-white text-xs inline-flex justify-center items-center gap-2 rounded-md shadow-sm align-middle transition-all">
          <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="w-2.5 h-auto fill-current">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
            CODE
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
          <a href={data.homepage} target="_blank" className="text-slate-400 hover:text-white text-xs inline-flex justify-center items-center gap-2 rounded-md shadow-sm align-middle transition-all">
            LIVE DEMO
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      <div className="flex items-center justify-between mt-3">      
          <h3 className="text-sm md:text-base text-center font-bold text-slate-300">
            {data.name}
          </h3>           
      </div>
      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">{data.description}</p>
      </div>
      <dl className="mt-6 flex flex-wrap">
        {data.topics.map((d) => (
          <span key={d} className="text-xs font-medium mr-2 mt-1 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
            {d}
          </span>
        ))}
      </dl>
    </div>
  );
};

export default CardProjects;
