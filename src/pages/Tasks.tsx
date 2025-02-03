// import { seletTasks, updateFilter } from "@/redux/features/task/taskSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import TaskCard from "./../components/module/TaskCard";
import { AddTaskModal } from "@/components/module/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";

const Tasks = () => {
  // const task = useAppSelector(seletTasks);

  // const dispatch = useAppDispatch()

  // console.log(task);

  const { data, isError, isLoading } = useGetTasksQuery(undefined);

  console.log({data, isError, isLoading});
  return (
    <div className="max-w-7xl mx-auto py-7">
      <div className="flex justify-between">
        <AddTaskModal />
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {/* {task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))} */}
    </div>
  );
};

export default Tasks;
