import { createModule } from "redux-box";
import state from "./state";
import mutations from "./mutations";
import sagas from "./sagas";

export default createModule({
  state,
  mutations,
  sagas
});
