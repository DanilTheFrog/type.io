import { KeyPressableWithContext } from "@/entities/KeyPressable/KeyPressable";
import Keyboard from "@/entities/Keyboard";
import { StoreContext } from "@/shared/context/StoreContext";
import { Store } from "@/shared/context/storage";
const keys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"],
    ["Z", "X", "C", "V", "B", "N", "M", ",", "."],
]
const store = new Store<string, boolean>();

const TestPage = () => {


    return (
        <div>
            <StoreContext.Provider value={store}>
                <Keyboard keyset={keys} KeyComponent={KeyPressableWithContext} />
            </StoreContext.Provider>
        </div>
    )
}

export default TestPage;