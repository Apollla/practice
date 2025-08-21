import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { decrement, increment } from "../../../features/counter/counterSlice";

export const HomePage = () => {
  const { value } = useAppSelector(state => {
    return state.counter;
  });
  const { theme } = useAppSelector(state => state.theme);

  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col justify-center items-center">
    <div>Counter: {value} </div>
    <div className="flex gap-2">
      <button className="bg-indigo-500 text-white rounded p-2 cursor-pointer" onClick={() => dispatch(increment())}>Increment</button>
      <button className="bg-indigo-500 text-white rounded p-2 cursor-pointer" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
    </div>
  )
}
