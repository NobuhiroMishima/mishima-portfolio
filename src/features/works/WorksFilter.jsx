import { useEffect } from "react"

function WorksFilter({activeCategory, setActiveCategory, works, setFilterd}) {
    useEffect(() => {
        if(activeCategory === 'all'){
            setFilterd(works)
        }else{
            setFilterd(works.filter((work) => 
                work.category.includes(activeCategory)
            ))
        }
    }, [activeCategory, setFilterd])
  return (
    <div className='flex gap-2 md:gap-5 my-10'>
        <button className={activeCategory === 'all' ? 'bg-taggreen py-1 px-3 text-white rounded-lg': 'border border-gray-200 rounded-lg py-1 px-1'} onClick={() => setActiveCategory('all')}>全て</button>
        <button className={activeCategory === 'Planning' ? 'bg-taggreen py-1 px-3 text-white rounded-lg': 'border border-gray-200 rounded-lg py-1 px-1'} onClick={() => setActiveCategory('Planning')}>Planning</button>
        <button className={activeCategory === 'Design' ? 'bg-taggreen py-1 px-3 text-white rounded-lg': 'border border-gray-200 rounded-lg py-1 px-1'} onClick={() => setActiveCategory('Design')}>Design</button>
        <button className={activeCategory === 'Development' ? 'bg-taggreen py-1 px-3 text-white rounded-lg': 'border border-gray-200 rounded-lg py-1 px-1'} onClick={() => setActiveCategory('Development')}>Development</button>
    </div>
  )
}

export default WorksFilter