import { useEffect } from "react"

function ServiceFilter({activeCategory, setActiveCategory, services, setFilterd}) {
    useEffect(() => {
        if(activeCategory === 'all'){
            setFilterd(services)
        }else{
            setFilterd(services.filter((service) => 
                service.type.includes(activeCategory)
            ))
        }
    }, [activeCategory, setFilterd, services])
  return (
    <div className='flex lg:flex-col gap-2 md:gap-5'>
        <button className={activeCategory === 'all' ? 'bg-taggreen py-1 px-3 text-white rounded-lg': "none"} id="cta_service_filter_all" onClick={() => setActiveCategory('all')}>全て</button>
        <button className={activeCategory === 'Planning' ? 'bg-taggreen py-1 px-3 text-white rounded-lg': "none"} id="cta_service_filter_planning" onClick={() => setActiveCategory('Planning')}>Planning</button>
        <button className={activeCategory === 'Design' ? 'bg-taggreen py-1 px-3 text-white rounded-lg': "none"} id="cta_service_filter_design" onClick={() => setActiveCategory('Design')}>Design</button>
        <button className={activeCategory === 'Development' ? 'bg-taggreen py-1 px-3 text-white rounded-lg': "none"} id="cta_service_filter_development" onClick={() => setActiveCategory('Development')}>Development</button>
    </div>
  )
}

export default ServiceFilter