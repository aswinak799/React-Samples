// JsonEditor.js
import React, { useState } from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale    from 'react-json-editor-ajrm/locale/en';



const JsonEditor = () => {
    const sampleObject = {
        name: 'John Doe',
        age: 30,
        address: {
          city: 'New York',
          country: 'USA',
        },
      };
    
      const [jsonData, setJsonData] = useState(sampleObject);
    
      const handleOnChange = (newJson) => {
        setJsonData(newJson);
      };
    
      return (
        <div>
          <h1>JSON Viewer and Editor</h1>
          <JSONInput
            id="a_unique_id"
            placeholder={sampleObject}
            colors={{ background: 'transparent' }}
            locale={locale}
            height="550px"
            onChange={handleOnChange}
          />
          <h2>Output</h2>
          {/* <JSONOutput id="output" src={jsonData} /> */}
        </div>
      );
    };

export default JsonEditor;
