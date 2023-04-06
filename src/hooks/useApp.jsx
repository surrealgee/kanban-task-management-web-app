import { useContext } from "react";
import { Context } from "./Context";
import SelectBoardModal from "../components/modals/SelectBoardModal";
import NewBoardForm from "../components/modals/NewBoardForm";

function useApp() {
  const { setModal, setShown } = useContext(Context);

  function mountModal(target) {
    if (target === "boardSelector") {
      setModal(<SelectBoardModal />);
      setShown(true);
    } else if (target === "newBoard") {
      setModal(<NewBoardForm />);
    }
  }

  function unmountModal() {
    setModal(false);
    setShown(false);
  }

  return { mountModal, unmountModal };
}

export default useApp;
