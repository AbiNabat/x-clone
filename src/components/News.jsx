"use client"
import React, {useEffect} from 'react';

const News = () => {
    const [news, setNews] = React.useState([]);
    const [articleNum, setArticleNum] = React.useState(4);
    useEffect(()=> {
        fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then((res)=> res.json()).then((data)=> {
            setNews(data.articles);
        });
    }, [])
    return (
        <div className='text-gray-600 space-y-5 bg-gray-100 rounded-xl pt-2'>
            <h4 className='text-bold text-xl px-4'>Whats news</h4>
            {news.slice(0, articleNum).map((item, index) => (
               <div key={index}>
                   <a href={item.url} target='_blank'>
                      <div className='flex items-center justify-center px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200'>
                          <div className='space-y-2'>
                              <h6 className='text-sm font-bold'>{item.title}</h6>
                              <p className='text-xs font-medium'>{item.source.name}</p>
                          </div>
                          <img src={item.urlToImage}  className='rounded-xl' width={70}/>
                      </div>
                   </a>
               </div>
            ))}
            <button
                onClick={()=>setArticleNum(articleNum+4)}
                className='w-full py-2 bg-gray-200 hover:bg-gray-300 transition duration-200'>More news</button>

        </div>
    );
};

export default News;