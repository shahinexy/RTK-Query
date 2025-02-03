import TaskCard from "./../components/module/TaskCard";
import { AddTaskModal } from "@/components/module/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";

const Tasks = () => {
  const { data, isLoading } = useGetTasksQuery(undefined, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center text-2xl text-green-500">
        Loading...
      </div>
    );
  }
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
      {!isLoading &&
        data?.tasks.map((task: ITask) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
};

export default Tasks;
