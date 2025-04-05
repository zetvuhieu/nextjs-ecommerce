import React from "react";
import Logo from "./components/logo";
import SearchComponent from "./components/searchBar";
import UserComponent from "./components/userActions";

const App = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-2 rounded-lg shadow-lg w-full">
        <div className="flex w-full">
          <Logo />
          <SearchComponent />
          <UserComponent name="John Doe" email="johndoe@example.com" />
        </div>
      </div>
    </div>
  );
};

export default App;
