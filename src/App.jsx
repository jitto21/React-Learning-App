import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton, ' clicked');
  }
  const tabContent = !selectedTopic
    ? <p>Please select a topic.</p>
    : <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem, index) => {
              return <CoreConcepts key={index} {...conceptItem} />
            })}
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton
              onSelect={() => handleSelect('components')}
              isActive={selectedTopic === 'components'}
            >Component</TabButton>

            <TabButton
              onSelect={() => handleSelect('jsx')}
              isActive={selectedTopic === 'jsx'}
            >JSX</TabButton>

            <TabButton
              onSelect={() => handleSelect('props')}
              isActive={selectedTopic === 'props'}
            >Props</TabButton>

            <TabButton
              onSelect={() => handleSelect('state')}
              isActive={selectedTopic === 'state'}
            >State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
