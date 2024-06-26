import { useInfo } from "../context/InfoContext"

export const Hero = () => {
    const { taskList, addTask, removeTask } = useInfo();
    function handleSubmit(e) {
        e.preventDefault();
        const task = {
            id: Math.random()*10*Math.random(),
            taskName: e.target.name.value,
            price: Number(e.target.cost.value)
        }
        e.target.name.value = "";
        e.target.cost.value = "";
        addTask(task);
    }
    return (
        <div>
            <h2 className='text-2xl font-[500] mt-[2%]'>Expenses</h2>
            <div className='mt-[1%]'>
                {
                    taskList && taskList.map((task) => (
                        <div key={task.id} className='mb-[1%] flex justify-between border-[1px] border-gray-200 bg-gray-100 rounded-[5px] p-[1%]'>
                            <p>{task.taskName}</p>
                            <div className='flex'>
                                <p className='mr-[10px]'>Rs. {task.price}</p>
                                <button onClick={()=>removeTask(task)} className='bg-blue-200 px-[5px]'>Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className='text-4xl font-[500] mt-[2%]'>Add Expenses</h2>
            <div className='mt-[2%]'>
                <form onSubmit={handleSubmit}>
                    <div className='flex justify-between'>
                        <div className='flex flex-col w-[45%]'>
                            <label htmlFor="name">Name</label>
                            <input className='p-[1%] mt-[5px] border-[1px] border-gray-300 rounded-[5px]' type="text" name='name' id='name' required />
                        </div>
                        <div className='flex flex-col w-[45%]'>
                            <label htmlFor="cost">Cost</label>
                            <input className='p-[1%] mt-[5px] border-[1px] border-gray-300 rounded-[5px]' type="number" name='cost' id='cost' required />
                        </div>
                    </div>
                    <button className='bg-blue-700 text-white py-[0.5%] px-[1%] rounded-[5px] mt-[2%]' type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}
