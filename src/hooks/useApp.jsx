import { useContext } from "react";
import { Context } from "./Context";
import SelectBoardModal from "../components/modals/SelectBoardModal";
import NewBoardForm from "../components/modals/NewBoardForm";
import EditBoardForm from "../components/modals/EditBoardForm";
import OptionsModal from "../components/modals/OptionsModal";
import DeleteBoardPrompt from "../components/modals/DeleteBoardPrompt";

function useApp() {
  const { setModal, setShown } = useContext(Context);

  function mountModal(target) {
    switch (target) {
      case "boardSelector":
        setModal(<SelectBoardModal />);
        setShown(true);
        break;
      case "newBoard":
        setModal(<NewBoardForm />);
        break;
      case "editBoard":
        setModal(<EditBoardForm />);
        break;
      case "optionsModal":
        setModal(<OptionsModal />);
        break;
      case "deleteBoard":
        setModal(<DeleteBoardPrompt />);
        break;
    }
  }

  function unmountModal() {
    setModal(false);
    setShown(false);
  }

  return { mountModal, unmountModal };
}

export default useApp;
