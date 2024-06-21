export const AddressCard = (props) => {
    return (
        <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
            <div
                key={props.title}
                className="p-3 w-full min-w-[320px] md:max-w-[450px] lg:w-[380px] relative rounded-md hover:shadow-xl flex bg-[#F4F4F4]"
            >
                <div className="flex flex-col items-start p-4 grow">
                    {
                        Object.keys(props).map((key, idx) => idx === 0 ?
                            (<p key={key} className="my-1 font-medium typography-text-base text-[#8A8A8A]">{props[key]}</p>) :
                            (
                                <p key={key} className="font-normal typography-text-sm text-[#8A8A8A]">{props[key]}</p>
                            )
                        )
                    }
                </div>
                <button className="p-4 text-[#333333] font-bold">แก้ไข</button>
            </div>
        </div>
    )
}

export default AddressCard