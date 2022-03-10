import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="blue" onClick={() => {}}> </ChildAsFC>;
};
export default Parent;
