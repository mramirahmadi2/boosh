import { useSelector } from "react-redux";

const useCustomHeader = () => {
    const menu = useSelector((state) => state.headerMenu.value);
    return menu;
}
 
export default useCustomHeader;
