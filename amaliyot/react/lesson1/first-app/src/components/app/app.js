import "./app.css"
import AppInfo from "../app-info/appInfo";
import AppInput from "../app-input/appInput";
const App = () => {
    return (
        <div>
            <AppInfo></AppInfo>
            <div>
                <AppInput></AppInput>
            </div>
        </div>
    )
}

export default App;