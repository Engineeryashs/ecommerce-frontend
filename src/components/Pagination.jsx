import React from 'react'

const Pagination = ({noofPages}) => {
  const pages=[];
  console.log("YYHS"+noofPages)
  for(let i=1;i<=noofPages;i++)
  {
    pages.push(i);
  }
  console.log("Babulal")
  console.log(pages);
  return (

    <div className='flex bg-gray-100 my-[5px] mx-auto py-[5px] justify-evenly w-[40vh]'>
      {
        pages.map(function(pgno){
          console.log(pgno)
          return <span className='px-[5px] border border-black rounded-full cursor-pointer bg-gray-300' key={pgno}>{pgno}</span>
        }) 
      }
    </div>
  )
}

export default Pagination
