import { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TabBarContext } from "../sections/tab_bar_section";
import DisplayUserSection from "../sections/display_user_section";
import PostSection from "../sections/post_section";

export interface Tabs {
  tabNumber: number;
  tabContent: React.ReactNode;
  tabTitle: string;
}

interface props {
  setTab: (tab: Tabs) => void;
}

export let tabsContent: Tabs[] = [
  {
    tabNumber: 0,
    tabTitle: "Users",
    tabContent: <DisplayUserSection />,
  },
  {
    tabNumber: 1,
    tabTitle: "Posts",
    tabContent: <PostSection />,
  },
];

function TabBarText({ setTab }: props) {
  let currentTab = useContext(TabBarContext);
  return (
    <div className="flex flex-col gap-1 hover:cursor-pointer">
      <nav>
        <ul className="flex gap-2">
          {tabsContent.map((tab) => (
            <motion.li
              key={tab.tabNumber}
              style={tabStyle}
              onClick={() => {
                setTab(tab);
                console.log(`Current tab is equal to ${tab.tabContent} `);
              }}
            >
              {tab.tabTitle}
              {tab === currentTab ? (
                <motion.div
                  style={underline}
                  layoutId="underline"
                  id="underline"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

const tabStyle: React.CSSProperties = {
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  // background: "white",
  cursor: "pointer",
  height: 24,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  // color: "#0f1115",
};

const underline: React.CSSProperties = {
  position: "absolute",
  bottom: -2,
  left: 0,
  right: 0,
  height: 2,
  background: "green",
};

export default TabBarText;
