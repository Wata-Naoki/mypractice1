import MyListbox from "./components/MyListbox";
import MyDropdown from "./components/MyDropdown";
import MyComponent from "./components/Mycomponent";
import MyCombobox from "./components/MyCombobox";
import MySwitch from "./components/MySwitch";

function App() {
  return (
    <>
      <div className="flex space-between">
        <div className="mr-20">
          <MyComponent />
        </div>
        <div>
          <MyListbox />
        </div>
        <div>
          <MyDropdown />
        </div>
        <div className="ml-20">
          <MyCombobox />
        </div>
        <div>
          <MySwitch />
        </div>
      </div>
    </>
  )
}

export default App;
