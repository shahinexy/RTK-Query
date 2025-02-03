import { ITask } from "@/types";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { deleteTask, toggleConpleteState } from "@/redux/features/task/taskSlice";
// import { SeletUser } from "@/redux/features/users/userSlice";

interface IProps {
    task: ITask
}

const TaskCard = ({task}: IProps) => {

  // const dispatch = useAppDispatch()

  // const users = useAppSelector(SeletUser)

  // const assignUser = users.find(user => user.id === task.assignTo)

  return (
    <div className="border border-gray-400 my-2 p-5">
      <div className="flex justify-between items-center ">
        <div className="flex gap-3 items-center">
          <div className={cn('size-3  inline-block rounded-full', {
            "bg-green-500": task.priority === 'low',
            "bg-yellow-500": task.priority === 'medium',
            "bg-red-500": task.priority === 'high'
          })}></div>
          
          <p className={cn({'line-through': task.isCompleted})}>{task?.title}</p>
        </div>
        <div className="flex gap-3">
            <Button >Delete</Button>
            <input type="checkbox" />
        </div>
      </div>
      {/* <p className="pb-5">Assign To: {assignUser ? assignUser.name : 'No One'}</p> */}
      <p>{task?.description}</p>
    </div>
  );
};

export default TaskCard;
