import React from 'react';

const List = ({lists,onDeleteList}) =>{
  if(lists.length === 0){
    return null;
  }

  return (
    <div>
      <ul className='List-ul'>
        {
        lists.map((list,index) => (
        <li key={index} className='List-li'>
          <button onClick={() => onDeleteList(index)} className='List-button'>
            <span>終了</span>
          </button>
          {list}
        </li>
            ))
        };
      </ul>
    </div>
    );
};

export default List;