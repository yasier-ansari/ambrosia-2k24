const SectionContainer = ({ title, children }) => {
    return (
        <div className={`flex flex-col  w-full h-full py-8 px-20 md:px-40 `}>
            <div className='flex w-full h-full items-center mb-6 '>
                <h3 className='w-max font-bold heading box-shadow-hover text-xl sm:text-2xl md:text-3xl xl:text-4xl mr-3 rounded-md md:self-start henny '>
                    {title}
                </h3>
                <div className='w-full h-full min-h-12 head p-1 rounded-sm'>
                    ‎
                </div>
            </div>
            {
                children
            }
        </div>
    )
}


export default SectionContainer