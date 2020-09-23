import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directorystyles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Besan',
          imageUrl: 'https://i.ibb.co/2yqCXbr/besan.jpg',
          id: 1,
          linkUrl:'Besan'
        },
        {
          title: 'Haldi',
          imageUrl: 'https://i.ibb.co/RhCpRKW/haldi.jpg',
          id: 2,
          linkUrl:'Haldi'
        },
        {
          title: 'Dhaniya',
          imageUrl: 'https://i.ibb.co/BL18HkZ/dhaniya.jpg',
          id: 3,
          linkUrl:'Dhaniya'
        },
        {
          title: 'Mirch',
          imageUrl: 'https://i.ibb.co/CMmvTMc/lal.jpg',
          id: 4,
          linkUrl:'Mirch'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps}/>
        ))}
      </div>
    );
  }
}

export default Directory;
