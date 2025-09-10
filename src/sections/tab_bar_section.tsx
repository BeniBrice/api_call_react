import { createContext, useState } from "react";
import TabBarText, { tabsContent, type Tabs } from "../components/tab_bar_text";
import DisplayUserSection from "./display_user_section";
import PostSection from "./post_section";

export let TabBarContext = createContext<Tabs | null>(null);

function TabBarSection() {
  let [currentTab, setTab] = useState<Tabs>(tabsContent[0]);
  return (
    <TabBarContext.Provider value={currentTab}>
      <section className="w-full flex flex-col items-center justify-center pt-10">
        <TabBarText setTab={setTab} />
        <div className="p-10">
          <div className={currentTab.tabNumber === 0 ? "block" : "hidden"}>
            <DisplayUserSection />
          </div>
          <div className={currentTab.tabNumber === 1 ? "block" : "hidden"}>
            <PostSection />
          </div>
        </div>
      </section>
    </TabBarContext.Provider>
  );
}

export default TabBarSection;
