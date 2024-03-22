
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Course =()=>{
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className='mt-10 max-w-7xl mx-auto'>
 <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Lavel 1 Course</Tab>
        <Tab>Lavel 2 Course</Tab>
        <Tab>Conceptual Session</Tab>
      </TabList>
      <TabPanel>
        <h1>Lavel 1 data</h1>
      </TabPanel>
      <TabPanel>
        <h1>Lavel 2 data</h1>
      </TabPanel>
    </Tabs>
        </div>
    )
}
export default Course;