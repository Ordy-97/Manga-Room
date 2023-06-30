import React, { useState, useContext } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
} from 'mdb-react-ui-kit';
import { UrlContext } from '../../utils/Context';

export default function Categories() {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const {switchUrl} = useContext(UrlContext)

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <>
      <MDBTabs justify className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => 
              {
                switchUrl('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000&tag=maid')
                handleJustifyClick('tab1')
              }
            } 
            active={justifyActive === 'tab1'}
          >
            femme de ménage
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() =>
              {          
                switchUrl('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000&tag=waifu')
                handleJustifyClick('tab2')
              }
            } 
             active={justifyActive === 'tab2'}    
          >
            waifu
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => 
              {
                switchUrl('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000&tag=marin-kitagawa')
                handleJustifyClick('tab3')
              }
            } 
            active={justifyActive === 'tab3'}
          >
            marin-kitagawa
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
        <MDBTabsLink onClick={() => 
              {
                switchUrl('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000&tag=oppai')
                handleJustifyClick('tab4')
              }
            } 
            active={justifyActive === 'tab4'}
          >
            oppai
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
        <MDBTabsLink onClick={() => 
              {
                switchUrl('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000&tag=mori-calliope')
                handleJustifyClick('tab5')
              }
            } 
            active={justifyActive === 'tab5'}
          >
            mori-calliope
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
        <MDBTabsLink onClick={() => 
              {
                switchUrl('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000&tag=selfies')
                handleJustifyClick('tab6')
              }
            } 
            active={justifyActive === 'tab6'}
          >
            selfies
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
        <MDBTabsLink onClick={() => 
              {
                switchUrl('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000&tag=raiden-shogun')
                handleJustifyClick('tab7')
              }
            } 
            active={justifyActive === 'tab7'}
          >
            raiden-shogun
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
        <MDBTabsLink onClick={() => 
              {
                switchUrl('https://api.waifu.im/search?many=true&is_nsfw=false&byte_size=<=400000&tag=uniform')
                handleJustifyClick('tab8')
              }
            } 
            active={justifyActive === 'tab8'}
          >
            uniforme
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
    </>
  );
}