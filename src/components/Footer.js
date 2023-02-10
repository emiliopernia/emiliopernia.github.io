import { useState } from 'react';
import DeskFooter from './deskComponents/DeskFooter';
import MobileFooter from './mobileComponents/MobileFooter';


const Footer = ({ responsive }) => {

  const [selectCountry] = useState(['spain', 'england', 'portugal', 'france'])
  const [selected, setSelected] = useState(selectCountry[0])
  const [trademark] = useState('2021 Wold Bags S.A.');
  const [tmDescription] = useState('All rights reserved')

  //footer menu options
  const [arrHelp] = useState(['Help', 'How to shop', 'Payment', 'Delivery', 'Changes and devolutions', 'Post sale & warranty'])
  const [arrCompany] = useState(['Company', 'Stores', 'Contact'])
  const [arrPolicy] = useState(['Company Policy', 'Privacy policy', 'Terms & conditions', 'Cookies policy', 'Legal'])
  const [arrJoin] = useState(['Join', 'Instagram', 'Facebook', 'Pinterest', 'Linkedin', 'My profile', 'Contact'])

  const [allOptions] = useState([arrHelp, arrCompany, arrPolicy, arrJoin]);

  if (responsive.desk) {
    return (
      <DeskFooter
        selectCountry={selectCountry}
        selected={selected}
        allOptions={allOptions}
        onChange={setSelected}
        trademark={trademark}
        tmDescription={tmDescription}
      />
    )
  } else {
    return (
      <MobileFooter
        selectCountry={selectCountry}
        selected={selected}
        allOptions={allOptions}
        onChange={setSelected}
        trademark={trademark}
        tmDescription={tmDescription}
      />
    )

  }

}

export default Footer