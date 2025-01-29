import { Outlet } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import CategoryList from "../organisms/CategoryList";
import { LayoutContainer, Sidebar, MainContent } from "../../styles/LayoutStyles";
import { useState } from "react";

export default function Layout() {
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <LayoutContainer>
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar>
          <CategoryList
            currentCategory={currentCategory}
            changeCategory={(category) => setCurrentCategory(category.id)}
          />
        </Sidebar>
        <MainContent>
          <Outlet context={{ currentCategory }} />
        </MainContent>
      </div>
    </LayoutContainer>
  );
}

