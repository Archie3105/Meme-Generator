import React, {useEffect, useState} from 'react'
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/Memes';

function HomePage() {

  const [data,setData] = useState([]);

  
  // useEffect (() => {
  //   getAllMemes().then(memes => console.log(memes));
  // });
  useEffect (() => {
    getAllMemes().then(memes => setData(memes.data.memes));
  });

  return (
    <div className="flex flex-wrap mt-5 m-auto justify-center">
      {data.map((el) => ( <MemeCard img={el.url} title={el.name} />))}
    </div>
  )
}

export default HomePage;
