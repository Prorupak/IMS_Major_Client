import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Input, AutoComplete } from 'antd';

function getRandomInt(max: any, min = 0) {
     return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

const searchResult = (query: any) =>
     new Array(getRandomInt(5))
          .join('.')
          .split('.')
          .map((_, idx) => {
               const category = `${query}${idx}`;
               return {
                    value: category,
                    label: (
                         <div
                              style={{
                                   display: 'flex',
                                   justifyContent: 'space-between',
                              }}
                         >
                              <span>
                                   Found {query} on{' '}
                                   <a
                                        href={`https://s.taobao.com/search?q=${query}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                   >
                                        {category}
                                   </a>
                              </span>
                              <span>{getRandomInt(200, 100)} results</span>
                         </div>
                    ),
               };
          });

const Search = () => {
     const [options, setOptions] = useState([] as any);

     const handleSearch = (value: any) => {
          setOptions(value ? searchResult(value) : []);
     };

     const onSelect = (value: any) => {
          console.log('onSelect', value);
     };

     return (
          <AutoComplete
               dropdownMatchSelectWidth={252}
               style={{
                    width: 300,
               }}
               options={options}
               onSelect={onSelect}
               onSearch={handleSearch}
          >
               <Input.Search size="large" placeholder="input here" enterButton />
          </AutoComplete>
     );
};

export default Search;

